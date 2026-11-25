---
title: "Agente de IA en WhatsApp para atención al cliente: cómo montarlo"
description: "Qué piezas necesita un agente que contesta a tus clientes en WhatsApp, los pasos para montarlo, el coste con los precios de Meta de hoy y qué no hay que delegarle."
pubDate: 2026-11-24
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["agentes de IA", "WhatsApp", "atención al cliente", "n8n", "B2B"]
---

Un agente de IA en WhatsApp para atención al cliente hace una cosa: contesta en minutos las preguntas repetidas de clientes que ya te compran (estado del pedido, factura, plazo, documentación) consultando tus sistemas, y pasa a una persona todo lo demás. No negocia, no promete plazos y no cierra incidencias.

Para montarlo necesitas cuatro piezas: un número en la WhatsApp Business Platform a través de un proveedor, un orquestador, un modelo y una vía de traspaso a humano. Van entre 100 y 160 € al mes de software, más lo que cobra Meta por mensaje. Y eso último cambió el 1 de octubre de 2026: contestar a un cliente dejó de ser gratis. Abajo están las piezas, los pasos, el coste con precios sacados hoy, 24 de noviembre de 2026, de las webs oficiales, y los sitios donde esto se rompe.

## Qué trabajo hace exactamente el agente

Escribe estas cuatro frases antes de elegir herramienta. Si no sabes rellenarlas, lo que tienes es un deseo de poner IA en WhatsApp, no un proyecto.

- **Qué entra**: un mensaje de un cliente identificado por su número de teléfono, en un número de empresa al que ese cliente escribió él.
- **Qué decide**: si la pregunta está entre las que tiene documentadas, qué sistema consultar para responderla y si tiene que escalar.
- **Qué sale**: una respuesta con el dato consultado, o un traspaso a una persona con el historial del chat y lo que ya intentó resolver.
- **Quién revisa**: el equipo de soporte, en la misma bandeja. Las primeras semanas, leyendo todas las respuestas antes de que salgan.

La diferencia con un chatbot de árbol de decisión no es el lenguaje natural, es que el agente consulta sistemas y elige qué hacer. Si tu caso se resuelve con cinco botones y un enlace al área de cliente, monta los cinco botones: [esa frontera entre agente y automatización decide el presupuesto](/blog/agente-o-automatizacion).

En B2B esto rinde en cuentas con muchos pedidos pequeños y preguntas de seguimiento: distribución, logística, servicios recurrentes, SaaS con soporte de primer nivel. Rinde mal cuando cada consulta es distinta y la respuesta la tiene que dar un técnico.

## Por qué contestar en WhatsApp ya no es gratis

Esto es lo que casi nadie ha actualizado y es la partida que decide si el proyecto se paga.

