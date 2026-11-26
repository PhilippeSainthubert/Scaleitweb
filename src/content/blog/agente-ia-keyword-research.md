---
title: "Cómo montar un agente de IA para SEO: keyword research y briefs"
description: "Las piezas, los pasos y el coste real de un agente que hace keyword research y briefs SEO, con precios de DataForSEO, treg, Firecrawl y Claude de hoy."
pubDate: 2026-11-26
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["agentes de IA", "SEO", "keyword research", "briefs", "B2B"]
---

Un agente de IA para SEO que sirve de algo hace un trabajo acotado: coge unos temas semilla, trae volúmenes y resultados de búsqueda reales por API, agrupa las consultas por intención y devuelve un brief por cluster. Lo que no hace es decidir qué se publica, ni publicarlo.

Montarlo es más barato de lo que parece porque los datos se pagan por llamada. Con DataForSEO, treg, Firecrawl y Claude, el consumo de un mes de trabajo normal se queda en unos pocos dólares, y lo caro es el tiempo de escribir el criterio. Abajo están las piezas, los pasos, el coste con precios sacados hoy, 26 de noviembre de 2026, de las webs oficiales, y los sitios donde esto se rompe.

## Qué trabajo hace exactamente el agente

Defínelo con cuatro frases antes de elegir herramienta. Si no puedes escribirlas, lo que tienes no es un proyecto.

- **Qué entra**: entre 10 y 30 temas semilla, el dominio, el país, una frase con qué vende la empresa y a quién, y la lista de URLs que ya tienes publicadas.
- **Qué decide**: qué candidatas sobreviven al filtro, qué intención gana la primera página de cada una, en qué cluster cae cada consulta y qué tiene que responder cada sección del brief.
- **Qué sale**: un brief por cluster con la consulta principal, el tipo de página recomendado, el esquema, las preguntas frecuentes y las fuentes a citar. Más una lista aparte de lo que no pudo comprobar.
- **Quién revisa**: una persona aprueba el brief antes de que alguien lo redacte.

Esa aprobación es lo que separa un agente útil de una fábrica de contenido intercambiable. Si nadie lee los briefs, en seis meses tienes cuarenta artículos que compiten entre sí. El [filtro para saber qué procesos conviene dar a un agente](/blog/que-procesos-dar-a-un-agente) se aplica igual aquí: delega la recolección y el primer criterio, no la decisión de publicar.

## Qué piezas necesita

Cinco capas, y conviene decidirlas en este orden.

