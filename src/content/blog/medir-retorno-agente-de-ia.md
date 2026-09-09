---
title: "¿Cómo medir si un agente de IA te ahorra dinero?"
description: "La cuenta honesta del retorno de una automatización con IA, incluyendo los costes que nadie mete en la hoja y el error de contar horas que no existían."
pubDate: 2026-09-10
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["agentes de IA", "métricas", "ROI"]
---

Casi todas las cuentas de retorno que nos enseñan tienen el mismo defecto: cuentan el ahorro completo y solo una parte del coste. Con esa aritmética, cualquier proyecto sale bien.

Esta es la versión honesta, que es menos entusiasta y sirve para decidir.

## El lado del ahorro

**Horas liberadas.** Ejecuciones al mes por minutos ahorrados en cada una, por el coste real de esa hora. Y aquí va la primera trampa: solo cuenta si esas horas se dedican a otra cosa que produce valor. Si la persona sigue igual de ocupada y nadie nota nada, el ahorro es teórico.

La pregunta de control es incómoda y hay que hacérsela: **¿podrías tener una persona menos, o esa persona está haciendo ahora algo que antes no se hacía?** Si la respuesta a ambas es no, no hay ahorro, hay comodidad. Que también vale, pero no es lo mismo y no se defiende igual ante dirección.

**Velocidad convertida en ingresos.** Este suele ser mayor que el anterior y casi nadie lo mide. Si responder en minutos en vez de en un día mejora tu tasa de conversión, ese delta es dinero. Se calcula comparando cohortes de antes y después.

**Errores evitados.** Solo si tienes el dato de antes. Si no lo tenías medido, no lo inventes.

## El lado del coste

**Construcción.** Lo que pagaste, incluyendo las horas de tu propia gente explicando el proceso, que suelen ser bastantes y nunca se cuentan.

**Ejecución.** Coste por ejecución por volumen. Míralo mensualmente, porque escala con el uso.

**Mantenimiento.** El que se olvida. Revisiones de contexto, arreglos cuando algo alrededor cambia, y el tiempo de quien supervisa. [Es la partida que hunde los proyectos](/blog/por-que-falla-tu-agente-de-ia).

**Supervisión.** Si una persona revisa lo que el agente produce, esa revisión es un coste recurrente y hay que restarla del ahorro. Un agente que ahorra treinta minutos y exige diez de revisión ahorra veinte, no treinta.

## La métrica que de verdad vigila la salud

Más allá de la cuenta anual, hay un número que conviene mirar cada mes: **el porcentaje de ejecuciones que un humano tiene que corregir**.

Si sube, tu ahorro está bajando aunque el agente siga ejecutando lo mismo. Es el indicador adelantado de que algo se está degradando, y aparece semanas antes de que nadie se queje.

## Cómo montar la medición sin complicarte

1. **Antes de automatizar, mide el proceso manual.** Cuántas veces, cuántos minutos, cuántos errores. Dos semanas bastan. Si te saltas esto, no vas a poder demostrar nada después y lo vas a lamentar.
2. **Registra cada ejecución** con su coste y si hubo corrección humana.
3. **Compara cohortes**, no medias globales. El mes de antes contra el mes de después, con el mismo tipo de casos.
4. **Revisa a los tres meses**, no a la semana. Al principio todo funciona porque todo el mundo está mirando.

El punto uno es el que casi nadie hace y el que decide si la conversación posterior es un dato o una opinión.

## Señales de que no está saliendo a cuenta

- El número de correcciones no baja con el tiempo.
- Nadie sabría decir qué pasaría si lo apagaras mañana.
- El coste de ejecución crece más deprisa que el volumen.
- La persona que lo supervisa dedica más tiempo del que el proceso costaba antes.

Ese último caso es más común de lo que parece, y suele ocurrir cuando se automatizó un proceso que no tenía volumen suficiente. [El filtro para evitarlo está aquí](/blog/que-procesos-dar-a-un-agente).

## Preguntas rápidas

**¿Cuánto tarda en verse?**
Si el proceso tiene volumen, un par de meses. Si hay que esperar un año para que salga, no sale.

**¿Y si el valor es cualitativo?**
Existe y es legítimo, sobre todo cuando desbloquea a un equipo. Pero decláralo como tal en vez de disfrazarlo de ahorro con una hoja de cálculo optimista.

**¿Merece la pena medir procesos pequeños?**
Medir cuesta poco. Lo caro es descubrir en el mes ocho que llevabas medio año pagando algo que no aportaba.

**¿Cuánto debería costar esto de entrada?**
[Los tres costes reales, aquí](/blog/cuanto-cuesta-un-agente-de-ia).

## Cómo lo hacemos

Medimos el proceso manual antes de tocarlo, aunque retrase el proyecto dos semanas. Es lo que permite que a los tres meses la conversación sea sobre números y no sobre sensaciones, y también lo que nos permite recomendar apagar algo cuando no sale.

Va dentro de [agentes de IA](/servicios/agentes-de-ia) y se apoya en [RevOps y datos](/servicios/revops-crm). [Media hora y lo calculamos](/#contacto).
