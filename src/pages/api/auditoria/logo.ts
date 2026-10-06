/**
 * El logo de una web para las tarjetas de la auditoría. Se pide desde el
 * servidor (al servicio de iconos de Google) para que el navegador del
 * visitante no hable con terceros, y se cachea una semana.
 */
import type { APIRoute } from 'astro';
import { DOMINIO } from '../../../lib/auditoria/seguridad';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const dominio = (url.searchParams.get('d') ?? '').toLowerCase().replace(/^www\./, '');
  if (!DOMINIO.test(dominio)) return new Response(null, { status: 400 });
  try {
    const r = await fetch(`https://www.google.com/s2/favicons?domain=${encodeURIComponent(dominio)}&sz=128`, {
      signal: AbortSignal.timeout(6000),
    });
    const tipo = r.headers.get('content-type') ?? '';
    // Google devuelve un globo genérico con 404 cuando la web no tiene icono.
    if (!r.ok || !tipo.startsWith('image/')) return new Response(null, { status: 404, headers: { 'cache-control': 'public, max-age=86400' } });
    return new Response(await r.arrayBuffer(), {
      headers: { 'content-type': tipo, 'cache-control': 'public, max-age=604800, s-maxage=604800, immutable' },
    });
  } catch {
    return new Response(null, { status: 404 });
  }
};