**Datos de keywords: volumen y candidatas.** Hay dos caminos y los dos los usamos. [DataForSEO](https://dataforseo.com/pricing) es pago por uso sin suscripción, con un mínimo de recarga de 50 $ ("$50 minimum top-up"), saldo que no caduca y 1 $ de crédito de prueba al registrarse. Sus dos APIs relevantes: [Keywords Data](https://dataforseo.com/apis/keyword-data-api), donde la Google Ads API cuesta 0,06 $ por tarea en Standard Queue "for 1,000 tasks with up to 1,000 keywords in each task", con respuesta de hasta 45 minutos, y 0,09 $ en Live; y [DataForSEO Labs](https://dataforseo.com/apis/dataforseo-labs-api), que da ideas y keywords relacionadas a 0,012 $ por tarea más 0,00012 $ por item, solo en modo Live. Ojo: el FAQ de esa misma página redondea a 0,01 $ y 0,0001 $, que no es lo que dice su tabla.

La alternativa es [treg](https://treg.to/pricing), un catálogo que llama a muchos proveedores con una sola clave: "A prepaid balance, metered per call at the provider's own rate, with no markup. The first $1.00 is free." Su categoría "Google Keyword Data" lista 174 herramientas "from $0.00012/call". Sirve cuando no quieres abrir cuenta en cada proveedor ni atarte a uno, porque el agente elige el endpoint por precio dentro del catálogo. Si ya tienes clave propia de un proveedor, la registras y esas llamadas "are never metered".

El Planificador de palabras clave de Google no vale como fuente del agente. Google dice que las estadísticas de volumen "are rounded", que por defecto se promedian sobre 12 meses y que necesitas completar la facturación de la cuenta para acceder a funciones básicas como obtener ideas de keywords ([About Keyword Planner forecasts](https://support.google.com/google-ads/answer/3022575)).

**Lectura de la SERP y de la competencia.** El volumen no dice si tu página puede entrar. Eso lo dice quién está rankeando. [La SERP API de DataForSEO](https://dataforseo.com/apis/serp-api) factura "each SERP with 10 search results" a 0,0006 $ en Standard Queue, 0,0012 $ en Priority y 0,002 $ en Live Mode. Para leer esas páginas, [Firecrawl](https://www.firecrawl.dev/pricing): su plan Free da "1,000 per month" créditos sin tarjeta, un scrape cuesta "1 credit" por página, el formato JSON suma "+4 credits" y un search cuesta "2 credits" por cada 10 resultados. Al presupuestar importa este detalle: "A scrape that returns no result is not charged", pero una página que devuelve 403 o 404 sí cuesta 1 crédito, porque su [documentación de facturación](https://docs.firecrawl.dev/billing) cuenta como cobrable todo lo que el destino devuelva: "This includes pages that come back with an error status such as 403 Forbidden or 404 Not Found".

**Tus propios datos.** Sin esto el agente propone temas que ya cubres. La [API de Search Console](https://developers.google.com/webmaster-tools/v1/searchanalytics/query) devuelve `clicks`, `impressions`, `ctr` y `position` por dimensiones como `query`, `page`, `country` o `device`, con un `rowLimit` de 1 a 25.000 filas y 1.000 por defecto. Desde el 21 de febrero de 2026 hay además una dimensión `brandedClassification` con valores BRANDED y NON_BRANDED. Mete en el prompt la advertencia que hace la propia documentación: la API "does not guarantee to return all data rows but rather top ones". Si el acceso lo tiene que dar un cliente, [aquí están los roles y los pasos](/blog/dar-acceso-search-console).

**Modelo: quién filtra, agrupa y escribe el brief.** Claude cubre las tres tareas, con modelos distintos. Según su [documentación de precios](https://platform.claude.com/docs/en/about-claude/pricing), Haiku 5.5 cuesta 0,10 $ por millón de tokens de entrada y 0,50 $ de salida en prompts de hasta 100.000 tokens, Sonnet 5.5 cuesta 2 $ y 10 $, y Opus 5.5 cuesta 4 $ y 20 $. Dos palancas que aquí se notan: la Batch API aplica "a 50 percent discount on both input and output tokens", y una lectura de caché cuesta 0,05x del precio base de entrada en Sonnet 5.5. El filtrado masivo va con el modelo barato y en lotes; el brief, con el bueno.

**Dónde corre.** Por MCP, si trabajas en una conversación: DataForSEO publica [servidor propio](https://dataforseo.com/model-context-protocol), con endpoint remoto en `https://mcp.dataforseo.com/v3/mcp` o en local con `npx dataforseo-mcp-server@latest` y las variables `DATAFORSEO_LOGIN` y `DATAFORSEO_PASSWORD` ([su repositorio](https://github.com/dataforseo/mcp-server-typescript)); Firecrawl tiene [el suyo](https://docs.firecrawl.dev/mcp-server) y treg expone el endpoint `https://treg.to/mcp` ([su documentación de API](https://treg.to/docs)). O desatendido, con [n8n](https://n8n.io/pricing/): Starter 20 €/mes con 2.500 ejecuciones y Pro 50 €/mes con 10.000, pagando al año, más una Community Edition autoalojada en GitHub. Si prefieres que la propia API de Claude llame a esos servidores sin cliente MCP aparte, existe el [MCP connector](https://platform.claude.com/docs/en/agents-and-tools/mcp-connector), en beta, que solo soporta llamadas a herramientas y no admite servidores locales por STDIO.

## Pasos para montarlo

1. **Escribe el criterio antes que nada.** Qué consultas acercan a una compra de lo que vendes, qué tipos de página tienes, qué temas están reservados y cuál es el umbral para descartar una candidata. Este documento es el prompt del sistema después. Nosotros lo tenemos escrito como skill: [el brief-seo-b2b está publicado entero](/blog/skill-seo-para-ia) y se puede usar tal cual.
2. **Conecta la capa de datos y mídela antes de automatizar.** Pide ideas para dos semillas y mira en el panel qué devuelve y cuánto ha costado. Hasta que no veas el coste real de una pasada, cualquier presupuesto es inventado.
3. **Define el filtro con reglas duras, no con criterio del modelo.** Volumen mínimo, descartar monopalabra, descartar lo que no encaja con la intención, descartar lo que ya cubre una URL propia. El modelo aplica reglas; no las decide.
4. **Añade la pasada de SERP sobre las supervivientes.** Una llamada de SERP por candidata y el scrape de los tres o cuatro primeros resultados. De ahí sale lo único que decide si la pieza tiene opciones: qué tipo de página está ganando.
5. **Agrupa por intención, no por parecido de palabras.** Dos consultas van al mismo cluster si la primera página se las queda el mismo tipo de contenido. Sin eso te montas [canibalización](/blog/canibalizacion-de-keywords) desde el primer día, y el [papel de cada pieza dentro del cluster](/blog/clusters-de-contenido-b2b) se decide aquí, no al redactar.
6. **Obliga a un formato de salida fijo con fuentes.** Cada brief devuelve el tipo de página, el esquema, las preguntas y la URL de donde salió cada dato. Regla dura en el prompt: si no hay dato de la herramienta, no hay número, y eso va a una sección de pendiente de verificar.
7. **Monta la cola de aprobación.** Los briefs caen en un sitio donde una persona los lee y marca sí o no. Con n8n esta parte la construyes tú, y es la que todo el mundo se salta.
8. **Cierra el bucle con Search Console.** A los dos meses, cruza qué briefs se publicaron con qué impresiones trajeron. Sin eso no puedes [medir si el agente te ahorra dinero](/blog/medir-retorno-agente-de-ia) ni corregir el filtro.

## Cuánto cuesta y cuánto tiempo lleva

Un mes de trabajo normal: 20 semillas, unas 2.000 candidatas, 60 SERPs analizadas y 8 briefs.

| Pieza | Montarlo tú | Comprar la capa |
|---|---|---|
| Ideas de keywords | DataForSEO Labs, 0,012 $/tarea + 0,00012 $/item | Incluido |
| Volumen | Google Ads API Standard, 0,06 $ por tarea de hasta 1.000 keywords | Incluido |
| SERP | 0,0006 $ por SERP de 10 resultados en Standard Queue | Incluido |
| Lectura de páginas | Firecrawl Free, 1.000 créditos/mes, 1 crédito por página | Incluido |
| Modelo | Claude por API, unos 1,30 $/mes | Créditos incluidos, uso extra "billed at cost plus markup" |
| Orquestación | n8n Starter, 20 €/mes al año, o Community autoalojada | Incluida |
| **Total aproximado** | **unos 22 €/mes, de los que 20 € son n8n** | **99 $/mes de Letaido** |

La columna de la izquierda sale casi gratis en datos: con los precios de arriba, las 2.000 candidatas cuestan 0,12 $ de volumen, las 60 SERPs 0,04 $ y las ideas 0,48 $ (20 tareas a 0,012 $ más 2.000 items a 0,00012 $). El modelo supone unos 60.000 tokens de entrada y 4.000 de salida por brief al precio de Sonnet 5.5, o sea 0,16 $ por brief y 1,28 $ los ocho, más unos céntimos del filtrado de las 2.000 candidatas en lotes con Haiku 5.5. El desembolso que sí notas es el mínimo de recarga de 50 $ de DataForSEO, que no es una cuota y no caduca.

La de la derecha son herramientas reales. [Letaido](https://letaido.com), que Ahrefs presenta como "a marketing agent from Ahrefs" en [su propio blog](https://ahrefs.com/blog/agent-a-for-seo/), cuesta 99 $/mes e incluye "Native Ahrefs integration at no extra API cost", así que no hay que sumarle la suscripción. El otro camino comprado es la suscripción clásica: [Ahrefs](https://ahrefs.com/pricing) lista Lite a 119 €/mes con impuestos aparte e incluye "API and MCP access" con 200.000 unidades de API al mes, donde "the minimum cost for any request is 50 units" ([su página de API](https://ahrefs.com/seo-api)). [Semrush](https://www.semrush.com/pricing/) empieza en su plan SEO a 134 € al mes, o 112,52 € al mes pagando al año. Precios vistos desde España hoy.

Esa diferencia no compra datos, compra interfaz y criterio empaquetado. Si tu equipo ya sabe qué quiere preguntar, montarlo sale mucho más barato. Si nadie va a escribir el criterio, lo empaquetado gana. El reparto completo de un presupuesto de agente está [aquí](/blog/cuanto-cuesta-un-agente-de-ia).

En plazos: una o dos sesiones para escribir el criterio, una tarde para conectar los MCP y hacer la primera pasada a mano, y una o dos semanas hasta que los briefs salgan utilizables sin reescribirlos. Como en [el agente de prospección](/blog/agente-ia-prospeccion-linkedin), el cuello de botella no es la parte técnica.

## Dónde falla y qué no hay que delegarle

**Los volúmenes inventados.** Un modelo sin herramienta conectada da cifras con total seguridad, y esas cifras se usan después para priorizar. Si no hay dato de la API, no hay número. Y recuerda que incluso el dato bueno viene redondeado y promediado a doce meses: no sirve para decidir por diferencias de cien búsquedas.

**La intención leída sin mirar la SERP.** Es el fallo que más dinero quema, porque produce briefs correctos para artículos que no pueden entrar. Si la primera página la ganan páginas de servicio, el agente tiene que decirlo y recomendar otro tipo de página, aunque no sea lo que le pediste.

**El clustering por parecido de palabras.** Agrupar por similitud de texto junta consultas que responden cosas distintas. El criterio es el solape de URLs en los primeros resultados, y eso exige la pasada de SERP del paso 4.

**Delegarle la redacción.** Puede escribir, pero entre el brief aprobado y el texto final hace falta alguien que aporte la opinión y los datos propios de la empresa: es lo único que un competidor con las mismas herramientas no puede copiar, y es lo que [hace que una IA te cite](/blog/escribir-para-que-la-ia-te-cite).

**Delegarle la decisión de publicar.** Que proponga veinte briefs y una persona apruebe cinco.

**Cuándo no compensa montarlo.** Si publicas dos artículos al mes, esto lo hace una persona con una suscripción y una tarde. Si nadie va a leer los briefs, acabarán aprobándose todos sin leer, que es el peor de los dos mundos. Y si tu problema es técnico y no de contenido, un agente de keyword research no arregla nada: eso es [una auditoría](/blog/auditoria-seo-tecnica).

## Preguntas frecuentes

**¿Qué es un agente de IA para SEO?**
Un sistema que ejecuta un proceso SEO de varios pasos por su cuenta, llamando a herramientas de datos entre paso y paso. No es un chat con instrucciones: decide qué llamada hacer a continuación según lo que ha encontrado.

**¿Puedo montarlo sin programar?**
Sí. Con los servidores MCP de DataForSEO, treg y Firecrawl conectados a Claude trabajas desde la conversación sin escribir código. Desatendido necesitas n8n, que tampoco pide programar, pero sí montar el flujo y la cola de aprobación. La instalación de skills en Claude está [paso a paso aquí](/blog/skills-en-claude).

**¿Cuánto cuesta un agente de IA para SEO?**
El consumo de datos y modelo de un mes normal se queda en unos pocos dólares. Lo que notas es el mínimo de recarga de 50 $ en DataForSEO y, si lo quieres desatendido, los 20 €/mes de n8n. Comprado, Letaido son 99 $/mes con la integración de Ahrefs incluida, y una suscripción de Ahrefs o Semrush empieza por encima de los 110 € al mes.

**¿Sustituye a Semrush o a Ahrefs?**
Para keyword research y briefs, sí: lo que compras en esas suscripciones es acceso a los mismos tipos de datos con una interfaz encima. Para seguimiento diario de posiciones e informes para cliente, no.

**¿Puede escribir el artículo también?**
Puede, y es la parte donde el resultado se parece al de todos los demás. El agente rinde en la investigación y el brief; la opinión y los datos propios los pone una persona.

## Cómo lo montamos

Primero el criterio escrito, después la pasada de SERP, y la herramienta al final. En Scale It usamos DataForSEO y treg para los datos, Firecrawl para leer las páginas de la competencia y Claude como modelo, con el brief como entregable que se aprueba a mano.

Es trabajo de [agentes de IA](/servicios/agentes-de-ia) junto con [SEO y GEO](/servicios/seo). [Media hora y lo vemos con tu dominio](/#contacto).
