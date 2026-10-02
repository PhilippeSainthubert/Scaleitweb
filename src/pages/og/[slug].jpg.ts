import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';
import { portadaSVG } from '../../lib/portada';

// Imagen social de cada artículo: la misma portada, rasterizada porque
// LinkedIn, WhatsApp y X no aceptan SVG. En JPEG y no en PNG: el degradado
// del cielo en PNG de paleta salía con bandas, y en PNG completo pesaba el triple. Sin texto dentro a propósito: el
// titular ya lo pinta la propia red social debajo de la imagen, y así no
// dependemos de que el servidor de build tenga la tipografía instalada.
export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({ params: { slug: post.id }, props: { cluster: post.data.cluster } }));
}

export const GET: APIRoute = async ({ params, props }) => {
  const jpg = await sharp(Buffer.from(portadaSVG(params.slug!, props.cluster as string)))
    .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toBuffer();
  return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': 'image/jpeg' } });
};
