export const autores = {
  'Philippe Saint-Hubert': {
    rol: 'Socio, sistemas y estrategia',
    linkedin: 'https://www.linkedin.com/in/philippesainthubert/',
    // sameAs alimenta el Person del JSON-LD: le da a los rastreadores una
    // fuente independiente con la que contrastar quién firma.
    sameAs: ['https://www.linkedin.com/in/philippesainthubert/'],
    foto: '/philippe.jpeg',
    iniciales: 'PS',
  },
  'Patrick Saint-Hubert': {
    rol: 'Socio, outbound y generación de demanda',
    linkedin: 'https://www.linkedin.com/in/patrick-saint-hubert-5b9560269/',
    sameAs: ['https://www.linkedin.com/in/patrick-saint-hubert-5b9560269/'],
    foto: '/patrick.jpeg',
    iniciales: 'PS',
  },
} as const;

// @id estable por autor. Que el Person que firma un post y el founder de la
// organización sean el MISMO nodo del grafo, no dos personas con el mismo
// nombre. Es la diferencia entre una entidad y una coincidencia.
export const personId = {
  'Philippe Saint-Hubert': 'https://www.growth-scaleit.com/#philippe',
  'Patrick Saint-Hubert': 'https://www.growth-scaleit.com/#patrick',
} as const;

export const clusters = {
  'agentes-de-ia': 'Agentes de IA',
  outbound: 'Outbound',
  seo: 'SEO y contenido',
  revops: 'RevOps y datos',
} as const;
