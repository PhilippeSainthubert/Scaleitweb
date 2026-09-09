import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const svg = readFileSync('public/favicon.svg');
// A 16 y 32 px el dibujo completo se convierte en una mancha. Se usa una
// versión con menos nodos y trazo más grueso, que es como se resuelve un
// icono de verdad: arte distinto por tamaño, no la misma imagen encogida.
const svgSmall = readFileSync('public/favicon-small.svg');

for (const size of [16, 32]) {
  await sharp(svgSmall, { density: 384 }).resize(size, size).png().toFile(`public/favicon-${size}.png`);
}
for (const size of [48, 192, 512]) {
  await sharp(svg, { density: 384 }).resize(size, size).png().toFile(`public/favicon-${size}.png`);
}

// Apple touch icon: sin esquinas redondeadas propias (iOS las aplica) y con
// el fondo extendido, si no queda un borde blanco feo en la pantalla de inicio.
const inner = await sharp(svg, { density: 384 }).resize(150, 150).png().toBuffer();
await sharp({
  create: { width: 180, height: 180, channels: 4, background: '#0A1628' },
})
  .composite([{ input: inner, top: 15, left: 15 }])
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('iconos generados');

// favicon.ico: sharp no escribe ICO, pero el formato admite un PNG dentro.
// Hace falta porque los navegadores viejos piden /favicon.ico a pelo y el que
// había seguía con el morado y cian del tema anterior.
const png32 = await sharp(svgSmall, { density: 384 }).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);   // reservado
header.writeUInt16LE(1, 2);   // tipo: icono
header.writeUInt16LE(1, 4);   // número de imágenes
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0);      // ancho
entry.writeUInt8(32, 1);      // alto
entry.writeUInt8(0, 2);       // colores de paleta
entry.writeUInt8(0, 3);       // reservado
entry.writeUInt16LE(1, 4);    // planos
entry.writeUInt16LE(32, 6);   // bits por píxel
entry.writeUInt32LE(png32.length, 8);
entry.writeUInt32LE(22, 12);  // desplazamiento de los datos
const { writeFileSync } = await import('node:fs');
writeFileSync('public/favicon.ico', Buffer.concat([header, entry, png32]));
console.log('favicon.ico regenerado');
