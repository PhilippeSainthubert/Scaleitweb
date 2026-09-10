#!/usr/bin/env node
// Avisa a IndexNow (Bing, Copilot, Yandex y quien use ese índice) de las URLs
// publicadas, en vez de esperar a que pasen a rastrear por su cuenta.
//
// Se ejecuta DESPUÉS de desplegar: la clave tiene que estar accesible en
// producción o la API rechaza el envío entero.
//
//   node scripts/indexnow.mjs            -> manda todo el sitemap
//   node scripts/indexnow.mjs <url> ...  -> manda solo esas URLs

const HOST = 'www.growth-scaleit.com';
const KEY = '75fa7a2a1e2e524baa6ae31918220abd';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function urlsDelSitemap() {
  const res = await fetch(`https://${HOST}/sitemap-0.xml`);
  if (!res.ok) throw new Error(`sitemap devolvió ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urlList = args.length ? args : await urlsDelSitemap();

if (!urlList.length) {
  console.error('No hay URLs que mandar.');
  process.exit(1);
}

// Comprobar que la clave es alcanzable antes de gastar el envío.
const check = await fetch(KEY_LOCATION);
if (!check.ok) {
  console.error(`La clave no responde en ${KEY_LOCATION} (${check.status}).`);
  console.error('Despliega primero: sin clave accesible, IndexNow rechaza el lote entero.');
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

// 200 = aceptado. 202 = aceptado, clave en validación. Ambos son éxito.
if (res.status === 200 || res.status === 202) {
  console.log(`IndexNow aceptó ${urlList.length} URLs (HTTP ${res.status}).`);
} else {
  console.error(`IndexNow devolvió ${res.status}: ${await res.text()}`);
  process.exit(1);
}
