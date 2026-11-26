---
title: "¿Cómo dar acceso a Google Ads? Pasos y nivel de acceso"
description: "Los pasos para invitar a un usuario o aceptar la vinculación de una agencia, qué nivel de acceso le toca a cada uno y cómo quitarlo cuando quieras."
pubDate: 2026-09-09
updatedDate: 2026-11-26
author: "Philippe Saint-Hubert"
cluster: "revops"
tags: ["Google Ads", "paid", "onboarding", "permisos"]
---

Se da desde el menú **Administrador** de tu cuenta de Google Ads, en **Acceso y seguridad**: botón más, correo de la persona y nivel de acceso. Si quien te lo pide es una agencia, el nivel que suele bastar es **Estándar**, y en vez de invitar al correo de un empleado suyo conviene aceptar la vinculación con su cuenta de administrador (MCC).

Abajo tienes los pasos de las dos vías, qué puede hacer de verdad cada nivel y cómo quitar el acceso.

## ¿Cuáles son los pasos para invitar a un usuario?

Según la [documentación de Google Ads sobre gestionar el acceso a la cuenta](https://support.google.com/google-ads/answer/6372672?hl=es):

1. "Ve a Acceso y seguridad en el menú **Administrador**".
2. "Selecciona el botón más".
3. "Introduce la dirección de correo del invitado y elige el nivel de acceso".
4. "Selecciona **Enviar invitación**".
5. "Cuando ese usuario acepte tu invitación por correo electrónico, recibirás una notificación en tu cuenta".

Dos detalles que ahorran soporte. Uno: "para acceder a tu cuenta, el usuario al que invites debe tener o crear una cuenta de Google", así que si ese correo no está dado de alta en Google, la invitación no se puede aceptar hasta que la persona cree la cuenta de Google. Dos: si te arrepientes antes de que la acepte, en la columna "Acciones" tienes **Revocar**.

Esta vía vale para una persona concreta: alguien de tu equipo, un freelance, un consultor puntual.

## ¿Qué niveles de acceso hay en Google Ads?

Cinco. Estos son los nombres literales y lo que permite cada uno en la [tabla de niveles de acceso de Google](https://support.google.com/google-ads/answer/9978556?hl=es):

| Nivel | Qué permite |
|---|---|
| **Solo correo electrónico** | "Se pueden recibir notificaciones por correo electrónico e informes". Ni campañas ni datos de facturación. |
| **Facturación** | Ver y editar los datos de facturación, las formas de pago y la información del perfil de pagos. No ve campañas. |
| **Solo lectura** | "Se pueden ver campañas y usar herramientas de planificación" y "editar y ejecutar informes de rendimiento de campañas", pero no editar campañas. |
| **Estándar** | Lo anterior más "se pueden editar campañas". De permisos, solo puede "conceder el acceso solo de correo". |
| **Administrador** | Todo, incluido dar accesos, cambiar niveles, aceptar y desvincular cuentas de administrador y la verificación del anunciante. |

## ¿Qué nivel de acceso le doy a mi agencia?

**Estándar** para quien va a gestionar campañas y **Solo lectura** para quien solo mira: un socio, un inversor, o alguien que te hace una auditoría antes de contratarte nada. Con Solo lectura se puede revisar [dónde se concentra el desperdicio en una cuenta heredada](/blog/auditar-cuenta-google-ads-heredada) sin poder tocar ni una puja, y hasta pasarle los informes a una IA con una [skill de paid media que cruza las campañas con el CRM](/blog/skill-paid-media-para-ia).

Deja **Administrador** para ti. Y revisa estas cuatro excepciones reales antes de decidir, porque son cosas que Google reserva al nivel Administrador y tu proveedor te las va a pedir tarde o temprano:

- **Facturación mensual o línea de crédito.** "Para configurar la facturación mensual o solicitar una línea de crédito, el usuario necesita acceso de administrador", [avisa Google en los pasos para conceder acceso](https://support.google.com/google-ads/answer/6372672?hl=es).
- **Vincular con otros productos.** Solo Administrador puede "añadir o quitar vinculaciones con otros productos" y "vincular la cuenta con Google Analytics para importar conversiones". Ojo al matiz: con Estándar sí "se pueden crear conversiones a partir de eventos y eventos clave de Google Analytics", pero el enlace entre las dos plataformas no lo crea.
- **Verificación del anunciante.** "Se puede iniciar y completar la verificación del anunciante" es exclusivo de Administrador.
- **Aceptar o cortar vinculaciones con cuentas de administrador.** También exclusivo de Administrador.

La lectura práctica: si la medición la implementa tu proveedor, crea tú la vinculación con Analytics en una sesión compartida y deja que después trabaje con Estándar. Media hora de tu tiempo contra años de permisos de administrador abiertos. Con los [permisos de Tag Manager](/blog/dar-acceso-google-tag-manager) vale el mismo criterio, y ahí lo que importa es quién puede publicar.

## ¿Invitar por correo o vincular con una cuenta de administrador (MCC)?

Las dos vías dan acceso, pero no son equivalentes. En la vinculación, tu agencia envía la solicitud desde su cuenta de administrador con el ID de cliente de tu cuenta, y tú la aceptas. Los pasos de tu lado, según la [página de Google sobre vincular cuentas con cuentas de administrador](https://support.google.com/google-ads/answer/7459601?hl=es):

1. "En el menú **Administrador** [...] ve a **Acceso y seguridad**".
2. "Selecciona la pestaña **Administradores**".
3. En "Solicitud de vinculación" verás "una lista de las cuentas de administrador que han solicitado vincularse".
4. "En la columna 'Acciones', puedes **Aceptar** o **Rechazar** una invitación".

Por qué lo piden así las agencias, y por qué tiene sentido para ti:

- El acceso va atado a la agencia, no al correo de un empleado suyo. Si esa persona se va, no se lleva el acceso ni hay que rehacer nada.
- La agencia gestiona internamente quién de su equipo entra, sin pedírtelo cada vez.
- Vincular no te quita nada: al vincular una cuenta ya creada, "la cuenta de cliente original no cambia y su historial permanece intacto", y los permisos y las formas de pago siguen igual salvo que se active la facturación consolidada ([Google, sobre vincular cuentas existentes](https://support.google.com/google-ads/answer/7456530?hl=es)).

Y el dato que casi nadie cuenta: "vincular una cuenta de administrador no concede automáticamente la propiedad administrativa". Mientras esa cuenta de administrador no sea propietaria, sus usuarios solo pueden hacer tareas administrativas limitadas en tu cuenta: "invitar a usuarios con nivel de acceso 'Estándar', 'Solo lectura' o 'Solo correo electrónico'" y "cambiar el acceso de los usuarios entre 'Estándar' y 'Solo lectura'" ([Google, niveles de acceso en cuentas de administrador](https://support.google.com/google-ads/answer/7476552?hl=es)). No pueden dejarte fuera.

## ¿Quién es el propietario de la cuenta y por qué importa?

Es la pregunta que hay que hacerse antes de firmar con nadie. "Una cuenta de cliente solo puede tener un propietario. Si un administrador crea una cuenta, se convertirá automáticamente en el propietario de esa cuenta", mientras que "si un administrador vincula una cuenta de cliente que ya esté creada, de forma predeterminada no tendrá la propiedad de esa cuenta" ([Google, sobre la propiedad de cuentas de cliente](https://support.google.com/google-ads/answer/7456532?hl=es)).

Traducido: si tu agencia creó la cuenta desde su MCC, es propietaria. Y la propiedad "es transitiva", así que también lo son las cuentas de administrador que estén por encima de la suya. Un propietario puede invitar y quitar usuarios con acceso de administrador en tu cuenta y transferir la propiedad a otra cuenta de administrador. Google lo dice con prudencia: "se recomienda convertir a un administrador en propietario solo si la cuenta de administrador requiere estos privilegios".

La buena noticia es que no te quedas atrapado. Los usuarios de la cuenta de cliente "no tienen permiso para transferir la propiedad, pero sí pueden desvincular una cuenta de administrador", y "la cuenta de cliente conserva la propiedad de los datos".

Si empiezas de cero con alguien, crea tú la cuenta con un correo tuyo y después la vinculas. Son diez minutos que te ahorran una negociación incómoda dentro de dos años.

## ¿Cómo quito el acceso a una agencia?

Depende de qué le diste.

**Si invitaste a un usuario**, vuelve a Acceso y seguridad: "busca el usuario que quieres quitar y, en la columna 'Acciones', haz clic en **Quitar acceso**".

**Si aceptaste una vinculación**, el camino es otro y está en la [página de Google sobre desvincular cuentas](https://support.google.com/google-ads/answer/7456531?hl=es): menú **Administrador**, **Acceso y seguridad**, "selecciona la subpágina **Administradores**" y, "en la columna 'Acciones', selecciona **Quitar acceso**". Te pide confirmar con **Desvincular**. Para hacerlo "debes tener acceso de administrador a la cuenta que quieras desvincular", que es otro motivo para no regalar ese nivel.

Revísalo una vez al trimestre: las dos listas, usuarios y administradores, suelen tener fósiles.

## Los fallos habituales

**Dar Administrador por defecto.** Con eso, alguien externo puede cambiar los permisos de todo el mundo, incluido dejarte fuera de tu propia cuenta.

**Tener un único administrador.** En la misma [tabla de niveles de acceso](https://support.google.com/google-ads/answer/9978556?hl=es), Google avisa: "si tu cuenta solo tiene un administrador y este deja de estar disponible, puedes perder el acceso a tus etiquetas", y recomienda "añade al menos un administrador más a tu cuenta". Que sean dos personas de tu empresa, no tu agencia.

**Compartir la contraseña en vez de invitar.** Rompe la verificación en dos pasos y convierte el historial de cambios en papel mojado: todo aparece hecho por la misma persona.

**No mirar nunca la pestaña Administradores.** Ahí viven las vinculaciones. Puedes tener enlazadas agencias de hace años sin saberlo.

**Olvidar los permisos vecinos.** Google Ads solo no basta. Tu proveedor va a necesitar [acceso a GA4](/blog/dar-acceso-google-analytics-4) para ver qué pasa después del clic, Tag Manager para implementar conversiones y, si hay campañas allí, [acceso a LinkedIn Campaign Manager](/blog/dar-acceso-linkedin-campaign-manager). Dalos con el mismo criterio: el mínimo que permite trabajar.

## Preguntas frecuentes

**¿Cómo quito el acceso a mi agencia de Google Ads?**
Si es un usuario invitado, en Acceso y seguridad, columna "Acciones", **Quitar acceso**. Si es una vinculación, en la subpágina Administradores, **Quitar acceso** y confirmar con **Desvincular**. No necesitas su permiso, pero sí tener acceso de administrador.

**¿Cuántas cuentas de administrador pueden gestionar mi cuenta?**
Hasta cinco: "una cuenta de Google Ads individual no puede estar gestionada directamente por más de cinco cuentas de administrador", según [la documentación de vinculación](https://support.google.com/google-ads/answer/7456530?hl=es). Es normal tener dos si llevas medios y creatividades por separado, pero revisa que todas sigan siendo actuales.

**Si desvinculo a la agencia, ¿pierdo el histórico de las campañas?**
No. Los datos son de la cuenta: al vincular, "la cuenta de cliente original no cambia y su historial permanece intacto", y la cuenta de cliente conserva la propiedad de los datos. El histórico se pierde si abres una cuenta nueva, que es justo lo que hay que evitar.

**Mi agencia creó mi cuenta de Google Ads, ¿puedo recuperarla?**
Puedes desvincular su cuenta de administrador cuando quieras, aunque sea propietaria. Lo que no puedes hacer tú mismo es transferir la propiedad a otra cuenta de administrador. Pídeselo antes de cerrar la relación, con todo en buen tono.

**¿Vale cualquier dirección de correo para invitar?**
No. Google lo pide así: "el usuario al que invites debe tener o crear una cuenta de Google". Si su correo es de dominio propio, tiene que estar registrado en Google.

## Lo que esto dice del proveedor

Que te pidan vinculación por MCC con acceso Estándar, y te expliquen que puedes cortarla cuando quieras, es buena señal. Que te pidan las credenciales de tu cuenta de Google, no.

En [Scale It](/servicios/paid) trabajamos por vinculación sobre una cuenta que es tuya y con la facturación a tu nombre, y lo primero que miramos con el acceso es la medición, antes de las pujas, que es [el orden que rinde en campañas B2B](/blog/optimizar-campanas-google-ads-b2b). Si quieres que revisemos quién tiene acceso a tu cuenta ahora mismo, [media hora y te lo contamos](/#contacto).
