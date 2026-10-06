/**
 * La parte técnica de la auditoría: lo que un buscador de IA necesita para
 * leer y citar una web. Todo sale del HTML que se sirve (sin ejecutar
 * JavaScript, que es exactamente como lo leen los rastreadores de IA), del
 * robots.txt, del sitemap y del llms.txt.
 */
import { traer, ErrorAuditoria } from './seguridad';

export type Estado = 'ok' | 'aviso' | 'mal';
export interface Comprobacion {
  id: string;
  titulo: string;
  estado: Estado;
  detalle: string;
  peso: number;
}
export interface RevisionWeb {
  url: string;
  dominio: string;
  titulo: string;
  descripcion: string;
  h1: string[];
  idioma: string;
  palabras: number;
  schemas: string[];
  bloqueados: string[];
  sitemap: string | null;
  llms: boolean;
  puntuacion: number;
  comprobaciones: Comprobacion[];
  /** Texto visible (recortado) para entender el negocio. No se devuelve al navegador. */
  texto: string;
}

// Los rastreadores que buscan o leen en vivo para responder (Googlebot
// incluido: Gemini cita desde la búsqueda de Google): si están bloqueados, la
// IA no puede citarte. Los de entrenamiento no se miran aquí,
// porque bloquearlos no impide aparecer en las respuestas.
const RASTREADORES_IA = ['Googlebot', 'OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User'];

const ENTIDADES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', aacute: 'á', eacute: 'é', iacute: 'í', oacute: 'ó', uacute: 'ú', ntilde: 'ñ', Aacute: 'Á', Eacute: 'É', Iacute: 'Í', Oacute: 'Ó', Uacute: 'Ú', Ntilde: 'Ñ', uuml: 'ü', iquest: '¿', iexcl: '¡', ccedil: 'ç', middot: '·', ndash: '-', mdash: '-', hellip: '...' };
const decodificar = (s: string) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e: string) => {
    if (e[0] === '#') {
      const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : m;
    }
    return ENTIDADES[e] ?? m;
  });
