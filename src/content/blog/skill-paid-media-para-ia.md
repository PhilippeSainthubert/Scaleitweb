---
title: "Skill de paid media para IA: auditar campañas contra el CRM"
description: "La skill auditoria-paid-b2b, completa y descargable: cruza Google, Meta y LinkedIn Ads con tu CRM y calcula el coste real por oportunidad cualificada."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "paid"
tags: ["skills", "paid media", "Google Ads", "LinkedIn Ads", "Meta Ads"]
---

Pásale a una IA un export de Google Ads y pídele una auditoría. Te hablará del CTR, de subir pujas en las campañas con mejor coste por conversión y de probar nuevas extensiones. Todo razonable, y casi todo irrelevante para la única pregunta que importa en B2B: qué campaña trajo los contratos que se firmaron.

La IA no puede contestar eso con lo que le has dado, porque la respuesta no está en la plataforma publicitaria. Está en el CRM.

Esta skill está construida sobre esa idea: no audita campañas contra lo que dice la plataforma, sino contra lo que pasó después.

## ¿Por qué convertir una auditoría de paid en una skill?

Una skill es un archivo `SKILL.md` con instrucciones que el modelo carga cuando la tarea encaja. En paid, lo valioso es el orden: qué se comprueba antes de qué. Una auditoría que empieza por las pujas y deja el seguimiento para el final llega a conclusiones equivocadas con mucha seguridad.

