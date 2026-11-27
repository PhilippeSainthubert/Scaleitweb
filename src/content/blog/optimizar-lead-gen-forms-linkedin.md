---
title: "Cómo optimizar los Lead Gen Forms de LinkedIn en B2B"
description: "El orden de revisión que arregla la calidad del lead: dónde acaban tus leads, cuántos campos poner, qué pregunta filtra y la columna que dice si pagas por Gmail."
pubDate: 2026-11-27
author: "Philippe Saint-Hubert"
cluster: "paid"
tags: ["paid", "linkedin ads", "lead gen forms", "B2B"]
---

Se optimiza en este orden: a dónde llegan los leads, formato y objetivo del anuncio, número de campos, pregunta de cualificación, oferta y pantalla de confirmación. Y el arreglo que más cambia la calidad no es recortar campos: es activar la validación de correo de empresa y añadir las columnas de correo de empresa al informe, porque hasta que lo haces no sabes qué parte de tus leads te dejó un Gmail.

## ¿En qué orden se revisa un Lead Gen Form?

| Orden | Qué revisas | Señal de que hay problema |
|---|---|---|
| 1 | Integración con el CRM y campos ocultos | Descargas los leads a mano en CSV |
| 2 | Formato y objetivo del anuncio | Mensajes y conversación con rotación cambiada sin saberlo |
| 3 | Número de campos | Muchas aperturas de formulario y pocos envíos |
| 4 | Pregunta de cualificación y correo de empresa | Tres campos prerrellenados y cero filtros |
| 5 | Oferta: titular, detalles e imagen | El mismo formulario lleva meses rotando |
| 6 | Pantalla de confirmación | El lead no recibe lo que le prometiste |

Si solo vas a tocar una cosa, toca la 4. Es la única que cambia a quién te llega.

## ¿Por qué se empieza por la integración y no por el formulario?

