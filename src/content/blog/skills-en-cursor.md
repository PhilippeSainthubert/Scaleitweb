---
title: "Skills en Cursor: cuándo usar una skill y cuándo una regla"
description: "Dónde guarda Cursor las skills, cómo se invocan con /, en qué se diferencian de las reglas y cómo instalar seis skills de marketing en tu editor."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "Cursor", "reglas", "agentes de IA"]
---

Cursor tenía reglas mucho antes de que existieran las skills, y hoy conviven. Cursor recomienda las skills como la forma preferente de ampliar lo que hace su agente, pero las reglas no han desaparecido: hacen otra cosa.

Esta guía explica dónde van las skills en Cursor, cómo se usan y cómo decidir entre una skill y una regla.

## ¿Dónde busca Cursor las skills?

| Ámbito | Carpetas |
|---|---|
| Proyecto | `.agents/skills/` y `.cursor/skills/` |
| Usuario | `~/.agents/skills/` y `~/.cursor/skills/` |
| Compatibilidad | `.claude/skills/`, `.codex/skills/`, `~/.claude/skills/` y `~/.codex/skills/` |

Cursor recorre esas carpetas de forma recursiva y recoge cualquier `SKILL.md` que encuentre.

La fila de compatibilidad tiene una consecuencia práctica: **si ya tienes skills en Claude Code o en Codex, Cursor las ve sin que hagas nada**.

## ¿Cómo se usa una skill en Cursor?

- **Sola**: el agente tiene a la vista las skills disponibles y decide cuándo son relevantes.
- **A mano**: escribiendo `/` en el chat del agente y eligiendo la skill.
- **Activa toda la sesión**: usándola como modo personalizado con Option+Enter en Mac o Alt+Enter en Windows. Útil cuando vas a trabajar un buen rato en una sola tarea, como revisar un lote de artículos.

## ¿Skill o regla?

La diferencia de fondo: una regla es contexto estático que se aplica siempre, o siempre que trabajas con ciertos archivos. Una skill es contexto dinámico, que se carga solo cuando la tarea encaja y deja libre el resto del tiempo.

| Lo que necesitas | Qué usar |
|---|---|
| Que algo se cumpla siempre, como una convención de estilo | Regla |
| Que algo se aplique solo en ciertos archivos | Regla por ruta, o skill con el campo `paths` |
| Un proceso con pasos que usas de vez en cuando | Skill |
| Que funcione también en Claude Code, Codex o Copilot | Skill |

La última fila suele decidir. Una regla de Cursor solo existe en Cursor. Una skill te la llevas a cualquier herramienta compatible.

## ¿Cómo paso mis reglas a skills?

Con el comando `/migrate-to-skills`, que convierte las reglas dinámicas y los comandos personalizados en skills. Las reglas que deben cumplirse siempre conviene dejarlas como reglas.

## ¿Qué campos admite el SKILL.md en Cursor?

- `name`: obligatorio, en minúsculas con guiones, y tiene que coincidir con el nombre de la carpeta.
- `description`: obligatorio. Qué hace y cuándo usarla.
- `paths`: patrones de archivos para limitar cuándo aplica.
- `disable-model-invocation`: con `true`, solo se usa cuando la invocas tú.
- `icon` y `color`: el aspecto cuando la usas como modo personalizado.
- `metadata`: datos libres.

## ¿Tiene sentido Cursor para trabajo de marketing?

Más de lo que parece, si tu contenido vive en archivos. Nuestro propio blog son archivos Markdown en un repositorio, y un editor como Cursor permite pedirle a la skill que trabaje directamente sobre ellos: revisar que un borrador cumple su brief, detectar dos artículos que responden lo mismo o preparar el brief del siguiente a partir de lo que ya hay publicado.

Si tu contenido está en un gestor como WordPress, la ventaja se reduce y probablemente te resulte más cómodo ChatGPT o la app de Claude.

## Las seis skills de Scale It en Cursor

| Servicio | Skill | Invocarla a mano | Descargar |
|---|---|---|---|
| SEO | [brief-seo-b2b](/blog/skill-seo-para-ia) | `/brief-seo-b2b` | [SKILL.md](/skills/brief-seo-b2b/SKILL.md) · [.zip](/skills/brief-seo-b2b.zip) |
| Outbound | [secuencia-outbound](/blog/skill-outbound-para-ia) | `/secuencia-outbound` | [SKILL.md](/skills/secuencia-outbound/SKILL.md) · [.zip](/skills/secuencia-outbound.zip) |
| Influencers | [seleccion-creadores](/blog/skill-influencers-para-ia) | `/seleccion-creadores` | [SKILL.md](/skills/seleccion-creadores/SKILL.md) · [.zip](/skills/seleccion-creadores.zip) |
| Paid media | [auditoria-paid-b2b](/blog/skill-paid-media-para-ia) | `/auditoria-paid-b2b` | [SKILL.md](/skills/auditoria-paid-b2b/SKILL.md) · [.zip](/skills/auditoria-paid-b2b.zip) |
| Agentes de IA | [spec-agente-ia](/blog/skill-disenar-agentes-de-ia) | `/spec-agente-ia` | [SKILL.md](/skills/spec-agente-ia/SKILL.md) · [.zip](/skills/spec-agente-ia.zip) |
| CRM y RevOps | [diagnostico-crm](/blog/skill-crm-revops-para-ia) | `/diagnostico-crm` | [SKILL.md](/skills/diagnostico-crm/SKILL.md) · [.zip](/skills/diagnostico-crm.zip) |

Las seis de una vez:

```bash
for s in brief-seo-b2b secuencia-outbound seleccion-creadores auditoria-paid-b2b spec-agente-ia diagnostico-crm; do
  mkdir -p ~/.cursor/skills/$s
  curl -fsSL https://www.growth-scaleit.com/skills/$s/SKILL.md -o ~/.cursor/skills/$s/SKILL.md
done
```

Si prefieres que queden disponibles también en Codex, Gemini CLI y Copilot, cambia `~/.cursor/skills` por `~/.agents/skills` en el comando.

## Preguntas frecuentes

**¿Las skills que tengo en Claude Code funcionan en Cursor?**
Sí. Cursor lee `~/.claude/skills` y `.claude/skills` por compatibilidad.

**¿Dónde es mejor guardarlas?**
En una sola carpeta, para no mantener dos copias de la misma skill. Si usas varias herramientas, `~/.agents/skills` es la que más herramientas leen.

**¿Por qué una skill no se activa sola?**
Casi siempre por la descripción: no usa las palabras con las que pides la tarea. También puede tener `disable-model-invocation: true`, que la deja solo para uso manual.

**¿Las skills ocupan contexto todo el rato?**
No. Se cargan cuando la tarea encaja, que es justo la ventaja frente a una regla que se aplica siempre.

**¿Se pueden compartir con el equipo?**
Sí. Guárdalas en `.agents/skills` o `.cursor/skills` dentro del repositorio y quien trabaje en él las tendrá.

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · **Cursor** · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
