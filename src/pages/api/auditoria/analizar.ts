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

/**
 * Los competidores que escribe el visitante (hasta tres): una web o un nombre.
 * Con web se revisa también su parte técnica; con nombre solo se cuenta en
 * cuántas respuestas aparece.
 */
function leerCompetidores(lista: unknown, propio: string) {
  const entradas = (Array.isArray(lista) ? lista : typeof lista === 'string' ? lista.split(/[,;\n]/) : [])
    .map((x) => String(x ?? '').trim())
    .filter((x) => x.length >= 2 && x.length <= 80)
    .slice(0, 3);
  const out: { nombre: string; dominio: string; url: URL | null }[] = [];
  for (const e of entradas) {
    if (/^[^\s]+\.[a-z]{2,}(\/.*)?$/i.test(e)) {
      try {
        const url = normalizarUrl(e);
        const dominio = url.hostname.replace(/^www\./, '');
        if (dominio === propio) continue;
        const raiz = dominio.split('.')[0].replace(/-/g, ' ');
        out.push({ nombre: raiz.charAt(0).toUpperCase() + raiz.slice(1), dominio, url });
        continue;
      } catch { /* si no es una web válida, se usa como nombre */ }
    }
    out.push({ nombre: e, dominio: '', url: null });
  }
  return out;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const ip = (() => { try { return clientAddress; } catch { return 'desconocida'; } })();
    if (!limitar(`analizar:${ip}`, 5, 3_600_000)) {
      throw new ErrorAuditoria(429, 'Ya hiciste varias auditorías en la última hora. Probá un poco más tarde.');
    }
    const { web, competidores: lista } = await request.json().catch(() => ({}));
    const url = normalizarUrl(web);
    const revision = await revisarWeb(url);
    const competidores = leerCompetidores(lista, revision.dominio);

    // El negocio y las webs de la competencia, a la vez.
    const [negocio, webs] = await Promise.all([
      entenderNegocio(revision, competidores.map((c) => c.nombre)),
      Promise.all(competidores.map((c) => (c.url ? revisarWeb(c.url).then((r) => r.puntuacion).catch(() => null) : Promise.resolve(null)))),
    ]);
    const motores = motoresDisponibles();
    const variantes = variantesMarca(negocio.marca, negocio.variantes, revision.dominio);

    const ticket = firmar({
      d: revision.dominio,
      v: variantes,
      p: negocio.preguntas,
      pais: negocio.pais,
      m: motores,
      c: competidores.map((c) => ({ d: c.dominio, v: variantesMarca(c.nombre, [], c.dominio) })),
    });
    const { texto: _texto, ...web_ } = revision;
    return respuesta({
      web: web_,
      negocio: { marca: negocio.marca, categoria: negocio.categoria, mercado: negocio.mercado },
      preguntas: negocio.preguntas,
      motores,
      competidores: competidores.map((c, k) => ({ nombre: c.nombre, dominio: c.dominio || null, puntuacion: webs[k] })),
      ticket,
    });
  } catch (e) {
    return fallo(e);
  }
};
