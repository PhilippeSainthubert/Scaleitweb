---
title: "n8n, Make o código: qué elegir para automatizar"
description: "Cuándo compensa una herramienta visual, cuándo hay que bajar a código y por qué la respuesta cambia según quién vaya a mantener aquello dentro de un año."
pubDate: 2026-09-10
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["automatización", "n8n", "Make", "herramientas"]
---

La pregunta suele plantearse como técnica y no lo es. Las tres opciones funcionan. Lo que cambia es quién puede mantener aquello dentro de un año, y esa respuesta depende de tu equipo, no de la herramienta.

## Lo que cada una hace bien

**Make** es la más accesible. Interfaz visual, muchísimas integraciones listas, y alguien de marketing sin perfil técnico puede montar cosas útiles en una tarde. Su límite aparece cuando la lógica crece: los escenarios grandes se vuelven difíciles de leer y de depurar.

**n8n** está en medio. También es visual, pero permite meter código donde haga falta y se puede alojar en tu propia infraestructura, lo que importa si manejas datos sensibles o si el volumen hace que el precio por operación empiece a doler. Pide algo más de perfil técnico.

**Código** es lo que aguanta cualquier complejidad y lo que puedes versionar, probar y revisar como cualquier otro software. A cambio, necesitas a alguien que lo mantenga, y si esa persona se va tienes un problema que las herramientas visuales no te dan.

## La pregunta que decide

No es "¿qué es mejor?", es **"¿quién va a tocar esto cuando se rompa un martes a las nueve de la mañana?"**.

Si la respuesta es alguien de operaciones o de marketing sin perfil técnico, elige visual aunque sea menos elegante. Una automatización mediocre que su dueño puede arreglar vale más que una excelente que solo entiende un proveedor externo.

Si la respuesta es tu equipo de producto, código, sin dudarlo.

Si la respuesta es "no lo sé", ese es el problema a resolver antes que la herramienta.

## Cuándo migrar de visual a código

Hay señales bastante claras de que te has quedado corto:

- El escenario tiene tantos nodos que nadie lo entiende de un vistazo.
- Hay lógica duplicada en cinco sitios y cambiarla implica tocar los cinco.
- No puedes probar un cambio sin ejecutarlo en producción.
- La factura por operaciones ha dejado de ser anecdótica.
- Necesitas control de versiones de verdad, porque alguien rompió algo y no hay forma de saber qué cambió.

Ese último punto es el que suele forzar la decisión. Las herramientas visuales han mejorado en esto, pero sigue sin parecerse a lo que da un repositorio.

## El patrón que solemos recomendar

Un enfoque mixto, que en la práctica es el que mejor envejece:

**La orquestación en visual**, porque es la parte que cambia a menudo y la que alguien de negocio quiere poder tocar: qué dispara qué, a quién se avisa, dónde se escribe el resultado.

**La lógica que decide, en código**, expuesta como un servicio que la herramienta visual llama. Ahí van las reglas de negocio de verdad, las que quieres poder probar y versionar.

Así la parte que cambia deprisa la toca cualquiera, y la parte delicada tiene las garantías de un desarrollo normal.

## Lo que no debería decidir tu elección

**Que la herramienta tenga integración con la app de moda.** Casi todo tiene API, y lo que hoy no está integrado se integra con una llamada.

**Las comparativas de precio por operación sin tu volumen delante.** El precio solo se puede comparar con tu número real de ejecuciones. Cambia mucho.

**Que se llame agente.** Muchas de estas plataformas venden agentes y lo que ejecutan son flujos deterministas. [La diferencia importa y no es semántica](/blog/agente-o-automatizacion).

## Preguntas rápidas

**¿Y las herramientas nativas del CRM?**
Si tu automatización vive entera dentro del CRM, úsalas. Son más simples y no añaden otra pieza. El problema aparece cuando hay que salir a otros sistemas.

**¿Alojarlo yo o en la nube del proveedor?**
Alojado por ti si hay datos sensibles o si el volumen es alto. En su nube si valoras no tener que mantener nada.

**¿Cuánto cuesta mantener esto?**
Más de lo que te dicen. [Los tres costes, aquí](/blog/cuanto-cuesta-un-agente-de-ia).

**¿Puedo empezar en Make y migrar después?**
Sí, y es un camino razonable. Lo que se migra mal es la lógica que nunca se documentó.

## Nuestra postura

Empezamos por lo más simple que resuelva el caso, casi siempre visual, y bajamos a código solo cuando aparece alguna de las señales de arriba. Montar en código desde el principio algo que iba a ser un flujo de seis pasos es una forma cara de tener razón.

Es parte de [agentes de IA](/servicios/agentes-de-ia). Si no sabes por dónde empezar, [media hora y te decimos qué encaja con tu equipo](/#contacto).
