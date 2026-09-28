---
title: "Conversiones desde servidor: por qué hacen falta en B2B"
description: "El navegador pierde una parte creciente de las conversiones. Qué es el envío desde servidor, cuándo compensa montarlo y qué se gana al conectarlo al CRM."
pubDate: 2026-09-22
author: "Philippe Saint-Hubert"
cluster: "paid"
tags: ["paid", "medición", "atribución", "tracking"]
---

Durante años, medir una conversión fue poner un píxel en la página de gracias. Eso sigue funcionando a medias, y "a medias" es justo el problema: no falla del todo, falla un porcentaje variable que nadie mide.

En B2B, donde cada conversión cuenta mucho porque hay pocas, perder un tercio de la señal cambia las decisiones de presupuesto.

## Por qué el navegador se ha vuelto poco fiable

No es una cosa, son cuatro a la vez.

**Los bloqueadores.** Una parte de tu público usa bloqueador de anuncios, y ahí el píxel no llega. En públicos técnicos, que en B2B son muchos, la proporción es bastante más alta que la media.

**Las cookies de terceros.** Safari las limita desde hace años y Chrome ha ido en la misma dirección. La ventana en la que se puede atribuir una conversión a un clic anterior se ha acortado mucho, y en B2B con ciclos largos eso es demoledor: si la decisión tarda dos meses, el rastro ya no existe.

**El consentimiento.** Con el aviso de cookies bien implementado, quien rechaza no se mide. Es correcto y es la ley, pero significa que una parte de las conversiones nunca aparece.

**El propio dispositivo.** El comprador B2B investiga desde el móvil, pregunta en el ordenador de la oficina y firma desde otro sitio. Ningún píxel une eso.

El resultado es que la plataforma ve menos conversiones de las que hubo, y como optimiza con lo que ve, optimiza mal.

## Qué es el envío desde servidor

En lugar de que el navegador del visitante avise a la plataforma de que hubo una conversión, avisa tu servidor.

Cambia tres cosas:

**No depende del navegador.** Ni bloqueadores, ni limitaciones de cookies, ni fallos de carga.

**Puedes mandar lo que sabes tú.** Correo electrónico, teléfono e identificador interno, cifrados, para que la plataforma pueda casar esa conversión con el clic que la originó aunque el rastro del navegador se haya perdido. Es lo que Google llama conversiones mejoradas.

**Y puedes mandarlo más tarde.** Aquí está lo que de verdad importa en B2B, y va en la siguiente sección.

## Lo que cambia de verdad: mandar lo que pasó después

Una conversión web dice que alguien rellenó un formulario. No dice si ese alguien valía algo.

Con envío desde servidor puedes esperar, dejar que tu equipo comercial cualifique y mandar a la plataforma **la conversión que importa**: oportunidad creada, reunión celebrada, contrato firmado. Con su valor real.

Eso convierte la optimización en otra cosa. El algoritmo deja de buscar formularios baratos y empieza a buscar gente parecida a la que firma.

Es la diferencia entre una cuenta que se estanca y una que mejora sola, y es la razón de fondo por la que [el coste por lead engaña](/blog/cpl-enganoso-ciclos-largos) en ciclos largos.

Requiere que el CRM y las plataformas se hablen, que es [un trabajo concreto](/blog/conectar-crm-con-plataformas) y no especialmente glamuroso.

## Cuándo compensa montarlo

No siempre. Es trabajo técnico y tiene mantenimiento.

**Compensa** si inviertes lo suficiente como para que un error de medición del 30 % represente dinero real; si tu ciclo de venta pasa de unas semanas; si tu público es técnico y usa bloqueadores; o si ya sospechas que las plataformas se atribuyen conversiones que no cuadran con lo que ve el CRM.

**No compensa todavía** si estás validando si el canal sirve, si el volumen es de unas pocas conversiones al mes, o si aún no tienes el seguimiento básico funcionando. Primero lo simple y comprobado.

## El orden en que se monta

**Uno: que el CRM sepa de dónde viene cada lead.** Capturar el identificador de clic de la plataforma en el formulario y guardarlo en el contacto. Sin esto no hay nada que devolver después, y es el paso que más se olvida.

**Dos: conversiones mejoradas en la web.** Es lo más barato de conseguir y ya recupera parte de lo perdido.

**Tres: envío desde servidor de los eventos web.** Con un contenedor de servidor o con la API de conversiones de cada plataforma.

**Cuatro: devolución de los eventos del CRM.** Cuando una oportunidad avanza, avisar a la plataforma con el identificador guardado en el paso uno.

Cada paso sirve por sí solo. No hace falta llegar al cuatro para notar mejora, pero el cuatro es donde está casi todo el valor.

## Un aviso sobre datos personales

Mandar correos y teléfonos a una plataforma publicitaria, aunque vayan cifrados, es una cesión de datos y tiene que estar en tu política de privacidad y amparada en la base jurídica correspondiente.

El cifrado protege el dato en tránsito, no resuelve la parte legal. Conviene tenerlo hablado antes de montarlo, no después.

## Preguntas rápidas

**¿Esto se salta el consentimiento de cookies?**
No, y quien lo venda así se equivoca. Si alguien rechaza, no se le mide, se mande desde donde se mande. Lo que arregla el envío desde servidor son las pérdidas técnicas, no las decisiones del visitante.

**¿Necesito un contenedor de servidor?**
Para los eventos web ayuda. Para devolver conversiones del CRM no hace falta: se puede hacer con la API de cada plataforma o con la integración nativa si tu CRM la tiene.

**¿Cuánto cuesta mantenerlo?**
El contenedor tiene un coste de alojamiento modesto. Lo que cuesta es la vigilancia: si se rompe, deja de mandar en silencio, y eso no se nota hasta que alguien mira. Conviene una alerta.

**¿Va a cuadrar la plataforma con mi CRM?**
Nunca del todo, y esperar que cuadre lleva a discusiones estériles. Miden cosas distintas con ventanas distintas. Lo que se busca es que la tendencia sea coherente, no que los números sean idénticos.

## Por dónde empezamos

Por comprobar cuánta señal estás perdiendo hoy, que suele ser más de lo que parece, y por capturar el origen en el CRM si aún no se hace.

Es lo primero que tocamos en [paid](/servicios/paid), antes que ninguna puja, y se apoya en [RevOps y datos](/servicios/revops-crm). Si quieres saber qué parte de tus conversiones no estás viendo, [media hora y lo miramos](/#contacto).
