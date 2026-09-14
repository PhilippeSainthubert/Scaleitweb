---
title: "Skill de CRM para IA: diagnosticar el pipeline con datos"
description: "La skill diagnostico-crm, completa y descargable: revisa etapas, oportunidades paradas, origen y velocidad de respuesta de tu CRM y propone un lead scoring simple."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "revops"
tags: ["skills", "CRM", "RevOps", "HubSpot", "lead scoring"]
---

Los problemas de un CRM casi nunca parecen problemas de CRM. Parecen problemas de personas: comerciales que no actualizan, un forecast que nunca se cumple, marketing y ventas discutiendo de dónde vino un cliente. Y la solución que se suele proponer también es de personas: más disciplina, más campos obligatorios, otra reunión de pipeline.

Casi siempre el problema está en los datos, y se puede ver en un export.

Esta skill hace ese diagnóstico. No con opiniones sobre cómo debería usarse el CRM, sino con seis comprobaciones sobre lo que tu CRM contiene de verdad.

## ¿Por qué convertir un diagnóstico de CRM en una skill?

Una skill es un archivo `SKILL.md` con instrucciones que el modelo carga cuando la tarea encaja. Para un diagnóstico de CRM, lo que aporta es repetibilidad: la misma revisión, con los mismos cálculos, cada trimestre. Así puedes comparar cómo estaba el pipeline en enero con cómo está en abril, en lugar de tener dos impresiones distintas.

