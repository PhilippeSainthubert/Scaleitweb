/**
 * Los tres motores que se auditan y cómo se decide si te mencionan.
 *
 * Cada pregunta se le hace al motor tal cual la escribiría un comprador, con
 * búsqueda web activada, que es como contestan hoy ChatGPT, Perplexity y
 * Claude. ChatGPT va por la Responses API de OpenAI y Perplexity por su API de
 * chat; los dos por HTTP directo para no sumar dependencias. Claude vive en
 * claude.ts con el SDK oficial.
 *
 * Los modelos se pueden cambiar sin tocar código con AUDITORIA_OPENAI_MODEL y
 * AUDITORIA_PERPLEXITY_MODEL.
 */
import { preguntarClaude } from './claude';
import { ErrorAuditoria } from './seguridad';

export type Motor = 'chatgpt' | 'perplexity' | 'claude';
export const NOMBRES: Record<Motor, string> = { chatgpt: 'ChatGPT', perplexity: 'Perplexity', claude: 'Claude' };

export function motoresDisponibles(): Motor[] {
  const m: Motor[] = [];
  if (process.env.OPENAI_API_KEY) m.push('chatgpt');
  if (process.env.PERPLEXITY_API_KEY) m.push('perplexity');
  if (process.env.ANTHROPIC_API_KEY) m.push('claude');
  return m;
}

async function preguntarChatGPT(pregunta: string, pais: string) {
  const modelo = process.env.AUDITORIA_OPENAI_MODEL || 'gpt-5-mini';
  const cuerpo: Record<string, unknown> = {
    model: modelo,
    input: pregunta,
    tools: [{ type: 'web_search', user_location: { type: 'approximate', country: pais } }],
  };
  if (/^(gpt-5|o\d)/.test(modelo)) cuerpo.reasoning = { effort: 'low' };
  const r = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify(cuerpo),
    signal: AbortSignal.timeout(55_000),
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) {
    console.error('[auditoria] OpenAI', r.status, d?.error?.message);
    throw new ErrorAuditoria(502, 'ChatGPT no respondió.');
  }
  const partes = (d.output ?? []).filter((o: any) => o.type === 'message').flatMap((o: any) => o.content ?? []);
  const texto = partes.filter((c: any) => c.type === 'output_text').map((c: any) => c.text).join('\n');
  const fuentes = partes.flatMap((c: any) => (c.annotations ?? []).filter((a: any) => a.type === 'url_citation').map((a: any) => a.url));
  return { texto, fuentes };
}

async function preguntarPerplexity(pregunta: string) {
  const r = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: { authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ model: process.env.AUDITORIA_PERPLEXITY_MODEL || 'sonar', messages: [{ role: 'user', content: pregunta }] }),
    signal: AbortSignal.timeout(55_000),
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) {
    console.error('[auditoria] Perplexity', r.status, d?.error?.message ?? d?.detail);
    throw new ErrorAuditoria(502, 'Perplexity no respondió.');
  }
  const texto: string = d.choices?.[0]?.message?.content ?? '';
  const fuentes: string[] = (d.search_results ?? []).map((s: any) => s.url).filter(Boolean);
  return { texto, fuentes: fuentes.length ? fuentes : (d.citations ?? []) };
}

export async function preguntar(motor: Motor, pregunta: string, pais: string): Promise<{ texto: string; fuentes: string[] }> {
  if (!motoresDisponibles().includes(motor)) throw new ErrorAuditoria(400, `${NOMBRES[motor]} no está disponible.`);
  if (motor === 'chatgpt') return preguntarChatGPT(pregunta, pais);
  if (motor === 'perplexity') return preguntarPerplexity(pregunta);
  return preguntarClaude(pregunta, pais);
}

// ── ¿Te mencionan? ───────────────────────────────────────────────

export const normalizar = (s: string) =>
  ` ${s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim()} `;

/** Variantes con las que se busca la marca: las del modelo más el dominio. */
export function variantesMarca(marca: string, variantes: string[], dominio: string): string[] {
  const raiz = dominio.replace(/^www\./, '').split('.')[0];
  const todas = [marca, ...variantes, dominio, raiz, raiz.replace(/-/g, ' ')];
  return [...new Set(todas.map((v) => normalizar(v).trim()).filter((v) => v.length >= 3))];
}

export function menciona(texto: string, variantes: string[]): boolean {
  const t = normalizar(texto);
  return variantes.some((v) => t.includes(` ${v} `));
}

export function citado(fuentes: string[], dominio: string): boolean {
  const d = dominio.replace(/^www\./, '');
  return fuentes.some((f) => {
    try {
      const h = new URL(f).hostname.replace(/^www\./, '');
      return h === d || h.endsWith(`.${d}`);
    } catch {
      return false;
    }
  });
}
