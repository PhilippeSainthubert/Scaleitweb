/**
 * Paso 2: con la lista final de competidores (los propuestos que el visitante
 * dejó más los que añadió, hasta diez), revisa la parte técnica de sus webs y
 * emite el ticket con el que se hacen las preguntas. Aquí no hay llamadas a la
 * IA: el trabajo caro ya se hizo al preparar.
 */
import type { APIRoute } from 'astro';
import { normalizarUrl, firmar, verificar, limitar, respuesta, fallo, ErrorAuditoria, DOMINIO } from '../../../lib/auditoria/seguridad';
import { revisarWeb } from '../../../lib/auditoria/web';
import { variantesMarca, type Motor } from '../../../lib/auditoria/motores';

export const prerender = false;

interface Prep { d: string; v: string[]; p: string[]; pais: string; m: Motor[] }

/** Cada competidor llega como web, como nombre o como {nombre, dominio}. */
function leerCompetidores(lista: unknown, propio: string) {
  const entradas = Array.isArray(lista) ? lista.slice(0, 10) : [];
  const out: { nombre: string; dominio: string }[] = [];
  const vistos = new Set([propio]);
  for (const e of entradas) {
    let nombre = '';
    let dominio = '';
    if (e && typeof e === 'object') {
      nombre = String((e as any).nombre ?? '').trim().slice(0, 60);
      dominio = String((e as any).dominio ?? '').trim().toLowerCase();
    } else {
      const t = String(e ?? '').trim().slice(0, 80);
      if (/^[^\s]+\.[a-z]{2,}(\/.*)?$/i.test(t)) dominio = t.toLowerCase();
      else nombre = t;
    }
    if (dominio) {
      try {
        dominio = normalizarUrl(dominio).hostname.replace(/^www\./, '');
      } catch {
        dominio = '';
      }
      if (dominio && !DOMINIO.test(dominio)) dominio = '';
    }
    if (dominio && !nombre) {
      const raiz = dominio.split('.')[0].replace(/-/g, ' ');
      nombre = raiz.charAt(0).toUpperCase() + raiz.slice(1);
    }
    const clave = dominio || nombre.toLowerCase();
    if (!nombre || vistos.has(clave)) continue;
    vistos.add(clave);
    out.push({ nombre, dominio });
  }
  return out;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { prep, competidores: lista } = await request.json().catch(() => ({}));
    const t = verificar<Prep>(prep);
    if (!limitar(`analizar:${prep}`, 3, 3_600_000)) throw new ErrorAuditoria(429, 'Esta auditoría ya se lanzó.');
    const competidores = leerCompetidores(lista, t.d);
    const puntuaciones = await Promise.all(
      competidores.map((c) => (c.dominio ? revisarWeb(normalizarUrl(c.dominio)).then((r) => r.puntuacion).catch(() => null) : Promise.resolve(null)))
    );
    const ticket = firmar({
      d: t.d,
      v: t.v,
      p: t.p,
      pais: t.pais,
      m: t.m,
      c: competidores.map((c) => ({ d: c.dominio, v: variantesMarca(c.nombre, [], c.dominio) })),
    });
    return respuesta({
      competidores: competidores.map((c, k) => ({ nombre: c.nombre, dominio: c.dominio || null, puntuacion: puntuaciones[k] })),
      ticket,
    });
  } catch (e) {
    return fallo(e);
  }
};
