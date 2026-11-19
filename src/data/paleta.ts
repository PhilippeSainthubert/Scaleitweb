/**
 * El color de cada agente y su avatar: un círculo de color con la
 * constelación del animal en blanco. Es el mismo lenguaje en toda la web
 * (la app de "Cómo funciona", la consola, el sistema y los servicios), así
 * que un agente se reconoce por su color en cualquier página.
 */
import { FIGURAS } from './constelaciones';

export const COLOR_AGENTE: Record<string, string> = {
  pulpo: '#2f5cff',
  halcon: '#f97316',
  abeja: '#10b981',
  hormiga: '#7c3aed',
  lobo: '#e5484d',
  cuervo: '#f2994a',
  tiburon: '#ec4899',
  pavoreal: '#f5a524',
  arana: '#14b8a6',
  castor: '#22c55e',
  buho: '#0ea5e9',
  elefante: '#6366f1',
  libelula: '#8b5cf6',
  escarabajo: '#a16207',
};

/** La constelación del animal como SVG en línea, en blanco. */
export const figuraHTML = (animal: string) => {
  const f = FIGURAS[animal];
  if (!f) return '';
  const lineas = f.e.map(([a, b]) => `<line x1="${f.p[a][0]}" y1="${f.p[a][1]}" x2="${f.p[b][0]}" y2="${f.p[b][1]}"/>`).join('');
  const puntos = f.p.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('');
  return `<svg viewBox="0 0 48 48" aria-hidden="true"><g class="sc-av-lineas">${lineas}</g><g class="sc-av-puntos">${puntos}</g></svg>`;
};

/** El avatar completo. El tamaño se cambia con la variable --t. */
export const avatarHTML = (animal: string, tam?: number) =>
  `<span class="sc-av" style="--c:${COLOR_AGENTE[animal] || '#2f5cff'}${tam ? `;--t:${tam}px` : ''}">${figuraHTML(animal)}</span>`;
