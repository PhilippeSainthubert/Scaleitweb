---
title: "Cómo optimizar campañas de LinkedIn Ads: qué revisar y en qué orden"
description: "El orden de revisión que más rinde en B2B: medición, estructura, pujas, segmentación, creatividades y formulario, con la señal oficial de problema en cada paso."
pubDate: 2026-11-25
author: "Philippe Saint-Hubert"
cluster: "paid"
tags: ["paid", "linkedin ads", "optimización", "B2B"]
---

Se optimiza en este orden: medición y conversiones, estructura y presupuesto, pujas, segmentación, creatividades y, al final, el formulario. Antes de tocar nada, una particularidad de LinkedIn: dos ajustes que amplían tu público vienen activados por defecto, así que parte del presupuesto se va a gente que tú no elegiste.

## ¿En qué orden hay que revisar una cuenta de LinkedIn Ads?

| Orden | Qué revisas | Señal de que hay problema | Cada cuánto |
|---|---|---|---|
| 1 | Insight Tag, conversiones y devolución desde el CRM | Optimizas a "clientes potenciales" y no a "clientes potenciales cualificados" | Mensual, y tras tocar la web |
| 2 | Estructura, presupuesto y ubicaciones | Audience Network y ampliación de público activados sin decidirlo | Mensual |
| 3 | Pujas y objetivo de optimización | Conjuntos juzgados antes de los siete días | Cada 2 ciclos de conversión |
| 4 | Segmentación y datos demográficos reales | Cargos y sectores que no son tu comprador | Cada 2 semanas |
| 5 | Creatividades | Menos de cuatro anuncios activos por conjunto | Cada 2 a 4 semanas |
| 6 | Formulario de generación de contactos | Tres campos, cero preguntas de cualificación | Trimestral, o ya si los leads son malos |

Si solo tienes una hora al mes, gástala en los pasos 1 y 4: son los que te dicen a quién estás comprando.

## ¿Por qué la medición va antes que las pujas?

Porque LinkedIn optimiza hacia el evento que le das, y en la mayoría de cuentas B2B ese evento es "formulario enviado". Mientras sea así, el sistema busca gente con facilidad para rellenar formularios, que no es gente que compra.

