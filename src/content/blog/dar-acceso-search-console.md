---
title: "¿Cómo dar acceso a Google Search Console? Roles y pasos"
description: "Cómo añadir un usuario en Search Console, qué diferencia hay entre propietario, usuario completo y restringido, y cuál le toca a tu agencia."
pubDate: 2026-09-09
author: "Philippe Saint-Hubert"
cluster: "seo"
tags: ["Search Console", "SEO", "onboarding", "permisos"]
---

En **Configuración > Usuarios y permisos > Añadir usuario**. Metes el correo, eliges el permiso y listo. Solo los propietarios de la propiedad pueden añadir gente, así que si no ves esa opción es que no eres propietario, por mucho que uses la herramienta todos los días.

La decisión real es si das **propietario**, **usuario completo** o **usuario restringido**. Se parecen menos de lo que suena.

## Los pasos

1. Abre Search Console y selecciona la propiedad.
2. Ve a **Configuración**, en el menú lateral.
3. Entra en **Usuarios y permisos**.
4. Pulsa **Añadir usuario**.
5. Escribe el correo. Tiene que ser una cuenta de Google, y **no se pueden añadir grupos de correo**.
6. Elige el nivel de permiso.
7. Guarda.

## Qué significa cada permiso

**Propietario.** Control total. Puede añadir y quitar usuarios, cambiar la configuración, ver todos los datos y usar todas las herramientas. También puede quitarte a ti.

**Usuario completo.** Ve todos los datos y puede ejecutar acciones, pero no gestiona usuarios ni toca la configuración de fondo. Es el nivel que necesita una agencia de SEO para trabajar de verdad: ve el rendimiento, inspecciona URLs, pide indexación, revisa la cobertura.

**Usuario restringido.** Ve la mayoría de los datos y poco más. Sirve para alguien que quiere mirar sin tocar.

**Asociado.** Es otra cosa y confunde a todo el mundo. Un asociado puede hacer tareas concretas en nombre de tu sitio desde otro producto, pero **no entra ni ve tu Search Console**. Si querías dar acceso a un humano, este no es el sitio.

## Cuál dar

Para una agencia o un freelance de SEO: **usuario completo**. Cubre todo el trabajo diario sin que puedan reconfigurar la propiedad ni tocar la lista de usuarios.

Deja **propietario** para ti y para alguien más de tu empresa. Dos propietarios, no uno. El escenario que quieres evitar es que la única persona con control se vaya, y en ese momento nadie pueda recuperar la propiedad.

Da **usuario restringido** a quien solo mira.

Y una cosa que conviene entender: quien verificó la propiedad es **propietario verificado**, y esa condición va atada al método de verificación, no a la lista de usuarios. Si tu agencia verificó el dominio en su día con su propio registro DNS o su etiqueta, sigue siendo propietaria aunque la borres de la lista. Para cortar de verdad hay que quitar el token de verificación.

Esto pilla a mucha gente al cambiar de proveedor. Si vas a hacer un cambio, revisa quién está verificado y con qué método.

## Límites que existen y casi nadie conoce

- Máximo **100 usuarios no propietarios** por propiedad.
- Los propietarios delegados están limitados a **500 en total** entre verificados y delegados.
- Los cambios de permisos se aplican casi al momento.

## Los fallos habituales

**Dar acceso a la propiedad equivocada.** Si tienes la web dada de alta como propiedad de dominio y también como prefijo de URL, no son la misma cosa y los datos no coinciden. Da acceso a la de dominio, que es la que lo recoge todo.

**Pensar que Search Console y Analytics van juntos.** No. Son permisos separados. [Aquí van los pasos de GA4](/blog/dar-acceso-google-analytics-4).

**No quitar a nadie nunca.** Igual que en GA4: una revisión al trimestre y fuera los que ya no están.

## Preguntas rápidas

**¿Puede un usuario completo borrar mi web de Google?**
Puede pedir la retirada temporal de URLs, que es reversible pero molesto. Es una razón más para no repartir permisos por encima de lo necesario.

**¿Ve el usuario los datos históricos?**
Sí, ve todo el histórico de la propiedad, no solo lo posterior a su alta.

**¿Necesita Search Console mi agencia de paid?**
Normalmente no. Search Console es orgánico. Lo que sí necesita es [acceso a Google Ads](/blog/dar-acceso-google-ads) y probablemente a [Tag Manager](/blog/dar-acceso-google-tag-manager).

**¿Y si mi web no está verificada todavía?**
Entonces el primer paso no es dar acceso, es verificar. Se puede hacer por DNS, por archivo HTML, por etiqueta o a través de Google Analytics o Tag Manager. La verificación por DNS es la que aguanta rediseños y migraciones.

## Por qué insistimos tanto en esto

Search Console es la única fuente de datos que Google te da sobre cómo te ve Google. No hay sustituto, ni herramienta de pago que lo replique. Cuando alguien llega a nosotros con "el SEO no funciona", lo primero que miramos es esto, y en una parte incómoda de los casos resulta que nadie lo había abierto en meses.

En [Scale It](/servicios/seo) pedimos usuario completo y nada más. Si quieres que revisemos qué está viendo Google de tu sitio ahora mismo, [media hora y lo miramos](/#contacto).
