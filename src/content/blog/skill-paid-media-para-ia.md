---
title: "Skill de paid media para IA: auditar campañas contra el CRM"
description: "La skill auditoria-paid-b2b, descargable: cruza Google, Meta y LinkedIn Ads con tu CRM, calcula el coste por oportunidad y respeta la ventana de cada plataforma."
pubDate: 2026-09-15
updatedDate: 2026-11-20
author: "Philippe Saint-Hubert"
cluster: "paid"
tags: ["skills", "paid media", "Google Ads", "LinkedIn Ads", "Meta Ads"]
---

Una skill de paid media para IA es un fichero de instrucciones que el modelo carga cuando le pides auditar una cuenta publicitaria, y aquí abajo está la nuestra entera y descargable: `auditoria-paid-b2b` revisa Google Ads, Meta Ads y LinkedIn Ads cruzando el gasto con lo que pasó después en el CRM, calcula el coste por oportunidad cualificada en lugar del coste por lead y no propone tocar una puja hasta haber validado el seguimiento. Lo que la hace distinta de un prompt de auditoría genérico es que trabaja con los límites reales de cada plataforma: Google acepta una conversión importada hasta 90 días después del clic, LinkedIn exige que el evento sea de los últimos 90 días y Meta solo admite eventos de los últimos 7, y eso cambia qué puedes devolver desde el CRM y cuándo.

Porque si le pasas a una IA un export de Google Ads y nada más, te hablará del CTR, de subir pujas donde el coste por conversión es mejor y de probar extensiones. Todo razonable, y casi todo irrelevante para la única pregunta que importa en B2B: qué campaña trajo los contratos que se firmaron. Esa respuesta no está en la plataforma publicitaria, está en el CRM.

## ¿Por qué convertir una auditoría de paid en una skill?

Una skill es un archivo `SKILL.md` con instrucciones que el modelo carga cuando la tarea encaja. En paid, lo valioso es el orden: qué se comprueba antes de qué. Una auditoría que empieza por las pujas y deja el seguimiento para el final llega a conclusiones equivocadas con mucha seguridad.

