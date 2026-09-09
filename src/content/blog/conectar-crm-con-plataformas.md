---
title: "Cómo conectar tu CRM con las plataformas de anuncios"
description: "Por qué optimizar por formulario enviado limita tus campañas B2B, y cómo devolver a las plataformas la señal de lo que de verdad se convirtió en negocio."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "revops"
tags: ["RevOps", "paid", "CRM", "medición"]
---

La mayoría de cuentas de anuncios B2B optimizan por "formulario enviado". El algoritmo hace exactamente lo que le pides: traer gente que rellena formularios. Y lo hace bien.

El problema es que rellenar un formulario y comprar son cosas distintas, y en B2B la distancia entre ambas es enorme.

## Qué son las conversiones offline

Es el mecanismo para cerrar el círculo: cuando un lead avanza en tu CRM, se lo devuelves a la plataforma diciendo qué pasó realmente.

El algoritmo deja entonces de optimizar por "gente que rellena" y pasa a optimizar por "gente que se parece a la que compró". Esa diferencia es el mayor salto de calidad disponible en paid B2B, y suele estar sin montar.

Google Ads y Meta tienen su forma de recibirlo, y LinkedIn también. Los nombres cambian; el concepto es el mismo.

## El requisito previo que casi nadie cumple

Para devolver la señal hace falta poder **unir el lead con el clic que lo trajo**. Y eso exige que un identificador viaje desde el anuncio hasta el CRM y sobreviva por el camino.

En la práctica, esto se rompe en algún punto en la mayoría de las cuentas que auditamos: el identificador no se captura en el formulario, o se captura y no se guarda en la oportunidad, o se sobrescribe cuando la persona vuelve por otro canal.

Antes de plantearte nada, comprueba si ese dato existe. Si no existe, ese es el proyecto.

## Qué evento devolver

Aquí hay una decisión importante y con matices.

**El evento tiene que ocurrir con frecuencia suficiente.** Las plataformas necesitan un número razonable de conversiones para aprender. Si tu única señal es "contrato firmado" y cierras quince al trimestre, no hay con qué optimizar.

**Y tiene que correlacionar con el cierre.** De nada sirve un evento frecuente que no predice nada.

El punto de equilibrio suele estar en algo intermedio: **reunión celebrada** u **oportunidad creada**. Ocurre con frecuencia razonable y filtra casi todo el ruido.

Si tu volumen lo permite, devolver además el valor del contrato deja que la plataforma optimice por ingresos y no solo por cantidad. Es lo que mejor funciona cuando hay datos suficientes.

## El orden de trabajo

1. **Comprueba que el identificador del clic llega al CRM** y no se pierde ni se pisa.
2. **Define el evento** que vas a devolver, con el criterio de arriba.
3. **Monta el envío**, por integración nativa o por la vía que ofrezca la plataforma.
4. **Espera.** El sistema necesita semanas de datos antes de que el cambio se note. Cambiar otra vez a mitad reinicia el aprendizaje.
5. **Compara por cohortes**, no semana contra semana.

El punto 4 es donde más gente se impacienta y estropea el experimento.

## Lo que mejora y lo que no

**Mejora**: la calidad de los leads a igualdad de gasto, y la capacidad de comparar canales por lo que aportan al negocio y no por lo baratos que son.

**No arregla**: una oferta que no interesa, una web que no convierte, o un seguimiento comercial lento. Si tardas dos días en llamar, ninguna señal va a salvar la campaña.

## Un apunte sobre privacidad

Esto implica mandar datos de tus contactos a plataformas de terceros. Hay que tener la base legal en orden, la información al usuario y el consentimiento donde corresponda. No es un detalle menor y conviene resolverlo antes, no después.

## Preguntas rápidas

**¿Cuánto volumen hace falta?**
Suficiente para que el evento elegido ocurra con regularidad todas las semanas. Si es esporádico, elige un evento anterior en el embudo.

**¿Sirve para LinkedIn Ads?**
Sí, y ahí importa especialmente porque el coste por clic es alto y filtrar mal sale caro. [Sobre accesos en LinkedIn](/blog/dar-acceso-linkedin-campaign-manager).

**¿Y si mi CRM no integra de forma nativa?**
Casi siempre hay vía por API o por una capa intermedia. Es trabajo, no un muro.

**¿Esto sustituye a la atribución?**
No. Son cosas distintas: esto alimenta al algoritmo, [la atribución te ayuda a ti a decidir](/blog/atribucion-ultimo-clic-miente).

## Cómo lo hacemos

Empezamos comprobando si el identificador sobrevive el viaje, que es donde suele estar roto. Después elegimos el evento con el equilibrio entre frecuencia y valor predictivo, y medimos por cohortes.

Es justo el punto donde se juntan [paid](/servicios/paid) y [RevOps](/servicios/revops-crm), y por eso no los vendemos por separado. [Media hora y lo miramos](/#contacto).
