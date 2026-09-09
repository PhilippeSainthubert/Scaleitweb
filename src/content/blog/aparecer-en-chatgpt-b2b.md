---
title: "¿Cómo conseguir que ChatGPT recomiende tu empresa B2B?"
description: "Lo que de verdad determina si un modelo te nombra cuando alguien pregunta por proveedores de tu categoría, y por qué tu web es la parte fácil."
pubDate: 2026-09-09
author: "Philippe Saint-Hubert"
cluster: "seo"
tags: ["GEO", "AEO", "ChatGPT", "B2B"]
---

Cuando un comprador B2B pregunta "¿cuáles son las mejores agencias de outbound en España?", el modelo no consulta un ranking. Compone una respuesta a partir de lo que ha leído sobre ti **en sitios que no controlas**, y a veces la completa con una búsqueda en vivo.

Esa frase contiene la mala noticia y la buena. La mala: optimizar tu web no basta. La buena: la mayoría de tus competidores sigue creyendo que sí.

## Las dos formas de aparecer, que no son la misma

Conviene separarlas porque se optimizan distinto.

**Te citan.** El modelo hace una búsqueda, encuentra tu página y la enlaza como fuente. Esto depende de que tu contenido sea recuperable y responda a la pregunta de forma limpia.

**Te mencionan.** El modelo te nombra sin enlazarte, porque tu marca aparece asociada a esa categoría en lo que aprendió. Esto no depende de tu web, sino de cuánto se habla de ti en el resto de internet.

La segunda es la difícil y la que más pesa en preguntas del tipo "recomiéndame proveedores". La primera es la que puedes trabajar esta semana.

## Lo que sí controlas

**Deja entrar a los bots correctos.** Y aquí hay un lío que casi todo el mundo tiene mal. No todos los rastreadores de una misma empresa hacen lo mismo:

- Los de **búsqueda** son los que pueden citarte en una respuesta: `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`.
- Los de **entrenamiento** alimentan modelos futuros: `GPTBot`, `ClaudeBot`, `CCBot`.

Si bloqueas los primeros por miedo al entrenamiento, te has borrado de las respuestas sin ganar nada. Son controles separados y conviene tratarlos como tales.

Un matiz que se repite mal en todas partes: **`Google-Extended` no controla si apareces en Google Search ni en los AI Overviews**. Afecta al uso de tu contenido en Gemini. Bloquearlo no te saca de la búsqueda de Google, y permitirlo no te mete en AI Overviews.

**Sírvelo en HTML.** Los rastreadores de IA no ejecutan JavaScript de forma fiable. Si tu contenido se pinta en el cliente, para ellos tu página está en blanco. En una web hecha con renderizado en servidor esto ya lo tienes resuelto; en un SPA, es probablemente tu mayor problema y ni lo sabes.

**Escribe respuestas que se puedan extraer.** El formato que funciona es aburrido: la pregunta como encabezado y la respuesta completa justo debajo, en un párrafo que se sostiene solo. Si para entender ese párrafo hay que haber leído los tres anteriores, no sirve como cita.

**Pon cifras, fechas y nombres.** Un modelo que tiene que elegir entre dos fuentes que dicen lo mismo se queda con la concreta.

## Lo que no controlas y pesa más

Aquí está la parte incómoda. En categorías B2B, lo que más mueve la aguja es aparecer en los sitios donde se debate tu categoría: comparativas de terceros, hilos de comunidades, listados sectoriales, notas de prensa reales, perfiles en directorios que la gente cita.

No es una novedad conceptual. Es relaciones públicas y presencia, medido de otra manera. La diferencia es que ahora el efecto es directamente visible en la respuesta que lee tu comprador.

## La prueba de los diez prompts

Antes de contratar nada, haz esto tú mismo. Escribe las diez preguntas que haría un comprador tuyo en el momento de buscar proveedor. No "qué es el outbound", sino "qué agencia de outbound B2B contrato en España para un SaaS con ticket de 20.000 euros".

Pásalas por ChatGPT, Perplexity y Gemini. Anota tres cosas: si sales, quién sale en tu lugar, y qué fuentes cita el modelo.

Ese último dato es el mapa. Las fuentes que cita son exactamente los sitios donde necesitas estar. No hay que adivinarlo.

## Lo que no te va a funcionar

Publicar cuarenta artículos genéricos sobre tu categoría. Los modelos no premian volumen, y ese contenido ya existe cien veces.

Tampoco funciona pagar por aparecer en listados de baja calidad. Ese tipo de sitio pesa poco y cuesta dinero.

Y no esperes constancia: la misma pregunta hecha dos veces puede dar respuestas distintas. Se mide por tendencia a lo largo de semanas, no por capturas de pantalla.

## Preguntas rápidas

**¿Cuánto tarda en notarse?**
Los cambios técnicos, en semanas. La presencia en fuentes de terceros, en meses. Quien te prometa aparecer en ChatGPT en treinta días te está vendiendo humo.

**¿Sirve el SEO clásico para esto?**
Bastante, sí. Perplexity y ChatGPT buscan en la web en vivo, así que rankear sigue ayudando. [Aquí lo desarrollamos](/blog/geo-y-seo-que-cambia).

**¿Cómo sé si estoy apareciendo?**
Con seguimiento sistemático, no a mano. [Te contamos cómo se mide](/blog/medir-si-la-ia-te-cita).

**¿Y el archivo llms.txt?**
Menos de lo que te han dicho. [Los datos, aquí](/blog/llms-txt-sirve-de-algo).

## Dónde empezamos nosotros

Con la prueba de los diez prompts, porque cuesta una tarde y te dice si tienes un problema de visibilidad o uno de categoría. A partir de ahí, primero lo técnico, que es rápido y barato, y luego la presencia en las fuentes que el propio modelo te ha señalado.

Es parte de lo que hacemos en [SEO y contenido](/servicios/seo). Si quieres, [media hora y miramos qué responde la IA sobre ti](/#contacto).
