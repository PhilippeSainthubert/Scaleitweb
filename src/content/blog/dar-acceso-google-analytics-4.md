---
title: "¿Cómo dar acceso a Google Analytics 4 sin dar el control?"
description: "Los pasos exactos para dar acceso a GA4 a tu agencia, qué rol toca en cada caso y por qué compartir la contraseña sigue siendo la peor opción."
pubDate: 2026-09-09
author: "Philippe Saint-Hubert"
cluster: "revops"
tags: ["GA4", "analítica", "onboarding", "permisos"]
---

Se hace en **Administrar > Gestión del acceso a la propiedad**, botón de añadir usuario, correo de Google y rol. Treinta segundos. Lo que cuesta decidir no son los pasos, es el rol: casi todo el mundo reparte "Administrador" porque es lo que no falla, y con eso acaba de darle a un proveedor externo la capacidad de borrar usuarios, incluido tú.

Este artículo va de las dos cosas: los pasos, y el rol que de verdad necesita quien te lo está pidiendo.

## Antes de nada: no compartas la contraseña

Sigue pasando, y sigue siendo mala idea. Compartir credenciales de tu cuenta de Google significa que la verificación en dos pasos deja de proteger nada, que no hay rastro de quién tocó qué, y que el día que esa persona deja de trabajar contigo tienes que cambiar la contraseña de tu cuenta personal de Google entera.

GA4 tiene permisos nativos precisamente para no hacer esto. Úsalos.

## Los pasos

Necesitas ser **Administrador** a nivel de cuenta o de propiedad para poder repartir roles. Si no lo eres, ni te aparecerá la opción.

1. Entra en Google Analytics y abre **Administrar** (el engranaje abajo a la izquierda).
2. Elige el nivel. Hay dos columnas:
   - **Cuenta > Gestión del acceso a la cuenta**: el acceso se hereda en todas las propiedades que cuelguen de esa cuenta.
   - **Propiedad > Gestión del acceso a la propiedad**: el acceso se limita a esa propiedad.
3. Pulsa el **+** arriba a la derecha y elige añadir usuarios.
4. Escribe el correo. Tiene que ser una **cuenta de Google**. Un correo corporativo que no esté dado de alta en Google no vale, y es el motivo número uno por el que "no le llega la invitación".
5. Marca el rol.
6. Guarda.

**Da acceso a nivel de propiedad, no de cuenta**, salvo que tengas un motivo concreto. Es la diferencia entre dejar entrar a alguien a una habitación o darle la llave del edificio.

## Qué rol toca

Estos son los roles y lo que puede hacer cada uno:

- **Administrador**: control total, incluido gestionar usuarios. Puede añadir y quitar gente, y eso te incluye a ti.
- **Editor**: control total de la configuración de la propiedad. No puede gestionar usuarios, aunque sí verlos.
- **Marketing**: crea y edita audiencias y eventos, importa conversiones a Google Ads, toca la atribución.
- **Analista**: analiza y comparte exploraciones.
- **Lector**: ve configuración y datos, y puede montarse sus propias exploraciones.

Y ahora la parte práctica:

| Quién te lo pide | Rol |
|---|---|
| Agencia que va a implementar medición y eventos | **Editor** |
| Agencia que solo va a leer datos y reportar | **Analista** |
| Freelance de paid que necesita importar conversiones | **Marketing** |
| Un socio, un inversor, alguien que solo mira | **Lector** |
| Tu equipo interno de datos, a largo plazo | **Administrador** |

La regla es aburrida y funciona: **el mínimo que le permite hacer su trabajo**. Si se queda corto te lo va a decir en dos días y lo subes. El camino inverso, descubrir que alguien tenía más permisos de los que necesitaba, se descubre siempre tarde.

Un proveedor externo casi nunca necesita Administrador. Si te lo pide de entrada, pregúntale para qué. Hay respuestas buenas, pero conviene oírlas.

## Los tres fallos que vemos siempre

**El correo no es una cuenta de Google.** La invitación se manda al vacío. Si la dirección de tu proveedor es de un dominio propio, tiene que estar registrada en Google para que funcione.

**Dar acceso a la cuenta en vez de a la propiedad.** Si tienes varias propiedades, acabas de abrir todas. Suele pasar por prisa.

**No revisar nunca la lista.** Entra una vez al trimestre en Gestión del acceso y mira quién sigue ahí. Vas a encontrar a la agencia de hace dos años y al becario de 2024. Quitar accesos viejos cuesta un minuto.

## Preguntas rápidas

**¿Cuánto tarda en aplicarse?**
Es prácticamente inmediato. Si tu proveedor no lo ve, que cierre sesión y vuelva a entrar, y que confirme con qué correo está entrando: suele estar mirando desde otra cuenta.

**¿Puedo dar acceso solo a una parte de los datos?**
Puedes aplicar restricciones de datos para que alguien no vea métricas de coste o de ingresos. Se marcan al asignar el rol.

**¿Me entero de lo que hace esa persona?**
El historial de cambios registra las modificaciones de configuración. No es una auditoría completa, pero deja rastro.

**¿Dar acceso a GA4 le da acceso a Google Ads o a Search Console?**
No. Son productos distintos con permisos distintos. Si tu proveedor los necesita, hay que darlos por separado: te dejamos [cómo dar acceso a Google Ads](/blog/dar-acceso-google-ads) y [cómo dar acceso a Search Console](/blog/dar-acceso-search-console).

## Un apunte sobre por qué esto importa más de lo que parece

El reparto de permisos es la primera cosa operativa que haces con un proveedor nuevo, y suele adelantar cómo va a ir el resto. Quien te pide el mínimo necesario y te explica para qué está trabajando de una forma. Quien te pide la contraseña, de otra.

En [Scale It](/servicios/seo) montamos la medición con acceso de Editor a la propiedad y nada más, y el primer entregable es siempre el mapa de qué se está midiendo y qué no. Si quieres que le echemos un ojo a cómo tienes montado GA4 ahora mismo, [media hora y miramos tu caso concreto](/#contacto).
