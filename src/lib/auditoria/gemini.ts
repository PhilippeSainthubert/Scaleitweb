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
 * Por HTTP directo, sin SDK. AUDITORIA_GEMINI_MODEL cambia el modelo; por
 * defecto el alias que siempre apunta al Flash más reciente.
 */
import { ErrorAuditoria } from './seguridad';

const MODELO = process.env.AUDITORIA_GEMINI_MODEL || 'gemini-flash-latest';
const URL_API = (modelo: string) => `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`;

async function llamar(cuerpo: Record<string, unknown>): Promise<any> {
  const clave = process.env.GEMINI_API_KEY;
  if (!clave) throw new ErrorAuditoria(503, 'La auditoría todavía no está configurada.');
  // El plan gratuito limita peticiones por minuto: ante un 429 se espera un
  // poco y se reintenta una vez antes de rendirse.
  for (let intento = 0; intento < 2; intento++) {
    const r = await fetch(URL_API(MODELO), {
      method: 'POST',
      headers: { 'x-goog-api-key': clave, 'content-type': 'application/json' },
      body: JSON.stringify(cuerpo),
      signal: AbortSignal.timeout(50_000),
    });
    const d = await r.json().catch(() => ({}));
    if (r.ok) return d;
    if (r.status === 429 && intento === 0) {
      await new Promise((ok) => setTimeout(ok, 4000));
      continue;
    }
    console.error('[auditoria] Gemini', r.status, d?.error?.message);
    throw new ErrorAuditoria(r.status === 429 ? 429 : 502, r.status === 429 ? 'Hay muchas auditorías en marcha. Probá en un minuto.' : 'Gemini no respondió.');
  }
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

export async function jsonGemini<T>(sistema: string, usuario: string, esquema: Record<string, unknown>): Promise<T> {
  const d = await llamar({
    systemInstruction: { parts: [{ text: sistema }] },
    contents: [{ role: 'user', parts: [{ text: usuario }] }],
    generationConfig: { responseMimeType: 'application/json', responseSchema: esquemaGemini(esquema), temperature: 0.4 },
  });
  const texto = textoDe(d);
  try {
    return JSON.parse(texto) as T;
  } catch {
    throw new ErrorAuditoria(502, 'La respuesta salió incompleta. Probá de nuevo.');
  }
}

/** Gemini como motor auditado: la pregunta tal cual, con búsqueda en Google. */
export async function preguntarGemini(pregunta: string): Promise<{ texto: string; fuentes: string[] }> {
  const d = await llamar({
    contents: [{ role: 'user', parts: [{ text: pregunta }] }],
    tools: [{ googleSearch: {} }],
  });
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