Al ser un [estándar abierto](https://agentskills.io/specification), el mismo archivo sirve en Claude, ChatGPT, Codex, Gemini CLI o Cursor. Y como casi todas estas herramientas leen hojas de cálculo, basta con subirle los exports.

## ¿Qué hace la skill auditoria-paid-b2b?

Recibe el export de campañas de los últimos meses, los datos del CRM del mismo periodo y dos cifras: el ciclo de venta medio y el ticket medio. Devuelve un resumen, una tabla con el veredicto de cada campaña (mantener, arreglar, cortar o sin datos suficientes), los problemas de seguimiento, el desperdicio detectado y un máximo de cinco acciones priorizadas.

Si no le das datos del CRM, lo dice en la primera línea: sin ellos puede revisar el seguimiento y la estructura, pero no la rentabilidad.

## ¿Por qué no toca una puja antes de revisar el seguimiento?

Porque optimizar con datos rotos es acelerar en la dirección equivocada. Lo primero que hace la skill es listar qué cuenta como conversión en cada plataforma. Es muy común encontrar tres acciones marcadas como principales a la vez, por ejemplo la visita a la página de gracias, el clic en el teléfono y el tiempo en página, lo que infla todas las cifras de la cuenta.

Después busca conversiones contadas dos veces, comprueba si el origen del lead llega al CRM sin sobrescribirse y si el CRM devuelve algo a las plataformas. El veredicto es fiable, parcial o roto. Si es roto, la primera recomendación es arreglarlo, y ninguna otra va delante.

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

El que más se repite en cuentas B2B:

- **Google Ads**: búsquedas de empleo, formación o gratuidad ("trabajo", "curso", "gratis", "qué es"), concordancia amplia sin palabras negativas, campañas que pujan entre sí y ubicaciones de Display o Performance Max con clics y sin oportunidades.
- **Meta Ads**: audiencias B2B definidas solo por intereses genéricos, formularios instantáneos sin ninguna pregunta que cualifique y frecuencia muy alta sobre audiencias pequeñas.
- **LinkedIn Ads**: segmentación por sector sin cargo ni antigüedad, Audience Network activado sin revisar y formularios con los campos precargados y sin pregunta de cualificación.

Siempre que los datos lo permiten, lo cuantifica en euros. Un "hay desperdicio en búsquedas" no mueve a nadie; "1.400 € en seis meses en búsquedas de empleo" sí.

## ¿Hacia qué evento debería optimizar la plataforma?

Si optimiza hacia leads y tu ciclo es largo, la skill propone un evento intermedio que ocurra con frecuencia razonable y que correlacione con el cierre, como una reunión celebrada o una oportunidad creada, enviado desde el CRM a la plataforma.

Y avisa del límite, que es real: si el evento es demasiado raro, la plataforma no tiene datos suficientes para aprender. Hay que buscar el punto entre frecuencia y relación con el cierre. Para que eso funcione, [el CRM tiene que estar conectado con las plataformas](/blog/conectar-crm-con-plataformas).

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

## ¿Qué datos hay que sacar y cómo?

Tres archivos y dos cifras:

1. **Informe de campañas de cada plataforma** exportado a CSV, de los últimos tres a seis meses: campaña, gasto, clics, conversiones y coste por conversión. Todas las plataformas permiten descargar la vista de campañas.
2. **Informe del CRM** con los leads del mismo periodo agrupados por campaña u origen, y cuántos pasaron a oportunidad cualificada y a ganado, con importe.
3. **Informe de términos de búsqueda** de Google Ads, si inviertes ahí. Es donde aparece la mayor parte del desperdicio.
4. El **ciclo de venta medio** y el **ticket medio**, aunque sean aproximados.

Una precaución: del CRM no necesitas datos personales. Exporta cifras agregadas por campaña, no listas de contactos. La skill no los necesita para calcular nada y así no pasan por ningún proveedor de IA.

## ¿Qué herramienta va mejor para esta skill?

Las que analizan archivos. En la app de Claude y en ChatGPT subes los CSV a la conversación y el modelo los procesa con código. En Claude Code, Codex o Cursor, dejas los archivos en una carpeta y le pides que los lea. Cualquiera sirve; lo que no sirve es pegar tablas de cientos de filas en el chat.

## ¿Qué conviene adaptar a tu empresa?

- **Qué es una oportunidad cualificada** para ti, con el nombre exacto de la etapa en tu CRM. Si no, la skill tendrá que preguntarlo.
- **Tu ciclo de venta y tu ticket**, escritos en la skill si no cambian.
- **El umbral de datos suficientes.** Diez oportunidades es un mínimo prudente; si tu volumen es muy alto o muy bajo, ajústalo.
- **Tus plataformas.** Si solo inviertes en una, borra las secciones de las otras para que la skill no pregunte por ellas.

## Errores habituales al usarla

**Darle solo el export de la plataforma.** Obtendrás una auditoría de estructura, que está bien, pero no sabrás qué campaña trae negocio.

**Leer el periodo equivocado.** Si tu ciclo es de seis meses y le das tres, la skill avisará de que no puede leer la rentabilidad. Créele.

**Aplicar las cinco acciones a la vez.** Si cambias cinco cosas en la misma semana, no sabrás cuál funcionó. Van en orden por algo.

**Cortar campañas de descubrimiento por no cerrar.** Algunas campañas no cierran pero alimentan a las que sí. La lectura por cohortes y la pregunta de "¿cómo nos has conocido?" en el formulario ayudan a no cortarlas por error.

## Preguntas frecuentes

**¿Sirve si no tengo CRM?**
Solo en parte. Puede revisar seguimiento y estructura. Sin saber qué leads se convirtieron en clientes, cualquier conclusión sobre rentabilidad sería una suposición.

**¿Puede conectarse directamente a Google Ads?**
Con un servidor MCP de la plataforma, en las herramientas que los admiten, sí puede leer los datos sin exportarlos. La skill funciona igual con datos exportados o conectados.

**¿Cada cuánto conviene pasarla?**
Una vez al trimestre para una revisión completa, o después de cualquier cambio grande de estructura o de seguimiento.

**¿Vale para ecommerce?**
Está pensada para B2B con ciclo de venta. En ecommerce el ingreso se mide en la propia plataforma y la parte del CRM pierde sentido.

**¿Por qué no da referencias de CTR o CPC por sector?**
Porque las cifras por sector que circulan mezclan cuentas, países y periodos que no se parecen a la tuya. La skill compara tus campañas entre sí y contra tu negocio, que es la comparación que sirve.

## Por dónde empezaríamos

Por conectar el gasto con el pipeline, antes de tocar una sola campaña. Con el origen viajando bien hasta la oportunidad y la lectura por cohortes montada, esta skill convierte cada export en decisiones que se pueden defender ante dirección.

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
