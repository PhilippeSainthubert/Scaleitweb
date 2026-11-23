---
title: "Agente de IA para prospección en LinkedIn: cómo montarlo"
description: "Qué piezas necesita un agente que investiga, escribe y manda en LinkedIn, los pasos para montarlo, el coste con precios de hoy y qué no hay que delegarle."
pubDate: 2026-11-23
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["agentes de IA", "LinkedIn", "prospección", "outbound", "B2B"]
---

Un agente de IA para prospección en LinkedIn hace tres cosas: encuentra cuentas que acaban de dar una señal, investiga a la persona y redacta el mensaje con esa señal dentro. Lo que no hace, y no debe hacer, es mandarlo sin que nadie lo apruebe ni contestar las respuestas que lleguen.

Montarlo tiene dos caminos: comprar la capa ya hecha (Valley, desde 500 $ al mes) o construirla con una API de LinkedIn, un modelo y un orquestador (Unipile, Claude y n8n, en torno a 200 € al mes). Abajo están las piezas, los pasos, el coste con precios sacados hoy, 23 de noviembre de 2026, de las webs oficiales, y los sitios donde esto se rompe.

## Qué trabajo hace exactamente el agente

Antes de elegir herramienta, define el trabajo con cuatro frases. Si no puedes escribirlas, no tienes un proyecto, tienes una intención.

- **Qué entra**: una lista de cuentas con una señal fechada (una vacante abierta, un cambio de puesto, interacción con un post, una ronda). No un filtro de cargo y tamaño. [La diferencia entre señal y atributo decide el resultado](/blog/lista-prospeccion-con-senales).
- **Qué decide**: si la persona encaja en el perfil, cuál de las señales usar y qué ángulo dar al primer mensaje.
- **Qué sale**: un borrador de invitación o de mensaje, más el motivo en una línea con el enlace a la señal que lo justifica.
- **Quién revisa**: una persona, en una cola, antes de cada envío. En los primeros meses, todos los mensajes.

Esa última frase es la que separa un agente de un bot de spam. Si la quitas, lo que has montado es una automatización con lenguaje natural encima, que es [otra cosa con otros riesgos](/blog/agente-o-automatizacion).

## Qué piezas necesita

Cinco capas, y conviene decidirlas en este orden.

