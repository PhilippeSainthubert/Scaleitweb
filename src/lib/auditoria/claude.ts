/**
 * Claude en la auditoría, si hay clave: como analista (entender el negocio,
 * sacar las marcas, redactar el plan; ver analista.ts) y como motor auditado,
 * contestando con búsqueda web.
 *
 * Modelo por defecto Claude Opus 5.5, con esfuerzo bajo en las tareas cortas
 * para que cada auditoría cueste céntimos. AUDITORIA_CLAUDE_MODEL permite
 * cambiarlo sin tocar código. Si un clasificador de seguridad rechaza una
 * petición, `fallbacks: "default"` la repite en el modelo que recomiende
 * Anthropic en vez de devolver un error.
 */
import Anthropic from '@anthropic-ai/sdk';
import { ErrorAuditoria } from './seguridad';

const MODELO = process.env.AUDITORIA_CLAUDE_MODEL || 'claude-opus-5-5';
const RESPALDO = { betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' as const };

let cliente: Anthropic | null = null;
function claude(): Anthropic {
  if (!process.env.ANTHROPIC_API_KEY) throw new ErrorAuditoria(503, 'La auditoría todavía no está configurada.');
  return (cliente ??= new Anthropic({ timeout: 55_000, maxRetries: 1 }));
}

type Esfuerzo = 'low' | 'medium' | 'high';

/** Una llamada con salida JSON validada contra el esquema. */
export const claudeDisponible = () => !!process.env.ANTHROPIC_API_KEY;

export async function jsonClaude<T>(sistema: string, usuario: string, esquema: Record<string, unknown>, esfuerzo: Esfuerzo = 'low'): Promise<T> {
  const r = await claude().beta.messages.create({
    model: MODELO,
    max_tokens: 6000,
    ...RESPALDO,
    output_config: { effort: esfuerzo, format: { type: 'json_schema', schema: esquema } },
    system: sistema,
    messages: [{ role: 'user', content: usuario }],
  });
  if (r.stop_reason === 'refusal') throw new ErrorAuditoria(502, 'El modelo no pudo procesar esta web.');
  if (r.stop_reason === 'max_tokens') throw new ErrorAuditoria(502, 'La respuesta salió incompleta. Probá de nuevo.');
  const texto = r.content.flatMap((b) => (b.type === 'text' ? [b.text] : [])).join('');
  return JSON.parse(texto) as T;
}

// ── 2. Claude como motor auditado ────────────────────────────────

export async function preguntarClaude(pregunta: string, pais: string): Promise<{ texto: string; fuentes: string[] }> {
  const herramientas = [
    { type: 'web_search_20260209' as const, name: 'web_search' as const, max_uses: 3, user_location: { type: 'approximate' as const, country: pais } },
  ];
  const mensajes: Anthropic.Beta.Messages.BetaMessageParam[] = [{ role: 'user', content: pregunta }];
  const textos: string[] = [];
  const fuentes = new Set<string>();

  // La búsqueda web puede pausar el turno (pause_turn): se reenvía tal cual
  // para que termine, como mucho dos veces.
  for (let vuelta = 0; vuelta < 3; vuelta++) {
    const r = await claude().beta.messages.create({
      model: MODELO,
      max_tokens: 4000,
      ...RESPALDO,
      output_config: { effort: 'low' },
      tools: herramientas,
      messages: mensajes,
    });
    if (r.stop_reason === 'refusal') throw new ErrorAuditoria(502, 'Claude no respondió a esta pregunta.');
    for (const b of r.content) {
      if (b.type === 'text') {
        textos.push(b.text);
        for (const c of b.citations ?? []) if (c.type === 'web_search_result_location') fuentes.add(c.url);
      } else if (b.type === 'web_search_tool_result' && Array.isArray(b.content)) {
        for (const resultado of b.content) fuentes.add(resultado.url);
      }
    }
    if (r.stop_reason !== 'pause_turn') break;
    mensajes.push({ role: 'assistant', content: r.content });
  }
  return { texto: textos.join('').trim(), fuentes: [...fuentes] };
}
