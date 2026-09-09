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

  // La pagina de testimonios inventados desaparece; su URL sigue viva.
  // Las dos formas: la regla que genera Astro es de coincidencia exacta, así
  // que sin la variante con barra final /testimonios/ devolvía 404.
  redirects: { '/testimonios': '/casos-de-exito' },

  // Una sola forma canónica de cada URL, sin barra final. Sin esto el sitemap
  // pedía indexar /precios/ mientras el canonical de esa misma página apuntaba
  // a /precios: dos señales contradictorias sobre la misma URL. De paso, Vercel
  // pasa a redirigir con 301 cualquier URL con barra final, lo que arregla
  // /testimonios/ y todas las demás de una vez.
  trailingSlash: 'never',

  integrations: [
    sitemap({
      // /gracias es la unica que no debe indexarse.
      filter: (page) => !page.includes('/gracias'),
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        // Sin barra final, para que coincida exactamente con el canonical.
        if (item.url !== 'https://www.growth-scaleit.com/') {
          item.url = item.url.replace(/\/$/, '');
        }
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