**Dónde mirar primero.** El seguimiento mejorado de conversiones del Insight Tag: menú **Measure**, **Signals manager**, **Insight Tag**, desplegable **Manage Insight Tag**, **Settings**, casilla **Enable enhanced conversion tracking**. La [ayuda de LinkedIn](https://www.linkedin.com/help/lms/answer/a423304) avisa de lo que pasa si está apagada: "si las cookies propias no están habilitadas, la precisión del seguimiento de conversiones puede verse afectada y podría provocar una pérdida de recuento de conversiones". Para cambiarlo necesitas rol de administrador de facturación, gestor de cuenta o gestor de campañas: ahí entra [cómo dar acceso a LinkedIn Campaign Manager](/blog/dar-acceso-linkedin-campaign-manager).

Con esa casilla activada, LinkedIn añade a las URL un identificador de clic, `li_fat_id`. Según la [documentación oficial](https://learn.microsoft.com/en-us/linkedin/marketing/conversions/enabling-first-party-cookies), la cookie dura 30 días desde el último clic, pero la correspondencia entre ese `li_fat_id` y el perfil del miembro se guarda 365 días: puedes mandar una conversión offline mucho después de que la cookie expire. Viene activado por defecto "para todos los Insight Tags nuevos creados recientemente", no para los viejos.

### El cambio que de verdad mueve la cuenta: optimizar a lead cualificado

LinkedIn tiene un objetivo de optimización llamado clientes potenciales cualificados. Se alimenta con la API de conversiones: tú decides en tu CRM qué lead es bueno y se lo devuelves.

Los requisitos, de la [página del objetivo](https://www.linkedin.com/help/lms/answer/a6553958) y de la [guía para crear el conjunto](https://www.linkedin.com/help/lms/answer/a7126307):

- Solo está disponible con el objetivo de generación de contactos, y **el anuncio tiene que llevar un formulario asociado**.
- "Debes tener al menos un lead cualificado para lanzar tu conjunto de anuncios con este objetivo de optimización".
- "Los datos de leads cualificados deben compartirse con LinkedIn en un plazo de 30 días para incluirse en la optimización".
- Volumen recomendado: "al menos cinco leads cualificados cada una o dos semanas", con "una fase de aprendizaje de dos semanas".
- Los informes se estrechan. Lo dice la [ayuda del objetivo de generación de contactos](https://www.linkedin.com/help/linkedin/answer/a422440): "los informes de conversión para el objetivo de optimización de leads cualificados se limitan solo al tipo de conversión de leads cualificados". Y no mezcles fuentes: usar a la vez la API y la sincronización de CRM de Business Manager "puede provocar duplicación en los informes y doble conteo de conversiones".

LinkedIn lo avisa: "puede que veas un aumento de leads cualificados a un coste por lead cualificado (CPQL) más bajo, aunque el coste por lead (CPL) general podría aumentar como resultado". Pagas más por lead y menos por lead bueno, y eso se explica a dirección antes de activarlo.

Según la [ayuda del objetivo de generación de contactos](https://www.linkedin.com/help/linkedin/answer/a422440), "si no tienes una integración de la API de conversiones configurada, se seleccionan los clientes potenciales como objetivo de optimización por defecto"; si sí la tienes, el conjunto "selecciona automáticamente los clientes potenciales cualificados". Montar la API no solo mide mejor: cambia lo que el algoritmo persigue.

Dos cosas de la [documentación de la API](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/conversions-api-schema) al montarlo. El `conversionHappenedAt` "debe estar dentro de los últimos 90 días": con ciclos de seis meses, la firma no te cabe. Y los identificadores de usuario son alternativos, no acumulativos: basta "al menos uno o más" de la lista (`SHA256_EMAIL`, `LINKEDIN_FIRST_PARTY_ADS_TRACKING_UUID` y otros).

La parte técnica está en [por qué hacen falta las conversiones desde servidor en B2B](/blog/conversiones-desde-servidor-b2b) y la operativa en [cómo conectar tu CRM con las plataformas de anuncios](/blog/conectar-crm-con-plataformas).

## ¿Qué revisar en la estructura y el presupuesto?

LinkedIn cambió el vocabulario y las guías viejas ya no describen tu pantalla. Lo que antes era grupo de campañas ahora es **campaña**, y lo que antes era campaña ahora es **conjunto de anuncios**: la ayuda oficial ya se titula ["Understanding settings for ad sets in Campaign Manager"](https://www.linkedin.com/help/lms/answer/a423332). El objetivo y el formato se eligen en el conjunto, y "no se pueden cambiar después de que el conjunto de anuncios se haya lanzado".

Dos límites irreversibles. La [ayuda sobre campañas](https://www.linkedin.com/help/lms/answer/a424035) avisa de que "una vez que un conjunto de anuncios se ha añadido a una campaña, no se puede mover", y la [ayuda de edición de campañas](https://www.linkedin.com/help/lms/answer/a425447) añade que, una vez activa, "no puedes editar el objetivo compartido de la campaña ni desactivar Dynamic Group Budget".

Y dos cifras de presupuesto que explican sorpresas en la factura. La [ayuda de presupuestos](https://www.linkedin.com/help/linkedin/answer/a422101) dice que "el gasto diario real puede ser hasta un 100 % superior al importe del presupuesto diario en un día determinado". Además, "cuando se fija un presupuesto total de campaña", la [ayuda de presupuestos mínimos](https://www.linkedin.com/help/lms/answer/a9486341) exige un presupuesto sin gastar para poder lanzar un conjunto nuevo: 100 USD, que en su tabla de divisas son 100 EUR. Cuánto hace falta para que el canal tenga sentido está en [cuánto presupuesto hace falta para que paid funcione en B2B](/blog/presupuesto-minimo-paid-b2b).

## ¿Cuándo hay que tocar las pujas y cuándo esperar?

LinkedIn tiene tres estrategias y cada una se cobra distinto, según la [ayuda de pujas](https://www.linkedin.com/help/linkedin/answer/a421112):

| Estrategia | Cómo se cobra | Objetivos disponibles | Para qué sirve |
|---|---|---|---|
| Entrega máxima (automática) | CPM | Todos | "Diseñada para entregar el presupuesto completo". Sin puja ni tope |
| Límite de coste | CPM | Marca, visitas al sitio web, interacción, vídeo y generación de contactos | Fijas un coste medio por resultado que Campaign Manager "intenta no superar" |
| Puja manual | CPC, CPM, CPV, CPS | Todos | Control máximo, pero "puede que no obtenga los mismos resultados que las estrategias optimizadas" |

Tres reglas que salen de la documentación:

**El objetivo de optimización manda sobre la puja, no al contrario.** Si eliges clientes potenciales cualificados, "la única estrategia de puja disponible es entrega máxima", según la [ayuda del objetivo de generación de contactos](https://www.linkedin.com/help/linkedin/answer/a422440); la [matriz de precios por objetivo](https://www.linkedin.com/help/lms/answer/a427513) lo confirma con una sola fila para ese objetivo. Y en la dirección opuesta, esa misma ayuda: "si cambias el objetivo de optimización de un conjunto de anuncios, solo puedes seleccionar puja manual". Tocar el objetivo en un conjunto ya creado te echa de la puja automática, así que mejor duplicarlo.

**No juzgues nada antes de una semana.** Las [buenas prácticas de configuración](https://www.linkedin.com/help/linkedin/answer/a422123) recomiendan "una programación mínima de siete días para ver resultados" y montar el conjunto "al menos 48 horas antes de la fecha de inicio". Además, la [ayuda de pujas](https://www.linkedin.com/help/linkedin/answer/a421112) avisa de que, con entrega máxima, "los resultados pueden fluctuar durante la fase de aprendizaje".

**La sugerencia de puja no es un precio.** Es "una estimación de los costes o pujas con los que compiten actualmente otros anunciantes que se dirigen a la misma audiencia". LinkedIn remata: "no hay un coste fijo por resultado".

## ¿Dónde está el desperdicio en segmentación?

En dos casillas que vienen marcadas.

**Ampliación de público.** Muestra tus anuncios a cuentas "con atributos similares a tu audiencia objetivo" y, según la [ayuda oficial](https://www.linkedin.com/help/linkedin/answer/a418929), "se habilita automáticamente en los conjuntos de anuncios donde está disponible". Está en la sección **Audience**. Y el reporte no lo separa: "las métricas como impresiones y clics incluirán actividad tanto de tu audiencia objetivo como de la audiencia de ampliación". Con segmentación por cargo, apágala.

**LinkedIn Audience Network.** Lleva tus anuncios fuera del feed, a apps y webs de terceros, y también viene puesto: "se habilita automáticamente para los conjuntos de anuncios nuevos de imagen única, carrusel, documento y vídeo", según la [ayuda de activación](https://www.linkedin.com/help/lms/answer/a420372). La casilla está en **Placements**. Puedes medirlo antes de decidir: desplegable **Breakdown**, opción **On/Off Network**. La [ayuda del Audience Network](https://www.linkedin.com/help/linkedin/answer/a423409) dice que esas impresiones y clics "no están acreditados por el MRC", y las [FAQ del Audience Network](https://www.linkedin.com/help/lms/answer/a425378) cierran la puerta a probarlo por separado: "actualmente no puedes ejecutar un conjunto de anuncios separado para llegar a tu audiencia solo fuera de LinkedIn". Si lo dejas, usa una lista de bloqueo: admite [hasta 100.000 dominios](https://www.linkedin.com/help/lms/answer/a426135).

**El tamaño de la audiencia.** Las [buenas prácticas del conjunto de anuncios](https://www.linkedin.com/help/linkedin/answer/a422123) fijan "un tamaño mínimo de audiencia de 300 miembros para ejecutar una campaña", sugieren "un mínimo de 50.000 miembros para obtener resultados" y recomiendan "añadir al menos cuatro atributos a la sección INCLUDE". En España, un ICP de cargo más sector más tamaño se queda corto rápido: ahí se decide si el dinero rinde más aquí o en buscador, comparado en [Google, LinkedIn o Meta: dónde invertir en B2B](/blog/google-linkedin-o-meta-en-b2b).

**La comprobación que nadie hace.** El informe de datos demográficos profesionales, en **Advertise** y luego **Professional Demographics**. Reparte impresiones, clics y conversiones por cargo, empresa, sector, antigüedad y tamaño: es la única forma de saber si pagas por el comité de compra o por becarios. La [ayuda del informe](https://www.linkedin.com/help/lms/answer/a424171) avisa de que esas métricas "son aproximadas".

## ¿Qué miro en las creatividades?

Volumen antes que perfección, aunque la cifra depende de qué página de LinkedIn abras. Las [buenas prácticas del conjunto](https://www.linkedin.com/help/linkedin/answer/a422123) recomiendan "crear al menos cuatro creatividades de anuncio para cada conjunto", la [ayuda de rotación de anuncios](https://www.linkedin.com/help/lms/answer/a423702) sugiere "probar cuatro o cinco variaciones en un conjunto" y las [buenas prácticas de creatividades](https://www.linkedin.com/help/linkedin/answer/a420488) se quedan en "crear de dos a cuatro variaciones de anuncio en un conjunto".

Y una trampa de la ayuda de rotación: la opción recomendada, optimizar para el rendimiento, sirve las creatividades "de forma equitativa al principio" y después manda más impresiones a las que mejor funcionan "para optimizar la tasa de clics del conjunto de anuncios". Optimiza al clic, no a la conversión. Si una creatividad tiene CTR bajo y leads buenos, la rotación automática la entierra: sepárala en su propio conjunto.

Para medir el desgaste, activa las columnas de entrega: desplegable **Columns**, opción **Delivery**. Ahí está la frecuencia media, con el aviso de la [ayuda oficial](https://www.linkedin.com/help/lms/answer/a426154) de que esas métricas "son modeladas, no cifras exactas" y de que conviene "usarlas solo de forma direccional, y no para comparaciones históricas de rendimiento".

Si tu plan pasa por anuncios con la cara de una persona en lugar del logo, los requisitos están en [cómo promocionar la publicación de un empleado en LinkedIn Ads](/blog/promocionar-publicacion-de-un-empleado-linkedin-ads).

## El paso que más rinde en B2B: el formulario

El formulario de generación de contactos viene prerrellenado con los datos del perfil: es el más fácil de enviar de internet, y sin filtros eso es un problema.

Las palancas reales, con su letra pequeña, de la [ayuda de campos](https://www.linkedin.com/help/lms/answer/a425337) y las [especificaciones](https://www.linkedin.com/help/linkedin/answer/a423364):

- **Validar el correo de empresa.** Si incluyes el campo de correo de trabajo, aparece la opción *Validate work email*, que "permite bloquear los dominios de correo gratuitos más utilizados (por ejemplo, Hotmail, Yahoo y Gmail)". LinkedIn es honesto sobre el coste: "no bloquea todos los dominios posibles" y "puede mejorar la calidad de los leads, pero las tasas de envío de tu formulario pueden disminuir". En B2B compensa.
- **Preguntas personalizadas.** Hasta tres, de 100 caracteres, y "son campos obligatorios que el miembro necesita responder para enviar el formulario". Una pregunta bien hecha (número de empleados, presupuesto, plazo) filtra más que cualquier exclusión de segmentación. Ojo: en las de opción múltiple "la primera respuesta se preselecciona por defecto", así que no pongas la mejor opción primera.
- **Los campos ocultos.** Hasta 20 campos adicionales "con fines de seguimiento". Es por donde metes el origen de la campaña para que el CRM sepa de dónde vino el lead, el requisito del paso 1.
- **Lo que el miembro puede cambiar.** El género "no se prerrellena a partir de la información del perfil del miembro". El correo de trabajo y el teléfono de trabajo sí se prerrellenan, pero figuran en la lista de campos "que el miembro puede editar". No des por hecho que ese teléfono es real.

Si tu equipo comercial no puede llamar en el día, el formulario trabaja contra ti: el objetivo de conversiones en el sitio web filtra por fricción, a cambio de más coste por lead y menos volumen.

## ¿Qué ha cambiado en LinkedIn Ads en el último año?

Solo lo confirmado por fuente oficial.

| Cambio | Qué implica para ti | Fuente |
|---|---|---|
| Grupo de campañas pasa a llamarse campaña, y campaña pasa a llamarse conjunto de anuncios | La API sigue usando `adCampaignGroups` y `adCampaigns`, así que tus integraciones no se rompen, pero tus cuadros de mando ya no coinciden con la pantalla | [Ayuda de LinkedIn, ya renombrada](https://www.linkedin.com/help/lms/answer/a423332), y la [documentación de la API](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns), que sigue llamando `adCampaigns` al endpoint |
| Objetivo de optimización de leads cualificados, en despliegue gradual | Puedes optimizar a tu definición de lead bueno, no al formulario. LinkedIn avisa: "lo estamos liberando gradualmente" | [Ayuda del objetivo de generación de contactos](https://www.linkedin.com/help/linkedin/answer/a422440) |
| Versión 202608 de la API: tipos `MARKETING_QUALIFIED_LEAD` y `SALES_QUALIFIED_LEAD` | Puedes devolver MQL y SQL por separado "para la optimización de campañas de embudo más profundo" | [Cambios recientes de la Marketing API](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/recent-changes) |
| Versión 202609: la ventana de atribución admite 180 días "además de la opción de 365 ya existente", en siete tipos de conversión (`SUBMIT_APPLICATION`, `PURCHASE`, `ADD_TO_CART`, `QUALIFIED_LEAD`, `LEAD`, `MARKETING_QUALIFIED_LEAD` y `SALES_QUALIFIED_LEAD`) | Es una opción intermedia nueva, no un máximo nuevo: 365 días sigue siendo el techo. Y "está disponible en todas las versiones activas" | Misma fuente |
| Herramientas creativas con IA: brand kit, borrador con IA, variantes y creación flexible | Generar cinco variantes deja de ser un problema de recursos. Decidir qué decir, sí lo es | [LinkedIn, 1 de julio de 2026](https://www.linkedin.com/business/marketing/blog/linkedin-ads/introducing-linkedins-new-creative-tools-draft-with-ai-brand-kit-and-ad-variants) |

LinkedIn está moviendo la optimización desde el clic hacia lo que pasa en tu CRM.

## Los cuatro errores que más se repiten en B2B

**Optimizar al formulario enviado.** Es el error raíz. La alternativa ya está en la herramienta, el objetivo de leads cualificados, y solo pide que devuelvas datos.

**Juzgar por coste por lead.** En LinkedIn el CPL es alto y provoca decisiones rápidas y malas. El razonamiento está en [por qué el CPL te engaña en ciclos de venta largos](/blog/cpl-enganoso-ciclos-largos).

**Dejar las dos casillas de ampliación como vienen.** Su rendimiento no aparece separado en el reporte estándar, así que míralas antes de concluir que tu segmentación falla.

**Editar en lugar de duplicar.** Cambiar el objetivo de un conjunto vivo te obliga a puja manual, y el objetivo y el formato no se pueden cambiar tras el lanzamiento.

El mismo recorrido en los otros dos canales está en [cómo optimizar campañas de Google Ads en B2B](/blog/optimizar-campanas-google-ads-b2b) y [cómo optimizar campañas de Meta Ads en B2B](/blog/optimizar-campanas-meta-ads-b2b). Si el cuello de botella es que el CRM y la plataforma no se hablan, eso es trabajo de [RevOps y datos](/servicios/revops-crm) antes que de [paid](/servicios/paid).

## Preguntas frecuentes

**¿Cada cuánto hay que optimizar una campaña de LinkedIn Ads?**
Nunca antes de siete días, la programación mínima que LinkedIn recomienda para ver resultados. Luego: segmentación cada dos semanas, creatividades cada dos a cuatro, pujas y estructura cada dos ciclos de conversión, y medición mensual.

**¿Cómo dejo de recibir leads de mala calidad en LinkedIn Ads?**
Por este orden: apaga ampliación de público y Audience Network si tu segmentación es por cargo, activa la validación de correo de empresa, añade una pregunta de cualificación obligatoria y devuelve tus leads cualificados por la API de conversiones. Tocar la segmentación es lo último.

**¿Qué estrategia de puja conviene en LinkedIn Ads?**
Si optimizas a leads cualificados, no hay elección: entrega máxima. Si no, empieza por entrega máxima y pasa a límite de coste solo cuando tengas un coste por resultado estable que quieras defender. La puja manual es para casos concretos, no para empezar.

**¿Puedo optimizar a la venta firmada en lugar de al lead?**
No con la firma como evento: la API exige que la conversión esté dentro de los últimos 90 días y los leads cualificados tienen que llegar en 30. Con ciclos largos, devuelve una etapa intermedia (oportunidad creada, reunión celebrada) y usa la venta solo para informar.

**¿Merece la pena el Audience Network en B2B?**
Se comprueba en una semana: activa el desglose On/Off Network y compara coste por resultado dentro y fuera de LinkedIn.
