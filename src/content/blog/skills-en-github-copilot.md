---
title: "Skills en GitHub Copilot: VS Code, CLI y agente en la nube"
description: "Qué partes de GitHub Copilot usan skills, dónde se guardan en el repositorio y en tu equipo, cómo se invocan en VS Code y cómo compartirlas con el equipo."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "GitHub Copilot", "VS Code"]
---

GitHub Copilot admite skills en casi todos sus sitios: el editor, la terminal, la revisión de código y el agente que trabaja en la nube. El formato es el mismo estándar que usan Claude Code, Codex o Cursor.

Lo que hace interesante a Copilot no es tanto cómo usa las skills como dónde las guarda: en el propio repositorio, junto al trabajo. Para un equipo, eso resuelve el problema de que cada persona tenga una versión distinta de la misma skill.

## ¿Qué partes de Copilot usan skills?

Según la documentación de GitHub:

- El agente de Copilot en la nube.
- La revisión de código de Copilot.
- GitHub Copilot CLI.
- La app de GitHub Copilot.
- El modo agente en Visual Studio Code y en los IDE de JetBrains.

## ¿Dónde se guardan las skills?

| Tipo | Carpetas |
|---|---|
| De proyecto, en el repositorio | `.github/skills/`, `.claude/skills/` y `.agents/skills/` |
| Personales, en tu equipo | `~/.copilot/skills/` y `~/.agents/skills/` |

VS Code lee además `~/.claude/skills/` como carpeta personal. Si ya usas skills en Claude Code, las tendrás disponibles en Copilot dentro del editor.

## ¿Por qué .github/skills es la opción para un equipo?

Porque las skills del repositorio viajan con el código. Quien clona el repositorio las tiene, el agente en la nube las usa, y cualquier cambio en una skill pasa por una pull request, con su revisión y su historial.

Para una agencia o un equipo que trabaja con varios clientes, el patrón es especialmente útil: cada repositorio de cliente puede llevar sus propias skills con el tono, el cliente ideal o las prohibiciones de esa marca, y nadie tiene que acordarse de configurarlas.

## ¿Cómo se invocan las skills en VS Code?

- **Solas**: Copilot detecta y carga las skills relevantes según su descripción y lo que pides.
- **A mano**: escribe `/` en el chat para ver las skills disponibles y elige una, por ejemplo `/brief-seo-b2b`.

Dos ajustes de VS Code relacionados con las skills:

- `github.copilot.chat.skillTool.enabled` permite ejecutar skills en contextos separados.
- `chat.useCustomizationsInParentRepositories` hace que, en repositorios con varios proyectos, se encuentren las skills de la raíz.

El antiguo ajuste `chat.agentSkillsLocations` está en desuso.

## ¿Qué campos entiende VS Code en el SKILL.md?

Obligatorios, `name` y `description`, con los límites del estándar: nombre en minúsculas con guiones, hasta 64 caracteres, y descripción de hasta 1.024 caracteres que explique qué hace y cuándo usarla.

Opcionales, `argument-hint`, `user-invocable`, `disable-model-invocation` y `context`.

## ¿Cómo encuentro skills ya hechas?

GitHub CLI incluye comandos `gh skill` para descubrir skills, y hay repositorios públicos con colecciones, como el de Anthropic. Antes de instalar una skill de un tercero, léela entera: es un conjunto de instrucciones que tu agente va a seguir, y puede incluir scripts.

## Las seis skills de Scale It en Copilot

| Servicio | Skill | Invocarla a mano | Descargar |
|---|---|---|---|
| SEO | [brief-seo-b2b](/blog/skill-seo-para-ia) | `/brief-seo-b2b` | [SKILL.md](/skills/brief-seo-b2b/SKILL.md) · [.zip](/skills/brief-seo-b2b.zip) |
| Outbound | [secuencia-outbound](/blog/skill-outbound-para-ia) | `/secuencia-outbound` | [SKILL.md](/skills/secuencia-outbound/SKILL.md) · [.zip](/skills/secuencia-outbound.zip) |
| Influencers | [seleccion-creadores](/blog/skill-influencers-para-ia) | `/seleccion-creadores` | [SKILL.md](/skills/seleccion-creadores/SKILL.md) · [.zip](/skills/seleccion-creadores.zip) |
| Paid media | [auditoria-paid-b2b](/blog/skill-paid-media-para-ia) | `/auditoria-paid-b2b` | [SKILL.md](/skills/auditoria-paid-b2b/SKILL.md) · [.zip](/skills/auditoria-paid-b2b.zip) |
| Agentes de IA | [spec-agente-ia](/blog/skill-disenar-agentes-de-ia) | `/spec-agente-ia` | [SKILL.md](/skills/spec-agente-ia/SKILL.md) · [.zip](/skills/spec-agente-ia.zip) |
| CRM y RevOps | [diagnostico-crm](/blog/skill-crm-revops-para-ia) | `/diagnostico-crm` | [SKILL.md](/skills/diagnostico-crm/SKILL.md) · [.zip](/skills/diagnostico-crm.zip) |

Para tenerlas en tu equipo, las seis de una vez:

```bash
for s in brief-seo-b2b secuencia-outbound seleccion-creadores auditoria-paid-b2b spec-agente-ia diagnostico-crm; do
  mkdir -p ~/.copilot/skills/$s
  curl -fsSL https://www.growth-scaleit.com/skills/$s/SKILL.md -o ~/.copilot/skills/$s/SKILL.md
done
```

Para compartirlas con todo el equipo, copia las carpetas a `.github/skills/` dentro del repositorio y haz commit.

## Preguntas frecuentes

**¿Funcionan en los IDE de JetBrains?**
Sí, en el modo agente de Copilot, según la documentación de GitHub.

**¿El agente en la nube usa mis skills personales?**
El agente en la nube trabaja sobre el repositorio, así que la forma segura de que use una skill es tenerla dentro del propio repositorio, en `.github/skills/`.

**¿Sirven las skills que ya tengo para Claude Code?**
Sí. Copilot lee `.claude/skills/` en los repositorios, y VS Code también `~/.claude/skills/` en tu equipo.

**¿Las skills ocupan contexto aunque no se usen?**
Solo su descripción. Copilot carga el contenido completo cuando la skill es relevante para la tarea.

**¿Qué ventaja tiene sobre copiar instrucciones en cada petición?**
Que no depende de que alguien se acuerde. La skill está en el repositorio, se activa cuando toca y es la misma para todo el equipo.

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · **GitHub Copilot** · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
