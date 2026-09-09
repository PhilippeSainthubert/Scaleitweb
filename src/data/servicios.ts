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
      { q: '¿Vais a quemar el dominio de nuestra empresa?', a: 'No, porque el outbound no sale de él. Se montan dominios secundarios que se calientan durante semanas antes del primer envío serio. El dominio principal se queda limpio para el correo del negocio, que es lo que no os podéis permitir perder.' },
      { q: '¿Cuántas reuniones vamos a conseguir?', a: 'No damos esa cifra antes de ver vuestro mercado, vuestro ticket y vuestra propuesta, y desconfiad de quien la dé de entrada. Lo que sí fijamos de antemano son los umbrales a los que cortamos un segmento si no responde, para que nadie siga gastando en algo que no funciona.' },
      { q: '¿Y si nuestro sector no está en LinkedIn?', a: 'Mejor para vosotros: menos competencia por la atención. En industria y servicios técnicos la lista se construye desde asociaciones sectoriales, listados de ferias y registros mercantiles, y el canal principal pasa a ser el correo y el teléfono.' },
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
      { q: '¿Sirve para aparecer en ChatGPT?', a: 'Es parte del trabajo. Requiere contenido citable, datos estructurados y permitir el acceso a los rastreadores de búsqueda con IA, que son distintos de los de entrenamiento y se autorizan por separado.' },
      { q: 'Nuestro sector no lo busca nadie en Google. ¿Sirve el SEO?', a: 'A veces es verdad y os lo diremos. Pero lo habitual es que sí se busque, solo que con otras palabras: no el nombre técnico del producto, sino el problema que resuelve. Eso sale del research, y si de verdad no hay volumen, la conversación se va a outbound.' },
      { q: '¿Hay que rehacer la web entera?', a: 'Casi nunca. La mayoría de los problemas técnicos se arreglan sobre lo que ya hay. Solo proponemos rehacer cuando la plataforma actual impide medir o indexar, y en ese caso te enseñamos por qué antes de que gastes nada.' },
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
      { q: '¿Con qué modelos trabajáis?', a: 'Con el que mejor encaje en cada tarea. La arquitectura no queda atada a un proveedor concreto, entre otras cosas porque este mercado cambia cada pocos meses.' },
      { q: '¿Nuestros datos entran a entrenar modelos?', a: 'No. Se trabaja con configuraciones que excluyen el uso de vuestros datos para entrenamiento, y cada agente accede solo a lo que necesita para su tarea, no a todo.' },
      { q: '¿Qué pasa con los agentes si dejamos de trabajar juntos?', a: 'Se quedan con vosotros, documentados y operables por vuestro equipo. Están construidos sobre vuestras cuentas y vuestras herramientas, no sobre una plataforma nuestra que se pueda apagar.' },
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
      { q: 'No tenemos CRM. ¿Nos montáis uno?', a: 'Sí. Si no tenés CRM lo elegimos juntos y lo montamos de cero: pipeline, campos, automatizaciones y la carga inicial de lo que hoy tengas en hojas de cálculo o en la cabeza de los comerciales. Y si ya tenés uno, no lo tocamos por tocarlo: lo normal es aprovecharlo.' },
      { q: '¿Y si el nuestro está hecho un desastre?', a: 'Es el caso más habitual y no hace falta migrar para arreglarlo. Se limpian duplicados, se redefinen las etapas con criterios que no admitan interpretación y se recupera lo que se pueda del histórico. Migrar de herramienta es caro y arriesgado; primero exprimimos lo que ya pagás.' },
      { q: '¿Con qué CRM trabajáis?', a: 'Sobre todo HubSpot, Pipedrive y GoHighLevel, que cubren casi todos los casos de una empresa de vuestro tamaño. Si usás otro, lo miramos: lo que importa es que tenga API para conectarle los agentes.' },
      { q: '¿Quién paga las licencias?', a: 'Vosotros, y a vuestro nombre. Es deliberado: el día que dejemos de trabajar juntos no se apaga nada ni hay que rescatar datos de ninguna cuenta nuestra.' },
      { q: '¿Cuánto se tarda en tenerlo funcionando?', a: 'Un CRM montado de cero, entre dos y tres semanas. Uno existente que hay que ordenar puede llevar más, porque limpiar datos sucios es lento y no se puede automatizar del todo sin romper cosas.' },
      { q: '¿Nos vais a obligar a cambiar la forma de vender?', a: 'No. El sistema se adapta a cómo vendéis, no al revés. Lo que sí vamos a hacer es discutir las etapas del pipeline si significan cosas distintas según quién mueva la oportunidad, porque entonces los datos no valen para decidir.' },
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
      'Empresas que ya han invertido en paid y saben que puede funcionar, pero no tienen forma de saber qué campaña trae el negocio que se cierra. También quien va a empezar y prefiere no quemar los tres primeros meses aprendiendo.',
    faq: [
      { q: '¿Cobráis un porcentaje de la inversión?', a: 'No. Tarifa fija, para que nuestro incentivo no sea que gastes más.' },
      { q: '¿Hay una inversión mínima?', a: 'No ponemos una cifra como puerta de entrada. Lo que sí te diremos en la primera llamada es si con tu presupuesto hay datos suficientes para optimizar: por debajo de cierto volumen las plataformas tardan semanas en aprender, y a veces ese dinero rinde más en SEO. Preferimos decírtelo antes que cobrarte por descubrirlo.' },
    { q: 'Ya hemos probado y no funcionó. ¿Por qué ahora sí?', a: 'Casi siempre falla lo mismo: se optimizaba a coste por lead porque es lo que la plataforma sabe medir, sin saber qué campaña traía los contratos que se firmaban. Antes de tocar una puja conectamos el gasto con el pipeline. Si después de eso el canal sigue sin rendir, te lo diremos y cortamos.' },
    { q: '¿De quién son las cuentas publicitarias?', a: 'Tuyas, siempre, a tu nombre y con nosotros como usuarios invitados. El histórico de una cuenta es un activo que vale dinero, y no se queda en la agencia cuando la relación termina.' },
    { q: '¿En qué plataformas trabajáis?', a: 'Google, Meta y LinkedIn, que es donde está el B2B español. La elección no es de catálogo: depende de si vuestro comprador busca activamente una solución como la vuestra, en cuyo caso manda Google, o si hay que interrumpirle, y entonces LinkedIn y Meta.' },
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
      { q: '¿Garantizáis resultados?', a: 'No, y desconfiad de quien lo haga. Garantizamos criterio de selección, medición honesta y que cortamos lo que no funciona en vez de dejarlo correr.' },
      { q: 'Somos B2B y esto suena a consumo. ¿Nos sirve?', a: 'Depende de si vuestro comprador consume contenido de alguien. En sectores técnicos existen referentes con audiencias pequeñas y muy cualificadas que rinden mejor que cualquier campaña. Si no los hay en el vuestro, os lo diremos y el presupuesto se va a otro canal.' },
      { q: '¿Quién se queda los derechos del contenido?', a: 'Se negocia por escrito antes de grabar nada, y es de las cosas que más se olvidan. Lo normal es acordar uso en vuestros canales y en publicidad durante un plazo concreto, porque un vídeo que funciona vale mucho más si lo podéis pagar como anuncio.' },
      { q: '¿Cómo sabemos si ha servido de algo?', a: 'Con enlaces de seguimiento, códigos propios por creador y atribución hasta la oportunidad en el CRM. Si solo se puede medir en impresiones, no aceptamos la campaña.' },
    ],
  },
];

export const getServicio = (slug: string) => servicios.find((s) => s.slug === slug);
