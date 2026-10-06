/**
 * El analista de la auditoría: entiende el negocio a partir de su web y
 * escribe las preguntas de comprador, saca qué marcas recomiendan las IA y
 * redacta el plan de acción. Usa Claude si hay clave y, si no, Gemini en su
 * plan gratuito. Los textos de las instrucciones son los mismos para los dos.
 */
import { claudeDisponible, jsonClaude } from './claude';
import { jsonGemini } from './gemini';
import { ErrorAuditoria } from './seguridad';

type Esfuerzo = 'low' | 'medium' | 'high';

// `turno` reparte las tareas entre los modelos gratuitos de Gemini.
function enJson<T>(sistema: string, usuario: string, esquema: Record<string, unknown>, esfuerzo: Esfuerzo = 'low', turno = 0): Promise<T> {
  if (claudeDisponible()) return jsonClaude<T>(sistema, usuario, esquema, esfuerzo);
  if (process.env.GEMINI_API_KEY) return jsonGemini<T>(sistema, usuario, esquema, turno);
  throw new ErrorAuditoria(503, 'La auditoría todavía no está configurada.');
}

// ── 1. Entender el negocio ───────────────────────────────────────

export interface Negocio {
  marca: string;
  variantes: string[];
  categoria: string;
  mercado: string;
  pais: string;
  idioma: string;
  preguntas: string[];
  /** Competidores que propone el analista, con su web. */
  competidores: { nombre: string; web: string }[];
}

export async function entenderNegocio(datos: { url: string; titulo: string; descripcion: string; h1: string[]; idioma: string; texto: string }): Promise<Negocio> {
  const sistema = `Eres analista de visibilidad en buscadores de IA (ChatGPT, Gemini, Perplexity, Claude).
Te paso la portada de una web. Tu trabajo:
1. Identificar la marca tal como la escribiría un cliente, y sus variantes (nombre comercial, dominio sin extensión, siglas). Solo variantes reales, no inventes.
2. Describir en pocas palabras la categoría de lo que vende (por ejemplo "agencia de generación de demanda B2B" o "software de facturación para autónomos").
3. Deducir el mercado principal (país o región) y su código ISO de país de dos letras, y el idioma de la web.
4. Escribir exactamente 4 preguntas que un comprador real le haría a un asistente de IA cuando busca lo que vende esta empresa, en el idioma de la web y pensando en su mercado:
   - dos de "cuál es la mejor opción" para su categoría y mercado;
   - una que parta del problema que resuelve, sin nombrar la categoría;
   - una de alternativas o comparación con el más conocido de los competidores que propones en el punto 5.
   Ninguna pregunta puede mencionar la marca auditada. Máximo 120 caracteres cada una, naturales, como las escribe una persona.
5. Proponer 8 competidores reales que se disputan los mismos clientes en ese mercado: empresas que de verdad existen, del mismo tipo y tamaño parecido, empezando por las más conocidas. Para cada uno, su nombre y el dominio de su web (solo el dominio, sin https ni rutas). Si no estás seguro de su web, no lo incluyas.`;
  const usuario = `URL: ${datos.url}
Título: ${datos.titulo}
Descripción: ${datos.descripcion}
H1: ${datos.h1.join(' | ')}
Idioma declarado: ${datos.idioma || 'no declarado'}

Texto de la portada:
${datos.texto}`;
  const esquema = {
    type: 'object',
    properties: {
      marca: { type: 'string' },
      variantes: { type: 'array', items: { type: 'string' } },
      categoria: { type: 'string' },
      mercado: { type: 'string' },
      pais: { type: 'string', description: 'ISO 3166-1 alfa-2' },
      idioma: { type: 'string' },
      preguntas: { type: 'array', items: { type: 'string' } },
      competidores: {
        type: 'array',
        items: {
          type: 'object',
          properties: { nombre: { type: 'string' }, web: { type: 'string' } },
          required: ['nombre', 'web'],
          additionalProperties: false,
        },
      },
    },
    required: ['marca', 'variantes', 'categoria', 'mercado', 'pais', 'idioma', 'preguntas', 'competidores'],
    additionalProperties: false,
  };
  const n = await enJson<Negocio>(sistema, usuario, esquema);
  n.preguntas = n.preguntas.map((p) => p.trim()).filter(Boolean).slice(0, 4);
  n.pais = (n.pais || 'ES').toUpperCase().slice(0, 2);
  n.competidores = (n.competidores ?? []).filter((c) => c?.nombre && c?.web).slice(0, 10);
  if (n.preguntas.length < 2) throw new ErrorAuditoria(502, 'No conseguimos entender qué vende tu web. Probá con otra página.');
  return n;
}

