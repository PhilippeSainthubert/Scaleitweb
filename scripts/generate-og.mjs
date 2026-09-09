import sharp from 'sharp';
function mulberry32(a){return function(){a|=0;a=(a+0x6d2b79f5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296;};}
const rnd = mulberry32(20260909);
const OX = 600, OY = 700;
let rays = '';
for (let i = 0; i < 220; i++) {
  const t = i / 219;
  const a = Math.PI * t + (rnd() - 0.5) * 0.02;
  const len = 180 + Math.pow(rnd(), 1.7) * 460;
  const x2 = (OX + Math.cos(a) * len).toFixed(1);
  const y2 = (OY - Math.sin(a) * len).toFixed(1);
  const d = rnd();
  const c = d < .5 ? '#93b1ff' : '#2f5cff';
  rays += `<line x1="${OX}" y1="${OY}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${(0.5+d*0.8).toFixed(2)}" stroke-opacity="${(0.10+d*0.42).toFixed(2)}"/>`
       +  `<circle cx="${x2}" cy="${y2}" r="${(1+d*1.4).toFixed(2)}" fill="${c}" fill-opacity="${(0.25+d*0.4).toFixed(2)}"/>`;
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><linearGradient id="bg" x1="0" y1="1" x2="0" y2="0">
<stop offset="0" stop-color="#eef3ff"/><stop offset="0.65" stop-color="#ffffff"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<g>${rays}</g>
<text x="80" y="132" font-family="Geist Variable, Helvetica, Arial, sans-serif" font-size="30" font-weight="600" fill="#0a1628" letter-spacing="-0.5">Scale It</text>
<text x="80" y="272" font-family="Geist Variable, Helvetica, Arial, sans-serif" font-size="62" font-weight="600" fill="#0a1628" letter-spacing="-2.2">Tu máquina de adquisición,</text>
<text x="80" y="346" font-family="Geist Variable, Helvetica, Arial, sans-serif" font-size="62" font-weight="600" fill="#0a1628" letter-spacing="-2.2">operada por agentes de IA.</text>
<text x="80" y="412" font-family="Geist Variable, Helvetica, Arial, sans-serif" font-size="27" fill="#42536b">Un sistema. Cientos de acciones al día.</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('og-default.png generada');
