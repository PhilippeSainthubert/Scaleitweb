import sharp from 'sharp';
import { existsSync } from 'node:fs';

/**
 * Normaliza la foto de un socio: cuadrada, centrada, optimizada.
 *   node scripts/foto-socio.mjs ~/Downloads/patrick.jpeg patrick
 */
const [, , origen, nombre] = process.argv;
if (!origen || !nombre) {
  console.error('Uso: node scripts/foto-socio.mjs <ruta-origen> <nombre>');
  process.exit(1);
}
const ruta = origen.replace(/^~/, process.env.HOME);
if (!existsSync(ruta)) {
  console.error(`No existe: ${ruta}`);
  process.exit(1);
}

// 320 px de lado: se muestra a 64, así que cubre pantallas retina de sobra
// sin cargar de más.
await sharp(ruta)
  .resize(320, 320, { fit: 'cover', position: 'top' })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(`public/${nombre}.jpeg`);

const { statSync } = await import('node:fs');
console.log(`public/${nombre}.jpeg listo (${Math.round(statSync(`public/${nombre}.jpeg`).size / 1024)} KB)`);
