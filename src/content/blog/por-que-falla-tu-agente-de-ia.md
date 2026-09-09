---
title: "Por qué tu agente de IA falla en el mes dos"
description: "Los agentes rara vez se rompen con un error claro. Se degradan en silencio, y estas son las cuatro causas que vemos una y otra vez."
pubDate: 2026-09-10
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["agentes de IA", "mantenimiento", "contexto"]
---

Un agente casi nunca se cae. Eso sería fácil, porque te enterarías. Lo que hace es empeorar poco a poco, sin avisar, hasta que alguien nota que lleva semanas haciendo mal una parte del trabajo y nadie lo había mirado.

Estas son las cuatro causas, por frecuencia.

## 1. El contexto envejeció y nadie lo tocó

Montaste el agente con las instrucciones y los datos de aquel momento. Desde entonces cambiasteis el pricing, salió un producto nuevo, se fue una persona y entró otra, y el criterio de qué lead es bueno se afinó en dos conversaciones que no quedaron escritas en ningún sitio.

El agente sigue operando con la foto de hace seis meses. Y como responde con la misma seguridad de siempre, no hay ninguna señal externa de que algo va mal.

**Qué hacer**: pon una revisión periódica del contexto en el calendario, como quien revisa un contrato. Cada trimestre, alguien lee lo que el agente sabe y confirma que sigue siendo verdad.

## 2. Le estás dando demasiado contexto

Es contraintuitivo y pasa mucho. Ante un fallo, la reacción es añadir más información y más instrucciones, con la idea de que así tendrá todo lo necesario.

El efecto suele ser el contrario. Un agente con veinte reglas cumple peor que uno con cinco, porque las instrucciones compiten entre sí y las importantes se diluyen. Y además cuesta más dinero.

**Qué hacer**: cuando falle, antes de añadir, prueba a quitar. Sorprende cuántas veces mejora.

## 3. Nadie mide nada

Esta es la causa de que las otras tres duren tanto tiempo sin detectarse.

La mayoría de agentes en producción no tienen ninguna medida de calidad. Se sabe que se ejecutó, no si acertó. Y sin eso, la degradación es invisible por definición.

**Qué hacer**: guarda un conjunto de casos con la respuesta correcta conocida, entre veinte y cincuenta, y pásalos cada cierto tiempo. Es lo mismo que unas pruebas en código y cuesta poco montarlo. Cuando el porcentaje de acierto baje, te enteras el mismo día en vez del mes siguiente.

Si solo puedes hacer una cosa de esta lista, haz esta.

## 4. Cambió algo alrededor

Un campo del CRM que se renombró. Una API que cambió el formato. Un proveedor que ajustó su plantilla de correo. Un modelo que se actualizó por debajo y ahora responde con otro estilo.

Nada de eso es culpa del agente y todo eso lo rompe.

**Qué hacer**: que el agente falle de forma ruidosa cuando reciba algo que no esperaba, en vez de improvisar. Un agente que se para y avisa es mucho mejor que uno que sigue adelante inventando.

## La señal que deberías vigilar

Si tuviera que elegir un solo indicador: **cuántas veces una persona corrige lo que hizo el agente**.

Si al principio se corregía una de cada veinte y ahora es una de cada cinco, tienes un problema aunque nadie se haya quejado. Ese número es más honesto que cualquier panel.

Y ojo con el efecto contrario, que también existe: si nadie corrige nunca nada, puede que el agente sea perfecto o puede que nadie esté revisando. Compruébalo.

## Lo que no arregla el problema

**Cambiar de modelo.** Si el fallo es de contexto, el modelo nuevo fallará igual, y encima habrás introducido una variable más.

**Añadir un segundo agente que revise al primero.** A veces ayuda, y muchas veces solo duplica el coste y añade otra cosa que mantener.

**Reescribir las instrucciones desde cero.** Sin medición, no vas a saber si la versión nueva es mejor. Estarás cambiando por cambiar.

## Preguntas rápidas

**¿Cada cuánto reviso el contexto?**
Trimestral funciona para la mayoría. Mensual si tu negocio cambia deprisa.

**¿Cuántos casos de prueba hacen falta?**
Entre veinte y cincuenta bien elegidos, cubriendo los casos raros y no solo los fáciles.

**¿Esto no era problema de las automatizaciones también?**
Las automatizaciones se rompen de forma visible, que es más molesto y mucho menos peligroso. [La diferencia, aquí](/blog/agente-o-automatizacion).

**¿Y cómo sé si sigue saliendo a cuenta?**
[Midiendo el ahorro real](/blog/medir-retorno-agente-de-ia), no el estimado en la propuesta.

## Cómo lo montamos

Con casos de prueba desde el primer día y una revisión de contexto en calendario. No es la parte vistosa del proyecto y es la que decide si sigue vivo en el mes seis.

Va dentro de [agentes de IA](/servicios/agentes-de-ia). Si tienes uno funcionando y no sabes si sigue acertando, [media hora y lo miramos](/#contacto).
