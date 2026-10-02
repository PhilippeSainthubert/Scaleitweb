import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { portadaSVG } from '../../lib/portada';

// Portada de cada artículo como fichero estático: se cachea, se carga con
// lazy loading y no infla el HTML del índice con 57 SVG en línea.
export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({ params: { slug: post.id }, props: { cluster: post.data.cluster } }));
}

export const GET: APIRoute = ({ params, props }) =>
  new Response(portadaSVG(params.slug!, props.cluster as string), {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' },
  });
