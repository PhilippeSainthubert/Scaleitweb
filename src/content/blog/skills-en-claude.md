---
title: "Skills en Claude: cómo instalarlas en Claude Code y en la app"
description: "Dónde van las skills en Claude Code, cómo subirlas a la app de Claude, qué campos admite el SKILL.md y qué hacer cuando una skill no se activa."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "Claude", "Claude Code", "Anthropic"]
---

Anthropic creó el formato de las skills y lo publicó como estándar abierto a finales de 2025. Por eso hoy el mismo archivo funciona en media docena de herramientas de otras empresas.

Dentro de Claude, sin embargo, hay dos sitios muy distintos donde usarlas, y se instalan de forma diferente. Claude Code trabaja con carpetas en tu ordenador. La app de Claude, en la web y en el escritorio, recibe las skills como archivo .zip. Esta guía cubre los dos.

## ¿Qué es una skill en Claude?

Una carpeta con un archivo `SKILL.md`. Arriba, entre dos líneas `---`, el nombre y la descripción. Debajo, las instrucciones en Markdown.

Al empezar, Claude solo lee la descripción de cada skill instalada. Cuando lo que pides encaja con alguna, carga el archivo entero. Eso tiene una consecuencia práctica: **la descripción es la parte más importante de una skill**, porque decide cuándo se usa.

La carpeta puede llevar más archivos, como referencias, plantillas o scripts. Claude los lee solo cuando los necesita, y la recomendación oficial es mantener el `SKILL.md` por debajo de 500 líneas y mover el detalle a archivos aparte.

## ¿Dónde se guardan las skills en Claude Code?

| Tipo | Ruta | Para quién |
|---|---|---|
| Personal | `~/.claude/skills/nombre/SKILL.md` | Todos tus proyectos en ese ordenador |
| De proyecto | `.claude/skills/nombre/SKILL.md` | Quien trabaje en ese repositorio |
| De plugin | `skills/nombre/SKILL.md` dentro del plugin | Donde el plugin esté activado |

Las de proyecto son las interesantes para un equipo: van en el repositorio con el resto del trabajo y todo el mundo usa la misma versión. Si una personal y una de proyecto se llaman igual, gana la personal.

Claude Code vigila esas carpetas. Si editas un `SKILL.md`, el cambio se aplica en la misma sesión, sin reiniciar.

## ¿Cómo se activa una skill en Claude Code?

De dos formas:

- **Sola**, cuando Claude detecta que la tarea encaja con la descripción.
- **A mano**, escribiendo `/` seguido del nombre de la carpeta, por ejemplo `/brief-seo-b2b`.

Dos campos del frontmatter controlan quién puede activarla. Con `disable-model-invocation: true`, solo se usa cuando la llamas tú, algo recomendable en skills que publican o envían cosas. Con `user-invocable: false`, solo la usa Claude y no aparece en el menú, que sirve para conocimiento de fondo.

## ¿Qué campos admite el SKILL.md en Claude Code?

El estándar solo exige `name` y `description`. Claude Code admite bastantes más. Los que más se usan:

| Campo | Para qué sirve |
|---|---|
| `description` y `when_to_use` | Cuándo usarla. Juntos se recortan a 1.536 caracteres en el listado |
| `disable-model-invocation` | Que solo se active a mano |
| `allowed-tools` | Herramientas preaprobadas mientras se usa la skill |
| `arguments` y `argument-hint` | Argumentos con nombre al invocarla |
| `context: fork` | Ejecutarla en un subagente aislado, sin el historial de la conversación |
| `paths` | Activarla solo cuando se trabaja con ciertos archivos |
| `model` y `effort` | Forzar un modelo o un nivel de esfuerzo |

Un aviso si quieres que tus skills sirvan también en otras herramientas: los campos que no están en el estándar solo funcionan en Claude Code, y el resto de herramientas los ignora. Por eso las seis skills de esta serie usan solo `name`, `description` y `metadata`, y todo lo importante va en el cuerpo.

## ¿Cómo se sube una skill a la app de Claude?

Las skills están disponibles en los planes Free, Pro, Max, Team y Enterprise, y **necesitan tener activada la ejecución de código**.

1. **Activa la ejecución de código.** En los planes individuales, en Settings, Capabilities. En Team y Enterprise lo controla quien administra la organización.
2. **Ve a Customize, Skills**, pulsa el botón **+**, elige **Create skill** y después **Upload a skill**.
3. **Sube el .zip.** Dentro tiene que haber una carpeta con el mismo nombre que la skill, y el `SKILL.md` dentro de ella.

Si tienes la interfaz en español, esos menús pueden aparecer traducidos. La subida falla si el nombre o la descripción tienen caracteres no válidos, o si la carpeta no se llama como la skill.

