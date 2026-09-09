import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de blog. El esquema es el contrato: si a un post le falta un campo
// obligatorio, el build falla en vez de publicar una página a medias.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70, 'El title debe caber en la SERP: 70 caracteres.'),
    description: z.string().min(70).max(165, 'La meta description se corta pasados 165 caracteres.'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.enum(['Philippe Saint-Hubert', 'Patrick Saint-Hubert']),
    cluster: z.enum(['agentes-de-ia', 'outbound', 'seo', 'revops']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
