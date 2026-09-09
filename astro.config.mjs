// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Sin `site` no hay canonical ni sitemap posible. Era el agujero
  // que impedía cualquier trabajo serio de SEO.
  site: 'https://www.growth-scaleit.com',

  integrations: [
    sitemap({
      // /gracias no debe indexarse. /testimonios y /casos-de-exito quedan
      // fuera MIENTRAS su contenido siga siendo inventado — no se amplifica
      // con SEO algo que hay que reescribir con casos reales.
      filter: (page) => !/\/(gracias|testimonios|casos-de-exito)/.test(page),
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        if (item.url.endsWith('.com/')) item.priority = 1.0;
        else if (/\/(precios|agentes-de-ia|servicios)/.test(item.url)) item.priority = 0.9;
        else if (/\/(aviso-legal|privacidad|cookies|terminos)/.test(item.url)) item.priority = 0.2;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel({
    webAnalytics: { enabled: false }, // se inyecta desde el Layout
  }),
});
