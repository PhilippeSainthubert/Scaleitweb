---
title: "¿Cómo dar acceso a Google Search Console? Permisos y pasos"
description: "Los pasos para añadir un usuario en Search Console, qué puede hacer cada permiso según Google y cuál darle a tu agencia sin perder el control de la propiedad."
pubDate: 2026-09-09
updatedDate: 2026-11-27
author: "Philippe Saint-Hubert"
cluster: "seo"
tags: ["Search Console", "SEO", "onboarding", "permisos"]
---

Para dar acceso a Google Search Console entra en **Ajustes > Usuarios y permisos > Añadir usuario**, escribe el correo de Google de la persona, elige el nivel de permiso y guarda. Solo puede hacerlo un propietario: "solo puedes añadir o quitar usuarios si eres propietario de esa propiedad o de una propiedad superior", según la [documentación de Google sobre gestionar propietarios, usuarios y permisos](https://support.google.com/webmasters/answer/7687615?hl=es).

Para una agencia de SEO, el nivel que cubre el trabajo diario es **Usuario con acceso total**. Lo que de verdad hay que decidir son dos cosas: ese nivel y quién queda como propietario verificado, que es lo que da problemas el día que cambias de proveedor.

## ¿Cuáles son los pasos para dar acceso a Search Console?

Los pasos, tal como los publica Google en la [página de gestión de usuarios y permisos](https://support.google.com/webmasters/answer/7687615?hl=es):

1. "Abre la propiedad en Search Console."
2. "Abre la página Usuarios y permisos en los ajustes de la propiedad." Google avisa en ese mismo paso: "Solo puedes consultar esta página si eres propietario". Si no la ves, no eres propietario, por mucho que uses la herramienta a diario.
3. "Haz clic en Añadir usuario" y después: "Escribe el nombre de la cuenta de Google (es decir, el correo) del usuario nuevo", "Elige el nivel de permiso (rol) que quieres dar al usuario" y "Guarda los cambios".

Dos detalles que se comen media mañana de soporte. Uno: "los usuarios deben tener una cuenta de Google válida", así que un correo de dominio propio que no esté dado de alta en Google no entra. Dos: "no se puede añadir un correo de grupo como usuario", así que una lista de distribución o grupo de correo no sirve: hay que usar la cuenta de Google de una persona.

Y si te aparece el mensaje "este usuario solo puede añadirse como 'Propietario'", la causa está documentada: "el usuario que estás intentando añadir ya es propietario de una propiedad superior".

## ¿Qué permisos hay en Search Console y qué puede hacer cada uno?

Hay cuatro figuras. Estas son las definiciones de Google:

- **Propietario**: "tiene control total sobre las propiedades de Search Console" y "puede añadir y quitar otros usuarios, configurar ajustes, consultar todos los datos y utilizar todas las herramientas". Hay dos tipos y "ambos tienen los mismos permisos": el **verificado**, que "ha verificado una propiedad con un token para demostrar que es suya", y el **delegado**, "al que el propietario verificado le ha concedido el estado de propietario sin usar un token de verificación".
- **Usuario con acceso total**: "tiene permiso para ver todos los datos y puede realizar algunas tareas".
- **Usuario con acceso restringido**: "tiene permisos de visualización simples de la mayoría de los datos".
- **Asociado**: "una persona o cuenta que puede hacer determinadas tareas en nombre de tu sitio o que puede acceder a datos concretos". No es el acceso que buscas: "los asociados no pueden consultar ni acceder directamente a la cuenta ni a los datos de Search Console".

La tabla "Detalles sobre los permisos" de esa misma página los compara función por función. Estas son las filas que deciden algo en el día a día:

| Función | Propietario | Usuario con acceso total | Usuario con acceso restringido |
|---|---|---|---|
| Rendimiento | Sí | Sí | Sí |
| Inspección de URLs | Sí | Sí | "Solo exploración" |
| Cobertura del índice | Sí | Sí | "Solo lectura" |
| Enviar sitemaps | Sí | Sí | No |
| Retirar URLs | Sí | Sí | "Solo lectura" |
| Añadir usuarios | Sí | No | No |
| Añadir o eliminar propietarios de la propiedad | Sí | No | No |
| Vincular una cuenta de Google Analytics | Sí | No | No |

"Solo lectura" y "Solo exploración" son texto literal de la tabla; donde pongo Sí o No, Google usa una marca de verificación o deja la celda vacía.

## ¿Qué permiso le doy a mi agencia de SEO?

**Usuario con acceso total.** Ve el rendimiento, inspecciona URLs, revisa la cobertura y verifica correcciones, y no puede tocar la lista de usuarios ni los propietarios. Deja **Usuario con acceso restringido** para quien solo mira: un socio, un inversor, una auditoría previa.

Verás en bastantes blogs que una agencia necesita ser propietaria para trabajar. El argumento se apoya en algo real: **aquí la documentación de Google se contradice consigo misma**.

- La tabla de permisos marca "Enviar sitemaps" y "Retirar URLs" como disponibles para el usuario con acceso total.
- La [página del informe Sitemaps](https://support.google.com/webmasters/answer/7451001?hl=es) dice lo contrario: "Para enviar un sitemap mediante el informe 'Sitemaps', debes tener permisos de propietario en la propiedad".
- La [página de la herramienta de retirada](https://support.google.com/webmasters/answer/9689846?hl=es) también: "Para usar esta herramienta, debes ser el propietario de la propiedad en Search Console".

En la práctica, da acceso total. Si al enviar el sitemap tu proveedor se topa con el muro del permiso, la propia página ofrece la alternativa: "puedes incluir el sitemap en tu archivo robots.txt en lugar de enviarlo con este informe". Y si de verdad hace falta propiedad, dala como **propietario delegado**, que se quita desde la interfaz sin tocar ningún token.

Lo que Google reserva al propietario y conviene que controles tú: añadir usuarios, añadir o quitar propietarios y vincular la cuenta de Google Analytics. Esa vinculación créala tú en una sesión compartida, igual que con [los accesos de GA4](/blog/dar-acceso-google-analytics-4).

## ¿Por qué quitar a un propietario de la lista no le quita el acceso?

Porque el acceso de un propietario verificado no vive en la lista de usuarios, sino en el token que puso en tu sitio. Google lo dice así: "cuando quitas a un propietario de una propiedad de Search Console, ya no puede acceder a la propiedad, pero sus tokens de verificación no se eliminan ni se revocan". Y añade: "mientras el token de verificación de un usuario permanezca en una propiedad, el propietario eliminado puede volver a verificarla".

Es lo que pasa cuando tu agencia anterior verificó el dominio con su registro DNS o su etiqueta. Para cortar de verdad hay que eliminar sus tokens: "si un propietario ha utilizado varios métodos de verificación, debes eliminar todos los tokens de esa persona". Al menos te enteras si vuelve: "si un propietario que has quitado se vuelve a verificar a sí mismo, todos los propietarios recibirán una notificación".

Antes de borrar tokens a lo bruto, el aviso de Google: un mismo token "se puede reutilizar en diversos servicios para verificar propiedades (como Search Console, Merchant Center, Google Workspace, etc.)" y eliminarlos "podría afectar negativamente a otros servicios que dependan de ellos".

## ¿Cómo quito el acceso a Search Console?

Mismo sitio: propiedad, Ajustes, Usuarios y permisos. Y después, literal: "selecciona el menú situado junto al usuario que quieras eliminar y haz clic en Quitar acceso". "El cambio debería surtir efecto enseguida."

Dos cosas que te vas a encontrar ahí:

- Si sale "una advertencia en la que se indica que es posible que el usuario vuelva a tener acceso", es que "el usuario es un propietario verificado y tiene uno o varios tokens de propiedad que podrían utilizarse para recuperar el acceso a esta propiedad". Google remata: "quita los tokens que aparecen en la notificación para evitar que el usuario recupere el acceso". La lista también se consulta en esa misma página "haciendo clic en Tokens de propiedad no utilizados".
- Si la opción de cambiar permisos aparece inactiva, "significa que el usuario es un propietario verificado". A un propietario verificado puedes quitarlo, "pero no cambiar su nivel de acceso a uno inferior".

Revisa la lista cada trimestre, igual que [los niveles de acceso de Google Ads](/blog/dar-acceso-google-ads) o [quién puede publicar en Tag Manager](/blog/dar-acceso-google-tag-manager). Aquí además ves si queda algún token de un proveedor de hace tres años.

## Los fallos habituales

**Tener un único propietario verificado.** Es el riesgo gordo y casi nadie lo mira: "si todos los propietarios verificados pierden el acceso a una propiedad de Search Console, también lo perderán todos los usuarios", avisa Google en la [página de verificación de propiedad](https://support.google.com/webmasters/answer/9008080?hl=es). Que haya dos, los dos de tu empresa.

**Quitar el registro DNS una vez verificado.** La verificación no es un trámite de una vez: "Search Console comprueba periódicamente si el token de verificación aún está y todavía es válido", y si deja de confirmarlo, "tus permisos sobre esa propiedad caducarán después de un determinado periodo de gracia". Google lo marca como importante: "no quites el registro DNS de tu proveedor, ni siquiera después de haberse hecho la verificación".

**Dar acceso a la propiedad equivocada.** Según la [página de tipos de propiedad](https://support.google.com/webmasters/answer/34592?hl=es), la de dominio incluye "todos los subdominios (m, www, etc.) y varios protocolos (http, https, ftp)", mientras que la de prefijo de URL "incluye solo las URLs con el prefijo especificado, incluido el protocolo (http/https)". Si tienes las dos, da acceso a la de dominio.

## Preguntas frecuentes

**¿Qué permiso necesita una agencia SEO en Search Console?**
Usuario con acceso total. Cubre rendimiento, inspección de URLs, cobertura y verificación de correcciones. Si necesita enviar sitemaps o pedir retiradas, hazlo tú o dale propietario delegado, que se revoca con un clic.

**¿Puede alguien con acceso quitar mi web de Google?**
Puede pedir una retirada temporal, y recuperarlo no es inmediato: Google la describe como "unos seis meses" y, frente a la herramienta de contenido obsoleto, como un "periodo limitado (180 días)". Motivo suficiente para no repartir permisos de más.

**¿Cuántos usuarios puede tener una propiedad de Search Console?**
"Una propiedad puede tener un máximo de 100 usuarios que no sean propietarios", y "se pueden añadir a una propiedad hasta un máximo de 500 propietarios verificados y delegados en total". Los verificados "no tienen un máximo por propiedad".

**¿Y si mi web no está verificada todavía?**
Entonces el primer paso no es dar acceso, es verificar. Los métodos que lista Google son subida de archivos HTML, etiqueta HTML, código de seguimiento de Google Analytics, Google Tag Manager, cuenta de Google Sites o Blogger y proveedor de nombres de dominio. En una propiedad de dominio es "solo verificación del registro DNS", salvo que el sitio esté "en un producto de Google, como Blogger o Google Sites".

**¿Dar acceso a Search Console da acceso a Google Ads o a Analytics?**
No. Cada producto tiene sus permisos. Tu proveedor de paid normalmente no necesita Search Console, que es orgánico; necesita [acceso a Google Ads](/blog/dar-acceso-google-ads) y a [Tag Manager](/blog/dar-acceso-google-tag-manager).

## Qué pedirle a quien entra

Search Console es la única fuente que te dice cómo te ve Google, así que de ahí debería salir un diagnóstico: qué se indexa y qué no, y dónde se cae el clic. Es el material de una [auditoría SEO técnica que sirva para algo](/blog/auditoria-seo-tecnica), y si quieres esos datos fuera de la interfaz, mira [qué herramientas SEO tienen API y cuánto cuestan](/blog/mejores-herramientas-seo-api).

En [Scale It](/servicios/seo) pedimos Usuario con acceso total y nada más. Si quieres que revisemos quién tiene acceso a tu propiedad, [media hora y lo miramos](/#contacto).