const limpiar = (s: string) => decodificar(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

function atributos(etiqueta: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const m of etiqueta.matchAll(/([\w:-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    out[m[1].toLowerCase()] = decodificar(m[3] ?? m[4] ?? m[5] ?? '');
  }
  return out;
}

function tiposSchema(nodo: unknown, out: Set<string>) {
  if (Array.isArray(nodo)) return nodo.forEach((n) => tiposSchema(n, out));
  if (!nodo || typeof nodo !== 'object') return;
  const o = nodo as Record<string, unknown>;
  const t = o['@type'];
  if (typeof t === 'string') out.add(t);
  if (Array.isArray(t)) t.forEach((x) => typeof x === 'string' && out.add(x));
  for (const v of Object.values(o)) if (v && typeof v === 'object') tiposSchema(v, out);
}

/** Reglas de robots.txt agrupadas por user-agent. */
function leerRobots(texto: string) {
  const grupos: { agentes: string[]; disallow: string[]; allow: string[] }[] = [];
  const sitemaps: string[] = [];
  let actual: (typeof grupos)[number] | null = null;
  let ultimaFueAgente = false;
  for (const linea of texto.split(/\r?\n/)) {
    const l = linea.replace(/#.*/, '').trim();
    const m = l.match(/^([a-z-]+)\s*:\s*(.*)$/i);
    if (!m) continue;
    const [, campo, valor] = m;
    const c = campo.toLowerCase();
    if (c === 'sitemap') { sitemaps.push(valor.trim()); continue; }
    if (c === 'user-agent') {
      if (!actual || !ultimaFueAgente) { actual = { agentes: [], disallow: [], allow: [] }; grupos.push(actual); }
      actual.agentes.push(valor.trim().toLowerCase());
      ultimaFueAgente = true;
      continue;
    }
    ultimaFueAgente = false;
    if (!actual) continue;
    if (c === 'disallow') actual.disallow.push(valor.trim());
    if (c === 'allow') actual.allow.push(valor.trim());
  }
  const bloqueado = (bot: string) => {
    const b = bot.toLowerCase();
    const grupo = grupos.find((g) => g.agentes.includes(b)) ?? grupos.find((g) => g.agentes.includes('*'));
    if (!grupo) return false;
    return grupo.disallow.includes('/') && !grupo.allow.includes('/');
  };
  return { sitemaps, bloqueado };
}

export async function revisarWeb(url: URL): Promise<RevisionWeb> {
  let portada;
  try {
    portada = await traer(url);
  } catch (e) {
    if (e instanceof ErrorAuditoria) throw e;
    throw new ErrorAuditoria(422, 'No pudimos abrir tu web. ¿Está online?');
  }
  if (portada.estado >= 400) throw new ErrorAuditoria(422, `Tu web respondió con un error ${portada.estado}.`);
  if (!/html/i.test(portada.tipo) && !/<html/i.test(portada.cuerpo)) throw new ErrorAuditoria(422, 'Esa dirección no devuelve una página web.');

  const base = new URL('/', portada.url);
  const dominio = portada.url.hostname.replace(/^www\./, '');
  const html = portada.cuerpo;

  const titulo = limpiar(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '');
  const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map((m) => atributos(m[0]));
  const meta = (nombre: string) => metas.find((a) => (a.name ?? a.property ?? '').toLowerCase() === nombre)?.content?.trim() ?? '';
  const descripcion = meta('description');
  const noindex = /noindex/i.test(meta('robots'));
  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => limpiar(m[1])).filter(Boolean);
  const idioma = atributos(html.match(/<html\b[^>]*>/i)?.[0] ?? '').lang ?? '';
  const canonical = [...html.matchAll(/<link\b[^>]*>/gi)].map((m) => atributos(m[0])).find((a) => (a.rel ?? '').toLowerCase() === 'canonical')?.href ?? '';

  const schemas = new Set<string>();
  for (const m of html.matchAll(/<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { tiposSchema(JSON.parse(m[1]), schemas); } catch { /* JSON-LD roto: cuenta como ausente */ }
  }

  const visible = limpiar(
    html
      .replace(/<(script|style|noscript|svg|template|iframe)\b[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
  );
  const palabras = visible.split(' ').filter((w) => /\p{L}{2,}/u.test(w)).length;

  const [robotsR, llmsR] = await Promise.allSettled([
    traer(new URL('/robots.txt', base), { tiempo: 6000, maxBytes: 300_000 }),
    traer(new URL('/llms.txt', base), { tiempo: 6000, maxBytes: 300_000 }),
  ]);
  const robotsTexto = robotsR.status === 'fulfilled' && robotsR.value.estado === 200 && !/<html/i.test(robotsR.value.cuerpo) ? robotsR.value.cuerpo : '';
  const robots = leerRobots(robotsTexto);
  const bloqueados = RASTREADORES_IA.filter((b) => robots.bloqueado(b));
  const llms = llmsR.status === 'fulfilled' && llmsR.value.estado === 200 && !/<html/i.test(llmsR.value.cuerpo.slice(0, 500)) && llmsR.value.cuerpo.trim().length > 20;

  let sitemap: string | null = null;
  const candidatos = [...robots.sitemaps, '/sitemap.xml', '/sitemap_index.xml', '/sitemap-index.xml'];
  for (const c of candidatos.slice(0, 5)) {
    try {
      const r = await traer(new URL(c, base), { tiempo: 6000, maxBytes: 400_000 });
      if (r.estado === 200 && /<(urlset|sitemapindex)\b/i.test(r.cuerpo)) { sitemap = r.url.toString(); break; }
    } catch { /* siguiente candidato */ }
  }

  const organizacion = ['Organization', 'LocalBusiness', 'Corporation', 'ProfessionalService', 'Store', 'OnlineStore'].some((t) => schemas.has(t)) || [...schemas].some((t) => /Business$/.test(t));
  const faq = schemas.has('FAQPage');

  const c: Comprobacion[] = [
    {
      id: 'rastreadores', titulo: 'Los buscadores de IA pueden leer tu web', peso: 20,
      estado: bloqueados.length ? 'mal' : 'ok',
      detalle: bloqueados.length
        ? `Tu robots.txt bloquea a ${bloqueados.join(', ')}. Mientras siga así, esas IA no pueden citarte.`
        : 'Tu robots.txt no bloquea a Google ni a los rastreadores de búsqueda de ChatGPT, Claude o Perplexity.',
    },
    {
      id: 'contenido', titulo: 'Tu contenido se lee sin JavaScript', peso: 15,
      estado: palabras >= 250 ? 'ok' : palabras >= 80 ? 'aviso' : 'mal',
      detalle: palabras >= 250
        ? `Tu portada sirve ${palabras} palabras en el HTML. Los rastreadores de IA no ejecutan JavaScript, y aquí no lo necesitan.`
        : `Tu portada sirve solo ${palabras} palabras en el HTML. Los rastreadores de IA no ejecutan JavaScript: lo que se pinta después, para ellos no existe.`,
    },
    {
      id: 'sitemap', titulo: 'Sitemap accesible', peso: 10,
      estado: sitemap ? 'ok' : 'mal',
      detalle: sitemap ? `Encontramos tu sitemap en ${sitemap}.` : 'No encontramos sitemap ni en el robots.txt ni en las rutas habituales. Sin él cuesta más que descubran todas tus páginas.',
    },
    {
      id: 'indexable', titulo: 'Tu portada se puede indexar', peso: 10,
      estado: noindex ? 'mal' : 'ok',
      detalle: noindex ? 'Tu portada lleva la etiqueta noindex: le estás pidiendo a Google que no la muestre.' : 'Sin etiquetas que impidan indexarla.',
    },
    {
      id: 'organizacion', titulo: 'Datos estructurados de tu empresa', peso: 10,
      estado: organizacion ? 'ok' : 'mal',
      detalle: organizacion
        ? 'Tu web declara quién es la empresa con datos estructurados (Organization o similar).'
        : 'Tu web no declara con datos estructurados quién es la empresa. Es lo que ayuda a la IA a no confundirte con otra.',
    },
    {
      id: 'meta', titulo: 'Título y descripción', peso: 10,
      estado: titulo.length >= 20 && titulo.length <= 65 && descripcion.length >= 70 && descripcion.length <= 170 ? 'ok' : titulo && descripcion ? 'aviso' : 'mal',
      detalle: !titulo || !descripcion
        ? `Falta ${!titulo ? 'el título' : 'la meta descripción'} de la portada.`
        : `Título de ${titulo.length} caracteres y descripción de ${descripcion.length}. Lo recomendable: 20 a 65 y 70 a 170.`,
    },
    {
      id: 'h1', titulo: 'Un titular principal claro', peso: 5,
      estado: h1.length === 1 ? 'ok' : h1.length === 0 ? 'mal' : 'aviso',
      detalle: h1.length === 1 ? `Tu portada tiene un H1: «${h1[0].slice(0, 90)}».` : h1.length === 0 ? 'Tu portada no tiene H1 en el HTML.' : `Tu portada tiene ${h1.length} H1. Con uno solo queda claro de qué va la página.`,
    },
    {
      id: 'faq', titulo: 'Preguntas frecuentes marcadas', peso: 5,
      estado: faq ? 'ok' : 'aviso',
      detalle: faq ? 'Tu portada marca preguntas y respuestas con FAQPage.' : 'Tu portada no marca preguntas y respuestas con FAQPage, el formato que más fácil le resulta citar a una IA.',
    },
    {
      id: 'llms', titulo: 'Archivo llms.txt', peso: 5,
      estado: llms ? 'ok' : 'aviso',
      detalle: llms ? 'Tenés llms.txt: un resumen de tu web pensado para modelos de lenguaje.' : 'No tenés llms.txt. Es un estándar nuevo y no decide nada por sí solo, pero es barato y ordena lo que una IA lee de vos.',
    },
    {
      id: 'canonical', titulo: 'URL canónica', peso: 5,
      estado: canonical ? 'ok' : 'aviso',
      detalle: canonical ? 'La portada declara su URL canónica.' : 'La portada no declara URL canónica, así que versiones duplicadas compiten entre sí.',
    },
    {
      id: 'https', titulo: 'HTTPS', peso: 5,
      estado: portada.url.protocol === 'https:' ? 'ok' : 'mal',
      detalle: portada.url.protocol === 'https:' ? 'Tu web se sirve por HTTPS.' : 'Tu web no se sirve por HTTPS.',
    },
  ];

  const total = c.reduce((s, x) => s + x.peso, 0);
  const logrado = c.reduce((s, x) => s + (x.estado === 'ok' ? x.peso : x.estado === 'aviso' ? x.peso / 2 : 0), 0);

  return {
    url: portada.url.toString(),
    dominio,
    titulo,
    descripcion,
    h1,
    idioma,
    palabras,
    schemas: [...schemas],
    bloqueados,
    sitemap,
    llms,
    puntuacion: Math.round((logrado / total) * 100),
    comprobaciones: c,
    texto: visible.slice(0, 3500),
  };
}
