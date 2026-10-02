/**
 * Las constelaciones de los agentes en versión grande, para las cabeceras y
 * las portadas del blog.
 *
 * Las de `constelaciones.ts` están dibujadas para un avatar de 48 px: con ocho
 * puntos y la abstracción justa se leen bien a ese tamaño. Ampliadas a 400 px
 * se quedan en palotes y el lobo no se distingue del cuervo. Estas tienen más
 * estrellas y siguen la silueta, para que el animal se reconozca a primera
 * vista aunque siga siendo una constelación.
 *
 * En lugar de coordenadas a mano, cada figura se compone con primitivas
 * (elipses, curvas, trazos) sobre una caja de 100x100 y, cuando el animal es
 * simétrico, se dibuja la mitad izquierda y se refleja. Así se pueden retocar
 * las proporciones sin recalcular decenas de puntos.
 */

export type Punto = [number, number, number]; // x, y, radio
export interface FiguraGrande {
  p: Punto[];
  e: [number, number][];
}

type XY = [number, number];

// Estrella normal y estrella ancla (ojos, cabezas, articulaciones que mandan).
const R = 1.25;
const ANCLA = 2.6;

class Constructor {
  p: Punto[] = [];
  e: [number, number][] = [];
  private espejo = false;

  private tx([x, y]: XY): XY {
    return this.espejo ? [100 - x, y] : [x, y];
  }

  /** Añade una estrella; si ya hay una casi en el mismo sitio, la reutiliza. */
  nodo(pt: XY, r = R): number {
    const [x, y] = this.tx(pt);
    const i = this.p.findIndex(([px, py]) => Math.hypot(px - x, py - y) < 0.7);
    if (i >= 0) {
      this.p[i][2] = Math.max(this.p[i][2], r);
      return i;
    }
    this.p.push([+x.toFixed(2), +y.toFixed(2), r]);
    return this.p.length - 1;
  }

  unir(a: number, b: number) {
    if (a === b) return;
    const [m, n] = a < b ? [a, b] : [b, a];
    if (!this.e.some(([x, y]) => x === m && y === n)) this.e.push([m, n]);
  }

  /** Trazo por una serie de puntos. Devuelve los índices. */
  trazo(pts: XY[], { cerrado = false, r = R, extremos }: { cerrado?: boolean; r?: number; extremos?: number } = {}) {
    const ids = pts.map((pt, i) => this.nodo(pt, extremos && (i === 0 || i === pts.length - 1) ? extremos : r));
    for (let i = 1; i < ids.length; i++) this.unir(ids[i - 1], ids[i]);
    if (cerrado && ids.length > 2) this.unir(ids[ids.length - 1], ids[0]);
    return ids;
  }

  /** Puntos sobre una elipse, de a0 a a1 grados (0 = derecha, 90 = abajo). */
  arco(cx: number, cy: number, rx: number, ry: number, n: number, { a0 = 0, a1 = 360, rot = 0 } = {}): XY[] {
    const completo = Math.abs(a1 - a0) >= 360;
    const pasos = completo ? n : n - 1;
    const cr = Math.cos((rot * Math.PI) / 180);
    const sr = Math.sin((rot * Math.PI) / 180);
    return Array.from({ length: n }, (_, i) => {
      const a = ((a0 + ((a1 - a0) * i) / pasos) * Math.PI) / 180;
      const x = rx * Math.cos(a);
      const y = ry * Math.sin(a);
      return [cx + x * cr - y * sr, cy + x * sr + y * cr] as XY;
    });
  }

  elipse(cx: number, cy: number, rx: number, ry: number, n: number, opts: { rot?: number; r?: number } = {}) {
    return this.trazo(this.arco(cx, cy, rx, ry, n, { a0: -90, a1: 270, rot: opts.rot }), { cerrado: true, r: opts.r });
  }

  /** Une los dos puntos más cercanos entre dos partes del cuerpo. */
  puente(a: number[], b: number[]) {
    let mejor: [number, number] = [a[0], b[0]];
    let d = Infinity;
    for (const i of a) for (const j of b) {
      const dd = Math.hypot(this.p[i][0] - this.p[j][0], this.p[i][1] - this.p[j][1]);
      if (i !== j && dd < d) { d = dd; mejor = [i, j]; }
    }
    this.unir(mejor[0], mejor[1]);
  }

  /** Cuelga una estrella del punto más cercano de una parte del cuerpo. */
  colgarDe(id: number, de: number[]) {
    this.puente([id], de.filter((j) => j !== id));
  }

