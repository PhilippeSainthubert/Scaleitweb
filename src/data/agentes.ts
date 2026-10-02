/**
 * Quién es quién en la casa: cada agente es un animal, y cada página de la web
 * está a cargo de uno. Es la misma correspondencia que dibuja el organigrama
 * de la portada, así que lo que se ve arriba de una página y lo que se explica
 * en la home cuentan lo mismo.
 */

export const AGENTES = {
  pulpo: { nombre: 'Pulpo', rol: 'Orquestador' },
  halcon: { nombre: 'Halcón', rol: 'Agente de captación' },
  abeja: { nombre: 'Abeja', rol: 'Agente de atracción' },
  hormiga: { nombre: 'Hormiga', rol: 'Agente de operación' },
  lobo: { nombre: 'Lobo', rol: 'Agente de outbound' },
  tiburon: { nombre: 'Tiburón', rol: 'Agente de paid' },
  pavoreal: { nombre: 'Pavo real', rol: 'Agente de influencers' },
  arana: { nombre: 'Araña', rol: 'Agente de SEO' },
  buho: { nombre: 'Búho', rol: 'Agente de respuestas' },
  elefante: { nombre: 'Elefante', rol: 'Agente de CRM' },
  escarabajo: { nombre: 'Escarabajo', rol: 'Agente de automatización' },
} as const;

export type ClaveAgente = keyof typeof AGENTES;

/** Agente responsable de cada servicio (por slug). */
export const AGENTE_SERVICIO: Record<string, ClaveAgente> = {
  outbound: 'lobo',
  seo: 'arana',
  'agentes-de-ia': 'escarabajo',
  'revops-crm': 'elefante',
  paid: 'tiburon',
  influencers: 'pavoreal',
};

/** Agente responsable de cada cluster del blog. */
export const AGENTE_CLUSTER: Record<string, ClaveAgente> = {
  'agentes-de-ia': 'escarabajo',
  outbound: 'lobo',
  seo: 'arana',
  revops: 'elefante',
  paid: 'tiburon',
  influencers: 'pavoreal',
};
