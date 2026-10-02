/**
 * Portada de cada artículo: la constelación del agente del tema sobre cielo
 * nocturno.
 *
 * Es el mismo lenguaje que la cabecera de la web (la red que se organiza en un
 * animal), pero fijo y de noche, que es donde viven las constelaciones. El
 * cielo oscuro no es decoración: es lo que hace que la figura se lea como lo
 * que es.
 *
 * Cada portada es distinta y siempre la misma para el mismo artículo: el
 * campo de estrellas, la posición, el tamaño y el giro del animal salen de un
 * generador pseudoaleatorio sembrado con el slug. Sin imágenes que encargar ni
 * que mantener: un artículo nuevo trae su portada al construir la web.
 *
 * Se usa en dos sitios: como SVG en las tarjetas del blog y rasterizada a PNG
 * como imagen social de cada artículo.
 */
import { FIGURAS_GRANDES } from '../data/constelaciones-grandes';
import { AGENTE_CLUSTER } from '../data/agentes';

export const PORTADA_W = 1200;
export const PORTADA_H = 630;

function semilla(texto: string) {
  let h = 2166136261;
  for (let i = 0; i < texto.length; i++) {
    h ^= texto.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function generador(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const n = (v: number) => v.toFixed(1);

export function portadaSVG(slug: string, cluster: string): string {
  const azar = generador(semilla(slug));
  const W = PORTADA_W;
  const H = PORTADA_H;
  const fig = FIGURAS_GRANDES[AGENTE_CLUSTER[cluster] ?? 'pulpo'];

  // Composición. Con 16 artículos del mismo tema, el mismo animal en la misma
  // postura convertía la rejilla en un muro de figuras iguales, así que cada
  // artículo cae en uno de tres encuadres:
  //   retrato: la figura entera, a la derecha del centro.
  //   detalle: un primer plano que se sale del marco, más editorial.
  //   lejana:  pequeña, en un tercio, con mucho cielo alrededor.
  const modo = azar();
  let tam: number, cx: number, cy: number;
  if (modo < 0.45) {
    tam = H * (0.66 + azar() * 0.14);
    cx = W * (0.58 + azar() * 0.14);
    cy = H * (0.5 + (azar() - 0.5) * 0.06);
  } else if (modo < 0.75) {
    tam = H * (1.25 + azar() * 0.3);
    cx = W * (0.62 + azar() * 0.18);
    cy = H * (0.42 + azar() * 0.26);
  } else {
    tam = H * (0.5 + azar() * 0.12);
    cx = W * (azar() < 0.5 ? 0.3 + azar() * 0.08 : 0.68 + azar() * 0.1);
    cy = H * (0.42 + azar() * 0.18);
  }
  const giro = ((azar() - 0.5) * 24 * Math.PI) / 180;
  const espejo = azar() < 0.5 ? -1 : 1;
  const cos = Math.cos(giro);
  const sin = Math.sin(giro);
  const pos = (x: number, y: number): [number, number] => {
    const dx = ((x - 50) / 100) * tam * espejo;
    const dy = ((y - 50) / 100) * tam;
    return [cx + dx * cos - dy * sin, cy + dx * sin + dy * cos];
  };

  // Cielo: estrellas de fondo y, entre las más cercanas, la red tenue.
  const cielo = Array.from({ length: 150 }, () => ({
    x: azar() * W,
    y: azar() * H,
    r: 0.35 + azar() ** 3 * 1.5,
    o: 0.22 + azar() * 0.62,
  }));
  let red = '';
  for (let i = 0; i < cielo.length; i++) {
    for (let j = i + 1; j < cielo.length; j++) {
      const d = Math.hypot(cielo[i].x - cielo[j].x, cielo[i].y - cielo[j].y);
      if (d < 84) {
        red += `<line x1="${n(cielo[i].x)}" y1="${n(cielo[i].y)}" x2="${n(cielo[j].x)}" y2="${n(cielo[j].y)}" stroke-opacity="${((1 - d / 84) * 0.18).toFixed(3)}"/>`;
      }
    }
  }
  const estrellas = cielo
    .map((e) => `<circle cx="${n(e.x)}" cy="${n(e.y)}" r="${e.r.toFixed(2)}" fill-opacity="${e.o.toFixed(2)}"/>`)
    .join('');

  // La figura: aristas, polvo a lo largo de cada arista y estrellas.
  const pts = fig.p.map(([x, y, r]) => ({ xy: pos(x, y), r }));
  const esc = tam / 100;
  let aristas = '';
  let polvo = '';
  for (const [a, b] of fig.e) {
    const [ax, ay] = pts[a].xy;
    const [bx, by] = pts[b].xy;
    aristas += `<line x1="${n(ax)}" y1="${n(ay)}" x2="${n(bx)}" y2="${n(by)}"/>`;
    const tramos = Math.floor(Math.hypot(bx - ax, by - ay) / 13);
    for (let i = 1; i < tramos; i++) {
      const t = i / tramos;
      polvo += `<circle cx="${n(ax + (bx - ax) * t + (azar() - 0.5) * 1.6)}" cy="${n(ay + (by - ay) * t + (azar() - 0.5) * 1.6)}" r="${(0.7 + azar() * 0.6).toFixed(2)}"/>`;
    }
  }
  let halos = '';
  let nucleos = '';
  for (const { xy: [x, y], r } of pts) {
    const radio = Math.min(6, Math.max(1.6, r * esc * 0.34));
    if (r >= 2) halos += `<circle cx="${n(x)}" cy="${n(y)}" r="${n(radio * 6)}" fill="url(#halo)"/>`;
    nucleos += `<circle cx="${n(x)}" cy="${n(y)}" r="${radio.toFixed(2)}"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
<defs>
<linearGradient id="cielo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a1628"/><stop offset="1" stop-color="#0e2244"/></linearGradient>
<radialGradient id="brillo" cx="${n(cx)}" cy="${n(cy)}" r="${n(tam * 0.82)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2f5cff" stop-opacity=".32"/><stop offset="1" stop-color="#2f5cff" stop-opacity="0"/></radialGradient>
<radialGradient id="halo"><stop offset="0" stop-color="#93b1ff" stop-opacity=".55"/><stop offset="1" stop-color="#93b1ff" stop-opacity="0"/></radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#cielo)"/>
<rect width="${W}" height="${H}" fill="url(#brillo)"/>
<g stroke="#5c86ff" stroke-width="1">${red}</g>
<g fill="#dbe5ff">${estrellas}</g>
<g stroke="#7ea0ff" stroke-width="1.4" stroke-opacity=".62" stroke-linecap="round">${aristas}</g>
<g fill="#93b1ff" fill-opacity=".8">${polvo}</g>
${halos}
<g fill="#eef3ff">${nucleos}</g>
</svg>`;
}
