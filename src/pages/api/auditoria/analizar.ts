/**
 * Paso 1 de la auditoría: revisa la web, entiende el negocio y decide las
 * preguntas. Devuelve un ticket firmado con la web y esas preguntas; los
 * pasos siguientes solo trabajan con lo que diga el ticket.
 */
import type { APIRoute } from 'astro';
import { normalizarUrl, firmar, limitar, respuesta, fallo, ErrorAuditoria } from '../../../lib/auditoria/seguridad';
import { revisarWeb } from '../../../lib/auditoria/web';
import { entenderNegocio } from '../../../lib/auditoria/analista';
import { motoresDisponibles, variantesMarca } from '../../../lib/auditoria/motores';

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const ip = (() => { try { return clientAddress; } catch { return 'desconocida'; } })();
    if (!limitar(`analizar:${ip}`, 5, 3_600_000)) {
      throw new ErrorAuditoria(429, 'Ya hiciste varias auditorías en la última hora. Probá un poco más tarde.');
    }
    const { web } = await request.json().catch(() => ({}));
    const url = normalizarUrl(web);
    const revision = await revisarWeb(url);
    const negocio = await entenderNegocio(revision);
    const motores = motoresDisponibles();
    const variantes = variantesMarca(negocio.marca, negocio.variantes, revision.dominio);

    const ticket = firmar({ d: revision.dominio, v: variantes, p: negocio.preguntas, pais: negocio.pais, m: motores });
    const { texto: _texto, ...web_ } = revision;
    return respuesta({
      web: web_,
      negocio: { marca: negocio.marca, categoria: negocio.categoria, mercado: negocio.mercado },
      preguntas: negocio.preguntas,
      motores,
      ticket,
    });
  } catch (e) {
    return fallo(e);
  }
};
