/**
 * Paso 1 de la auditoría: lee la web, entiende el negocio, escribe las
 * preguntas y propone competidores (al menos cuatro, con su web comprobada).
 * El visitante revisa la lista antes de lanzar la auditoría. Devuelve un
 * ticket de preparación firmado con la web y las preguntas.
 */
import type { APIRoute } from 'astro';
import { normalizarUrl, firmar, limitar, respuesta, fallo, ErrorAuditoria, dominioReal, DOMINIO } from '../../../lib/auditoria/seguridad';
import { revisarWeb } from '../../../lib/auditoria/web';
import { entenderNegocio } from '../../../lib/auditoria/analista';
import { motoresDisponibles, variantesMarca } from '../../../lib/auditoria/motores';

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const ip = (() => { try { return clientAddress; } catch { return 'desconocida'; } })();
    if (!limitar(`preparar:${ip}`, 6, 3_600_000)) {
      throw new ErrorAuditoria(429, 'Ya hiciste varias auditorías en la última hora. Probá un poco más tarde.');
    }
    const { web } = await request.json().catch(() => ({}));
    const url = normalizarUrl(web);
    const revision = await revisarWeb(url);
    const negocio = await entenderNegocio(revision);
    const motores = motoresDisponibles();

    // Competidores propuestos: solo los que tienen una web que existe de verdad.
    const vistos = new Set([revision.dominio]);
    const candidatos = negocio.competidores
      .map((c) => ({ nombre: c.nombre.trim().slice(0, 60), dominio: c.web.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '') }))
      .filter((c) => DOMINIO.test(c.dominio) && !vistos.has(c.dominio) && (vistos.add(c.dominio), true));
    const reales = await Promise.all(candidatos.map((c) => dominioReal(c.dominio)));
    const sugeridos = candidatos.filter((_, k) => reales[k]).slice(0, 6);

    const prep = firmar({
      d: revision.dominio,
      v: variantesMarca(negocio.marca, negocio.variantes, revision.dominio),
      p: negocio.preguntas,
      pais: negocio.pais,
      m: motores,
    });
    const { texto: _texto, ...web_ } = revision;
    return respuesta({
      web: web_,
      negocio: { marca: negocio.marca, categoria: negocio.categoria, mercado: negocio.mercado },
      preguntas: negocio.preguntas,
      motores,
      sugeridos,
      prep,
    });
  } catch (e) {
    return fallo(e);
  }
};