**Capa de datos: de dónde salen las cuentas.** [Sales Navigator](https://business.linkedin.com/sales-solutions/compare-plans) es la opción nativa: 120,99 €/mes o 1.088,88 €/año en su plan Core, con 50 InMails al mes (precios de su FAQ, actualizada el 27 de septiembre de 2026). No automatiza nada, es la capa de búsqueda.

**Acceso a LinkedIn: cómo lee y cómo manda el agente.** Aquí hay dos modelos. [Unipile](https://www.unipile.com/pricing/) te da la API: [buscar](https://developer.unipile.com/docs/linkedin-search) (incluido pegar una URL de búsqueda o de lista de Sales Navigator y recibir los mismos resultados), [mandar invitación con nota](https://developer.unipile.com/docs/invite-users), [mensajear e InMail](https://developer.unipile.com/docs/send-messages), y webhooks de [mensaje recibido](https://developer.unipile.com/docs/new-messages-webhook) y de [invitación aceptada](https://developer.unipile.com/docs/detecting-accepted-invitations). [Valley](https://www.joinvalley.co/pricing) te da el producto completo: señales, investigación, redacción, cola de aprobación y bandeja unificada, con envío desde la nube.

**Modelo: quién investiga y escribe.** [Claude](https://www.anthropic.com/claude) sirve para las dos tareas. En la API, Sonnet 5.5 cuesta 2 $ por millón de tokens de entrada y 10 $ de salida, y Haiku 5.5 cuesta 0,10 $ y 0,50 $ en prompts de hasta 100.000 tokens ([precios de la documentación oficial](https://platform.claude.com/docs/en/about-claude/pricing)). Para clasificar encaje vale el modelo barato; para redactar, no.

**Datos de contacto, si vas a combinar canales.** [ContactOut](https://contactout.com/pricing) busca email y teléfono a partir del perfil. Su página de precios carga los importes por plan con JavaScript, así que lo que publica en texto es el plan gratuito (40 revelados de email y 3 de teléfono al mes, sin tarjeta, [en su página de recruiters](https://contactout.com/recruiters)) y que el plan de equipo y la API van por presupuesto. Solo lo necesitas si el agente también alimenta email, y entonces [hay que repartir el trabajo entre los dos canales](/blog/linkedin-y-email-combinados).

**Dónde corre.** Si compras Valley, en su nube, y lo manejas desde Claude por MCP. Si lo montas, en [n8n](https://n8n.io/pricing/): Starter 20 €/mes con 2.500 ejecuciones y Pro 50 €/mes con 10.000, pagando al año, más una Community Edition autoalojada en GitHub. La cuenta por ejecución importa: una ejecución es una pasada completa del flujo, independientemente de los pasos que tenga.

## Cuánto cuesta y cuánto tiempo lleva

Dos escenarios, una cuenta de LinkedIn y unos 400 prospectos al mes.

| Pieza | Comprar la capa | Montarla tú |
|---|---|---|
| Acceso y envío | Valley, 500 $/mes el primer puesto y 200 $/mes cada puesto extra, 1.000 créditos por puesto, sin prueba gratuita | Unipile, 49 €/mes hasta 10 cuentas conectadas (luego 5 €/cuenta de 11 a 50), sin coste por mensaje ni por llamada, 7 días de prueba sin tarjeta |
| Modelo | Incluido (los créditos se gastan al buscar prospectos, verificar emails y generar mensajes mejorados) | Claude por API, entre 15 y 35 $/mes con los precios de arriba |
| Orquestación | Incluida, con MCP y API sin coste extra | n8n Starter, 20 €/mes al año |
| Capa de datos | Sales Navigator Core, 120,99 €/mes | Sales Navigator Core, 120,99 €/mes |
| **Total aproximado** | **unos 600 €/mes** | **unos 210 €/mes** |

El cálculo del modelo sale de suponer unos 15.000 tokens de entrada y 1.000 de salida por prospecto investigado, al precio de Sonnet 5.5: 0,04 $ por prospecto, 16 $ con 400 al mes. Con un modelo más caro se dobla y sigue siendo la partida menor. Sobre el reparto real de un presupuesto de agente, [aquí está el desglose completo](/blog/cuanto-cuesta-un-agente-de-ia).

La diferencia de 400 € al mes compra tiempo y una cola de aprobación ya hecha. Tiene sentido si prospectas tú o un equipo pequeño; deja de tenerlo cuando la secuencia tiene que decidir cosas que ninguna herramienta de campañas sabe decidir.

En plazos, cuenta con una o dos sesiones para escribir el criterio, una tarde para conectar la cuenta y dejar un primer flujo en pie, y dos o tres semanas de uso real hasta que dejes de reescribir los borradores. El cuello de botella nunca es la parte técnica.

## Pasos para montarlo

1. **Escribe el criterio en un documento.** Perfil de cliente, las dos o tres señales que vas a usar, qué ángulo corresponde a cada señal y qué cuentas quedan excluidas (clientes, competidores, lo que ya está en el CRM). Este documento es el prompt del sistema después.
2. **Monta la fuente de cuentas.** Búsqueda guardada en Sales Navigator por señal, o señales nativas si usas Valley (contratación, cambios de puesto, interacción con publicaciones propias o de competidores). En Unipile, [`POST /api/v1/linkedin/search`](https://developer.unipile.com/docs/linkedin-search) o una URL de búsqueda pegada.
3. **Conecta la cuenta de LinkedIn.** En Unipile, una identidad conectada es una unidad de facturación y arrastra Classic, Sales Navigator y Recruiter si el usuario tiene las suscripciones. Con Valley, un puesto conecta una cuenta.
4. **Dale al agente la investigación, no el envío.** Entrada: perfil, últimas publicaciones, web de la empresa y la señal. Salida obligatoria en formato fijo: encaje sí o no, señal usada con su enlace, borrador y nivel de confianza. Regla dura en el prompt: si no encuentra una señal con fuente, devuelve «sin señal» y no escribe mensaje.
5. **Monta la cola de aprobación.** Si compras Valley, viene hecha: su MCP marca para aprobación toda acción que cambie datos y los envíos se confirman dos veces ([su documentación de MCP y API](https://www.joinvalley.co/api-and-mcp)). Si lo montas con n8n, esta es la parte que tienes que construir tú, y es la que la gente se salta.
6. **Fija el ritmo antes de encender.** La propia documentación de Unipile recomienda entre 80 y 100 invitaciones al día y unas 200 por semana en cuentas activas de pago, unos 100 perfiles consultados al día y 100 acciones al día en el resto de rutas ([límites por proveedor](https://developer.unipile.com/docs/provider-limits-and-restrictions)). Empieza en la cuarta parte y sube despacio.
7. **Registra todo en el CRM.** Invitación mandada, aceptada, mensaje, respuesta. Sin esto no vas a poder [medir si el agente te ahorra dinero](/blog/medir-retorno-agente-de-ia) ni atribuir nada a este canal.
8. **Conéctalo a tu asistente al final.** Con Valley, en Claude se añade como conector personalizado con la dirección MCP del espacio de trabajo: en Free, Pro, Max y Ultra, desde el directorio de conectores (Personalizar, Conectores), Añadir, Añadir conector personalizado; en Team y Enterprise lo añade un propietario en Ajustes de la organización, Conectores, Añadir, Personalizado ([documentación de Claude](https://claude.com/docs/connectors/custom/remote-mcp)). Es cómodo para pedir listas y leer respuestas desde el chat, no para delegar envíos.

## Dónde falla y qué no hay que delegarle

**La cuenta expuesta es la de una persona real, y el riesgo es suyo.** El acuerdo de usuario de LinkedIn prohíbe «usar bots u otros métodos automatizados no autorizados para acceder a los Servicios, añadir o descargar contactos, enviar o redirigir mensajes» y «desarrollar, soportar o usar software, dispositivos, scripts, robots o cualquier otro medio (como rastreadores, plugins y extensiones de navegador)» para extraer datos ([User Agreement, sección 8.2](https://www.linkedin.com/legal/user-agreement)). Y si te pasas de volumen, LinkedIn dice que «la cuenta puede quedar restringida temporalmente para enviar invitaciones», que la restricción «suele durar una semana» y que el soporte no puede acortarla ([LinkedIn Help](https://www.linkedin.com/help/linkedin/answer/a550555)). Ninguna herramienta te libra de esto: decide con quién y a qué ritmo asumes el riesgo.

**La investigación se inventa señales.** Es el fallo más caro, porque un mensaje con un dato falso te quema la cuenta para siempre. Se corrige obligando al agente a devolver el enlace de donde sacó la señal y descartando los borradores que no lo traigan.

**Los perfiles falsos, nunca.** El acuerdo de usuario prohíbe en su sección 8.2 crear una identidad falsa o un perfil de alguien que no seas tú ([User Agreement](https://www.linkedin.com/legal/user-agreement)).

**La bandeja de entrada no se delega.** El agente puede resumir la conversación y proponer el siguiente paso. Contestar a alguien que ya te respondió es trabajo humano: ahí es donde se gana o se pierde la reunión.

**El descarte tampoco.** Que marque y ordene, que no borre. Lo que el agente puntúa bajo se revisa en bloque una vez por semana.

**Cuándo no compensa montarlo.** Si mandas menos de unas decenas de mensajes al mes, esto lo hace una persona en veinte minutos al día. Si tu perfil de cliente no deja señales públicas, el agente investiga el vacío. Si nadie va a dedicar media hora diaria a la cola de aprobación, acabará aprobándose todo sin leer, que es el peor de los dos mundos. Y si tu mercado son treinta cuentas nombradas, escríbeles tú. [El filtro para saber qué procesos dar a un agente es este](/blog/que-procesos-dar-a-un-agente).

## Preguntas frecuentes

**¿Puedo montarlo sin programar?**
Sí, si compras la capa: Valley se maneja desde Claude por MCP y la conexión no necesita clave de API. Si vas por Unipile y n8n, no hace falta código, pero sí montar el flujo y la cola de aprobación.

**¿Qué modelo uso?**
Uno barato para clasificar encaje y uno bueno para redactar. Con los precios de hoy, el coste del modelo es la partida más pequeña del proyecto, así que no optimices ahí.

**¿Cuántos mensajes al día puede mandar?**
Menos de los que te permita la herramienta. La recomendación de Unipile es 80 a 100 invitaciones diarias en cuentas de pago; empezar por 20 y subir semana a semana es lo que evita la restricción.

**¿Qué herramienta de LinkedIn elijo si solo quiero mandar?**
Entonces no necesitas un agente, necesitas una herramienta de campañas. [Las comparamos aquí con precios de noviembre de 2026](/blog/mejores-herramientas-prospeccion-linkedin).

**¿Cómo sé si el agente está funcionando?**
Mira el porcentaje de borradores que editas antes de aprobar. Si sigue alto a las tres semanas, el criterio está mal escrito, no el modelo. Es el patrón de [por qué los agentes fallan en el mes dos](/blog/por-que-falla-tu-agente-de-ia).

## Cómo lo montamos

Primero el criterio y la señal, después la cola de aprobación, y la herramienta al final. En Scale It usamos Valley para la parte de LinkedIn, Unipile cuando la secuencia tiene que decidir algo que una herramienta de campañas no decide, ContactOut para datos de contacto y Claude como modelo.

Es trabajo de [agentes de IA](/servicios/agentes-de-ia) junto con [outbound](/servicios/outbound). [Media hora y lo vemos con tu caso](/#contacto).
