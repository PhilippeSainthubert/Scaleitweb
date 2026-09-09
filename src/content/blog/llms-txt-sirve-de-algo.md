---
title: "llms.txt: ¿sirve de algo en 2026? Los datos"
description: "Qué es el archivo llms.txt, quién lo respeta de verdad, qué dice Google al respecto y si merece la pena el rato que cuesta ponerlo."
pubDate: 2026-09-09
author: "Philippe Saint-Hubert"
cluster: "seo"
tags: ["GEO", "AEO", "llms.txt", "SEO técnico"]
---

Respuesta corta: para visibilidad en buscadores con IA, hoy hace poco o nada. Para documentación técnica que van a leer asistentes de código, sí tiene sentido. Y como cuesta veinte minutos ponerlo, tampoco vamos a hacer una cruzada en contra.

Lo que no vamos a hacer es venderte que es un factor de posicionamiento, porque no lo es.

## Qué es

Un archivo de texto en la raíz de tu dominio, en `/llms.txt`, con un índice en Markdown de tus páginas importantes y una descripción breve de cada una. La idea, propuesta en 2024, era darle a un modelo una versión limpia y jerarquizada de tu sitio, evitándole tener que interpretar HTML lleno de menús y banners.

Es una buena idea. La pregunta es quién la ha adoptado.

## Quién lo respeta de verdad

Aquí es donde la conversación se separa del argumentario comercial.

**Anthropic** ha confirmado públicamente que Claude respeta las directivas de `llms.txt` en flujos de recuperación de contenido.

**Perplexity** también ha confirmado que lo recupera y lo usa para priorizar qué páginas selecciona.

**Google** es explícito en la dirección contraria: en su documentación sobre funciones de IA indica que **no hace falta `llms.txt`** para AI Overviews, AI Mode ni sus demás funciones generativas.

**OpenAI, Meta y Mistral** no se han comprometido públicamente a leerlo ni a actuar sobre él en producción.

Y luego está el dato que más ordena el debate. Análisis de tráfico de bots publicados en 2026 encuentran que la proporción de visitas de rastreadores de IA que llegan a pedir el archivo es minúscula, del orden de una de cada mil. No es que lo lean y lo ignoren: es que en la mayoría de los casos ni lo piden.

## Entonces, ¿lo pongo o no?

**Ponlo si** tienes documentación técnica o de producto que quieres que asistentes de código y agentes consuman bien. Ahí es donde el formato demuestra su valor real: sirve de índice para que la herramienta vaya directa a la página correcta sin gastar contexto.

**Ponlo también si** tienes veinte minutos y te da tranquilidad. No hace daño, y si la adopción crece estarás listo.

**No lo pongas esperando** subir en respuestas de IA. No es lo que va a mover tu visibilidad, y desde luego no antes que las cosas que sí funcionan.

**No pagues** a nadie una partida específica por "implementar llms.txt". Es un archivo de texto.

## Lo que sí mueve la aguja, por orden

Si tienes tiempo limitado, este es el orden que nosotros seguimos:

1. **Que los rastreadores de búsqueda de IA puedan entrar.** `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`. Son distintos de los de entrenamiento, y bloquearlos por error es el fallo más caro y más común.
2. **Que el contenido esté en el HTML.** Los rastreadores de IA no ejecutan JavaScript de forma fiable.
3. **Bloques que respondan solos.** Pregunta como encabezado, respuesta completa debajo.
4. **Presencia en las fuentes que el modelo ya cita.** Se averigua mirando qué cita cuando le preguntas por tu categoría.
5. **Y luego, si quieres, `llms.txt`.**

El número uno de esa lista arregla más problemas que todos los demás juntos, y es el que más gente tiene mal sin saberlo.

## Preguntas rápidas

**¿Es lo mismo que robots.txt?**
No. `robots.txt` dice quién puede entrar. `llms.txt` propone qué leer primero. Uno es un control de acceso que todo el mundo respeta; el otro es una sugerencia que casi nadie pide.

**¿Perjudica tenerlo?**
No, mientras no expongas ahí páginas que no querías enseñar. Revisa qué listas.

**¿Y llms-full.txt?**
Es la variante que incluye el contenido completo en vez del índice. Mismo diagnóstico, y además pesa mucho.

**¿Cambiará esto?**
Puede. Es un espacio que se mueve deprisa, y esta respuesta tiene fecha. Si dentro de seis meses OpenAI anuncia que lo usa, la recomendación cambia. Hoy no lo ha hecho.

## Nuestra postura

Lo ponemos porque cuesta poco, y no se lo cobramos a nadie como línea aparte. Lo que sí trabajamos en serio es la lista de cinco puntos de arriba, empezando por el acceso de los rastreadores, que es donde encontramos problemas reales en la mayoría de auditorías.

Es parte de [SEO y contenido](/servicios/seo). Si quieres saber si tu web está dejando entrar a quien debe, [media hora y te lo decimos](/#contacto).