Las skills que subes son privadas hasta que las compartes. En Team y Enterprise se pueden compartir con compañeros concretos, con grupos o con toda la organización. Quien las recibe puede usarlas pero no editarlas, y se actualizan solas cuando el propietario las cambia.

## ¿Por qué una skill no aparece en una sesión en la nube?

Porque las sesiones de Claude Code en la nube no cargan las skills personales de `~/.claude/skills`: esa carpeta está en tu ordenador, no en el entorno remoto.

Sí cargan las skills de proyecto que estén en el repositorio y las skills sincronizadas desde tu cuenta de claude.ai, si activas la sincronización en los ajustes de la cuenta. Si una skill tiene que estar disponible en cualquier sitio, súbela al repositorio o sincronízala.

## Las seis skills de Scale It en Claude

| Servicio | Skill | Invocarla a mano | Descargar |
|---|---|---|---|
| SEO | [brief-seo-b2b](/blog/skill-seo-para-ia) | `/brief-seo-b2b` | [SKILL.md](/skills/brief-seo-b2b/SKILL.md) · [.zip](/skills/brief-seo-b2b.zip) |
| Outbound | [secuencia-outbound](/blog/skill-outbound-para-ia) | `/secuencia-outbound` | [SKILL.md](/skills/secuencia-outbound/SKILL.md) · [.zip](/skills/secuencia-outbound.zip) |
| Influencers | [seleccion-creadores](/blog/skill-influencers-para-ia) | `/seleccion-creadores` | [SKILL.md](/skills/seleccion-creadores/SKILL.md) · [.zip](/skills/seleccion-creadores.zip) |
| Paid media | [auditoria-paid-b2b](/blog/skill-paid-media-para-ia) | `/auditoria-paid-b2b` | [SKILL.md](/skills/auditoria-paid-b2b/SKILL.md) · [.zip](/skills/auditoria-paid-b2b.zip) |
| Agentes de IA | [spec-agente-ia](/blog/skill-disenar-agentes-de-ia) | `/spec-agente-ia` | [SKILL.md](/skills/spec-agente-ia/SKILL.md) · [.zip](/skills/spec-agente-ia.zip) |
| CRM y RevOps | [diagnostico-crm](/blog/skill-crm-revops-para-ia) | `/diagnostico-crm` | [SKILL.md](/skills/diagnostico-crm/SKILL.md) · [.zip](/skills/diagnostico-crm.zip) |

Para Claude Code, las seis de una vez:

```bash
for s in brief-seo-b2b secuencia-outbound seleccion-creadores auditoria-paid-b2b spec-agente-ia diagnostico-crm; do
  mkdir -p ~/.claude/skills/$s
  curl -fsSL https://www.growth-scaleit.com/skills/$s/SKILL.md -o ~/.claude/skills/$s/SKILL.md
done
```

Para la app de Claude, descarga los .zip de la tabla y súbelos uno a uno.

## ¿Qué hacer si una skill no se activa?

Por orden de frecuencia:

- **La descripción es vaga.** "Ayuda con SEO" no le dice a Claude cuándo usarla. Tiene que decir qué hace y cuándo, con las palabras que usarías al pedirlo.
- **El frontmatter no empieza en la primera línea.** Si hay una línea en blanco antes del primer `---`, no se reconoce.
- **El nombre no coincide con la carpeta.** El estándar exige que sean iguales.
- **Otra skill se solapa y gana.** Invócala a mano con `/nombre`: si funciona así, el problema es de descripción.
- **En la app, la ejecución de código está desactivada.** Sin ella las skills no funcionan.

## Preguntas frecuentes

**¿En qué se diferencia una skill de CLAUDE.md?**
CLAUDE.md se carga en cada sesión del proyecto: sirve para lo que Claude tiene que saber siempre. Una skill se carga solo cuando la tarea encaja: sirve para procesos concretos que no hace falta tener delante todo el rato.

**¿Y de un servidor MCP?**
Un servidor MCP da acceso a datos y herramientas externas, como Search Console o tu CRM. La skill da el criterio para usarlos. Se complementan.

**¿Las skills gastan tokens aunque no las use?**
Solo la descripción. El contenido entero entra en la conversación cuando la skill se activa.

**¿Cuántas skills puedo tener instaladas?**
Muchas. Como de cada una solo se carga la descripción, lo que suele dar problemas no es el número, sino que dos descripciones se parezcan demasiado.

**¿Funcionan si uso Claude Code con otro modelo?**
Sí. Quien carga las skills es Claude Code, no el modelo. Lo explicamos en las guías de [GLM](/blog/skills-en-glm) y [DeepSeek](/blog/skills-en-deepseek).

**¿Puedo usar las mismas skills en Codex o Cursor?**
Sí, es el mismo archivo. Cambia la carpeta, y Cursor incluso lee `~/.claude/skills` directamente.

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

**Claude** · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