// ── 3. Marcas que aparecen en las respuestas ─────────────────────

export interface MarcaMencionada {
  nombre: string;
  respuestas: number;
}

export async function extraerMarcas(marcaAuditada: string, respuestas: { id: string; texto: string }[]): Promise<MarcaMencionada[]> {
  const sistema = `Te paso respuestas de asistentes de IA a preguntas de compra. Devuelve las empresas, marcas, agencias o productos que esas respuestas recomiendan o proponen como opción.
- Une variantes del mismo nombre en una sola entrada, con el nombre más reconocible.
- No cuentes medios, blogs ni fuentes citadas, ni plataformas genéricas (Google, LinkedIn, ChatGPT...) salvo que se recomienden como la solución.
- No incluyas "${marcaAuditada}" ni sus variantes.
- Para cada marca, cuenta en cuántas respuestas distintas aparece.
- Ordena de más a menos respuestas y quédate con las 12 primeras.`;
  const usuario = respuestas.map((r) => `### Respuesta ${r.id}\n${r.texto}`).join('\n\n');
  const esquema = {
    type: 'object',
    properties: {
      marcas: {
        type: 'array',
        items: {
          type: 'object',
          properties: { nombre: { type: 'string' }, respuestas: { type: 'integer' } },
          required: ['nombre', 'respuestas'],
          additionalProperties: false,
        },
      },
    },
    required: ['marcas'],
    additionalProperties: false,
  };
  const { marcas } = await enJson<{ marcas: MarcaMencionada[] }>(sistema, usuario, esquema, 'low', 1);
  return marcas.filter((m) => m.nombre && m.respuestas > 0).slice(0, 12);
}

// ── 4. Plan de acción ────────────────────────────────────────────

export interface Accion {
  titulo: string;
  porque: string;
  como: string;
  impacto: 'alto' | 'medio' | 'bajo';
  esfuerzo: 'bajo' | 'medio' | 'alto';
}
export interface Plan {
  resumen: string;
  acciones: Accion[];
}

export async function redactarPlan(informe: unknown): Promise<Plan> {
  const sistema = `Eres consultor senior de SEO y de visibilidad en buscadores de IA en Scale It. Te paso la auditoría de la web de un posible cliente: en cuántas respuestas de los asistentes de IA auditados aparece (vienen en "motores"), qué marcas salen en su lugar, qué fuentes citan esas IA y el estado técnico de su web.
Escribe su plan de acción:
- "resumen": dos o tres frases sobre su situación, con sus datos concretos.
- "acciones": de 5 a 6 acciones ordenadas por impacto. Cada una concreta y apoyada en un dato de su auditoría (una marca que le gana, una fuente que citan, una comprobación técnica que falla). Nada genérico que valga para cualquier web.
  - "porque": qué dato de la auditoría la justifica.
  - "como": qué hacer exactamente, en dos o tres frases.
Escribe en español, de tú a tú, directo y sin exagerar. No prometas resultados ni plazos. No uses guiones largos.`;
  const esquema = {
    type: 'object',
    properties: {
      resumen: { type: 'string' },
      acciones: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            titulo: { type: 'string' },
            porque: { type: 'string' },
            como: { type: 'string' },
            impacto: { type: 'string', enum: ['alto', 'medio', 'bajo'] },
            esfuerzo: { type: 'string', enum: ['bajo', 'medio', 'alto'] },
          },
          required: ['titulo', 'porque', 'como', 'impacto', 'esfuerzo'],
          additionalProperties: false,
        },
      },
    },
    required: ['resumen', 'acciones'],
    additionalProperties: false,
  };
  const plan = await enJson<Plan>(sistema, JSON.stringify(informe), esquema, 'medium', 2);
  plan.acciones = plan.acciones.slice(0, 6);
  return plan;
}
