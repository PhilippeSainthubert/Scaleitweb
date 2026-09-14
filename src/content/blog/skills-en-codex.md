---
title: "Skills en Codex: dónde van, cómo se activan y cómo instalarlas"
description: "Guía de skills en Codex de OpenAI: la carpeta .agents/skills, la invocación con $, skill-creator, skill-installer y openai.yaml, con seis skills listas."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "Codex", "OpenAI", "agentes de IA"]
---

OpenAI adoptó el estándar de skills en Codex, y el formato es exactamente el mismo que en Claude Code: una carpeta con un `SKILL.md`. Lo que más confunde al empezar es otra cosa, la carpeta donde van. Algunas guías publicadas hablan de `~/.codex/skills`, y la documentación actual de OpenAI usa `.agents/skills`.

Esta guía sigue la documentación actual, y explica por qué esa carpeta es una buena noticia si usas más de una herramienta.

## ¿Dónde busca Codex las skills?

Codex revisa varios ámbitos, de lo más concreto a lo más general:

| Ámbito | Ruta | Para qué |
|---|---|---|
| Carpeta de trabajo | `$CWD/.agents/skills` | Skills para una carpeta concreta |
| Repositorio | `$REPO_ROOT/.agents/skills` | Skills del equipo, versionadas con el código |
| Usuario | `$HOME/.agents/skills` | Tus skills, en todos tus proyectos |
| Administración | `/etc/codex/skills` | Skills por defecto de la máquina |
| Sistema | Incluidas en Codex | Por ejemplo `$skill-creator` |

La buena noticia es que `~/.agents/skills` no es solo de Codex. Gemini CLI, Cursor y GitHub Copilot leen esa misma carpeta. Una skill instalada ahí sirve en las cuatro herramientas.

Si tienes skills en `~/.codex/skills` de una guía anterior y no te aparecen, muévelas a `~/.agents/skills`.

## ¿Cómo se invoca una skill en Codex?

- **Sola**: Codex elige la skill cuya descripción encaja con lo que pides.
- **A mano**: escribiendo `$` y el nombre, por ejemplo `$brief-seo-b2b`, en la terminal o en la extensión del editor.
- **Desde el listado**: el comando `/skills` muestra las disponibles.

Como en cualquier herramienta compatible, la descripción es lo que decide cuándo se activa sola. Si una skill no salta cuando esperas, casi siempre es porque su descripción no usa las palabras con las que la pides.

## ¿Cómo se crea una skill sin escribirla a mano?

Con `$skill-creator`, una skill que viene incluida en Codex. Le explicas qué quieres que haga y te genera la carpeta con el `SKILL.md`.

Revisa sobre todo la descripción que produce, que es lo que decide cuándo se usa, y las prohibiciones: lo que la skill no debe hacer suele ser más útil que lo que debe hacer, y es lo que menos aparece cuando se genera sin indicaciones.

## ¿Para qué sirve $skill-installer?

Instala skills del catálogo curado de OpenAI sin tener que buscar la carpeta. Por ejemplo, `$skill-installer linear`.

Para skills que no están en ese catálogo, como las de esta serie, basta con copiar la carpeta a `~/.agents/skills`, que es lo que hace el comando de más abajo.

## ¿Qué es agents/openai.yaml?

Un archivo opcional dentro de la carpeta de la skill, que solo lee Codex. Sirve para dos cosas: darle a la skill un nombre visible, un icono y un color en la interfaz, y cambiar cómo se invoca.

La opción más útil es `allow_implicit_invocation` en `false`. Con ella, Codex no activa la skill por su cuenta: solo se usa cuando la llamas con `$`. Tiene sentido en skills que hacen algo con efectos, como publicar o enviar, donde prefieres decidir tú el momento.

Las demás herramientas ignoran ese archivo, así que no rompe la compatibilidad de la skill.

## ¿Y en la app de ChatGPT?

