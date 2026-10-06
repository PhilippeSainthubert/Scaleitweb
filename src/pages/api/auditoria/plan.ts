/**
 * Paso 4, tras dejar el email: el plan de acción redactado sobre los datos de
 * la auditoría. El aviso del lead lo manda el navegador, como el formulario
 * de contacto.
 */
import type { APIRoute } from 'astro';
import { verificar, limitar, respuesta, fallo, ErrorAuditoria } from '../../../lib/auditoria/seguridad';
import { redactarPlan } from '../../../lib/auditoria/claude';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { ticket, informe, email } = await request.json().catch(() => ({}));
    verificar(ticket);
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) throw new ErrorAuditoria(400, 'Revisá el email.');
    if (!limitar(`plan:${ticket}`, 2, 3_600_000)) throw new ErrorAuditoria(429, 'El plan ya se generó.');
    const datos = JSON.stringify(informe ?? {});
    if (datos.length > 40_000) throw new ErrorAuditoria(413, 'Informe demasiado grande.');
    const plan = await redactarPlan(JSON.parse(datos));
    return respuesta({ plan });
  } catch (e) {
    return fallo(e);
  }
};