Al ser un [estándar abierto](https://agentskills.io/specification), el mismo archivo sirve en Claude, ChatGPT, Codex, Gemini CLI o Cursor. Y como casi todas estas herramientas leen hojas de cálculo, basta con subirle los exports.

## ¿Qué hace la skill auditoria-paid-b2b?

Recibe el export de campañas de los últimos meses, los datos del CRM del mismo periodo y dos cifras: el ciclo de venta medio y el ticket medio. Devuelve un resumen, una tabla con el veredicto de cada campaña (mantener, arreglar, cortar o sin datos suficientes), los problemas de seguimiento, el desperdicio detectado y un máximo de cinco acciones priorizadas.

Si no le das datos del CRM, lo dice en la primera línea: sin ellos puede revisar el seguimiento y la estructura, pero no la rentabilidad.

## ¿Por qué no toca una puja antes de revisar el seguimiento?

Porque optimizar con datos rotos es acelerar en la dirección equivocada. Lo primero que hace la skill es listar qué cuenta como conversión en cada plataforma. Es muy común encontrar tres acciones marcadas como principales a la vez, por ejemplo la visita a la página de gracias, el clic en el teléfono y el tiempo en página, lo que infla todas las cifras de la cuenta.

En Google Ads esto se comprueba en un sitio concreto y con una regla clara: una acción marcada como principal se reporta en la columna "Conversiones" y se usa para pujar, mientras que una secundaria solo aparece en "Todas las conv." y no se usa para pujar, según la [documentación de acciones de conversión principales y secundarias](https://support.google.com/google-ads/answer/11461796). Dos consecuencias prácticas: si el informe que ve dirección sale de "Todas las conv.", está sumando cosas que no son negocio; y si alguien marcó como principal el clic en el teléfono "para dar más señal", la puja automática lleva meses persiguiendo eso.

Después la skill busca conversiones contadas dos veces, comprueba si el origen del lead llega al CRM sin sobrescribirse y si el CRM devuelve algo a las plataformas. El veredicto es fiable, parcial o roto. Si es roto, la primera recomendación es arreglarlo, y ninguna otra va delante. Ese orden es el mismo que seguimos a mano en [cómo optimizar campañas de Google Ads en B2B](/blog/optimizar-campanas-google-ads-b2b) y en [auditar una cuenta de Google Ads heredada](/blog/auditar-cuenta-google-ads-heredada).

## ¿Por qué coste por oportunidad y no coste por lead?

Porque lo barato de captar suele serlo porque el interés es superficial. Un ejemplo con números inventados, solo para ver el mecanismo:

| Campaña | Gasto | Leads | Coste por lead | Oportunidades | Coste por oportunidad |
|---|---|---|---|---|---|
| A: formulario instantáneo en Meta | 3.000 € | 150 | 20 € | 3 | 1.000 € |
| B: búsqueda en Google por el problema | 3.000 € | 40 | 75 € | 10 | 300 € |

Mirando el coste por lead, la campaña A es casi cuatro veces mejor y la plataforma la premiará. Mirando el coste por oportunidad cualificada, es más de tres veces peor. La skill ordena las campañas por la segunda columna y señala expresamente las que invierten el orden, porque suelen ser justo las que se están escalando.

Lo explicamos con más detalle en [por qué el CPL te engaña en ciclos de venta largos](/blog/cpl-enganoso-ciclos-largos).

## ¿Por qué lee por cohortes?

Porque en B2B lo que gastas este mes se cierra dentro de dos, cuatro o seis meses. Comparar el gasto de septiembre con los cierres de septiembre no significa nada: son cosas de meses distintos.

La skill agrupa los leads por mes de entrada y sigue qué pasó con cada grupo. Por eso pide histórico de al menos un ciclo de venta completo. Y cuando una campaña tiene menos de diez oportunidades en el periodo, no saca conclusiones de su tasa y la marca como sin datos suficientes, en lugar de fingir una precisión que no hay.

Si además te preguntas qué canal descubre y cuál cierra, [el último clic te está mintiendo](/blog/atribucion-ultimo-clic-miente), y la skill tiene prohibido atribuir un cierre por último clic sin decirlo.

## ¿Qué desperdicio busca en cada plataforma?

El que más se repite en cuentas B2B, con una lista por plataforma que tienes entera en el paso 3 de la skill: búsquedas de empleo o formación y concordancia amplia sin negativas en Google, intereses genéricos y formularios sin preguntas de cualificación en Meta, segmentación por sector sin cargo y Audience Network sin revisar en LinkedIn.

Lo importante es que siempre que los datos lo permiten lo cuantifica en euros. Un "hay desperdicio en búsquedas" no mueve a nadie; "1.400 € en seis meses en búsquedas de empleo" sí.

## ¿Hacia qué evento debería optimizar la plataforma?

Si optimiza hacia leads y tu ciclo es largo, la skill propone un evento intermedio que ocurra con frecuencia razonable y que correlacione con el cierre, como una reunión celebrada o una oportunidad creada, enviado desde el CRM a la plataforma.

Y avisa del límite, que es real: si el evento es demasiado raro, la plataforma no tiene datos suficientes para aprender. Hay que buscar el punto entre frecuencia y relación con el cierre. Para que eso funcione, [el CRM tiene que estar conectado con las plataformas](/blog/conectar-crm-con-plataformas) y las conversiones tienen que salir [desde servidor y no solo del navegador](/blog/conversiones-desde-servidor-b2b).

## ¿Cuánto tiempo tienes para devolverle un cierre a la plataforma?

Entre 7 y 90 días desde el clic o el evento, según la plataforma. Es el dato que decide si puedes devolver el contrato firmado o solo una etapa intermedia, y ninguna auditoría sirve si lo ignora:

| Plataforma | Límite para subir el evento | Fuente oficial |
|---|---|---|
| Google Ads, importación con GCLID | No se importa si se sube más de **90 días** después del último clic asociado | [Guidelines for importing offline conversions](https://support.google.com/google-ads/answer/15081888) |
| Google Ads, conversiones mejoradas para leads | **63 días** después del último clic | [la misma página](https://support.google.com/google-ads/answer/15081888) |
| LinkedIn Ads, Conversions API | El evento tiene que ser de los **últimos 90 días**; la ventana post-clic de la regla se elige entre 1, 7, 28, 30 y 90 días, y admite **180 o 365** en los tipos LEAD, QUALIFIED_LEAD, MARKETING_QUALIFIED_LEAD, SALES_QUALIFIED_LEAD, PURCHASE, SUBMIT_APPLICATION y ADD_TO_CART | [Conversions API de LinkedIn](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/conversions-api) |
| Meta, Conversions API para CRM | El `event_time` puede estar como máximo **7 días** antes del envío, con `action_source = system_generated` | [Conversions API for CRM](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/conversions-api-crm-for-platforms) |

De ahí salen tres decisiones que la auditoría tiene que tomar y que casi nadie toma:

- **En Meta, el cierre no cabe.** Con un ciclo de tres meses, cuando firmas han pasado 90 días y el límite son 7, así que el evento se rechaza. Lo que se devuelve a Meta son etapas tempranas (lead cualificado, reunión agendada) y se envían a diario, no en un volcado trimestral. Meta misma recomienda mandar varias etapas del embudo, empezando por el lead en bruto.
- **En LinkedIn, el tipo de conversión importa más que el nombre.** Si creas la regla con una ventana post-clic de 30 días, un cierre a tres meses no se atribuye nunca. La ventana larga de 180 o 365 días está disponible en varios tipos, el lead en bruto incluido; lo que añade la versión 202608 de la API son los tipos específicos de lead cualificado de marketing y de ventas, útiles para separar etapas sin inventar nombres.
- **En Google, la ventana depende de con qué casas.** Si subes por GCLID tienes 90 días; si usas conversiones mejoradas para leads, 63. Y las estadísticas importadas tardan unas 3 horas en aparecer en la cuenta, así que no juzgues una importación a los diez minutos.

Un detalle que ahorra discusiones con legal: no hace falta mandar correos. LinkedIn acepta como identificador la respuesta del formulario de lead gen (`urn:li:leadGenFormResponse:...`) y Meta acepta el `lead_id` de sus formularios, sin enviar datos personales en claro. Si usas formularios nativos, es el camino más limpio, y el que conviene al [promocionar la publicación de un empleado en LinkedIn Ads](/blog/promocionar-publicacion-de-un-empleado-linkedin-ads), donde el lead llega por el formulario y no por la web.

## ¿Y si la cuenta no llega a 30 conversiones al mes?

Entonces la lectura de la plataforma no es fiable y la auditoría tiene que decirlo. Google recomienda, para evaluar una estrategia de CPA objetivo, "medir el rendimiento de los últimos 30 días, incluyendo al menos 30 conversiones" ([documentación de CPA objetivo](https://support.google.com/google-ads/answer/6268632)). Muchas cuentas B2B no llegan a esas 30 conversiones mensuales ni sumando todas sus campañas, así que cualquier comparación entre campañas dentro de ese volumen es ruido.

Qué hace la skill con eso: marca como "sin datos suficientes" cualquier campaña con menos de diez oportunidades en el periodo, en lugar de calcular una tasa con tres casos. Y qué conviene hacer tú: ampliar la ventana de análisis a 90 días, comparar por cohortes en lugar de por mes natural y, si el volumen es tan bajo que ni eso llega, revisar antes [cuánto presupuesto hace falta para que paid funcione en B2B](/blog/presupuesto-minimo-paid-b2b). Una cuenta con cuatro conversiones al mes no tiene un problema de optimización.

## La skill completa

**Descargar:** [SKILL.md](/skills/auditoria-paid-b2b/SKILL.md) · [auditoria-paid-b2b.zip](/skills/auditoria-paid-b2b.zip), para subirla a la app de Claude.

````markdown
---
name: auditoria-paid-b2b
description: Audita campañas de Google Ads, Meta Ads o LinkedIn Ads de una empresa B2B cruzando el gasto con lo que pasa después en el CRM. Comprueba primero si el seguimiento de conversiones es fiable, calcula el coste por oportunidad cualificada en lugar del coste por lead, lee los resultados por cohortes cuando el ciclo de venta es largo, detecta desperdicio en búsquedas, audiencias y formularios, y prioriza un máximo de cinco cambios. Úsala cuando pidan auditar una cuenta publicitaria, entender por qué el paid no trae clientes, analizar un export de campañas, calcular el coste real por canal o decidir dónde invertir.
metadata:
  author: Scale It
  version: "1.0"
  source: https://www.growth-scaleit.com/blog/skill-paid-media-para-ia
---

# Auditoría de paid B2B

## El principio

Las plataformas optimizan hacia lo que pueden medir. Si lo que miden es un formulario, traerán formularios baratos, y lo que es barato de captar suele serlo porque el interés es superficial. Esta auditoría mide contra el negocio, no contra la plataforma.

## Qué necesitas

1. **Export de campañas** de los últimos tres a seis meses: campaña, gasto, clics, conversiones y coste por conversión.
2. **Datos del CRM** del mismo periodo: leads por origen o campaña, oportunidades cualificadas, negocios ganados e importe.
3. **Ciclo de venta medio** aproximado y **ticket medio**.

Hace falta histórico de al menos un ciclo de venta completo. Si el ciclo es de seis meses y solo hay dos de datos, dilo: la lectura de rentabilidad todavía no es posible.

Si no hay datos del CRM, dilo en la primera línea del informe. Sin ellos, la auditoría solo puede revisar el seguimiento y la estructura, no la rentabilidad.

## Paso 1. ¿El seguimiento es de fiar?

Antes de proponer ningún cambio de campaña:

- ¿Qué cuenta como conversión en cada plataforma? Lístalo. Si hay varias acciones marcadas como principales (visita a la página de gracias, clic en el teléfono, tiempo en página), las cifras están infladas.
- ¿Hay conversiones contadas dos veces, por ejemplo por etiqueta y por importación a la vez?
- ¿El origen del lead llega al CRM y se conserva? Tiene que haber un campo de primer origen y otro de último origen que no se sobrescriban.
- ¿Se devuelven a las plataformas eventos del CRM, como oportunidad creada o reunión celebrada?

Veredicto: **fiable**, **parcial** o **roto**. Si está roto, la primera recomendación es arreglarlo, y ninguna otra va delante.

## Paso 2. Del coste por lead al coste por oportunidad

Calcula por campaña y por canal:

- Coste por lead, que es lo que enseña la plataforma.
- Tasa de paso de lead a oportunidad cualificada.
- **Coste por oportunidad cualificada** = gasto / oportunidades cualificadas.
- Si hay datos: valor medio de contrato por canal y relación entre gasto e ingreso ganado.

Ordena las campañas por coste por oportunidad, no por coste por lead. Señala expresamente las que invierten el orden: baratas por lead y caras por oportunidad. Suelen ser justo las que la plataforma premia.

**Ciclos largos: lee por cohortes.** Agrupa los leads por mes de entrada y sigue qué ha pasado con cada grupo. Nunca compares el gasto de este mes con los cierres de este mes, porque pertenecen a meses distintos.

Si una campaña tiene menos de diez oportunidades en el periodo, no saques conclusiones de su tasa: márcala como "sin datos suficientes".

## Paso 3. Desperdicio

**Google Ads**

- Términos de búsqueda de empleo, formación o gratuidad: "trabajo", "sueldo", "curso", "gratis", "qué es".
- Concordancia amplia sin lista de palabras negativas.
- Campañas que pujan entre sí por las mismas búsquedas.
- Ubicaciones de Display o Performance Max con clics y sin oportunidades.

**Meta Ads**

- Audiencias B2B definidas solo por intereses genéricos.
- Formularios instantáneos sin ninguna pregunta que cualifique: volumen barato y calidad baja.
- Frecuencia muy alta sobre audiencias pequeñas.

**LinkedIn Ads**

- Segmentación por sector sin cargo ni antigüedad, o tan estrecha que la campaña no puede aprender.
- Audience Network activado sin revisar dónde se muestra.
- Formularios de lead gen con los campos precargados y sin pregunta de cualificación.

Cuantifica el desperdicio en euros siempre que los datos lo permitan.

## Paso 4. ¿Hacia qué optimiza la plataforma?

Si la plataforma optimiza hacia leads y el ciclo es largo, propón un evento intermedio que ocurra con frecuencia razonable y que correlacione con el cierre: reunión celebrada u oportunidad creada, enviado desde el CRM.

Avisa del límite: si el evento elegido es demasiado raro, la plataforma no tiene datos para aprender. Hay que buscar el punto entre frecuencia y relación con el cierre.

## Paso 5. Prioridades

Un máximo de cinco acciones, ordenadas por impacto y facilidad. Para cada una:

- Qué hacer.
- Por qué, con el dato que lo justifica.
- Cómo se sabrá si ha funcionado.
- En cuánto tiempo se podrá leer el resultado.

## Formato de salida

1. **Resumen** en cinco líneas: fiabilidad del seguimiento, la campaña que más aporta por oportunidad, la que más desperdicia, el desperdicio estimado y la acción número uno.
2. **Tabla por campaña**: gasto, leads, coste por lead, oportunidades, coste por oportunidad y veredicto (mantener, arreglar, cortar o sin datos suficientes).
3. **Hallazgos de seguimiento**.
4. **Desperdicio detectado**.
5. **Las cinco acciones**.
6. **Límites del análisis**.

## Lo que no hay que hacer

- No propongas cambiar pujas ni presupuestos antes de validar el seguimiento.
- No juzgues campañas por coste por lead si hay datos del CRM.
- No inventes referencias de CTR, CPC o conversión por sector.
- No atribuyas un cierre a una campaña por último clic sin decir que es último clic: en B2B el canal que descubre y el que cierra suelen ser distintos.
````

## ¿Cómo se instala en cada herramienta?

### Instalación en un comando (Mac y Linux)

Este comando la deja en `~/.agents/skills`, la carpeta compartida que leen Codex, Gemini CLI, Cursor y GitHub Copilot, y copia la misma carpeta a la de Claude Code, que es la única que no lee la compartida:

```bash
mkdir -p ~/.agents/skills/auditoria-paid-b2b ~/.claude/skills
curl -fsSL https://www.growth-scaleit.com/skills/auditoria-paid-b2b/SKILL.md -o ~/.agents/skills/auditoria-paid-b2b/SKILL.md
cp -R ~/.agents/skills/auditoria-paid-b2b ~/.claude/skills/
```

En Windows, descarga el [.zip](/skills/auditoria-paid-b2b.zip) y descomprímelo dentro de la carpeta de skills de tu herramienta. Tiene que quedar una carpeta `auditoria-paid-b2b` con el `SKILL.md` dentro.

### Dónde va en cada herramienta

| Herramienta | Dónde se instala | Cómo se usa | Paso a paso |
|---|---|---|---|
| Claude Code | `~/.claude/skills/auditoria-paid-b2b/` | Sola, o escribiendo `/auditoria-paid-b2b` | [guía](/blog/skills-en-claude) |
| Claude (web y escritorio) | Subiendo el .zip en Customize, Skills | Sola cuando la tarea encaja | [guía](/blog/skills-en-claude) |
| Codex | `~/.agents/skills/auditoria-paid-b2b/` | Sola, o escribiendo `$auditoria-paid-b2b` | [guía](/blog/skills-en-codex) |
| ChatGPT | Pestaña Skills, o creándola con `@skill-creator` | Sola, o escribiendo `@auditoria-paid-b2b` | [guía](/blog/skills-en-chatgpt) |
| Gemini CLI | `~/.gemini/skills/auditoria-paid-b2b/` | Sola, tras pedirte permiso | [guía](/blog/skills-en-gemini) |
| Cursor | `~/.cursor/skills/auditoria-paid-b2b/` | Sola, o escribiendo `/auditoria-paid-b2b` | [guía](/blog/skills-en-cursor) |
| GitHub Copilot | `~/.copilot/skills/auditoria-paid-b2b/` | Sola, o con `/auditoria-paid-b2b` en VS Code | [guía](/blog/skills-en-github-copilot) |
| GLM | `~/.claude/skills/auditoria-paid-b2b/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-glm) |
| DeepSeek | `~/.claude/skills/auditoria-paid-b2b/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-deepseek) |

## ¿Qué hay que exportar y de dónde se saca?

Tres o cuatro ficheros y dos cifras. Dónde está cada uno:

| Qué | De dónde se saca | Columnas que hacen falta |
|---|---|---|
| Campañas de Google Ads | El [editor de informes](https://support.google.com/google-ads/answer/7489070), en el menú de informes y estadísticas; se descarga en `.csv` | Campaña, coste, clics, conversiones, coste por conversión y tipo de campaña |
| Términos de búsqueda de Google Ads | La tabla de términos de búsqueda, con Exportar, Exportar vista actual | Término, coste, clics, conversiones |
| Campañas de LinkedIn Ads | El botón Export de Campaign Manager, informe "Ad set performance" a nivel de conjunto de anuncios, con desglose temporal Diario o Mensual ([cómo exportar](https://www.linkedin.com/help/lms/answer/a441785)) | Campaña, gasto, clics, conversiones, leads de formulario |
| Campañas de Meta Ads | La exportación de la tabla del administrador de anuncios, a nivel de campaña | Campaña, gasto, clics, resultados de formulario |
| CRM | Un informe agrupado por campaña u origen, del mismo periodo | Leads, oportunidades cualificadas, ganados e importe |

Las dos cifras son el **ciclo de venta medio** y el **ticket medio**, aunque sean aproximados: sin ellas la skill no puede decidir qué periodo leer ni si una campaña cara por lead sale rentable.

Pide los últimos seis meses, no tres, incluso si tu ciclo es corto. Con las ventanas de importación de arriba en la mano, seis meses te permiten ver si los eventos que vuelven del CRM llegan dentro de plazo o si una parte se está cayendo.

Una precaución: del CRM no necesitas datos personales. Exporta cifras agregadas por campaña, no listas de contactos. La skill no los necesita para calcular nada y así no pasan por ningún proveedor de IA.

Un ejemplo de petición, con una empresa inventada:

> Audita nuestro paid. Te adjunto los informes de campañas de Google Ads y LinkedIn Ads de los últimos seis meses, el de términos de búsqueda y un export del CRM con leads, oportunidades y ganados por campaña. Ciclo de venta unos cuatro meses, ticket medio 18.000 €. En Google optimizamos a formulario enviado y en LinkedIn a lead de formulario.

Con esos datos, lo esperable es que señale el formulario como evento de puja demasiado temprano para un ciclo de cuatro meses, que ordene las campañas por coste por oportunidad y no por coste por lead, y que avise de qué campañas tienen tan pocas oportunidades que no se puede concluir nada.

Funciona mejor en las herramientas que ejecutan código sobre archivos: la app de Claude, ChatGPT, Claude Code, Codex o Cursor. Si tu herramienta admite un servidor MCP de la plataforma, puede leer los informes sin que los exportes y la skill funciona igual. Lo que no funciona es pegar tablas de cientos de filas en el chat.

## ¿Qué conviene adaptar a tu empresa?

- **Qué es una oportunidad cualificada** para ti, con el nombre exacto de la etapa en tu CRM. Si no, la skill tendrá que preguntarlo.
- **Tu ciclo de venta y tu ticket**, escritos en la skill si no cambian.
- **El umbral de datos suficientes.** Diez oportunidades es un mínimo prudente; si tu volumen es muy alto o muy bajo, ajústalo.
- **Tus plataformas.** Si solo inviertes en una, borra las secciones de las otras para que la skill no pregunte por ellas.
- **Las ventanas que te afectan.** Escribe en la skill qué evento devuelves a cada plataforma y con qué método, porque de eso depende tu límite: 90 días por GCLID, 63 con conversiones mejoradas para leads, 7 en Meta.

## Errores habituales al usarla

**Darle solo el export de la plataforma.** Obtendrás una auditoría de estructura, que está bien, pero no sabrás qué campaña trae negocio.

**Leer el periodo equivocado.** Si tu ciclo es de seis meses y le das tres, la skill avisará de que no puede leer la rentabilidad. Créele.

**Aplicar las cinco acciones a la vez.** Si cambias cinco cosas en la misma semana, no sabrás cuál funcionó. Van en orden por algo.

**Subir los datos del CRM una vez al trimestre.** Es el error más caro de todos: una parte de los eventos llega fuera de ventana y se rechaza sin que nadie lo note. La importación va diaria o semanal, y la auditoría tiene que comprobar cuántos eventos se aceptaron, no cuántos se enviaron.

**Cortar campañas de descubrimiento por no cerrar.** Algunas campañas no cierran pero alimentan a las que sí. La lectura por cohortes y la pregunta de "¿cómo nos has conocido?" en el formulario ayudan a no cortarlas por error.

## Preguntas frecuentes

**¿Sirve si no tengo CRM?**
Solo en parte. Puede revisar seguimiento y estructura. Sin saber qué leads se convirtieron en clientes, cualquier conclusión sobre rentabilidad sería una suposición.

**¿Puedo devolver a la plataforma un contrato firmado tres meses después?**
En Google Ads sí, si subes por GCLID dentro de los 90 días siguientes al clic (63 con conversiones mejoradas para leads). En LinkedIn sí, siempre que el evento sea de los últimos 90 días y la regla tenga una ventana post-clic larga. En Meta no: el evento tiene que ser de los últimos 7 días, así que ahí solo caben etapas intermedias enviadas a diario.

**¿Cada cuánto conviene pasarla?**
Una vez al trimestre para una revisión completa, o después de cualquier cambio grande de estructura o de seguimiento.

**¿Vale para ecommerce?**
Está pensada para B2B con ciclo de venta. En ecommerce el ingreso se mide en la propia plataforma y la parte del CRM pierde sentido.

**¿Por qué no da referencias de CTR o CPC por sector?**
Porque las cifras por sector que circulan mezclan cuentas, países y periodos que no se parecen a la tuya. La skill compara tus campañas entre sí y contra tu negocio, que es la comparación que sirve.

## Por dónde empezaríamos

Por dos cosas, antes de tocar una sola campaña: que el origen viaje sin sobrescribirse hasta la oportunidad, y que el evento que devuelves a cada plataforma entre dentro de su ventana. Con eso y la lectura por cohortes, esta skill convierte cada export en decisiones que se pueden defender ante dirección.

Va entre [paid](/servicios/paid) y [RevOps y datos](/servicios/revops-crm). [Media hora y lo vemos](/#contacto).

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- **Paid media: auditoria-paid-b2b**
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
