import sharp from 'sharp';

// Imagen social: la misma red neuronal de la portada, en versión fija.
function mulberry32(a){return function(){a|=0;a=(a+0x6d2b79f5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296;};}
const rnd = mulberry32(20260909);
const W = 1200, H = 630, LINK = 132;

const nodes = Array.from({ length: 78 }, () => ({
  x: rnd() * W,
  y: rnd() * H,
  r: 1.4 + rnd() * 2.3,
}));

let links = '';
for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
    if (d < LINK) {
      const a = (1 - d / LINK) * 0.34;
      links += `<line x1="${nodes[i].x.toFixed(1)}" y1="${nodes[i].y.toFixed(1)}" x2="${nodes[j].x.toFixed(1)}" y2="${nodes[j].y.toFixed(1)}" stroke="#2f5cff" stroke-opacity="${a.toFixed(3)}" stroke-width="${(0.55 + (1 - d / LINK) * 0.6).toFixed(2)}"/>`;
    }
  }
}
const dots = nodes.map(n =>
  `<circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${n.r.toFixed(2)}" fill="#1633b8" fill-opacity="0.5"/>`
).join('');

// Unos cuantos nodos activados, como en la web
const glow = nodes.filter((_, i) => i % 11 === 3).map(n =>
  `<circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="17" fill="url(#g)"/>`
).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#eef3ff"/><stop offset="0.55" stop-color="#ffffff"/>
  </linearGradient>
  <radialGradient id="g"><stop offset="0" stop-color="#2f5cff" stop-opacity="0.3"/><stop offset="1" stop-color="#2f5cff" stop-opacity="0"/></radialGradient>
  <radialGradient id="veil" cx="0.5" cy="0.45" r="0.62">
    <stop offset="0.3" stop-color="#ffffff" stop-opacity="0.97"/>
    <stop offset="0.68" stop-color="#ffffff" stop-opacity="0.78"/>
    <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
${links}${dots}${glow}
<rect width="${W}" height="${H}" fill="url(#veil)"/>
<text x="80" y="130" font-family="Helvetica, Arial, sans-serif" font-size="29" font-weight="600" fill="#0a1628" letter-spacing="-0.4">Scale It</text>
<text x="80" y="272" font-family="Helvetica, Arial, sans-serif" font-size="61" font-weight="600" fill="#0a1628" letter-spacing="-2.2">Tu máquina de adquisición,</text>
<text x="80" y="346" font-family="Helvetica, Arial, sans-serif" font-size="61" font-weight="600" fill="#0a1628" letter-spacing="-2.2">operada por agentes de IA.</text>
<text x="80" y="412" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#42536b">Un sistema. Cientos de acciones al día.</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('og-default.png regenerada con la red neuronal');
