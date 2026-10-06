/**
 * Lo que protege a la auditoría pública.
 *
 * La auditoría abre webs que escribe cualquiera y gasta dinero en APIs de IA,
 * así que tiene tres defensas:
 *
 * - Solo se abren webs públicas: nada de IPs, localhost ni redes internas, y
 *   cada salto de redirección se vuelve a comprobar (si no, la función serviría
 *   para asomarse a la infraestructura de Vercel).
 * - Tickets firmados: el primer paso emite un ticket con la web y las preguntas
 *   ya decididas en el servidor. Los pasos caros solo aceptan ese ticket, así
 *   que nadie puede usar el endpoint para hacerle preguntas propias a ChatGPT
 *   o a Claude a nuestra costa.
 * - Límites por IP y por ticket. Viven en memoria de cada instancia, así que
 *   son blandos; el tope duro está en los límites de gasto de cada proveedor.
 */
import { createHmac, timingSafeEqual } from 'node:crypto';
import { lookup } from 'node:dns/promises';
import net from 'node:net';

export class ErrorAuditoria extends Error {
  constructor(public estado: number, mensaje: string) {
    super(mensaje);
  }
}

// ── Direcciones ──────────────────────────────────────────────────

function ipPrivada(ip: string): boolean {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split('.').map(Number);
    return (
      a === 0 || a === 10 || a === 127 || a >= 224 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      (a === 192 && b === 0) ||
      (a === 198 && (b === 18 || b === 19))
    );
  }
  const v6 = ip.toLowerCase();
  if (v6.startsWith('::ffff:')) return ipPrivada(v6.slice(7));
  return v6 === '::' || v6 === '::1' || v6.startsWith('fc') || v6.startsWith('fd') || v6.startsWith('fe80');
}

