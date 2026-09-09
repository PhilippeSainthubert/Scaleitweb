---
title: "Qué procesos conviene dar a un agente de IA, y cuáles no"
description: "Un filtro de cuatro preguntas para decidir qué automatizar con un agente, qué dejar en una automatización simple y qué no tocar todavía."
pubDate: 2026-09-10
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["agentes de IA", "procesos", "automatización"]
---

La mayoría de proyectos de agentes que fracasan no fracasan por la tecnología. Fracasan porque eligieron mal el proceso.

Se elige el que más duele, o el que más impresiona en una demo, y resulta que era justo el que peor encaja. Este es el filtro que usamos antes de tocar nada.

## Pregunta 1: ¿el proceso tiene variabilidad real?

Si el proceso sigue siempre los mismos pasos, no necesitas un agente. Necesitas una automatización, que es más barata, más predecible y no se equivoca de forma creativa.

Si en cambio cada caso llega distinto, y una persona tiene que leer, interpretar y decidir qué hacer, ahí sí hay materia.

**Ejemplo que sí**: clasificar y responder correos entrantes de soporte, donde cada uno viene escrito de otra manera.
**Ejemplo que no**: mover un lead de una etapa a otra cuando se firma. Eso es una regla.

Esta pregunta descarta más de la mitad de los casos, y descartar ahí te ahorra mucho dinero.

## Pregunta 2: ¿el error es tolerable y detectable?

Dos condiciones, y hacen falta las dos.

**Tolerable**: si se equivoca, ¿cuánto duele? Clasificar mal un correo se arregla solo. Mandar una propuesta con el precio equivocado, no.

**Detectable**: y esta es la que se olvida. Un agente que se equivoca y avisa es manejable. Un agente que se equivoca en silencio, y produce algo que parece correcto, es peligroso justamente porque nadie lo revisa.

Si el proceso falla de forma silenciosa y cara, o lo dejas fuera, o le pones una persona revisando antes de que salga.

## Pregunta 3: ¿existe el contexto que necesita?

Un agente necesita información para decidir. Si esa información vive en la cabeza de alguien, o en un hilo de correo de hace dos años, el agente no la tiene y va a inventarse la decisión.

Antes de automatizar, pregunta: cuando una persona resuelve esto, ¿qué mira? Si la respuesta incluye "depende, se lo pregunto a Marta", entonces el contexto no está escrito y el proyecto empieza por escribirlo, no por montar el agente.

Este punto es el que más retrasa proyectos y el que menos se anticipa.

## Pregunta 4: ¿hay volumen suficiente?

Un proceso que ocurre tres veces al mes no justifica el mantenimiento. Da igual lo bien que quede.

El punto en el que empieza a compensar depende del tiempo que consume cada ejecución, pero la intuición es sencilla: si nadie en tu empresa nota que ese proceso existe, automatizarlo no va a cambiar nada.

## Los candidatos que suelen funcionar

Por si sirve de atajo, estos son los que en B2B salen bien con más frecuencia:

- **Investigación previa a una reunión.** Reunir lo público de una empresa y su persona de contacto antes de una llamada. Volumen alto, error barato, contexto disponible.
- **Clasificación y enrutado de entrantes.** Correos, formularios, tickets.
- **Preparación de listas de prospección.** Verificar señales, descartar los que no encajan.
- **Resúmenes de llamadas con extracción de siguientes pasos.**
- **Primer borrador de respuestas repetitivas**, con revisión humana antes de enviar.

Fíjate en el patrón: todos son procesos donde el agente **prepara** y una persona **decide**. Ahí es donde la relación calidad-riesgo es mejor.

## Los que casi nunca deberías dar todavía

- **Cualquier cosa que comunique con un cliente sin revisión.** El ahorro no compensa el día que sale mal.
- **Decisiones sobre dinero.** Descuentos, presupuestos, facturación.
- **Procesos que nadie ha documentado.** Automatizas la confusión.
- **Lo que exige criterio de tu negocio que solo tienen dos personas.** Ese criterio no está escrito y el agente no lo va a adivinar.

## Preguntas rápidas

**¿Por cuál empiezo?**
Por uno con volumen alto y error barato, aunque sea poco vistoso. El primer proyecto sirve para aprender a operar esto, no para lucirse.

**¿Y si quiero automatizar la parte comercial?**
Empieza por la preparación, no por el contacto. La investigación previa y la construcción de listas rinden mucho y no arriesgan la relación. [Lo vemos en outbound](/blog/lista-prospeccion-con-senales).

**¿Cuántos procesos a la vez?**
Uno. Siempre uno hasta que esté funcionando de verdad.

**¿Esto no es lo mismo que automatizar con reglas?**
No, y la diferencia decide el presupuesto. [Aquí está explicada](/blog/agente-o-automatizacion).

## Cómo lo hacemos

Pasamos tus procesos por estas cuatro preguntas antes de proponer nada. En la mayoría de conversaciones, el proceso que el cliente traía en mente no es el que acabamos automatizando, y esa conversación vale más que la propuesta.

Es parte de [agentes de IA](/servicios/agentes-de-ia). Si tienes un proceso en la cabeza, [media hora y lo pasamos por el filtro](/#contacto).
