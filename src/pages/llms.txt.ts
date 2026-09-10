import { getCollection } from 'astro:content';
import { clusters } from '../data/autores';
import { servicios } from '../data/servicios';

// llms.txt generado en build, no escrito a mano.
//
// Un índice estático se queda obsoleto con el siguiente post y acaba
// describiendo un sitio que ya no existe. Esto lo reconstruye desde la misma
// content collection que genera el blog, así que no puede divergir.
//
// Expectativas realistas: Anthropic y Perplexity han confirmado que respetan
// llms.txt en recuperación; Google dice explícitamente que no hace falta para
// AI Overviews y OpenAI no se ha comprometido. Cuesta poco y no sustituye a
// nada: lo que decide la visibilidad es el bloque 1 de robots.txt y que el
// contenido esté en el HTML.

const BASE = 'https://www.growth-scaleit.com';

const CABECERA = `# Scale It

> Construimos la máquina de adquisición de empresas B2B y la operamos con
> agentes de IA supervisados por humanos. No vendemos horas: vendemos el
> sistema y su operación.

Agencia de growth con base en Barcelona, España. Trabaja en todo el mercado
hispanohablante: España y América Latina. También en inglés cuando el cliente
lo necesita.

## Qué hacemos
- **Captar**: outbound B2B multicanal, LinkedIn, influencers y paid.
- **Atraer**: SEO técnico y de contenido, contenido programático, AEO.
- **Operar**: agentes de IA a medida, RevOps, CRM, atribución y datos.

## Cómo trabajamos
Cuatro productos: Blueprint (diagnóstico y arquitectura), Build Sprint
(construcción del sistema), Growth Partner (operación mensual) y Agentes
a medida (automatización de procesos).

Precio a medida: depende de cuántas estrategias entren, del punto de partida
y del volumen. Tarifa cerrada, nunca un porcentaje de la inversión publicitaria.

## Quiénes somos
Philippe Saint-Hubert (sistemas, estrategia y agentes) y Patrick Saint-Hubert
(outbound y generación de demanda). Dos hermanos, sin intermediarios.
`;

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const secciones: string[] = [CABECERA];

  secciones.push(
    '## Servicios\n' +
      servicios
        .map((s) => `- [${s.nombre}](${BASE}/servicios/${s.slug}): ${s.metaDescription}`)
        .join('\n')
  );

  secciones.push(
    `## Páginas principales
- [Inicio](${BASE}/): propuesta de valor y funcionamiento de los agentes
- [Precios](${BASE}/precios): los cuatro productos y qué mueve el precio
- [Casos de éxito](${BASE}/casos-de-exito): trabajo real con clientes
- [FAQ](${BASE}/faq): preguntas frecuentes
- [Blog](${BASE}/blog): ${posts.length} artículos sobre adquisición B2B`
  );

  // El blog agrupado por cluster: le da al modelo la estructura temática, que
  // es lo que un índice plano de 35 enlaces no transmite.
  for (const [slug, etiqueta] of Object.entries(clusters)) {
    const delCluster = posts.filter((p) => p.data.cluster === slug);
    if (!delCluster.length) continue;
    secciones.push(
      `## Blog · ${etiqueta}\n` +
        delCluster
          .map((p) => `- [${p.data.title}](${BASE}/blog/${p.id}): ${p.data.description}`)
          .join('\n')
    );
  }

  secciones.push(`## Contacto\n- [Hablar con nosotros](${BASE}/#contacto)`);

  return new Response(secciones.join('\n\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