Al ser un [estándar abierto](https://agentskills.io/specification), el mismo archivo funciona en Claude, ChatGPT, Codex, Gemini CLI y Cursor, y la mayoría de ellas pueden procesar un CSV grande con código.

## ¿Qué hace la skill diagnostico-crm?

Recibe tres cosas: el export de oportunidades, el de contactos o leads, y la lista de etapas con lo que el equipo cree que significa cada una. Devuelve un resumen con los tres problemas que más dinero cuestan, una tabla con el estado de las seis comprobaciones, las etapas reescritas, una lista de limpieza priorizada y, si hace falta, una propuesta de lead scoring.

Funciona con HubSpot, Pipedrive, GoHighLevel, Salesforce o cualquier CRM que exporte a CSV. No necesita acceso a la herramienta.

## ¿Por qué empieza por las etapas?

Porque es donde nace casi todo lo demás. Las etapas de la mayoría de pipelines describen lo que hace el comercial, no lo que hace el cliente. "Propuesta enviada" es una acción tuya y no dice nada sobre la probabilidad de cerrar. "Presupuesto confirmado por el comprador" sí lo dice.

Cuando las etapas describen al vendedor, cada persona las mueve según su criterio, el forecast se calcula sobre interpretaciones y los datos dejan de valer para decidir. La skill revisa cada etapa y se pregunta si tiene un criterio de entrada que se pueda verificar. Las que no lo tienen, las reescribe.

También calcula la conversión entre etapas y el tiempo medio en cada una. La etapa donde se amontonan las oportunidades suele ser la que está mal definida. Es la primera de las [señales de que tu CRM está frenando las ventas](/blog/senales-crm-frena-ventas).

## ¿Cuánto está inflado tu forecast?

La skill cuenta las oportunidades abiertas que llevan sin moverse más del doble del tiempo medio de su etapa, y da tres cifras: cuántas son, cuánto suman y qué porcentaje del pipeline abierto representan.

Ese porcentaje es la cifra más útil de todo el diagnóstico, porque es cuánto miente el forecast. Un ejemplo con números inventados: si tienes 800.000 € de pipeline abierto y 300.000 € llevan más de tres meses en una etapa donde lo normal son cuatro semanas, casi el 40 % de lo que se presenta en el comité es, en la práctica, historia.

Si no hay histórico para calcular el tiempo medio, usa 60 días como referencia y lo dice.

## ¿Por qué le importa tanto el origen?

Porque sin un origen fiable no se puede decidir en qué canal invertir. La skill mira qué porcentaje de oportunidades tiene el origen informado, si existen primer origen y último origen en campos separados, y cuántos valores no dicen nada: "Otros", "Offline", "Importación" o vacío.

Primer y último origen separados es lo mínimo para tener una conversación adulta sobre atribución: qué canal descubre y qué canal cierra, que en B2B casi nunca son el mismo. Lo explicamos en [por qué el último clic te miente](/blog/atribucion-ultimo-clic-miente). Y para que el origen viaje bien desde el formulario hasta la oportunidad, [el CRM tiene que estar conectado con las plataformas](/blog/conectar-crm-con-plataformas).

## ¿Qué dice la velocidad de respuesta?

Cuánto tarda un lead en recibir el primer contacto comercial desde que entra. La skill calcula la mediana y el percentil 90, separados por origen, porque la media esconde lo importante: que la mayoría se atienda en una hora no sirve de mucho si uno de cada diez espera tres días.

Cuando los leads de formulario esperan horas, suele haber un problema de asignación más que de personas. Es uno de los procesos donde un agente [que cualifique y enrute los leads](/blog/agente-para-calificar-leads) tiene un retorno más claro.

## ¿Cómo propone el lead scoring?

Con dos ejes separados, nunca uno solo. El **encaje** dice si es el tipo de empresa que compra: sector, tamaño, país, cargo. La **intención** dice si está en momento de comprar: visitas a precios, formulario de contacto, respuesta a outbound, una señal externa.

Cada eje lleva entre tres y cinco reglas, y cada regla tiene que poder comprobarse con datos que el CRM ya tiene. Es la regla que más modelos de scoring salva: si una regla necesita un dato que nadie rellena, puntúa sobre vacíos.

Y lo valida con el histórico: ¿los leads que habrían puntuado alto cerraron más que la media? Si no, las reglas no predicen nada. Más detalle en [lead scoring sin sobreingeniería](/blog/lead-scoring-sin-sobreingenieria).

## ¿Qué pasa con los datos personales?

Esta es la parte que conviene resolver antes de pasarle nada. Un export de CRM contiene datos personales de tus clientes y contactos, y al subirlo a cualquier herramienta de IA esos datos pasan por su proveedor.

Tres precauciones:

- **Exporta sin columnas personales.** Para el diagnóstico no hacen falta correos, teléfonos ni nombres de contacto. Basta con el nombre de la empresa, o incluso con un identificador.
- **Usa un plan que excluya tus datos del entrenamiento**, como los planes de empresa de las principales herramientas.
- **Revisa tu base legal** para ese tratamiento si trabajas con datos de clientes en la Unión Europea.

La skill está escrita para no repetir datos personales en su respuesta, pero eso no evita que el proveedor reciba el archivo. Lo que no subes, no hay que protegerlo.

## La skill completa

**Descargar:** [SKILL.md](/skills/diagnostico-crm/SKILL.md) · [diagnostico-crm.zip](/skills/diagnostico-crm.zip), para subirla a la app de Claude.

````markdown
---
name: diagnostico-crm
description: Diagnostica la salud de un CRM B2B (HubSpot, Pipedrive, GoHighLevel, Salesforce u otro) a partir de exports de oportunidades y contactos. Revisa si las etapas describen al cliente o al comercial, si el origen de cada negocio se conserva, cuánto se tarda en atender un lead, cuántas oportunidades están paradas, duplicados y campos vacíos, y propone un lead scoring simple por encaje e intención. Úsala cuando pidan auditar un CRM, limpiar el pipeline, entender por qué el forecast no se cumple, montar lead scoring, revisar la atribución dentro del CRM o preparar una migración.
metadata:
  author: Scale It
  version: "1.0"
  source: https://www.growth-scaleit.com/blog/skill-crm-revops-para-ia
---

# Diagnóstico de CRM

## El principio

Un CRM falla antes por el proceso que por la herramienta. Migrar el mismo proceso roto a otro CRM da el mismo problema con otra factura y seis meses perdidos. Esta skill mira datos, no opiniones.

## Qué necesitas

1. **Export de oportunidades**, idealmente de los últimos 12 meses: nombre, etapa, importe, fecha de creación, fecha de cierre, fecha del último cambio de etapa, propietario, origen y motivo de pérdida.
2. **Export de contactos o leads**: fecha de creación, origen (primero y último si existen), fecha del primer contacto comercial, propietario y estado.
3. **Lista de etapas** del pipeline con lo que el equipo cree que significa cada una.

Si solo tienes una parte, trabaja con ella y marca qué conclusiones no se pueden sacar.

Trabaja con el mínimo de datos personales. Si el export trae correos o teléfonos, no los repitas en la respuesta.

## Proceso: seis comprobaciones

### 1. Etapas: ¿describen al cliente o al comercial?

"Propuesta enviada" es una acción del vendedor y no dice nada sobre la probabilidad de cerrar. "Presupuesto confirmado por el comprador" sí lo dice. Para cada etapa, pregúntate si tiene un criterio de entrada que se pueda verificar. Reescribe las que no.

Calcula la conversión entre etapas y el tiempo medio en cada una. La etapa donde se amontonan las oportunidades suele ser la que está mal definida.

### 2. Oportunidades paradas

Cuenta las oportunidades abiertas sin cambio de etapa en más del doble del tiempo medio de su etapa. Si no hay histórico para calcularlo, usa 60 días como referencia y dilo.

Da tres cifras: cuántas son, qué importe suman y qué porcentaje del pipeline abierto representan. Ese porcentaje es cuánto está inflado el forecast.

### 3. Origen

- ¿Qué porcentaje de oportunidades tiene el origen informado?
- ¿Existen primer origen y último origen en campos separados que no se sobrescriben?
- ¿Aparecen valores sin información ("Otros", "Offline", "Importación", vacío) en más del 20 % de los casos?

Sin un origen fiable no se puede decidir el presupuesto por canal. Dilo así si es el caso.

### 4. Velocidad de respuesta

Tiempo desde que se crea el lead hasta el primer contacto comercial: mediana y percentil 90, separado por origen. Señala si los leads de formulario esperan horas o días.

### 5. Higiene

- Duplicados probables: mismo dominio de empresa, nombres casi iguales.
- Campos importantes vacíos.
- Propietarios que ya no están en la empresa.
- Motivos de pérdida vacíos, o casi todos "Precio", que suele significar que nadie preguntó.

### 6. Uso real

Busca pistas de que el equipo trabaja fuera del CRM: actividad concentrada en un solo día de la semana, cambios de etapa en bloque, oportunidades creadas ya en etapas avanzadas o informes que el usuario dice que se hacen en hojas de cálculo. Un Excel paralelo es la señal más clara de que el CRM no le sirve a quien vende.

## Lead scoring

Hazlo si lo piden o si no existe ninguno.

Dos ejes separados, nunca uno solo:

- **Encaje**: ¿es el tipo de empresa que compra? Sector, tamaño, país, cargo.
- **Intención**: ¿está en momento de comprar? Visitas a la página de precios, formulario de contacto, respuesta a outbound, una señal externa.

Entre tres y cinco reglas por eje. Cada regla tiene que poder comprobarse con datos que el CRM ya tiene; si necesita un dato que no existe, se descarta.

Qué hacer con cada combinación:

| Encaje | Intención | Acción |
|---|---|---|
| Alto | Alta | Contacto inmediato |
| Alto | Baja | Nutrir, volverá |
| Bajo | Alta | Revisar a mano por si es un caso no previsto |
| Bajo | Baja | Fuera |

Validación: con el histórico, comprueba si los leads que habrían puntuado alto cerraron más que la media. Si no, las reglas no predicen nada y hay que cambiarlas.

## Formato de salida

1. **Resumen** de cinco líneas con los tres problemas que más dinero cuestan.
2. **Tabla de las seis comprobaciones**: estado (bien, regular o mal), dato que lo demuestra e impacto.
3. **Etapas reescritas**, cada una con su criterio de entrada.
4. **Lista de limpieza priorizada**: qué se arregla primero y qué se puede automatizar sin romper nada.
5. **Lead scoring propuesto**, si aplica.
6. **Lo que no se pudo comprobar** con los datos recibidos.

## Lo que no hay que hacer

- No recomiendes cambiar de CRM como primera medida.
- No propongas más campos obligatorios para arreglar datos malos: cada campo nuevo baja la adopción.
- No puntúes con datos que el CRM no tiene.
- No propongas una capa de IA sobre datos sucios: produce conclusiones malas más deprisa.
````

## ¿Cómo se instala en cada herramienta?

### Instalación en un comando (Mac y Linux)

Este comando la deja en `~/.agents/skills`, la carpeta compartida que leen Codex, Gemini CLI, Cursor y GitHub Copilot, y copia la misma carpeta a la de Claude Code, que es la única que no lee la compartida:

```bash
mkdir -p ~/.agents/skills/diagnostico-crm ~/.claude/skills
curl -fsSL https://www.growth-scaleit.com/skills/diagnostico-crm/SKILL.md -o ~/.agents/skills/diagnostico-crm/SKILL.md
cp -R ~/.agents/skills/diagnostico-crm ~/.claude/skills/
```

En Windows, descarga el [.zip](/skills/diagnostico-crm.zip) y descomprímelo dentro de la carpeta de skills de tu herramienta. Tiene que quedar una carpeta `diagnostico-crm` con el `SKILL.md` dentro.

### Dónde va en cada herramienta

| Herramienta | Dónde se instala | Cómo se usa | Paso a paso |
|---|---|---|---|
| Claude Code | `~/.claude/skills/diagnostico-crm/` | Sola, o escribiendo `/diagnostico-crm` | [guía](/blog/skills-en-claude) |
| Claude (web y escritorio) | Subiendo el .zip en Customize, Skills | Sola cuando la tarea encaja | [guía](/blog/skills-en-claude) |
| Codex | `~/.agents/skills/diagnostico-crm/` | Sola, o escribiendo `$diagnostico-crm` | [guía](/blog/skills-en-codex) |
| ChatGPT | Pestaña Skills, o creándola con `@skill-creator` | Sola, o escribiendo `@diagnostico-crm` | [guía](/blog/skills-en-chatgpt) |
| Gemini CLI | `~/.gemini/skills/diagnostico-crm/` | Sola, tras pedirte permiso | [guía](/blog/skills-en-gemini) |
| Cursor | `~/.cursor/skills/diagnostico-crm/` | Sola, o escribiendo `/diagnostico-crm` | [guía](/blog/skills-en-cursor) |
| GitHub Copilot | `~/.copilot/skills/diagnostico-crm/` | Sola, o con `/diagnostico-crm` en VS Code | [guía](/blog/skills-en-github-copilot) |
| GLM | `~/.claude/skills/diagnostico-crm/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-glm) |
| DeepSeek | `~/.claude/skills/diagnostico-crm/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-deepseek) |

