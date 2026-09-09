---
title: "¿Qué KPIs de ventas B2B importan de verdad?"
description: "Las métricas que predicen ingresos frente a las que solo describen actividad, y por qué un panel con veinte números no sirve para decidir nada."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "revops"
tags: ["RevOps", "métricas", "ventas", "B2B"]
---

Un panel con veinte indicadores no es medición, es decoración. Nadie decide nada mirándolo, y su función real suele ser tranquilizar en las reuniones de seguimiento.

Las métricas útiles son pocas y cumplen dos condiciones: **alguien puede actuar sobre ellas** y **predicen algo**, no solo describen lo que ya pasó.

## Las que predicen

**Oportunidades cualificadas creadas.** El primer punto donde ventas ha dicho "esto es real". Es la métrica adelantada por excelencia: lo que entra aquí este mes es lo que cierra dentro de un ciclo. Si cae, sabes con meses de antelación que vas a tener un problema.

**Tasa de paso entre etapas.** No la tasa de cierre global, que mezcla todo. El paso de cada etapa a la siguiente. Ahí es donde se ve exactamente dónde se atasca el embudo, y suele haber una etapa concreta que se come todo.

**Duración del ciclo por origen.** Dos canales con la misma tasa de cierre pueden tener ciclos muy distintos, y eso cambia el flujo de caja y el coste real de cada uno.

**Valor medio de contrato por origen.** El dato que hace que [el coste por lead sea tan engañoso](/blog/cpl-enganoso-ciclos-largos): dos canales igual de baratos pueden traer negocios de tamaño muy distinto.

**Tiempo hasta el primer contacto.** De las pocas variables con efecto grande, demostrado y arreglable esta semana. Si tu mediana pasa de una hora en horario laboral, ahí tienes trabajo.

## Las que solo describen

No son inútiles, pero no deberían gobernar decisiones:

**Correos enviados, llamadas hechas, actividad en general.** Miden esfuerzo. Un equipo puede subirlas mucho sin mover ingresos, y si las conviertes en objetivo, es exactamente lo que va a pasar.

**Leads totales.** Sin cualificar no dice nada. Es la métrica más fácil de inflar.

**Tasa de apertura.** Cada vez menos fiable por la protección de privacidad de algunos clientes de correo.

**Ingresos del mes.** Es el resultado, no una palanca. Para cuando lo ves, se decidió hace meses.

## El problema del retardo

En ciclos largos, casi todas las métricas de resultado llegan tarde para servir de algo.

Por eso la lectura correcta es **por cohortes**: agrupas por el mes en que entraron los leads y sigues a ese grupo. Comparar el gasto de este mes con los cierres de este mes no significa nada, porque hablan de cosas distintas.

Es menos cómodo que un número grande en un panel y es la única forma honesta de leerlo.

## Cuántas métricas

Nuestra recomendación: **cinco, y que quepan en una pantalla**. Si hay que desplazarse, nadie las mira.

Y cada una con un dueño. Una métrica sin responsable no la mejora nadie.

## La regla de los datos que no existen

Antes de definir el panel, comprueba si el dato se puede capturar de verdad.

Medir el valor de contrato por origen requiere que el origen viaje desde el formulario hasta la oportunidad sin sobrescribirse. [En la mayoría de CRMs eso está roto](/blog/senales-crm-frena-ventas), y entonces la métrica que has definido es una fantasía.

Primero la plomería, después el panel. Al revés se hace siempre y no funciona.

## Preguntas rápidas

**¿Cada cuánto se revisan?**
Las adelantadas, semanal. Las de resultado, mensual. Las cohortes, trimestral.

**¿Sirven las métricas de la herramienta por defecto?**
Como punto de partida. Casi ninguna está definida como tu negocio la necesita.

**¿Y si ventas y marketing miden distinto?**
Ese es el problema a resolver antes de mirar ningún número.

**¿Cuántos datos históricos necesito?**
Al menos un ciclo de venta completo para que las cohortes digan algo.

## Cómo lo hacemos

Empezamos por comprobar qué se puede medir de verdad con lo que hay montado, que casi siempre es menos de lo que el cliente cree. Luego cinco métricas con dueño, y la lectura por cohortes.

Es lo que hacemos en [RevOps y CRM](/servicios/revops-crm). [Media hora y miramos qué estás midiendo](/#contacto).