  /** Curva de Bézier cúbica muestreada en n puntos. */
  curva(a: XY, c1: XY, c2: XY, b: XY, n: number): XY[] {
    return Array.from({ length: n }, (_, i) => {
      const t = i / (n - 1);
      const u = 1 - t;
      return [
        u * u * u * a[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * b[0],
        u * u * u * a[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * b[1],
      ] as XY;
    });
  }

  /** Dibuja con fn la mitad izquierda y la repite reflejada. */
  simetrico(fn: () => void) {
    fn();
    this.espejo = true;
    fn();
    this.espejo = false;
  }

  fin(): FiguraGrande {
    return { p: this.p, e: this.e };
  }
}

function figura(fn: (c: Constructor) => void): FiguraGrande {
  const c = new Constructor();
  fn(c);
  return c.fin();
}

export const FIGURAS_GRANDES: Record<string, FiguraGrande> = {
  // El orquestador: cabeza en cúpula y ocho brazos que se curvan.
  pulpo: figura((c) => {
    const cupula = c.trazo(c.arco(50, 31, 17, 22, 9, { a0: 180, a1: 360 }));
    const base = c.trazo([[67, 31], [64, 40], [57, 45], [50, 46], [43, 45], [36, 40], [33, 31]]);
    const cabeza = [...cupula, ...base];
    c.nodo([43, 32], ANCLA);
    c.nodo([57, 32], ANCLA);
    c.simetrico(() => {
      const b1 = c.trazo([...c.curva([35, 42], [24, 48], [10, 56], [9, 70], 6), [12, 77], [17, 75]], { extremos: 1.6 });
      const b2 = c.trazo([...c.curva([40, 45], [32, 58], [21, 70], [22, 84], 6), [26, 89], [30, 86]], { extremos: 1.6 });
      const b3 = c.trazo([...c.curva([44, 47], [42, 60], [35, 76], [37, 91], 6), [41, 95], [43, 91]], { extremos: 1.6 });
      const b4 = c.trazo(c.curva([48, 47], [49, 62], [46, 80], [47, 93], 5), { extremos: 1.6 });
      for (const b of [b1, b2, b3, b4]) c.colgarDe(b[0], cabeza);
    });
  }),

  // Captar: alas abiertas, cola en abanico.
  halcon: figura((c) => {
    const cabeza = c.elipse(50, 19, 5, 5, 8);
    c.nodo([50, 18.5], ANCLA);
    const pico = c.trazo([[47.5, 23.5], [50, 29], [52.5, 23.5]]);
    c.colgarDe(pico[0], cabeza);
    c.colgarDe(pico[2], cabeza);
    c.simetrico(() => {
      const cuerpo = c.trazo([[46, 25], [43, 35], [43, 50], [47, 62], [50, 63]]);
      c.colgarDe(cuerpo[0], cabeza);
      c.trazo([[43, 35], [34, 27], [24, 22], [14, 21], [5, 25]], { extremos: 1.9 });
      c.trazo([[5, 25], [6, 33], [11, 40], [18, 45], [27, 47], [36, 46], [43, 43]]);
      c.trazo([[34, 27], [27, 47]]);
      c.trazo([[24, 22], [18, 45]]);
      c.trazo([[14, 21], [11, 40]]);
      c.trazo([[47, 62], [42, 77], [46, 81], [50, 82]], { extremos: 1.4 });
    });
  }),

  // Atraer: cabeza, tórax, abdomen a rayas y dos pares de alas.
  abeja: figura((c) => {
    const cabeza = c.elipse(50, 20, 6, 5.5, 8);
    const torax = c.elipse(50, 35, 8, 8, 10);
    const abdomen = c.elipse(50, 61, 11, 17, 14);
    c.puente(cabeza, torax);
    c.puente(torax, abdomen);
    for (const y of [54, 61, 68]) {
      const dx = 11 * Math.sqrt(1 - ((y - 61) / 17) ** 2) - 0.6;
      c.trazo([[50 - dx, y], [50 + dx, y]]);
    }
    const aguijon = c.trazo([[50, 79], [50, 84]], { extremos: 1.8 });
    c.colgarDe(aguijon[0], abdomen);
    c.simetrico(() => {
      c.nodo([46.5, 19], 1.9);
      const antena = c.trazo([[47, 15.5], [43, 9], [37, 5]], { extremos: 1.9 });
      c.colgarDe(antena[0], cabeza);
      c.puente(c.elipse(30, 33, 15, 7.5, 12, { rot: -20 }), torax);
      c.puente(c.elipse(33, 45, 11, 5.5, 10, { rot: 14 }), torax);
    });
  }),

  // Operar: tres segmentos, seis patas y antenas acodadas.
  hormiga: figura((c) => {
    const cabeza = c.elipse(50, 18, 7, 6.5, 10);
    const torax = c.elipse(50, 35, 5.5, 10, 10);
    const peciolo = [c.nodo([50, 48.5], 1.8)];
    const gaster = c.elipse(50, 66, 11, 14, 14);
    c.puente(cabeza, torax);
    c.puente(torax, peciolo);
    c.puente(peciolo, gaster);
    c.simetrico(() => {
      c.nodo([46, 17], 1.7);
      c.colgarDe(c.trazo([[46, 12.5], [42, 6], [33, 4]], { extremos: 1.8 })[0], cabeza);
      c.colgarDe(c.trazo([[46.5, 24.5], [44, 28]])[0], cabeza);
      c.colgarDe(c.trazo([[45, 30], [36, 24], [26, 26], [20, 22]], { extremos: 1.5 })[0], torax);
      c.colgarDe(c.trazo([[44.6, 36], [33, 38], [22, 44], [16, 44]], { extremos: 1.5 })[0], torax);
      c.colgarDe(c.trazo([[45.2, 41], [36, 50], [28, 62], [24, 70]], { extremos: 1.5 })[0], torax);
    });
  }),

  // Outbound: cabeza de lobo de frente, en facetas.
  lobo: figura((c) => {
    c.simetrico(() => {
      const punta = c.nodo([25, 8], 1.8);
      const baseExt = c.nodo([19, 32]);
      const baseInt = c.nodo([37, 26]);
      const frente = c.nodo([50, 22]);
      const mejilla = c.nodo([16, 48]);
      const mandibula = c.nodo([28, 64]);
      const hocico = c.nodo([40, 76]);
      const barbilla = c.nodo([50, 88], 1.6);
      const ojo = c.nodo([37, 44], ANCLA);
      const puente = c.nodo([50, 50]);
      const trufa = c.nodo([50, 72], 3);
      const interior = c.nodo([28, 21]);
      [[punta, baseExt], [punta, baseInt], [baseExt, baseInt], [punta, interior], [interior, baseInt],
       [baseInt, frente], [baseExt, mejilla], [mejilla, mandibula], [mandibula, hocico], [hocico, barbilla],
       [baseExt, ojo], [baseInt, ojo], [mejilla, ojo], [ojo, puente], [frente, puente], [ojo, mandibula],
       [puente, trufa], [hocico, trufa], [trufa, barbilla], [ojo, hocico]].forEach(([a, b]) => c.unir(a, b));
    });
  }),

  // SEO: la que teje la red.
  arana: figura((c) => {
    const cefalo = c.elipse(50, 40, 8, 7, 10);
    const abdomen = c.elipse(50, 62, 11, 14, 14);
    c.puente(cefalo, abdomen);
    c.colgarDe(c.trazo([[50, 81], [50, 96]], { extremos: 1.5 })[0], abdomen);
    c.simetrico(() => {
      c.nodo([47.5, 36], 1.5);
      c.colgarDe(c.trazo([[44.5, 35], [38, 24], [30, 12], [26, 4]], { extremos: 1.4 })[0], cefalo);
      c.colgarDe(c.trazo([[42.5, 38], [31, 28], [18, 26], [8, 32]], { extremos: 1.4 })[0], cefalo);
      c.colgarDe(c.trazo([[42.5, 42], [30, 46], [17, 54], [10, 66]], { extremos: 1.4 })[0], cefalo);
      c.colgarDe(c.trazo([[44.5, 45], [38, 58], [31, 74], [28, 88]], { extremos: 1.4 })[0], cefalo);
    });
  }),

  // Automatización: caparazón partido, seis patas.
  escarabajo: figura((c) => {
    const cabeza = c.elipse(50, 15, 6, 4.5, 8);
    const pronoto = c.elipse(50, 28, 12, 7.5, 12);
    const elitros = c.elipse(50, 58, 18, 24, 18);
    c.puente(cabeza, pronoto);
    c.puente(pronoto, elitros);
    c.trazo([[50, 34], [50, 46], [50, 58], [50, 70], [50, 82]]);
    c.simetrico(() => {
      c.colgarDe(c.trazo([[46, 11.5], [41, 6], [36, 3]], { extremos: 1.8 })[0], cabeza);
      c.colgarDe(c.trazo([[38.5, 30], [29, 25], [22, 17]], { extremos: 1.5 })[0], pronoto);
      c.colgarDe(c.trazo([[33, 46], [23, 48], [14, 41]], { extremos: 1.5 })[0], elitros);
      c.colgarDe(c.trazo([[33, 66], [22, 70], [16, 80]], { extremos: 1.5 })[0], elitros);
    });
  }),

  // CRM: de perfil, la memoria de la casa.
  elefante: figura((c) => {
    c.trazo([[14, 44], [18, 34], [28, 27], [40, 24], [52, 25], [62, 28], [70, 26], [78, 28], [84, 34], [86, 42]]);
    c.trazo([[86, 42], [88, 52], [88, 62], [86, 71], [82, 77], [78, 75]], { extremos: 1.6 });
    c.trazo([[80, 52], [74, 57], [69, 56]], { extremos: 1.6 });
    c.elipse(65, 44, 6, 12, 10, { rot: 8 });
    c.nodo([76, 37], ANCLA);
    c.trazo([[80, 54], [70, 59], [60, 63], [46, 66], [32, 64], [22, 59], [14, 44]]);
    for (const [x, y] of [[70, 59], [60, 63], [32, 64], [22, 59]] as XY[]) {
      c.trazo([[x, y], [x, 87]]);
      c.nodo([x, 87], 1.7);
    }
    c.trazo([[14, 44], [10, 52], [10, 60]], { extremos: 1.4 });
  }),

  // Paid: de perfil, aleta dorsal y cola en horquilla.
  tiburon: figura((c) => {
    c.trazo([[95, 50], [86, 45], [74, 41], [60, 39], [46, 39], [32, 42], [20, 46], [12, 48]]);
    c.trazo([[12, 48], [3, 27], [9, 50], [6, 67], [12, 52]]);
    c.trazo([[12, 52], [24, 56], [40, 60], [56, 61], [72, 59], [84, 55], [95, 50]]);
    c.trazo([[60, 39], [51, 20], [46, 39]]);
    c.trazo([[72, 59], [60, 76], [56, 61]]);
    c.trazo([[32, 42], [28, 35], [24, 44.5]]);
    for (const x of [79, 76, 73]) c.trazo([[x, 44.5], [x - 1, 53.5]]);
    c.nodo([87, 47], ANCLA);
    c.nodo([3, 27], 1.6);
    c.nodo([6, 67], 1.6);
  }),

  // Influencers: el abanico, con un ojo en cada pluma.
  pavoreal: figura((c) => {
    const puntas: XY[] = [];
    for (let a = 195; a <= 345.1; a += 15) {
      const rad = (a * Math.PI) / 180;
      const pluma = (r: number): XY => [50 + r * Math.cos(rad), 62 + r * Math.sin(rad)];
      c.trazo([pluma(13), pluma(31), pluma(44)]);
      c.nodo(pluma(44), 2.4);
      puntas.push(pluma(44));
    }
    c.trazo(puntas);
    const cuerpo = c.elipse(50, 71, 6, 11, 10);
    c.colgarDe(c.trazo([[50, 58], [50.5, 52], [51, 46.5]])[0], cuerpo);
    c.nodo([51, 46], 2.2);
    c.trazo([[51, 46], [55, 47.5]]);
    for (const [x, y] of [[47.5, 40.5], [51, 39], [54.5, 40.5]] as XY[]) c.trazo([[51, 46], [x, y]], { extremos: 1.4 });
    c.colgarDe(c.trazo([[47, 81], [46, 92]])[0], cuerpo);
    c.colgarDe(c.trazo([[53, 81], [54, 92]])[0], cuerpo);
  }),

  // AEO: el que responde. Ojos grandes y orejas en punta.
  buho: figura((c) => {
    c.nodo([40, 34], 3);
    c.nodo([60, 34], 3);
    c.trazo([[47, 41], [50, 48], [53, 41]]);
    c.trazo([[16, 88], [84, 88]], { extremos: 1.2 });
    c.simetrico(() => {
      c.trazo([[30, 8], [40, 20], [50, 22]], { extremos: 1.8 });
      c.trazo([[30, 8], [26, 22], [25, 36], [28, 52], [34, 66], [42, 78], [50, 82]]);
      c.elipse(40, 34, 7.5, 7.5, 10);
      c.trazo([[30, 48], [34, 62], [41, 73]]);
      c.trazo([[44, 82], [42, 88]]);
      c.nodo([46, 60], 1.1);
    });
  }),
};