## ¿Cómo se usa en la práctica?

Exporta desde tu CRM la vista de negocios y la de contactos a CSV, quita las columnas personales y súbelas a la conversación junto con la lista de etapas. Un ejemplo de petición, con una empresa inventada:

> Diagnostica nuestro CRM. Usamos Pipedrive. Te adjunto las oportunidades de los últimos 12 meses y los leads del mismo periodo. Las etapas son: Contactado, Reunión hecha, Propuesta enviada, Negociación, Ganado, Perdido. Nuestro ciclo medio es de unos tres meses.

En un caso así lo esperable es que "Contactado" y "Propuesta enviada" salgan señaladas como etapas del comercial y no del cliente, y que la cifra de oportunidades paradas en "Propuesta enviada" sea la primera del resumen.

Va mejor en las herramientas que ejecutan código sobre archivos, como la app de Claude, ChatGPT, Claude Code o Codex. Pegar miles de filas en el chat no funciona.

## ¿Qué conviene adaptar a tu empresa?

- **Tus etapas y su significado.** Escríbelas en la skill para no tener que dárselas cada vez, y así cada diagnóstico trimestral compara contra la misma definición.
- **Los nombres de tus campos.** Si tu CRM llama "Fuente original" al primer origen, dilo en la skill.
- **Tu ciclo de venta.** Sustituye la referencia de 60 días por la tuya.
- **Tus reglas de encaje.** Si ya tienes un [ICP definido](/blog/definir-icp-b2b), pégalo como base para el eje de encaje del scoring.