Según la documentación de OpenAI, las skills independientes funcionan en la app de escritorio de ChatGPT, además de en Codex CLI y en la extensión del editor. Cómo se usan allí, en qué planes y qué hacer si no te aparecen está en la [guía de skills en ChatGPT](/blog/skills-en-chatgpt).

## Las seis skills de Scale It en Codex

| Servicio | Skill | Invocarla a mano | Descargar |
|---|---|---|---|
| SEO | [brief-seo-b2b](/blog/skill-seo-para-ia) | `$brief-seo-b2b` | [SKILL.md](/skills/brief-seo-b2b/SKILL.md) · [.zip](/skills/brief-seo-b2b.zip) |
| Outbound | [secuencia-outbound](/blog/skill-outbound-para-ia) | `$secuencia-outbound` | [SKILL.md](/skills/secuencia-outbound/SKILL.md) · [.zip](/skills/secuencia-outbound.zip) |
| Influencers | [seleccion-creadores](/blog/skill-influencers-para-ia) | `$seleccion-creadores` | [SKILL.md](/skills/seleccion-creadores/SKILL.md) · [.zip](/skills/seleccion-creadores.zip) |
| Paid media | [auditoria-paid-b2b](/blog/skill-paid-media-para-ia) | `$auditoria-paid-b2b` | [SKILL.md](/skills/auditoria-paid-b2b/SKILL.md) · [.zip](/skills/auditoria-paid-b2b.zip) |
| Agentes de IA | [spec-agente-ia](/blog/skill-disenar-agentes-de-ia) | `$spec-agente-ia` | [SKILL.md](/skills/spec-agente-ia/SKILL.md) · [.zip](/skills/spec-agente-ia.zip) |
| CRM y RevOps | [diagnostico-crm](/blog/skill-crm-revops-para-ia) | `$diagnostico-crm` | [SKILL.md](/skills/diagnostico-crm/SKILL.md) · [.zip](/skills/diagnostico-crm.zip) |

Las seis de una vez, en la carpeta compartida:

```bash
for s in brief-seo-b2b secuencia-outbound seleccion-creadores auditoria-paid-b2b spec-agente-ia diagnostico-crm; do
  mkdir -p ~/.agents/skills/$s
  curl -fsSL https://www.growth-scaleit.com/skills/$s/SKILL.md -o ~/.agents/skills/$s/SKILL.md
done
```

Al quedar en `~/.agents/skills`, también estarán disponibles en Gemini CLI, Cursor y GitHub Copilot sin hacer nada más.

## ¿Qué hacer si una skill no aparece?

- **Está en una carpeta antigua.** Muévela de `~/.codex/skills` a `~/.agents/skills`.
- **El nombre no coincide con la carpeta.** Tienen que ser iguales.
- **El frontmatter no está en la primera línea** del `SKILL.md`.
- **La descripción es genérica** y Codex no la asocia a lo que pides. Prueba a invocarla con `$nombre` para confirmar que funciona.
- **Tiene `allow_implicit_invocation` en `false`** en su `openai.yaml`, así que solo se activa a mano.

## Preguntas frecuentes

**¿Qué diferencia hay entre una skill y AGENTS.md?**
AGENTS.md contiene las instrucciones del proyecto que Codex tiene presentes siempre. Una skill es un proceso concreto que se carga solo cuando la tarea lo pide.

**¿Puedo usar en Codex las skills que ya tengo en Claude Code?**
Sí. El formato es el mismo: copia la carpeta de `~/.claude/skills` a `~/.agents/skills`. Los campos exclusivos de Claude Code se ignoran sin dar error.

**¿Cómo me aseguro de que una skill esté disponible en cualquier entorno?**
Guárdala en `.agents/skills` dentro del propio repositorio. Así viaja con el código y la tiene cualquiera que trabaje en él.

**¿Las skills consumen contexto aunque no se usen?**
Solo su nombre y su descripción. El resto se carga cuando se activan.

**¿Hace falta saber programar para usarlas?**
No. Una skill es un archivo de texto con instrucciones. Instalarla es copiar una carpeta.

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · **Codex** · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