/** Convierte lo que escribe el visitante en una URL pública válida. */
export function normalizarUrl(entrada: unknown): URL {
  if (typeof entrada !== 'string' || entrada.trim().length < 4 || entrada.length > 300) {
    throw new ErrorAuditoria(400, 'Escribí la dirección de tu web, por ejemplo tuempresa.com');
  }
  let texto = entrada.trim();
  if (!/^https?:\/\//i.test(texto)) texto = `https://${texto}`;
  let url: URL;
  try {
    url = new URL(texto);
  } catch {
    throw new ErrorAuditoria(400, 'Esa dirección no parece una web. Probá con algo como tuempresa.com');
  }
  const host = url.hostname.toLowerCase();
  if (
    !['http:', 'https:'].includes(url.protocol) ||
    url.username || url.password ||
    (url.port && !['80', '443'].includes(url.port)) ||
    net.isIP(host.replace(/^\[|\]$/g, '')) ||
    !host.includes('.') ||
    host.endsWith('.local') || host.endsWith('.internal') || host === 'localhost'
  ) {
    throw new ErrorAuditoria(400, 'Solo podemos auditar webs públicas.');
  }
  url.hash = '';
  return url;
}

async function comprobarHost(host: string) {
  let direcciones: { address: string }[];
  try {
    direcciones = await lookup(host, { all: true });
  } catch {
    throw new ErrorAuditoria(422, `No encontramos ${host}. ¿Está bien escrita la dirección?`);
  }
  if (!direcciones.length || direcciones.some((d) => ipPrivada(d.address))) {
    throw new ErrorAuditoria(400, 'Solo podemos auditar webs públicas.');
  }
}

const AGENTE = 'ScaleItAuditoria/1.0 (+https://www.growth-scaleit.com/auditoria-seo-ia)';

/**
 * Descarga una URL pública siguiendo como mucho cuatro redirecciones, cada una
 * comprobada, y con tope de tamaño para no leer páginas descomunales.
 */
export async function traer(
  url: URL,
  { tiempo = 9000, maxBytes = 2_000_000 }: { tiempo?: number; maxBytes?: number } = {}
): Promise<{ url: URL; estado: number; tipo: string; cuerpo: string }> {
  let actual = url;
  for (let salto = 0; salto < 5; salto++) {
    await comprobarHost(actual.hostname);
    const r = await fetch(actual, {
      redirect: 'manual',
      signal: AbortSignal.timeout(tiempo),
      headers: { 'user-agent': AGENTE, accept: 'text/html,application/xhtml+xml,text/plain,application/xml;q=0.9,*/*;q=0.5' },
    });
    if (r.status >= 300 && r.status < 400 && r.headers.get('location')) {
      const siguiente = new URL(r.headers.get('location')!, actual);
      if (!['http:', 'https:'].includes(siguiente.protocol)) break;
      actual = siguiente;
      continue;
    }
    const lector = r.body?.getReader();
    const trozos: Uint8Array[] = [];
    let leidos = 0;
    if (lector) {
      while (true) {
        const { done, value } = await lector.read();
        if (done) break;
        leidos += value.byteLength;
        trozos.push(value);
        if (leidos > maxBytes) {
          await lector.cancel();
          break;
        }
      }
    }
    const cuerpo = new TextDecoder('utf-8', { fatal: false }).decode(Buffer.concat(trozos));
    return { url: actual, estado: r.status, tipo: r.headers.get('content-type') ?? '', cuerpo };
  }
  throw new ErrorAuditoria(422, 'Tu web redirige demasiadas veces.');
}

// ── Tickets firmados ─────────────────────────────────────────────

function secreto(): string {
  const s = process.env.AUDITORIA_SECRETO;
  if (!s || s.length < 24) throw new ErrorAuditoria(503, 'La auditoría todavía no está configurada.');
  return s;
}
const b64 = (b: Buffer | string) => Buffer.from(b).toString('base64url');

export function firmar(datos: Record<string, unknown>, minutos = 30): string {
  const cuerpo = b64(JSON.stringify({ ...datos, exp: Date.now() + minutos * 60_000 }));
  const firma = b64(createHmac('sha256', secreto()).update(cuerpo).digest());
  return `${cuerpo}.${firma}`;
}

export function verificar<T>(ticket: unknown): T & { exp: number } {
  if (typeof ticket !== 'string' || !ticket.includes('.')) throw new ErrorAuditoria(401, 'Falta el ticket de la auditoría.');
  const [cuerpo, firma] = ticket.split('.');
  const esperada = createHmac('sha256', secreto()).update(cuerpo).digest();
  const recibida = Buffer.from(firma ?? '', 'base64url');
  if (recibida.length !== esperada.length || !timingSafeEqual(recibida, esperada)) {
    throw new ErrorAuditoria(401, 'Ticket no válido.');
  }
  const datos = JSON.parse(Buffer.from(cuerpo, 'base64url').toString('utf8'));
  if (typeof datos.exp !== 'number' || datos.exp < Date.now()) {
    throw new ErrorAuditoria(401, 'La auditoría caducó. Volvé a lanzarla.');
  }
  return datos;
}

// ── Límites ──────────────────────────────────────────────────────

const usos = new Map<string, number[]>();

/** true si todavía quedan usos de `clave` en la ventana. */
export function limitar(clave: string, maximo: number, ventanaMs: number): boolean {
  const ahora = Date.now();
  const lista = (usos.get(clave) ?? []).filter((t) => ahora - t < ventanaMs);
  if (lista.length >= maximo) {
    usos.set(clave, lista);
    return false;
  }
  lista.push(ahora);
  usos.set(clave, lista);
  if (usos.size > 5000) for (const [k, v] of usos) if (!v.some((t) => ahora - t < 3_600_000)) usos.delete(k);
  return true;
}

// ── Respuestas ───────────────────────────────────────────────────

export function respuesta(datos: unknown, estado = 200) {
  return new Response(JSON.stringify(datos), {
    status: estado,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

export function fallo(error: unknown) {
  if (error instanceof ErrorAuditoria) return respuesta({ error: error.message }, error.estado);
  console.error('[auditoria]', error);
  return respuesta({ error: 'Algo falló de nuestro lado. Probá de nuevo en un minuto.' }, 500);
}
