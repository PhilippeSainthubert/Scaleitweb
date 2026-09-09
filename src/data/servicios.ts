export interface Servicio {
  slug: string;
  nombre: string;
  pilar: 'Captar' | 'Atraer' | 'Operar';
  h1: string;
  metaTitle: string;
  metaDescription: string;
  entradilla: string;
  problema: { titulo: string; texto: string };
  incluye: { titulo: string; texto: string }[];
  entregables: string[];
  paraQuien: string;
  faq: { q: string; a: string }[];
}

export const servicios: Servicio[] = [
  {
    slug: 'outbound',
    nombre: 'Outbound B2B',
    pilar: 'Captar',
    h1: 'Outbound que no parece outbound',
    metaTitle: 'Outbound B2B para empresas tech | Scale It',
    metaDescription:
      'Construimos y operamos tu motor de outbound B2B: ICP, señales de compra, secuencias multicanal y deliverability. Con agentes de IA supervisados.',
    entradilla:
      'La mayoría del outbound falla por la lista, no por el copy. Empezamos por definir a quién merece la pena escribirle y por qué justo ahora.',
    problema: {
      titulo: 'Por qué no funciona lo que estás haciendo',
      texto:
        'Listas compradas sin criterio, un mismo mensaje para todo el mundo y un dominio quemándose en segundo plano. Se manda más volumen para compensar y el problema se agrava. El cuello de botella casi nunca es cuántos correos salen: es a quién se le manda y qué se sabe de él antes de escribir.',
    },
    incluye: [
      { titulo: 'ICP y segmentación', texto: 'Definimos a quién sí y a quién no, con umbrales económicos que hagan que el canal pague.' },
      { titulo: 'Señales de compra', texto: 'Rondas, cambios de puesto, ofertas de empleo abiertas y carencias técnicas detectables. Se escribe cuando hay motivo.' },
      { titulo: 'Datos y enriquecimiento', texto: 'Construcción de listas, verificación de correo y enriquecimiento automatizado.' },
      { titulo: 'Secuencias multicanal', texto: 'Correo y LinkedIn coordinados, con variantes por segmento y no por plantilla.' },
      { titulo: 'Deliverability', texto: 'Dominios secundarios, calentamiento, SPF, DKIM y DMARC. Sin esto no hay campaña que aguante.' },
      { titulo: 'Operación diaria', texto: 'Agentes que preparan, personalizan y priorizan; nosotros revisamos antes de que salga.' },
    ],
    entregables: [
      'Documento de ICP y anti-ICP acordado',
      'Tres listas segmentadas y enriquecidas',
      'Secuencias montadas en la herramienta y conectadas al CRM',
      'Infraestructura de correo configurada y calentada',
      'Panel de respuestas y reuniones generadas',
    ],
    paraQuien:
      'Empresas B2B con un ticket anual por encima de 6.000 € y venta asistida. Por debajo de esa cifra el outbound no devuelve lo que cuesta, y te lo diremos en la primera llamada.',
    faq: [
      { q: '¿Usáis listas compradas?', a: 'No. Construimos la lista desde criterios y señales, y verificamos cada contacto antes de escribirle.' },
      { q: '¿Cuánto tarda en verse algo?', a: 'La infraestructura y el calentamiento del dominio llevan de dos a tres semanas antes del primer envío serio. Las primeras reuniones suelen aparecer entre la cuarta y la sexta semana.' },
      { q: '¿Lo escribe una IA?', a: 'Los agentes preparan, investigan y proponen. La revisión y el criterio son humanos, siempre, antes de que salga nada.' },
    ],
  },
  {
    slug: 'seo',
    nombre: 'SEO y contenido',
    pilar: 'Atraer',
    h1: 'SEO para que te encuentren las personas y las IA',
    metaTitle: 'Agencia SEO para empresas B2B y fintech | Scale It',
    metaDescription:
      'SEO técnico, arquitectura de contenido y presencia en buscadores con IA. Auditoría, clusters, contenido programático y medición real.',
    entradilla:
      'Tus compradores ya no empiezan siempre en Google. Preguntan a ChatGPT, a Perplexity o leen un resumen generado. Aparecer ahí exige un trabajo distinto al SEO de hace tres años.',
    problema: {
      titulo: 'El SEO que te vendieron mide lo que no importa',
      texto:
        'Informes llenos de posiciones medias y de tráfico que no compra. Mientras tanto hay páginas fuera del índice, contenido que se canibaliza y ni un dato estructurado. Y en las respuestas generativas no apareces, porque nadie preparó el contenido para que se pueda citar.',
    },
    incluye: [
      { titulo: 'Auditoría técnica', texto: 'Rastreo, indexación, Core Web Vitals, datos estructurados y renderizado.' },
      { titulo: 'Arquitectura', texto: 'Pilares y clusters que responden al recorrido real de compra, no al volumen de búsqueda.' },
      { titulo: 'Contenido', texto: 'Guías, páginas de servicio y comparativas escritas para decidir, no para rellenar.' },
      { titulo: 'Programático', texto: 'Glosarios, comparativas y herramientas que cubren la cola larga a escala.' },
      { titulo: 'AEO', texto: 'Bloques de respuesta autocontenidos, datos estructurados y acceso para los rastreadores con IA.' },
      { titulo: 'Medición', texto: 'Search Console y GA4 bien montados, con conversiones y no solo sesiones.' },
    ],
    entregables: [
      'Auditoría técnica priorizada por impacto',
      'Mapa de arquitectura y clusters',
      'Calendario editorial con briefs listos',
      'Datos estructurados implementados y validados',
      'Panel de posiciones, tráfico y conversiones',
    ],
    paraQuien:
      'Empresas con producto ya validado que quieren dejar de depender solo del canal de pago. El SEO tarda: si necesitás reuniones este mes, empezamos por outbound.',
    faq: [
      { q: '¿Cuánto tarda el SEO en dar resultados?', a: 'Las correcciones técnicas se notan en semanas. El contenido nuevo necesita de tres a seis meses para asentarse. Cualquiera que prometa menos está vendiendo humo.' },
      { q: '¿Escribís vosotros el contenido?', a: 'Sí, con agentes que investigan y redactan, y revisión humana obligatoria. Ninguna pieza sale sin que uno de los dos la lea entera.' },
      { q: '¿Sirve para aparecer en ChatGPT?', a: 'Es parte del trabajo. Requiere contenido citable, datos estructurados y permitir el acceso a los rastreadores de búsqueda con IA.' },
    ],
  },
  {
    slug: 'agentes-de-ia',
    nombre: 'Agentes de IA a medida',
    pilar: 'Operar',
    h1: 'Agentes de IA que hacen el trabajo, no que lo comentan',
    metaTitle: 'Agentes de IA a medida para automatizar procesos | Scale It',
    metaDescription:
      'Diseñamos y construimos agentes de IA conectados a tu CRM y a tus datos para automatizar procesos de marketing, ventas y operaciones. Con supervisión humana.',
    entradilla:
      'Un agente no es un chat. Es un proceso que se ejecuta solo, con acceso a tus sistemas, criterios claros de cuándo parar y una persona que responde por el resultado.',
    problema: {
      titulo: 'La diferencia entre una automatización y un agente',
      texto:
        'Una automatización sigue un camino fijo: si pasa esto, haz aquello. Un agente decide sobre información nueva: cualifica, prioriza, redacta, corrige. Casi todo lo que se vende como IA es lo primero con otro nombre, y por eso se rompe en cuanto la realidad se sale del diagrama.',
    },
    incluye: [
      { titulo: 'Mapa de procesos', texto: 'Qué se repite, cuánto cuesta hoy en horas y qué merece automatizarse. Muchas veces la respuesta es que no.' },
      { titulo: 'Diseño del agente', texto: 'Alcance, herramientas a las que accede, límites duros y qué pasa cuando duda.' },
      { titulo: 'Construcción', texto: 'Conexión a tu CRM, tus datos y tus herramientas. Sin migrar nada.' },
      { titulo: 'Supervisión', texto: 'Cada entrega pasa por revisión humana antes de tener efecto. La trazabilidad no es opcional.' },
      { titulo: 'Medición', texto: 'Horas ahorradas y errores evitados, contados de verdad.' },
      { titulo: 'Traspaso', texto: 'Documentado, tuyo, y operable por tu equipo si algún día dejamos de trabajar juntos.' },
    ],
    entregables: [
      'Mapa de procesos con coste actual en horas',
      'Agentes construidos y conectados a tu stack',
      'Panel de tareas con estado en tiempo real',
      'Documentación de alcance, límites y escalado',
      'Formación al equipo que los va a convivir',
    ],
    paraQuien:
      'Equipos que repiten el mismo trabajo manual todas las semanas y ya tienen los datos en algún sitio. Si el proceso no está claro para una persona, tampoco lo estará para un agente.',
    faq: [
      { q: '¿Sustituye a alguien de mi equipo?', a: 'Sustituye tareas, no personas. Lo normal es que el equipo pase a hacer la parte que exige criterio y deje de hacer la mecánica.' },
      { q: '¿Y si el agente se equivoca?', a: 'Por eso todo pasa por revisión antes de tener efecto, y por eso cada agente tiene límites duros escritos. Un agente sin supervisión es un riesgo, no un producto.' },
      { q: '¿Con qué modelos trabajáis?', a: 'Con el que mejor encaje en cada tarea. La arquitectura no queda atada a un proveedor concreto.' },
    ],
  },
  {
    slug: 'revops-crm',
    nombre: 'RevOps y CRM',
    pilar: 'Operar',
    h1: 'Que tu CRM deje de ser una hoja de cálculo cara',
    metaTitle: 'RevOps y consultoría de CRM para B2B | Scale It',
    metaDescription:
      'Montamos el CRM, el scoring, la atribución y los paneles para que el pipeline sea predecible. HubSpot, Pipedrive y GoHighLevel.',
    entradilla:
      'Si tu previsión de ventas sale de una hoja aparte que actualiza alguien los viernes, no tenés un problema de CRM: tenés un problema de operación.',
    problema: {
      titulo: 'Datos que nadie se cree',
      texto:
        'Campos a medio rellenar, oportunidades duplicadas, etapas que significan cosas distintas según quién las mueva. Cuando los datos no se creen, se decide por intuición, y entonces da igual lo que costó la herramienta.',
    },
    incluye: [
      { titulo: 'Diseño del pipeline', texto: 'Etapas con criterios de entrada y salida que no admitan interpretación.' },
      { titulo: 'Implantación del CRM', texto: 'Configuración, propiedades, automatizaciones y limpieza de lo que ya hay.' },
      { titulo: 'Scoring', texto: 'Priorización por encaje y por señal, no por quién rellenó un formulario primero.' },
      { titulo: 'Atribución', texto: 'De dónde viene lo que se cierra, con seguimiento en servidor cuando hace falta.' },
      { titulo: 'Paneles', texto: 'Los números que se miran en el comité, actualizados solos.' },
      { titulo: 'Higiene continua', texto: 'Agentes que detectan duplicados, campos vacíos y oportunidades paradas.' },
    ],
    entregables: [
      'CRM configurado y migrado',
      'Pipeline documentado con criterios por etapa',
      'Modelo de scoring en funcionamiento',
      'Paneles de pipeline, conversión y atribución',
      'Rutinas automáticas de limpieza de datos',
    ],
    paraQuien:
      'Equipos comerciales de tres o más personas, o empresas donde el fundador ya no puede llevar el pipeline de cabeza.',
    faq: [
      { q: '¿Con qué CRM trabajáis?', a: 'Sobre todo HubSpot, Pipedrive y GoHighLevel. Si ya tenés uno, lo normal es aprovecharlo antes que migrar.' },
      { q: '¿Hay que migrar de herramienta?', a: 'Casi nunca. Migrar es caro y arriesgado; primero exprimimos lo que ya pagás.' },
    ],
  },
  {
    slug: 'paid',
    nombre: 'Paid: Google, Meta y LinkedIn',
    pilar: 'Captar',
    h1: 'Campañas que se miden hasta el ingreso',
    metaTitle: 'Gestión de campañas Google, Meta y LinkedIn Ads | Scale It',
    metaDescription:
      'Campañas de captación B2B en Google, Meta y LinkedIn con medición hasta el pipeline cerrado, no hasta el clic.',
    entradilla:
      'El problema de la mayoría de las cuentas no es la puja. Es que nadie sabe qué campaña trajo el contrato que se firmó en marzo.',
    problema: {
      titulo: 'Optimizar hacia la métrica equivocada',
      texto:
        'Se optimiza a coste por lead porque es lo que la plataforma sabe medir. Se bajan los costes, entran más formularios y se cierra menos. Sin conectar el gasto con lo que de verdad se cobra, la optimización va en dirección contraria.',
    },
    incluye: [
      { titulo: 'Auditoría de cuentas', texto: 'Estructura, solapamientos, desperdicio y seguimiento roto.' },
      { titulo: 'Medición primero', texto: 'Conversiones mejoradas y envío desde servidor antes de tocar una puja.' },
      { titulo: 'Estructura', texto: 'Campañas por intención y por etapa, no por lo que cabía en la plantilla.' },
      { titulo: 'Creatividades', texto: 'Producción y variantes con agentes, revisadas antes de publicar.' },
      { titulo: 'Optimización', texto: 'Hacia oportunidades e ingreso, con los datos del CRM de vuelta en la plataforma.' },
    ],
    entregables: [
      'Auditoría con desperdicio cuantificado',
      'Seguimiento de conversiones en servidor',
      'Campañas reestructuradas y activas',
      'Biblioteca de creatividades con variantes',
      'Panel de gasto contra pipeline generado',
    ],
    paraQuien:
      'Empresas que ya invierten al menos 3.000 € al mes en medios, o que están a punto de empezar y quieren no quemar los tres primeros meses aprendiendo.',
    faq: [
      { q: '¿Cobráis un porcentaje de la inversión?', a: 'No. Tarifa fija, para que nuestro incentivo no sea que gastes más.' },
      { q: '¿Inversión mínima?', a: 'Por debajo de 3.000 € al mes no hay suficientes datos para optimizar, y te saldría más rentable poner ese dinero en SEO.' },
    ],
  },
  {
    slug: 'influencers',
    nombre: 'Influencers y creadores',
    pilar: 'Captar',
    h1: 'Creadores que venden, no que hacen bulto',
    metaTitle: 'Campañas con influencers y creadores B2B | Scale It',
    metaDescription:
      'Selección, negociación y medición de campañas con creadores. Con criterios de encaje y seguimiento hasta la conversión.',
    entradilla:
      'El seguimiento importa mucho menos que la audiencia. Un creador de 8.000 seguidores del sector correcto vende más que uno de 300.000 que no.',
    problema: {
      titulo: 'Se elige por alcance y se paga por aire',
      texto:
        'Se contrata mirando seguidores, se acuerda un post y se mide en impresiones. Después nadie sabe si entró un solo cliente. En B2B eso es tirar el dinero con más pasos.',
    },
    incluye: [
      { titulo: 'Búsqueda y criba', texto: 'Encaje con el ICP, calidad de la audiencia y trabajos anteriores con competidores.' },
      { titulo: 'Auditoría del creador', texto: 'Comentarios, engagement real y coherencia con la marca antes de pagar nada.' },
      { titulo: 'Negociación', texto: 'Condiciones, derechos de uso y exclusividad por escrito.' },
      { titulo: 'Producción', texto: 'Brief, guion y revisión, respetando la voz del creador.' },
      { titulo: 'Medición', texto: 'Enlaces con seguimiento, códigos y atribución hasta la oportunidad.' },
    ],
    entregables: [
      'Lista de creadores puntuada por encaje',
      'Auditoría por creador antes de contratar',
      'Briefs y acuerdos cerrados',
      'Campaña publicada y medida',
      'Informe de coste por oportunidad, no por impresión',
    ],
    paraQuien:
      'Marcas con un producto explicable en vídeo corto y un público identificable. En B2B muy nicho suele rendir más el outbound.',
    faq: [
      { q: '¿Trabajáis con nano y micro creadores?', a: 'Casi siempre. En B2B rinden mejor y salen mucho más baratos.' },
      { q: '¿Garantizáis resultados?', a: 'No, y desconfiá de quien lo haga. Garantizamos criterio de selección, medición honesta y que cortamos lo que no funciona.' },
    ],
  },
];

export const getServicio = (slug: string) => servicios.find((s) => s.slug === slug);