## Errores habituales al usarla

**Pasarle solo las oportunidades ganadas.** Sin las perdidas y las abiertas no se ven las etapas atascadas ni el forecast inflado.

**Discutir el diagnóstico en lugar de los datos.** Si la skill dice que el 40 % del pipeline está parado, la conversación útil es qué oportunidades son y por qué, no si la cifra "se siente" exagerada.

**Arreglarlo añadiendo campos obligatorios.** Cada campo nuevo baja la adopción. La skill no lo propone por eso.

**Cambiar de CRM por el resultado.** Si migras el mismo proceso a otra herramienta, tendrás el mismo diagnóstico con otra factura.

## Preguntas frecuentes

**¿Funciona con HubSpot gratuito?**
Sí, siempre que puedas exportar las oportunidades y los contactos. Algunas propiedades, como la fecha del último cambio de etapa, pueden no estar en el export por defecto; añádelas a la vista antes de exportar.

**¿Cuánto histórico necesita?**
Doce meses es lo ideal. Con menos también funciona, pero los tiempos medios por etapa serán menos fiables y la skill lo indicará.

**¿Puede limpiar el CRM directamente?**
No. Diagnostica y prioriza. La limpieza conviene hacerla con cuidado y con copia de seguridad, porque automatizarla del todo sin revisar suele romper cosas.

**¿Cada cuánto conviene pasarla?**
Una vez al trimestre, o antes de cualquier migración o rediseño del pipeline.

**¿Sirve para decidir si cambiar de CRM?**
Sirve para descartar que el problema sea la herramienta, que es lo más habitual. Si después del diagnóstico el proceso está bien y la herramienta sigue sin permitirlo, entonces sí es una conversación sobre cambiar.

## Por dónde empezaríamos

Por las etapas y el origen. Con etapas que describen al cliente y un origen que viaja sin sobrescribirse, el resto del diagnóstico empieza a mejorar solo, y esta skill pasa de encontrar problemas a medir el progreso cada trimestre.

Es lo que hacemos en [RevOps y CRM](/servicios/revops-crm). [Media hora y lo vemos](/#contacto).

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- **CRM y RevOps: diagnostico-crm**

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