Meta cobra por mensaje entregado desde el 1 de julio de 2025 y hay cinco categorías. Las tres de plantilla (marketing, utilidad, autenticación) se pueden enviar en cualquier momento. Las otras dos, servicio y Meta Business Agent, solo se pueden mandar con la ventana de 24 horas abierta. "Cuando un usuario de WhatsApp te escribe o te llama, arranca un temporizador de 24 horas llamado ventana de atención al cliente", y "las empresas solo pueden enviar mensajes que no sean de plantilla cuando esta ventana está abierta" ([documentación de precios de Meta](https://developers.facebook.com/docs/whatsapp/pricing)). El temporizador se reinicia con cada mensaje del cliente.

Los mensajes de servicio fueron gratis desde el 1 de noviembre de 2024. Dejaron de serlo: "Meta proporciona a cada número de empresa un tramo gratuito de 1.000 mensajes de servicio al mes" y "cobra a partir del mensaje de servicio 1.001 del mes, una vez agotado el tramo gratuito". Lo que no se gasta no se acumula para el mes siguiente, y si no tienes método de pago configurado Meta entrega los mensajes del tramo gratuito y deja de entregar el resto. Todo esto es efectivo desde el 1 de octubre de 2026 según la hora de tu cuenta de mensajería.

Traducido: las respuestas del agente son mensajes de servicio. Mil al mes por número te dan para unas 150 o 200 conversaciones resueltas. A partir de ahí, cada respuesta cuesta.

La tarifa de España no está en esa página. Meta tiene a España como mercado propio en el rate card, pero las cifras van en los CSV y PDF descargables, no en el texto. La referencia pública más cercana es el rate card que publica un proveedor: GoHighLevel cifra el mensaje de marketing en España en 0,0742 $ y el de utilidad en 0,0210 $, y añade un 5 % por la comisión de Stripe ([su guía de precios de WhatsApp](https://help.gohighlevel.com/support/solutions/articles/155000001428-whatsapp-pricing-and-billing-full-guide), actualizada el 4 de noviembre de 2026). Si alguien te da un precio por mensaje para España sin enseñarte el rate card de su cuenta, no te lo está sacando de la fuente.

## Qué piezas necesita

**El número oficial, a través de un proveedor.** No es la app del móvil. Necesitas una cuenta de WhatsApp Business y un número en la plataforma, y llegar ahí por tu cuenta implica portfolio de empresa en Meta, app, verificación y revisión. Las dos vías razonables: [360dialog](https://www.360dialog.com/pricing), que cobra 49 € al mes por número en su plan Regular y 99 € en Premium, con los mensajes de Meta aparte y sin recargo sobre ellos, o [Twilio](https://www.twilio.com/en-us/whatsapp/pricing), sin cuota mensual y con una comisión de 0,005 $ por mensaje, entrante o saliente, encima de la tarifa de Meta (precios de su página, "vigentes a septiembre de 2026"). Twilio sale mejor con poco volumen; 360dialog, en cuanto pasas de unos 10.000 mensajes al mes.

**El orquestador.** [n8n](https://n8n.io/pricing/) tiene el nodo WhatsApp Business Cloud, con las operaciones Send, Send Template, Send and Wait for Response y el bloque de media Upload, Download y Delete ([documentación del nodo](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/)), y el nodo WhatsApp Trigger, que escucha el evento `Messages` entre otros ([documentación del trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger/)). Starter cuesta 20 €/mes pagando al año con 2.500 ejecuciones, Pro 50 €/mes con 10.000, y hay una Community Edition autoalojada en GitHub. Ojo con la cuenta: una ejecución es una pasada completa del flujo, así que **cada mensaje entrante del cliente es una ejecución**. Una conversación de seis idas y vueltas gasta seis. Con 800 conversaciones al mes te pasas del Starter sin tocar nada raro. Si dudas entre n8n y las alternativas, [aquí está el criterio](/blog/n8n-make-o-codigo).

**El modelo.** [Claude](https://www.anthropic.com/claude) o [ChatGPT](https://chatgpt.com) por API, y el gasto es menor de lo que la gente supone. Haiku 5.5 cuesta 0,10 $ por millón de tokens de entrada y 0,50 $ de salida en prompts de hasta 100.000 tokens; Sonnet 5.5 cuesta 2 $ y 10 $ ([precios oficiales de Anthropic](https://platform.claude.com/docs/en/about-claude/pricing)). En OpenAI, gpt-5-mini está en 0,25 $ y 2 $ ([precios de la API](https://developers.openai.com/api/docs/pricing)). Usa el caché de prompt: tu base de conocimiento no cambia entre mensajes y leerla de caché cuesta la décima parte.

**Los datos y las herramientas.** Aquí está el trabajo real. El agente necesita lectura en lo que contiene la respuesta: pedidos, facturas, tickets, estado del contrato. Si eso vive en [HubSpot](https://www.hubspot.com) o [GoHighLevel](https://www.gohighlevel.com), son dos herramientas conectadas; si vive en un ERP sin API, el proyecto es el ERP, no el agente. Y necesita la base de conocimiento escrita: las 20 preguntas más repetidas con su respuesta buena. Ese documento lo hace una persona y es la mitad del valor del proyecto.

**La memoria, por cliente.** En n8n, la memoria va en un sub-nodo y la clave es el campo **Session Key**: ponle el número de teléfono del remitente y cada cliente tiene su hilo. La Simple Memory no sirve en producción si tu instancia usa queue mode, porque n8n no garantiza que el mismo worker atienda todas las llamadas; ahí toca Redis o Postgres Chat Memory ([documentación del nodo Simple Memory](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorybufferwindow/)).

**La alternativa de comprarlo hecho.** GoHighLevel lleva CRM, bandeja y automatización en el mismo sitio. Sus planes son 97 $/mes (Starter), 297 $ (Unlimited) y 497 $ (Founder), con 14 días de prueba. WhatsApp no viene en el plan: es un add-on de 10 $/mes por subcuenta más el consumo. Y la capa de IA conversacional va por el add-on AI Employee: Growth a 50 $/mes por subcuenta con 1.000 respuestas de agente al mes, Unlimited a 97 $ ([precios de sus productos de IA](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing), actualizado el 23 de noviembre de 2026). Montas menos y decides menos.

**Y la de no montar nada.** Desde el 1 de julio de 2026 Meta tiene su propia capa, Meta Business Agent, con una quinta categoría de mensaje facturada por tokens: "una tarifa global única de 2,00 $ por millón de tokens", con un consumo típico de 20.000 a 25.000 tokens por mensaje, "aproximadamente 4 o 5 céntimos de dólar por mensaje". No tiene tramo gratuito. A 6 mensajes por conversación son 0,25 $, unas cien veces lo que te costaría ese mismo tráfico con Haiku 5.5 por tu cuenta y unas cinco veces lo que costaría con Sonnet 5.5, y puede compensar si no quieres mantener nada.

## Cuánto cuesta y cuánto tiempo lleva

Un número, unas 800 conversaciones al mes, 6 mensajes del agente por conversación.

| Pieza | Montarlo con n8n | Comprarlo en GoHighLevel |
|---|---|---|
| Acceso al número | 360dialog Regular, 49 €/mes, mensajes de Meta aparte | Add-on de WhatsApp, 10 $/mes por subcuenta |
| Orquestación | n8n Pro, 50 €/mes al año (10.000 ejecuciones) | Incluida en el plan |
| Modelo | Claude Haiku 5.5, unos 2 $/mes; con Sonnet 5.5, unos 36 $ | AI Employee Growth, 50 $/mes (1.000 respuestas) |
| Plataforma y CRM | Lo que ya pagues | Starter 97 $/mes |
| Mensajes de Meta | 1.000 de servicio gratis, el resto según mercado | Igual, rebill por defecto a 1,05x |
| **Total de software** | **unos 101 €/mes** | **unos 157 $/mes** |

El cálculo del modelo sale de suponer 3.000 tokens de entrada y 150 de salida por respuesta, seis respuestas por conversación: 0,0023 $ por conversación con Haiku, 0,045 $ con Sonnet. El modelo es la partida más pequeña, así que no optimices ahí. Sobre el reparto completo de un presupuesto de agente, [aquí está el desglose](/blog/cuanto-cuesta-un-agente-de-ia).

En plazos, cuenta una semana para escribir las 20 preguntas con su respuesta, de dos a cuatro semanas de trámite con Meta entre verificación de empresa y aprobación de plantillas (no depende de ti y es lo que más se alarga), un par de días para el flujo y el traspaso, y un mes de uso real con revisión humana antes de soltarle respuestas sin leer.

## Pasos para montarlo

1. **Saca las 20 preguntas y escribe la respuesta buena.** De los últimos 200 chats o tickets. Marca cuáles se contestan con un dato de sistema y cuáles con una política. Lo que no entre en esa lista, el agente lo escala. Este documento es el prompt del sistema después.
2. **Decide qué sistema consulta cada respuesta** y comprueba que tiene API de lectura. Si el estado del pedido solo lo sabe una persona mirando una pantalla, ese caso no es del agente todavía.
3. **Consigue el número oficial.** Portfolio de empresa en Meta, app con WhatsApp, política de privacidad y términos publicados, app en modo Live, verificación de empresa. Con 360dialog o Twilio esta parte va guiada. Usa un número nuevo, no el móvil del comercial.
4. **Conecta n8n.** Credencial API key con **Access Token** y **Business Account ID** para el nodo de envío, y credencial OAuth2 con **Client ID** (el App ID) y **Client Secret** para el trigger ([documentación de credenciales](https://docs.n8n.io/integrations/builtin/credentials/whatsapp/)).
5. **Suscribe la app a tu WABA a mano.** n8n registra el webhook en tu app de Meta, pero "no suscribe tu app a tu WABA". El síntoma es demoledor: los mensajes no llegan y no aparece ninguna ejecución fallida, mientras los eventos de prueba del panel de Meta sí funcionan. Se arregla con un `POST` a `/<business-account-id>/subscribed_apps` y se comprueba con un `GET` al mismo endpoint ([pasos exactos en la documentación](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger/)). Recuerda también que WhatsApp solo permite un webhook por app, así que test y producción se pisan.
6. **Monta el agente con sus herramientas.** Nodo AI Agent con el modelo, la memoria con Session Key por teléfono y al menos una herramienta conectada: "tienes que conectar al menos un sub-nodo de herramienta a un nodo AI Agent" ([documentación del nodo AI Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)). Salida obligatoria en formato fijo: respuesta, fuente del dato y si escala. Regla dura en el prompt: si el dato no está en la consulta o en el documento, dice que lo pasa a una persona y lo pasa.
7. **Monta el traspaso antes de encender.** Palabra clave del cliente, dos intentos fallidos, cualquier mención a reclamación, baja o factura impagada, y fuera de horario. El nodo **Send and Wait for Response** sirve para parar el flujo y pedir aprobación humana antes de que el agente ejecute algo. Que el humano reciba el chat completo, no un aviso.
8. **Registra cada conversación en el CRM** con su resultado: resuelta, escalada, abandonada. Sin eso no vas a poder [medir si el agente te ahorra dinero](/blog/medir-retorno-agente-de-ia) y vas a discutir de sensaciones en la reunión del mes tres.

## Dónde falla y qué no hay que delegarle

**La ventana de 24 horas.** Si el cliente escribió hace 30 horas, el agente no puede contestarle en texto libre: necesita una plantilla aprobada, con su categoría y su precio. Los flujos que ignoran esto se quedan con respuestas sin entregar y nadie se entera.

**El tramo gratuito se agota a mitad de mes.** Mil mensajes de servicio por número son pocos en cuanto el agente funciona. Vigila el contador desde el primer día y ten método de pago configurado, porque sin él Meta deja de entregar al pasar el tramo.

**Las rutas no oficiales.** Hay APIs que conectan WhatsApp escaneando un QR del móvil, sin pasar por Meta. Nosotros usamos [Unipile](https://www.unipile.com/pricing/) para LinkedIn, email y WhatsApp a 49 € al mes hasta 10 cuentas conectadas, y es honesta sobre lo que es: "no soportamos la API oficial de WhatsApp Business de Meta por el momento" y no es un producto oficial de Meta ("independiente, sin respaldo de Meta"), porque conecta con las apps móviles de WhatsApp "aprovechando la interoperabilidad de la DMA" ([su página de API de WhatsApp](https://www.unipile.com/communication-api/messaging-api/whatsapp-api/)). Para outbound con el móvil de un comercial puede valer. Para el número de atención al cliente de tu empresa, no: estás montando tu soporte sobre un canal que puede desaparecer un martes.

**Inventarse el dato.** Un agente que improvisa un plazo de entrega te crea un problema comercial, no un ticket. Se corrige obligándole a devolver la fuente de cada dato y bloqueando la respuesta si no la trae. Es el fallo que explica [por qué los agentes se caen en el mes dos](/blog/por-que-falla-tu-agente-de-ia).

**Lo que no se delega nunca**: una reclamación, una incidencia con dinero, un cliente enfadado, cualquier compromiso de plazo o precio, y la baja de un contrato. Y no le dejes escribir en el CRM campos que luego usas para decidir: que proponga y que una persona confirme.

**Cuándo no compensa montarlo.** Si recibes menos de un par de decenas de mensajes al día, esto lo hace una persona mientras desayuna. Si tus clientes escriben por email y no por WhatsApp, el canal es el problema y abrirlo te sube el trabajo. Si no tienes API de lectura en el sistema que guarda la respuesta, el agente solo puede repetir el horario de oficina. Y si nadie va a atender la cola de escalados en minutos, el agente se convierte en un filtro que cabrea. [El filtro para saber qué procesos dar a un agente es este](/blog/que-procesos-dar-a-un-agente).

## Preguntas frecuentes

**¿Puedo usar la app de WhatsApp Business del móvil?**
No para esto. El agente necesita la WhatsApp Business Platform, que es la API, con un número registrado y plantillas aprobadas. La app no tiene webhooks ni envío programático.

**¿Cuánto me va a cobrar Meta de verdad?**
Depende del mercado de cada cliente y de cuántos mensajes de servicio pases de los 1.000 gratis por número. España es mercado propio en el rate card de Meta y las cifras van en el CSV descargable, no en la web pública. Pídele a tu proveedor el rate card antes de firmar.

**¿Hace falta que el cliente dé su consentimiento?**
Sí para que tú le escribas: "solo puedes enviar mensajes a usuarios de WhatsApp que hayan dado su consentimiento para recibirlos". Si es él quien abre el chat, abre la ventana de 24 horas y contestas en texto libre.

**¿Esto me sirve para captar clientes nuevos?**
Es otro trabajo. Un agente de atención resuelve dudas de quien ya es cliente; para entrada de leads mira [un agente que califica lo que llega](/blog/agente-para-calificar-leads), y para salir a buscar, [un agente de prospección en LinkedIn](/blog/agente-ia-prospeccion-linkedin).

**¿Cómo sé si está funcionando?**
Tres números, medidos antes y después: tiempo hasta la primera respuesta, porcentaje de conversaciones resueltas sin humano y porcentaje de escalados que llegaron con el contexto completo. Si el tercero está bajo, el agente está dando trabajo en lugar de quitarlo.

## Cómo lo montamos

Primero las 20 preguntas y la API de lectura, después el traspaso a humano, y la herramienta al final. En Scale It usamos n8n para orquestar, Claude y ChatGPT como modelos, GoHighLevel y HubSpot como CRM, y Unipile cuando el canal es el móvil de una persona y no el número de soporte de la empresa.

Es trabajo de [agentes de IA](/servicios/agentes-de-ia) junto con [RevOps](/servicios/revops-crm), porque la mitad del proyecto es el acceso a los datos. [Media hora y lo vemos con tu caso](/#contacto).
