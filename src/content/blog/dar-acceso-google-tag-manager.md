---
title: "¿Cómo dar acceso a Google Tag Manager? Quién puede publicar"
description: "Los pasos para dar acceso a Tag Manager y la decisión que importa: quién puede publicar en tu web y quién solo puede proponer cambios."
pubDate: 2026-09-09
author: "Philippe Saint-Hubert"
cluster: "revops"
tags: ["Tag Manager", "medición", "onboarding", "permisos"]
---

En **Administrar > Gestión de usuarios**, añadir usuarios, correo y permisos. Lo que hace especial a Tag Manager es que los permisos van en dos niveles a la vez, cuenta y contenedor, y que uno de esos niveles decide quién puede **publicar código en tu web en producción sin pedirle permiso a nadie**.

Esa es la decisión. El resto son clics.

## Por qué GTM no es como los demás

En GA4 o en Search Console, dar acceso de más significa que alguien ve datos que no debería o cambia una configuración. Molesto, reversible.

En Tag Manager, quien tiene permiso de **publicar** puede meter cualquier etiqueta en tu web y que salga en vivo al instante. Eso incluye scripts de terceros, píxeles y, si alguien se equivoca o entra donde no debe, cosas peores. También puede tirarte la medición entera con un cambio mal hecho un viernes por la tarde.

No es paranoia, es que el nivel de riesgo es distinto y el reparto de permisos debería reflejarlo.

## Los pasos

1. Entra en Tag Manager y pulsa **Administrar**.
2. Verás dos columnas, **Cuenta** y **Contenedor**. Elige el nivel:
   - **Gestión de usuarios** en la columna Cuenta, si quieres dar de alta a alguien en la cuenta y de paso asignarle contenedores.
   - **Gestión de usuarios** en la columna Contenedor, si solo quieres darle un contenedor concreto.
3. Pulsa el **+** y elige añadir usuarios.
4. Escribe los correos.
5. Asigna los **permisos de cuenta** y los **permisos de contenedor**.
6. Pulsa **Invitar**.

## Los dos niveles de permiso

**A nivel de cuenta**, solo hay dos:

- **Usuario**: ve la información básica de la cuenta.
- **Administrador**: puede crear contenedores nuevos y modificar los permisos de los demás.

**A nivel de contenedor**, hay cinco y son los que importan:

- **Sin acceso**: no ve el contenedor.
- **Leer**: navega por etiquetas, activadores y variables. No toca nada.
- **Editar**: crea espacios de trabajo y hace cambios. **No puede crear versiones ni publicar.**
- **Aprobar**: además puede crear versiones. Sigue sin poder publicar.
- **Publicar**: puede todo, incluido sacarlo en vivo.

## Qué dar a tu agencia

Depende de una sola pregunta: **¿quieres revisar lo que sale a producción o confías en que lo publiquen ellos?**

Si quieres revisar, da **Editar** o **Aprobar**. Tu proveedor prepara los cambios en un espacio de trabajo, tú los miras y publicas. Es más lento y evita sustos.

Si trabajáis con soltura y hay confianza, da **Publicar**. Es lo normal en una relación rodada, y sinceramente es lo que la mayoría acaba haciendo porque el ida y vuelta cansa.

Lo que casi nunca hace falta es **Administrador de cuenta** para un externo. Eso le deja tocar los permisos de todos, incluidos los tuyos.

Nuestra recomendación práctica: empieza en **Aprobar** durante la implementación inicial, y sube a **Publicar** cuando ya hayáis hecho un par de despliegues juntos y sepas cómo trabajan. No es desconfianza, es que los primeros despliegues son donde se cometen los errores.

## Los fallos habituales

**Dar acceso de cuenta y olvidar el contenedor.** La persona entra, ve la cuenta y no puede hacer nada. Los dos niveles son independientes y hay que rellenar los dos.

**Tener varios contenedores y dar el que no es.** Web, AMP, iOS, Android y el de servidor son contenedores distintos. Comprueba el ID antes de invitar.

**Confundir GTM con Analytics.** Tag Manager despliega la medición, GA4 la recoge. Son dos productos y dos permisos. [Aquí van los de GA4](/blog/dar-acceso-google-analytics-4).

**No mirar nunca el historial de versiones.** Cada publicación queda registrada con autor y fecha, y puedes volver a una versión anterior. Si algo se rompió el martes, ahí está quién y qué.

## Preguntas rápidas

**¿Puedo quitar el acceso a mitad de un proyecto?**
Sí, y el efecto es inmediato. Los cambios que ya publicaron siguen vivos, claro: quitar el acceso no revierte nada. Si quieres deshacer, usa el historial de versiones.

**¿El contenedor de servidor va aparte?**
Sí, es un contenedor distinto con sus propios permisos y suele tener implicaciones de coste, porque corre en tu infraestructura.

**¿Cómo sé si alguien publicó algo raro?**
En el contenedor, sección de versiones. Cada una lleva quién la publicó y qué cambió.

**¿Necesita mi agencia de paid acceso a GTM?**
Sí, si va a implementar conversiones. Y también va a necesitar [acceso a Google Ads](/blog/dar-acceso-google-ads).

## El apunte que de verdad importa

Tag Manager es el sitio donde más deuda técnica silenciosa se acumula. Contenedores con cuarenta etiquetas, la mitad de proveedores que ya no trabajan contigo, disparándose en cada carga y ralentizando la web sin que nadie sepa por qué están ahí.

Cuando entramos en un contenedor nuevo, lo primero es el inventario: qué hay, qué dispara y qué se puede apagar. Suele ser el entregable más barato con más impacto en velocidad.

En [Scale It](/servicios/paid) pedimos Aprobar al empezar y publicamos nosotros cuando ya nos conoces. Si quieres que miremos qué llevas cargando en el contenedor, [media hora y te lo decimos](/#contacto).
