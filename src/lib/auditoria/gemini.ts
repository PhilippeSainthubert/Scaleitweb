/**
 * Gemini, el modelo de Google, por su API pública (Google AI Studio).
 *
 * Es la opción gratuita de la auditoría: la clave de AI Studio no cuesta nada,
 * y su plan gratuito incluye la búsqueda en Google (grounding), con límites
 * diarios que de sobra cubren un imán de leads. Sirve para las dos cosas:
 * como motor auditado (contesta como lo haría Gemini con búsqueda) y como
 * analista cuando no hay clave de Claude.
 *
 * En el plan gratuito Google puede usar las consultas para mejorar sus
 * modelos. Aquí solo viajan webs públicas y preguntas genéricas; el email del
 * visitante nunca se manda.
 *
 * Por HTTP directo, sin SDK. El plan gratuito tiene picos de saturación
 * ("model is experiencing high demand", 503) y límites por minuto (429), así
 * que se prueba una cadena de modelos: si uno está saturado se reintenta una
 * vez y se pasa al siguiente. AUDITORIA_GEMINI_MODEL cambia la cadena
 * (modelos separados por comas).
 */
import { ErrorAuditoria } from './seguridad';

const MODELOS = (process.env.AUDITORIA_GEMINI_MODEL || 'gemini-flash-latest,gemini-3.8-flash,gemini-flash-lite-latest')
  .split(',')
  .map((m) => m.trim())
  .filter(Boolean);
const URL_API = (modelo: string) => `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`;
const esperar = (ms: number) => new Promise((ok) => setTimeout(ok, ms));

/**
 * Una llamada a Gemini repartida entre los modelos gratuitos. El plan gratuito
 * permite 5 peticiones por minuto y por modelo, así que cada tarea empieza por
 * un modelo distinto (`inicio`) y una auditoría entera cabe sin chocar. Ante
 * un 429 se espera lo que el propio Google indica (si es poco) y se reintenta;
 * ante saturación (503) se reintenta una vez y se pasa al siguiente modelo.
 */
async function llamar(cuerpo: Record<string, unknown>, inicio = 0): Promise<any> {
  const clave = process.env.GEMINI_API_KEY;
  if (!clave) throw new ErrorAuditoria(503, 'La auditoría todavía no está configurada.');
  const cadena = MODELOS.map((_, k) => MODELOS[(k + inicio) % MODELOS.length]);
  let ultimo = 0;
  for (const modelo of cadena) {
    for (let intento = 0; intento < 2; intento++) {
      const r = await fetch(URL_API(modelo), {
        method: 'POST',
        headers: { 'x-goog-api-key': clave, 'content-type': 'application/json' },
        body: JSON.stringify(cuerpo),
        signal: AbortSignal.timeout(40_000),
      }).catch(() => null);
      if (!r) { ultimo = 504; break; }
      const d = await r.json().catch(() => ({}));
      if (r.ok) return d;
      ultimo = r.status;
      const detalles: any[] = d?.error?.details ?? [];
      const limite = detalles.flatMap((x) => x?.violations ?? []).map((v: any) => `${v.quotaId ?? ''} ${v.quotaValue ?? ''}`.trim());
      console.error('[auditoria] Gemini', modelo, r.status, d?.error?.message?.slice(0, 120), limite.join(' | '));
      if (intento > 0) break;
      if (r.status === 429) {
        const espera = Number.parseFloat(detalles.find((x) => x?.retryDelay)?.retryDelay ?? '');
        if (Number.isFinite(espera) && espera <= 20) { await esperar(espera * 1000 + 500); continue; }
        break;
      }
      if (r.status === 503 || r.status >= 500) { await esperar(2500); continue; }
      break;
    }
  }
  throw new ErrorAuditoria(
    ultimo === 429 ? 429 : 503,
    ultimo === 429 ? 'Hay muchas auditorías en marcha. Probá en un minuto.' : 'La IA de Google está saturada en este momento. Probá de nuevo en un par de minutos.'
  );
}

const textoDe = (d: any): string =>
  (d?.candidates?.[0]?.content?.parts ?? []).map((p: any) => p.text ?? '').join('').trim();

/** El esquema JSON de la auditoría, en el dialecto que pide Gemini. */
function esquemaGemini(s: any): any {
  if (Array.isArray(s)) return s.map(esquemaGemini);
  if (!s || typeof s !== 'object') return s;
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(s)) {
    if (k === 'additionalProperties') continue;
    if (k === 'type' && typeof v === 'string') out.type = v.toUpperCase();
    else if (k === 'properties') out.properties = Object.fromEntries(Object.entries(v as object).map(([pk, pv]) => [pk, esquemaGemini(pv)]));
    else out[k] = esquemaGemini(v);
  }
  return out;
}

export async function jsonGemini<T>(sistema: string, usuario: string, esquema: Record<string, unknown>, inicio = 0): Promise<T> {
  const d = await llamar({
    systemInstruction: { parts: [{ text: sistema }] },
    contents: [{ role: 'user', parts: [{ text: usuario }] }],
    generationConfig: { responseMimeType: 'application/json', responseSchema: esquemaGemini(esquema), temperature: 0.4 },
  }, inicio);
  const texto = textoDe(d);
  try {
    return JSON.parse(texto) as T;
  } catch {
    throw new ErrorAuditoria(502, 'La respuesta salió incompleta. Probá de nuevo.');
  }
}

/**
 * Gemini como motor auditado: la pregunta tal cual, como la escribiría un
 * comprador. La búsqueda en Google (grounding) no tiene cupo en el plan
 * gratuito, así que solo se usa si AUDITORIA_GEMINI_BUSQUEDA=1 (con
 * facturación activada); sin ella, Gemini contesta con lo que ya sabe, que
 * sigue midiendo si la IA te conoce y te recomienda. Si la búsqueda falla por
 * cupo, se repite sin ella.
 */
export async function preguntarGemini(pregunta: string, i = 0): Promise<{ texto: string; fuentes: string[] }> {
  const contents = [{ role: 'user', parts: [{ text: pregunta }] }];
  let d: any;
  if (process.env.AUDITORIA_GEMINI_BUSQUEDA === '1') {
    try {
      d = await llamar({ contents, tools: [{ googleSearch: {} }] }, i);
    } catch (e) {
      if (!(e instanceof ErrorAuditoria) || ![429, 503].includes(e.estado)) throw e;
    }
  }
  d ??= await llamar({ contents }, i);
  // Las fuentes llegan como enlaces de redirección de Google; el título de
  // cada una es el dominio citado, que es lo que interesa.
  const fuentes = (d?.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [])
    .map((c: any) => {
      const titulo: string = c?.web?.title ?? '';
      if (/^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(titulo)) return `https://${titulo}`;
      return c?.web?.uri ?? '';
    })
    .filter(Boolean);
  return { texto: textoDe(d), fuentes };
}
