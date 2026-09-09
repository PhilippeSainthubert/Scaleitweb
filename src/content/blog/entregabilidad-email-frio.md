---
title: "¿Por qué tus emails fríos acaban en spam?"
description: "Autenticación, calentamiento y volumen: las tres causas de que no llegues a la bandeja de entrada, y cómo montar la infraestructura sin quemar tu dominio."
pubDate: 2026-09-11
author: "Philippe Saint-Hubert"
cluster: "outbound"
tags: ["outbound", "email", "entregabilidad", "infraestructura"]
---

Puedes tener la lista perfecta y el mensaje perfecto, y estar hablando con una carpeta que nadie abre. La entregabilidad no es un detalle técnico previo a la campaña: es la campaña, porque determina si algo de lo demás llega a existir.

La señal de alarma es una tasa de apertura que se hunde sin que hayas cambiado nada. Eso no es fatiga del mensaje.

## Lo primero: no uses tu dominio principal

Es el error más caro y el más frecuente.

Si mandas prospección desde el dominio con el que facturas, hablas con clientes y recibes candidaturas, estás apostando la comunicación entera de tu empresa a que la campaña salga bien. Y cuando se quema, no se quema solo el frío: dejan de llegar tus correos normales.

**Lo que hay que hacer**: dominios secundarios, parecidos al principal pero distintos, dedicados solo a esto. Si se queman, se tiran y se levantan otros. No es paranoia, es aislamiento.

## Los tres registros que tienen que estar bien

Sin esto, ni empieces:

**SPF** declara qué servidores pueden mandar en tu nombre.

**DKIM** firma criptográficamente el correo para que el receptor compruebe que no se ha manipulado y que sale de quien dice.

**DMARC** le dice al receptor qué hacer si SPF o DKIM fallan, y te manda informes de quién está mandando en tu nombre.

Los grandes proveedores de correo llevan tiempo endureciendo requisitos para quien manda volumen, y la dirección del viento es clara: cada año se exige más. Sin los tres bien puestos, tu tasa de entrada a bandeja principal va a ser mala por muy bien que escribas.

## El calentamiento no se salta

Un dominio nuevo que empieza mandando doscientos correos al día es un dominio nuevo que va a spam. No hay atajo.

El calentamiento consiste en empezar con muy poco volumen y subir gradualmente durante semanas, generando además interacción real: correos que se abren, se responden y se marcan como deseados.

**Cuenta con dos o tres semanas de infraestructura y calentamiento antes de mandar nada en serio.** Es lento, es aburrido y es lo que separa una cuenta que dura de una que se quema en el mes dos.

Si un proveedor te propone empezar a mandar la primera semana, sabes que no va a durar.

## El volumen por buzón

Un buzón individual no debería mandar cantidades grandes al día. La forma de escalar no es subir el volumen por buzón, es tener más buzones repartidos entre varios dominios.

Esto tiene una consecuencia de presupuesto que conviene saber antes: escalar outbound cuesta dinero en infraestructura, no solo en herramienta. Y es una de las razones por las que con tickets pequeños no sale a cuenta.

## Lo que te quema aunque hagas todo lo anterior

**Mandar a direcciones que no existen.** Las tasas altas de rebote destrozan la reputación deprisa. Verifica antes de mandar.

**Que te marquen como spam.** Y aquí volvemos al principio de todo: si escribes a gente que no tiene tu problema, te van a marcar. La entregabilidad y la calidad de la lista no son dos temas separados. [Una lista mala quema dominios](/blog/lista-prospeccion-con-senales).

**Enlaces e imágenes de más.** Un primer correo con seguimiento de aperturas, tres enlaces y una firma con imágenes parece lo que es.

**No dar salida.** Que sea fácil pedir que no escribas más. Además de ser lo correcto, evita que la única salida disponible sea el botón de spam.

## Cómo saber si estás llegando

No te fíes solo de la tasa de apertura, que además se ha vuelto poco fiable por la protección de privacidad de algunos clientes de correo.

Manda a buzones de prueba propios en los principales proveedores y mira dónde cae. Y vigila la tasa de respuesta, que es la métrica que no miente: si es cero durante días con volumen alto, no es el copy.

## Preguntas rápidas

**¿Cuánto tarda en recuperarse un dominio quemado?**
Meses, y no siempre del todo. Mientras tanto se trabaja con secundarios.

**¿Cuántos dominios necesito?**
Depende del volumen. Empieza por dos o tres y crece según haga falta.

**¿Y LinkedIn no tiene este problema?**
Tiene otros, sobre todo límites de actividad. Por eso se combinan. [Aquí, cómo](/blog/linkedin-y-email-combinados).

**¿Puedo usar mi Google Workspace normal?**
Para volumen bajo y muy segmentado, sí. Para una campaña de verdad, con dominios aparte.

## Cómo lo montamos

Dominios secundarios, nunca el principal, autenticación completa y protocolo de calentamiento antes de mandar. Son dos o tres semanas en las que no pasa nada visible, y es el motivo de que las cuentas no se quemen después.

Va dentro de [outbound](/servicios/outbound). [Media hora y revisamos cómo tienes montado el envío](/#contacto).