Porque los datos caducan. La [ayuda de descarga de leads](https://www.linkedin.com/help/lms/answer/a425750) dice que "collected member profile data can only be stored for one year because of our member privacy policy", mientras que "analytics and performance metrics will remain in Campaign Manager beyond the one year time frame". Y aquí LinkedIn se contradice: su [guía de Lead Gen Forms](https://www.linkedin.com/business/marketing/blog/lead-generation/how-to-use-linkedin-lead-gen-forms), firmada por Alexandra Rynne el 19 de agosto de 2025, afirma que "you'll have access to lead data for 90 days". Un año en la ayuda, 90 días en el blog. Da igual cuál valga: sincroniza con el CRM y no uses Campaign Manager como almacén.

La [página de integración](https://www.linkedin.com/help/lms/answer/a425316) no publica lista de socios, remite al LinkedIn Marketing Partner Directory y avisa de algo que rompe montajes: "some third-party CRM partners don't support member profile link fields, hidden fields, or custom checkboxes". Compruébalo antes de diseñar el formulario alrededor de esos campos, y repasa [cómo conectar tu CRM con las plataformas de anuncios](/blog/conectar-crm-con-plataformas).

**Los campos ocultos son el origen de la campaña.** Hasta 20, con nombre de hasta 250 caracteres, y el miembro no los ve: "members won't see hidden fields within the Lead Gen Form", según la [ayuda de campos ocultos](https://www.linkedin.com/help/lms/answer/a421421). Van en la sección **Settings** y ya no tienen que ser valores fijos: esa página admite parámetros dinámicos y publica la lista entera, `ACCOUNT_ID` y `ACCOUNT_NAME`, `CAMPAIGN_ID` y `CAMPAIGN_NAME`, `AD_SET_ID` y `AD_SET_NAME`, `AD_ID` y `AD_NAME`.

Dos límites: "they can't be added to an existing form that's attached to an active ad set", y para descargar hacen falta dos permisos a la vez, "viewer access or higher on the ad account and Lead Gen Forms manager or higher on your Company Page" ([quién puede qué](/blog/dar-acceso-linkedin-campaign-manager)). Antes de lanzar, usa **Send Test Lead** desde el menú **More**: te dice si el lead llega al CRM o no.

## ¿Qué formatos de anuncio admiten formulario?

Siete, según las [especificaciones oficiales](https://www.linkedin.com/help/linkedin/answer/a423364), que los listan así: "Single image", "Carousel image", "Video", "Event", "Message", "Document", "Conversation". Si te guías por la [página de producto](https://business.linkedin.com/advertise/ads/sponsored-content/lead-gen-ads), que solo habla de "Message Ads and Sponsored Content", te pierdes documento y evento: la ayuda está más al día que el material comercial.

Dos detalles de las [buenas prácticas del formulario](https://www.linkedin.com/help/linkedin/answer/a421181) que cambian cómo montas el anuncio de imagen única: "on mobile, taps on the intro text will open the Lead Gen Form" y "on desktop, clicks on the intro text will redirect to the landing page". El mismo clic hace dos cosas según el dispositivo, así que esa landing tiene que existir.

Y el modelo de compra, de la misma página: "ads with Lead Gen Forms can be purchased on a cost-per-click or cost-per-impression basis, but cost-per-lead is not available at this time". Pagas clics o impresiones, y nadie te garantiza un coste por lead. Por qué ese número engaña con ciclos largos está en [por qué el CPL te engaña en ciclos de venta largos](/blog/cpl-enganoso-ciclos-largos).

## ¿Cuántos campos tiene que tener el formulario?

Tres o cuatro, según LinkedIn, y el máximo es 12. Las [buenas prácticas](https://www.linkedin.com/help/linkedin/answer/a421181) dicen "choose three to four fields to use on your Lead Gen Form" e "including fewer than the maximum of 12 fields will likely improve conversion rates". El [post de 10 consejos](https://www.linkedin.com/business/marketing/blog/linkedin-ads/10-ways-to-make-better-use-of-lead-gen-forms-on-linkedin), de Alexandra Rynne y fechado el 6 de diciembre de 2019, lo pone en otro umbral: "we find that forms with five or fewer questions see the highest completion rates". Son dos cifras distintas de la misma casa y ninguna publica el dato detrás, así que trátalas como orientación.

El diagnóstico sí es útil, y es literal: "if you have high form opens but low lead volume, consider decreasing the number of fields on your Lead Gen Form template or consider revising the verbiage in your creative". Esa es la señal que miras en el informe, no el número de campos en abstracto.

Los límites de cada pieza, todos de las [especificaciones](https://www.linkedin.com/help/linkedin/answer/a423364):

| Elemento | Límite oficial |
|---|---|
| Titular | 60 caracteres |
| Detalles | 160 caracteres |
| Campos de perfil | Hasta 12, con nombre, apellidos y correo preseleccionados |
| Preguntas personalizadas | Hasta 3, de 100 caracteres, y cuentan dentro de los 12 |
| Casillas de divulgación | Hasta 5, de 500 caracteres |
| Texto de política de privacidad | 2.000 caracteres |
| Mensaje de confirmación | 300 caracteres |
| Campos ocultos | Hasta 20, con nombre de 250 caracteres |
| Imagen del formulario | 552 x 200 px recomendado |

Dos avisos de esa página: "at least one predetermined or custom question is required to create a form" y "form language cannot be edited once the form is saved". Si creas el formulario en inglés, no lo pasas a español después.

## ¿Qué columna dice si tus leads son malos?

Las de correo de empresa, y casi nadie las activa. La [página de métricas de conversiones y leads](https://www.linkedin.com/help/lms/answer/a420212) define tres variantes de correo de empresa junto a las métricas normales del formulario:

| Métrica | Definición oficial |
|---|---|
| Lead form opens | "Number of times a member account opened a lead form." |
| Lead form completion rate | "Percentage of opened forms that were submitted (form submissions divided by form opens)." |
| Leads (Work email) | "Number of leads collected that don't use an established free or personal use email domain." |
| Lead form completion rate (Work email) | "Percentage of opened forms that were submitted that don't use an established free or personal use email domain." |
| Cost per lead (Work email) | "Amount spent per lead collected that doesn't use an established free or personal use email domain." |

Las tres de correo de empresa llevan la misma condición: "available only when using the work email predefined field". Es decir, si no pusiste el campo de correo de trabajo, no tienes ni el dato ni la forma de saber que te falta. Se ven eligiendo el conjunto de columnas de conversiones y leads en el informe, y la misma página avisa de que "lead metrics are only available for lead generation ad sets".

La diferencia entre **Leads** y **Leads (Work email)** es el número más honesto que te va a dar LinkedIn sin tocar el CRM: te dice qué porcentaje de lo que pagaste son correos personales.

Para que el filtro actúe y no solo mida, la [ayuda de campos](https://www.linkedin.com/help/lms/answer/a425337) describe la casilla **Validate work email**, que "allows you to block the most commonly used free email domains (for example, Hotmail, Yahoo, and Gmail) from being submitted in the work email field". Con su letra pequeña: "this option doesn't block every possible email domain" y "validating work email might improve the quality of leads, but the submission rates of your form might decrease". En B2B ese intercambio compensa, y además es lo único que se puede cambiar en un formulario ya asociado a un anuncio por mensaje activo.

## ¿Qué pregunta personalizada filtra de verdad?

Una de opción múltiple, nunca de texto libre. Hasta tres por formulario y, según la misma [ayuda de campos](https://www.linkedin.com/help/lms/answer/a425337), "custom questions are required fields that the member needs to answer to submit the form": es obligatorio responderlas, así que ahí está tu filtro real.

Tres detalles que deciden si funciona:

- **La primera respuesta viene marcada.** La página lo dice sin rodeos: "note: the first answer will be pre-selected by default". No pongas primero la opción que te interesa, o te la vas a encontrar en todos los leads.
- **Texto libre, lo mínimo.** El post de 2019 cifra el coste: "the addition of even one free-response custom question can yield a 3-4% drop in submission rate", y recomienda "whenever possible, consider using dropdown options for custom fields rather than write-ins".
- **Nada que haya que teclear.** La guía de 2025 señala cuáles: "Phone number and gender, or fields that may not be listed on a member's profile already, require the member to manually type in their information before submitting". Y tiene base: la ayuda de campos aclara que "gender will not be pre-filled from the member's profile information", y que el correo y el teléfono de trabajo, aunque se prerrellenen, están entre los que "can be edited by the member". Ese teléfono puede ser cualquier cosa.

## ¿Y el consentimiento, en España?

LinkedIn ya no pone la casilla por ti. Según la [página del cambio para clientes de la UE](https://www.linkedin.com/help/linkedin/answer/a426037), desde el 21 de abril de 2020 "we no longer display a default consent checkbox on Lead Gen Forms to LinkedIn members based in the European Union (EU)", y el motivo que da es "to enable more specific consent options".

Lo que queda en tu mano: "you can add disclosure checkboxes to your Lead Gen Forms to collect consent from members", con la opción de usar una por cada finalidad distinta. Van en la sección **Data Privacy** y admiten hasta cinco.

El problema es cuándo. Esa misma página: "disclosure checkboxes can't be added to or removed from forms that have been attached to ads in active ad sets", y la salida es dura: duplicar el formulario, crear un anuncio nuevo y asociárselo, porque "the form associated with an ad can't be changed". Si las casillas de consentimiento forman parte de tu base legal, se deciden antes de lanzar.

## ¿Qué se puede editar con la campaña en marcha?

Depende del estado y del formato, y la [ayuda de edición](https://www.linkedin.com/help/linkedin/answer/a426205) lo resuelve en tres casos:

| Situación del formulario | Qué puedes editar |
|---|---|
| "Form isn't associated with an ad in an active ad set." | "All fields except form language" |
| "Form is associated with a Sponsored Content ad in an active ad set." | Titular, detalles, URL y texto de política de privacidad, mensaje de confirmación, URL de destino, llamada a la acción del agradecimiento y validación de correo de empresa |
| "Form is associated with a Sponsored Messaging ad in an active ad set." | Solo la validación de correo de empresa |

Con un coste que hay que contar: "after editing an active Lead Gen Form, it will be resubmitted for ad review" y "ads associated with your Lead Gen Form may stop serving until the edited form is reviewed and approved". Editar para corregir una errata puede dejarte el conjunto parado. Hace falta rol de gestor de campañas o de cuenta.

## ¿Qué pongo en la pantalla de confirmación?

El activo, con enlace, porque LinkedIn no lo manda. Las [buenas prácticas](https://www.linkedin.com/help/linkedin/answer/a421181) son explícitas: "at this time, LinkedIn will not deliver automated content to the member on behalf of the advertiser", y la instrucción es "enter an ungated link to your asset in the thank you message". Mucha gente promete un informe en el anuncio y no lo entrega nunca.

La llamada a la acción tiene datos. La guía de agosto de 2025 publica estos CTR por botón, "according to our data" y sin fecha de la muestra: "Download Now (16.5% CTR)", "View Now (14.0%)", "Learn More (10.3%)", "Visit Company Website (9.8%)" y "Try Now (7.8%)". El patrón es claro: lo concreto se pulsa, lo vago no.

Y hay una opción mejor que descargar un PDF: reservar la reunión ahí mismo. La [ayuda de reserva de cita](https://www.linkedin.com/help/lms/answer/a7462413) dice que "LinkedIn currently allows Calendly or Chili Piper booking URLs to be used for appointment booking", se configura con **Book an appointment** en la sección **Confirmation**, y "this feature isn't currently available for message or conversation ads". Dos advertencias de la misma página: "all reschedules and cancellations must be handled via your automated scheduling tool" y, si no mapeas los campos, "members can still book appointments but will need to manually enter their information". Se mide con la métrica **Appointments booked** de la [página de métricas](https://www.linkedin.com/help/lms/answer/a420212), "total number of appointment bookings completed through the linked automated scheduling tool".

## Los cuatro errores que más se repiten en B2B

**Dejar el formulario sin tocar durante meses.** La guía de 2025 afirma que "only 10% of forms receive leads after their first 66 days in rotation", y el post de 2019 lo dice con otras palabras, "after the first ~10 weeks". Son datos de LinkedIn sin fuente publicada, pero la consecuencia es razonable: el formulario va en el calendario de revisión.

**Optimizar al envío.** Viene prerrellenado, así que premia a quien le cuesta poco enviarlo. El objetivo de contactos cualificados y la devolución desde el CRM están en [cómo optimizar campañas de LinkedIn Ads](/blog/optimizar-campanas-linkedin-ads).

**Medir sin desglosar por correo de empresa.** Sin el campo de correo de trabajo no existen las columnas que te dirían que el problema son los dominios gratuitos.

**Pedir el teléfono por si acaso.** Es editable, hay que teclearlo y baja el envío. Si nadie va a llamar en el día, no lo pidas.

## ¿Qué ha cambiado en los Lead Gen Forms en el último año?

Solo lo confirmado por fuente oficial, de los [cambios recientes de la Marketing API](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/recent-changes):

| Cambio | Qué implica para ti |
|---|---|
| Versión 202511: los campos ocultos pasan a admitir parámetros de seguimiento dinámicos | Un formulario sirve para toda la cuenta. Dejas de duplicar formularios solo para distinguir el origen |
| Versión 202602: `MAX_QUALIFIED_LEAD` como objetivo de optimización en campañas de generación de contactos, alimentado con la API de conversiones o con datos de CRM desde Business Manager | Es la pieza que permite optimizar el formulario a calidad y no a volumen |
| Versión 202605: `LEAD_GENERATION` pasa a ser objetivo admitido en anuncios de evento, junto a `BRAND_AWARENESS`, `WEBSITE_VISITS` y `ENGAGEMENT`. "The referenced event must have a lead gen form attached" y estar publicado | Un evento capta leads de forma nativa, con el formulario asociado antes de publicarlo |
| Versión 202605: nueva métrica `appointmentsScheduled`, que "measures the number of appointments booked through Lead Gen campaigns" | La reserva de cita entra en el informe y deja de vivir solo en Calendly o Chili Piper |
| Versión 202607: en anuncios por mensaje y conversación con objetivo `LEAD_GENERATION`, `creativeSelection` pasa a `OPTIMIZED` por defecto; antes se rechazaba con error 400 y se forzaba a `ROUND_ROBIN` | Si quieres rotación equitativa, ahora hay que pedirla: "to preserve even ad rotation, explicitly set `creativeSelection` as `ROUND_ROBIN`" |

Fuera de la tabla porque la nota no lleva versión ni fecha: la [documentación de sincronización de leads](https://learn.microsoft.com/en-us/linkedin/marketing/lead-sync/leadsync) avisa de que "lead forms for LinkedIn Pages and Showcase Pages are no longer available" y de que "existing lead forms continue to function as expected". La captación orgánica desde la página se acabó; lo que queda es paid.

Si quieres auditar esto con ayuda de un modelo, el guion está en la [skill de paid media para IA](/blog/skill-paid-media-para-ia). Y si el problema de fondo es que el origen del lead no sobrevive al viaje hasta el CRM, eso es trabajo de [RevOps y datos](/servicios/revops-crm) antes que de [paid](/servicios/paid).

## Preguntas frecuentes

**¿Cuántos campos debe tener un Lead Gen Form de LinkedIn?**
LinkedIn recomienda tres o cuatro, sobre un máximo de 12. En B2B, tres campos prerrellenados más una pregunta de opción múltiple obligatoria y la validación de correo de empresa es un punto de partida razonable: sigues en cuatro peticiones y ya filtras.

**¿Cómo mejoro la calidad de los leads de LinkedIn?**
Por este orden: activa la validación de correo de empresa, mira la diferencia entre Leads y Leads (Work email) en el informe, añade una pregunta obligatoria de opción múltiple y devuelve tus leads cualificados desde el CRM. Recortar segmentación es lo último.

**¿Se puede editar un formulario con la campaña activa?**
Parcialmente. Con contenido patrocinado puedes cambiar titular, detalles, política de privacidad, mensaje de confirmación, URL de destino, la llamada a la acción y la validación de correo de empresa. Con mensajería, solo la validación de correo. Y cualquier edición vuelve a revisión, con el riesgo de parar la entrega.

**¿Cuánto tiempo tengo para descargar los leads?**
La ayuda de Campaign Manager dice un año para los datos de perfil del miembro; el blog de LinkedIn sigue diciendo 90 días. Como no coinciden, sincroniza con el CRM desde el primer día y usa la descarga en CSV solo como respaldo.

**¿Formulario nativo o landing propia?**
Formulario cuando lo que te falta es volumen y el equipo contacta rápido. Landing cuando necesitas que el lead se gane el sitio: la fricción filtra, a cambio de menos leads y más coste. Si pruebas las dos, compara por lead con correo de empresa que llega a oportunidad, no por coste por lead.
