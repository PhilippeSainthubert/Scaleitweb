/**
 * Paso 2: una pregunta del ticket a un motor. El navegador lanza todas en
 * paralelo; así cada llamada cabe de sobra en el tiempo de una función.
 */
import type { APIRoute } from 'astro';
import { verificar, limitar, respuesta, fallo, ErrorAuditoria } from '../../../lib/auditoria/seguridad';
import { preguntar, menciona, citado, type Motor } from '../../../lib/auditoria/motores';

export const prerender = false;

interface Ticket { d: string; v: string[]; p: string[]; pais: string; m: Motor[] }

export const POST: APIRoute = async ({ request }) => {
  try {
    const { ticket, motor, i } = await request.json().catch(() => ({}));
    const t = verificar<Ticket>(ticket);
    if (!t.m.includes(motor) || !Number.isInteger(i) || !t.p[i]) throw new ErrorAuditoria(400, 'Pregunta no válida.');
    if (!limitar(`preguntar:${ticket}:${motor}:${i}`, 2, 3_600_000)) throw new ErrorAuditoria(429, 'Esa pregunta ya se hizo.');

    const { texto, fuentes } = await preguntar(motor, t.p[i], t.pais);
    const dominios = [...new Set(fuentes.map((f) => { try { return new URL(f).hostname.replace(/^www\./, ''); } catch { return ''; } }).filter(Boolean))];
    return respuesta({
      motor,
      i,
      menciona: menciona(texto, t.v) || citado(fuentes, t.d),
      citado: citado(fuentes, t.d),
      texto: texto.slice(0, 2400),
      fuentes: dominios.slice(0, 12),
    });
  } catch (e) {
    return fallo(e);
  }
};
