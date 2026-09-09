---
title: "¿Cuánto cuesta montar un agente de IA en una empresa?"
description: "Los tres costes de un agente, por qué el de construcción es el pequeño y qué presupuesto hace falta de verdad para que siga funcionando en el mes seis."
pubDate: 2026-09-10
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["agentes de IA", "costes", "automatización"]
---

La pregunta trae escondida una trampa, porque casi todo el mundo pregunta por el coste de construirlo y ese es el barato. Un agente que resuelve un proceso acotado se monta en semanas. Lo que cuesta dinero es que siga funcionando en el mes seis, cuando el mundo alrededor ha cambiado y él no.

Vamos a los tres costes reales.

## Coste 1: construirlo

Es el que todo el mundo cotiza y el más fácil de estimar. Depende de tres cosas: cuántos sistemas tiene que tocar, cuánta ambigüedad tiene que resolver y qué pasa si se equivoca.

Un agente que lee correos entrantes y los clasifica en cuatro categorías es un proyecto de días. Un agente que negocia una reagendación con un cliente, mirando calendario, CRM y disponibilidad de tres personas, es otra cosa completamente distinta, porque tiene que decidir.

**La variable que más mueve el precio no es la complejidad técnica, es la tolerancia al error.** Un agente que puede equivocarse una de cada veinte veces sin consecuencias es barato. Uno que toca facturación o compromisos con clientes necesita verificación, registro y vuelta atrás, y eso multiplica el trabajo.

## Coste 2: los tokens

Es el que sorprende, porque es recurrente y crece con el uso.

Un agente que procesa cien correos al día con contexto amplio puede costar unos pocos euros diarios. El mismo agente mal diseñado, metiendo el historial completo en cada llamada, puede costar diez veces eso sin dar mejor resultado.

Aquí hay una regla que ahorra mucho: **el contexto no es gratis y más contexto no es mejor contexto**. Un agente que recibe lo justo suele acertar más que uno que recibe todo, además de costar menos.

Antes de firmar nada, pide una estimación de coste por ejecución y multiplícala por tu volumen real. Si nadie te la sabe dar, es que no han pensado en ello.

## Coste 3: el mantenimiento

Este es el que hunde proyectos, y casi nunca aparece en la propuesta.

Un agente vive rodeado de cosas que cambian. Cambia el formato de un correo, cambia un campo del CRM, cambia el proveedor de una API, cambia el modelo que usas por debajo. Cada uno de esos cambios puede romperlo, y lo peor es que rara vez se rompe con un error claro: sigue funcionando y empieza a hacerlo peor.

Nuestra regla aproximada: **cuenta con un mantenimiento anual equivalente a una parte no trivial de lo que costó construirlo**. Si alguien te vende un agente sin línea de mantenimiento, te está vendiendo la mitad del proyecto.

## Lo que hace que salga caro sin necesidad

**Automatizar un proceso que nadie ha ordenado antes.** Si el proceso manual es un caos, el agente automatiza el caos. Ordena primero, que además es gratis.

**Elegir agente cuando bastaba una automatización.** Si el proceso siempre sigue los mismos pasos, no necesitas un modelo decidiendo nada. [La diferencia está aquí](/blog/agente-o-automatizacion), y confundirla es el error más caro del sector.

**Empezar por el proceso más difícil.** El primero debería ser el que te enseñe cómo trabajáis con esto, no el que más impresione.

## Cómo saber si te va a salir a cuenta

Haz esta cuenta antes de pedir presupuesto:

1. ¿Cuántas veces al mes ocurre el proceso?
2. ¿Cuántos minutos se va cada vez?
3. ¿Qué cuesta esa hora en tu empresa?

Si el resultado no llega a unos cuantos miles de euros al año, casi seguro no compensa automatizarlo con un agente, por muy bien que quede en una demo. Con volúmenes bajos, el mantenimiento se come el ahorro.

Y hay un caso donde sí compensa aunque los números no salgan: cuando el proceso es un cuello de botella que bloquea a otras personas. Ahí el valor no es el tiempo ahorrado, es el tiempo desbloqueado.

## Preguntas rápidas

**¿Sale más barato con una herramienta sin código?**
Al principio sí. A medida que crece la lógica, las herramientas visuales se vuelven difíciles de mantener. [Lo comparamos aquí](/blog/n8n-make-o-codigo).

**¿Puedo empezar pequeño?**
Es lo que recomendamos siempre. Un proceso, medido, y decidís con datos si seguir.

**¿Cuánto tarda en amortizarse?**
Si el proceso tiene volumen real, meses. Si hay que forzar la cuenta para que salga, la respuesta honesta es que no se va a amortizar.

**¿Y cómo mido el ahorro?**
[Aquí lo desarrollamos](/blog/medir-retorno-agente-de-ia), porque es donde casi todo el mundo se engaña.

## Cómo lo planteamos nosotros

Empezamos por un proceso, con el coste por ejecución medido desde el primer día y una cuenta de ahorro real, no estimada. Si a los dos meses el número no sale, se apaga y no se ha perdido gran cosa.

Es lo que hacemos en [agentes de IA](/servicios/agentes-de-ia). Si quieres saber si tu caso da los números, [media hora y lo calculamos](/#contacto).
