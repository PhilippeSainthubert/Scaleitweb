/** Paso 3: qué marcas recomiendan los motores en lugar de la auditada. */
import type { APIRoute } from 'astro';
import { verificar, limitar, respuesta, fallo, ErrorAuditoria } from '../../../lib/auditoria/seguridad';
import { extraerMarcas } from '../../../lib/auditoria/analista';

export const prerender = false;

interface Ticket { d: string; v: string[] }

export const POST: APIRoute = async ({ request }) => {
  try {
    const { ticket, marca, respuestas } = await request.json().catch(() => ({}));
    verificar<Ticket>(ticket);
    if (!limitar(`marcas:${ticket}`, 2, 3_600_000)) throw new ErrorAuditoria(429, 'Ya se calcularon las marcas.');
    if (!Array.isArray(respuestas) || !respuestas.length) return respuesta({ marcas: [] });
    const lista = respuestas
      .slice(0, 15)
      .filter((r: any) => typeof r?.texto === 'string' && r.texto.trim())
      .map((r: any, k: number) => ({ id: String(r.id ?? k + 1).slice(0, 20), texto: r.texto.slice(0, 2400) }));
    const marcas = await extraerMarcas(String(marca ?? '').slice(0, 80), lista);
    return respuesta({ marcas });
  } catch (e) {
    return fallo(e);
  }
};
