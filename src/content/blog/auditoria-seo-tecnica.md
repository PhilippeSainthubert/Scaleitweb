---
title: "¿Cómo hacer una auditoría SEO técnica que sirva?"
description: "El orden en que conviene revisar una web, por qué la mayoría de auditorías son listas de doscientos avisos inútiles y qué se arregla primero."
pubDate: 2026-09-14
author: "Philippe Saint-Hubert"
cluster: "seo"
tags: ["SEO", "auditoría", "técnico", "Search Console"]
---

La mayoría de auditorías que nos enseñan son la exportación de una herramienta: doscientos avisos ordenados por color, sin distinguir lo que cuesta tráfico de lo que no cambia nada. Nadie las ejecuta, y con razón.

Una auditoría útil responde tres preguntas y en este orden: **¿pueden entrar? ¿pueden entender? ¿por qué no rankeamos?**

## Fase 1: acceso

Si Google no puede llegar al contenido, lo demás sobra.

**robots.txt.** Que no esté bloqueando lo que debe indexarse. El clásico: un `Disallow: /` que sobrevivió a la salida a producción.

**Etiquetas noindex.** Búscalas en el HTML servido, no en el que ves en el navegador después de que se ejecute el JavaScript. No es lo mismo.

**Códigos de respuesta.** Que las páginas importantes devuelvan 200, y que los enlaces internos no apunten a redirecciones encadenadas.

**JavaScript.** El punto que más problemas esconde. Si el contenido se pinta en el cliente, comprueba qué se ve con el JavaScript desactivado. Y para respuestas de IA es todavía más determinante, porque [esos rastreadores no lo ejecutan de forma fiable](/blog/aparecer-en-chatgpt-b2b).

**Sitemap.** Que exista, que esté en robots.txt, que contenga las URLs canónicas y solo las indexables.

## Fase 2: comprensión

**Canónicas.** Que cada página declare una sola forma de sí misma y que coincida con la del sitemap. Un caso típico: sitemap con barra final y canónica sin ella. Dos señales contradictorias sobre la misma URL.

**Duplicados.** Con y sin www, http y https, mayúsculas, parámetros. Una sola forma canónica de cada cosa.

**Títulos y descripciones.** Únicos y descriptivos. Los duplicados en masa suelen delatar un problema de plantilla, no de redacción.

**Encabezados.** Un H1 por página y jerarquía sin saltos.

**Datos estructurados.** Que validen y que describan lo que la página realmente es.

**hreflang, si hay varios idiomas.** Es de lo que más se rompe en silencio y con consecuencias grandes.

## Fase 3: por qué no rankeamos

Aquí es donde las auditorías genéricas se quedan cortas, y donde está la respuesta casi siempre.

**Mira Search Console por consulta.** Impresiones altas con clics bajos es un problema de título y descripción, no de posición. Impresiones bajas es un problema de contenido o de autoridad, y son cosas distintas.

**Mira quién rankea.** Si las diez primeras posiciones son de un tipo de página que tú no tienes, tienes un desajuste de formato. Si son de sitios con muchísima más autoridad, tienes un problema competitivo y el ángulo tiene que ser otro.

**Mira tu propio enlazado interno.** Es lo más barato de arreglar y lo que más se ignora. Una página importante que no recibe enlaces internos con texto descriptivo está pidiendo no rankear.

**Comprueba si compites contigo mismo.** [La canibalización se confirma con datos](/blog/canibalizacion-de-keywords), no por intuición.

## Cómo se prioriza

Nuestro orden, y no es negociable:

1. **Lo que impide indexar.** Bloqueos, noindex, contenido inaccesible. Suele ser una o dos cosas y las arregla todo.
2. **Lo que confunde.** Canónicas, duplicados, redirecciones en enlaces internos.
3. **Lo que limita.** Enlazado interno, arquitectura, velocidad.
4. **Lo demás.** Los avisos de la herramienta que nadie va a notar.

Si una auditoría te da cincuenta acciones sin decirte cuáles son las tres que importan, no ha hecho el trabajo.

## Lo que no debería estar en una auditoría

Listas de avisos sin impacto estimado. Puntuaciones de velocidad sin decir qué se hace con ellas. Recomendaciones de densidad de palabras clave. Y cualquier cosa que la herramienta marque en rojo por defecto sin comprobar si en tu caso importa.

## Preguntas rápidas

**¿Cada cuánto se audita?**
Una vez al año, y siempre después de un rediseño o una migración. Ahí es cuando se rompen cosas.

**¿Herramienta de pago o no?**
Search Console es gratis y es la fuente que más importa, porque es lo que Google ve. El resto complementa.

**¿Cuánto tarda?**
Un diagnóstico serio, entre unos días y un par de semanas según el tamaño.

**¿Y si el tráfico cayó de golpe?**
Mira primero fechas: coincide con un despliegue tuyo o con una actualización de Google. Son dos investigaciones muy distintas.

## Cómo lo hacemos

Empezamos por acceso, seguimos por comprensión y acabamos por competitividad, y entregamos como mucho un puñado de acciones priorizadas por impacto. Una lista de doscientos avisos no es un entregable, es una exportación.

Es parte de [SEO y contenido](/servicios/seo). [Media hora y te decimos por dónde empezar](/#contacto).
