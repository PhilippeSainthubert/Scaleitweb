---
title: "Skills en Gemini CLI: instalación, permisos y comandos"
description: "Cómo usar skills en Gemini CLI: carpetas y prioridad, el permiso que pide al activarlas, los comandos /skills y gemini skills install, y qué hacer en la app."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "Gemini", "Gemini CLI", "Google"]
---

Gemini CLI, la herramienta de terminal de Google, admite el mismo estándar de skills que Claude Code o Codex. Un `SKILL.md` escrito para cualquiera de ellas funciona aquí sin cambios.

Tiene dos particularidades que conviene conocer antes de instalar nada. La primera es que te pide permiso antes de activar una skill. La segunda es que tiene un sistema de prioridades entre carpetas que decide qué versión se usa cuando hay dos con el mismo nombre.

## ¿Dónde busca Gemini CLI las skills?

En cuatro niveles, de menor a mayor prioridad:

| Nivel | Carpeta |
|---|---|
| 1. Incluidas | Vienen con Gemini CLI |
| 2. De extensiones | Las que traen las extensiones instaladas |
| 3. De usuario | `~/.gemini/skills/` o `~/.agents/skills/` |
| 4. De proyecto | `.gemini/skills/` o `.agents/skills/` |

Dos reglas salen de esa tabla. Una skill de proyecto sustituye a una tuya con el mismo nombre, lo cual permite que un proyecto tenga su propia versión de una skill. Y dentro del mismo nivel, `.agents/skills` tiene prioridad sobre `.gemini/skills`.

`~/.agents/skills` es además la carpeta que leen Codex, Cursor y GitHub Copilot. Si usas varias herramientas, es el mejor sitio para tus skills.

## ¿Por qué pide permiso antes de usar una skill?

Cuando una skill encaja con lo que pides, el modelo llama a una herramienta interna para activarla, y Gemini CLI te enseña una confirmación con tres datos: el nombre de la skill, para qué sirve y la carpeta a la que va a tener acceso.

Si aceptas, el contenido del `SKILL.md` y la estructura de su carpeta entran en la conversación, y el modelo puede leer los archivos que la skill lleve dentro.

Tiene sentido: una skill puede incluir scripts y archivos, y conviene saber cuándo se les da acceso. En la práctica, lee la descripción que aparece en la confirmación. Si no es la skill que esperabas para esa tarea, recházala.

## ¿Qué comandos hay para gestionar skills?

Dentro de una sesión:

| Comando | Qué hace |
|---|---|
| `/skills list` | Muestra las skills encontradas |
| `/skills link <ruta>` | Enlaza una carpeta local, con `--scope user` o `--scope workspace` |
| `/skills enable <nombre>` | Activa una skill |
| `/skills disable <nombre>` | La desactiva sin borrarla |
| `/skills reload` | Vuelve a buscar skills, por ejemplo después de editar una |

Desde la terminal:

| Comando | Qué hace |
|---|---|
| `gemini skills list --all` | Lista todas, incluidas las que vienen de serie |
| `gemini skills install <url-git> --consent` | Instala skills desde un repositorio |
| `gemini skills uninstall <nombre> --scope workspace` | Quita una skill |

## ¿Cómo se instala una skill que no está en un repositorio?

Copiando su carpeta a una de las rutas de la tabla, o enlazándola con `/skills link`. Después, `/skills reload` para que la encuentre sin reiniciar.

## ¿Y en Antigravity?

Antigravity, el entorno de agentes de Google, usa el mismo formato de skills. Si trabajas en un proyecto, deja las skills en la carpeta `.agents/skills` del proyecto y las tendrás disponibles en las dos herramientas.

## ¿Y en la app de Gemini?

Esta guía cubre Gemini CLI y Antigravity. En la app de Gemini, la vía equivalente es un Gem: crea uno, pega en sus instrucciones el cuerpo del `SKILL.md` y úsalo para esa tarea.

Se pierde la activación automática, porque un Gem sigue sus instrucciones siempre. Por eso conviene un Gem por skill.

## Las seis skills de Scale It en Gemini CLI

| Servicio | Skill | Invocarla a mano | Descargar |
|---|---|---|---|
| SEO | [brief-seo-b2b](/blog/skill-seo-para-ia) | Se activa sola | [SKILL.md](/skills/brief-seo-b2b/SKILL.md) · [.zip](/skills/brief-seo-b2b.zip) |
| Outbound | [secuencia-outbound](/blog/skill-outbound-para-ia) | Se activa sola | [SKILL.md](/skills/secuencia-outbound/SKILL.md) · [.zip](/skills/secuencia-outbound.zip) |
| Influencers | [seleccion-creadores](/blog/skill-influencers-para-ia) | Se activa sola | [SKILL.md](/skills/seleccion-creadores/SKILL.md) · [.zip](/skills/seleccion-creadores.zip) |
| Paid media | [auditoria-paid-b2b](/blog/skill-paid-media-para-ia) | Se activa sola | [SKILL.md](/skills/auditoria-paid-b2b/SKILL.md) · [.zip](/skills/auditoria-paid-b2b.zip) |
| Agentes de IA | [spec-agente-ia](/blog/skill-disenar-agentes-de-ia) | Se activa sola | [SKILL.md](/skills/spec-agente-ia/SKILL.md) · [.zip](/skills/spec-agente-ia.zip) |
| CRM y RevOps | [diagnostico-crm](/blog/skill-crm-revops-para-ia) | Se activa sola | [SKILL.md](/skills/diagnostico-crm/SKILL.md) · [.zip](/skills/diagnostico-crm.zip) |

Las seis de una vez:

```bash
for s in brief-seo-b2b secuencia-outbound seleccion-creadores auditoria-paid-b2b spec-agente-ia diagnostico-crm; do
  mkdir -p ~/.gemini/skills/$s
  curl -fsSL https://www.growth-scaleit.com/skills/$s/SKILL.md -o ~/.gemini/skills/$s/SKILL.md
done
```

Después, dentro de Gemini CLI, ejecuta `/skills reload`. Si prefieres compartirlas con Codex, Cursor y Copilot, cambia `~/.gemini/skills` por `~/.agents/skills` en el comando.

## Preguntas frecuentes

**¿Qué diferencia hay entre una skill y GEMINI.md?**
GEMINI.md es el contexto que Gemini CLI carga en cada sesión. Una skill se carga solo cuando la tarea la necesita, y después de que des permiso.

**¿Las skills de Claude Code funcionan en Gemini CLI?**
Sí. Es el mismo estándar. Los campos exclusivos de Claude Code se ignoran, y todo lo que esté en el cuerpo del `SKILL.md` funciona igual.

**¿Qué pasa si tengo dos skills con el mismo nombre?**
Gana la de mayor prioridad según la tabla: la de proyecto sobre la de usuario, y dentro del mismo nivel, `.agents/skills` sobre `.gemini/skills`.

**¿Las skills ocupan contexto aunque no se usen?**
Solo su nombre y su descripción. Las instrucciones completas se añaden cuando la skill se activa.

**¿Puedo desactivar una skill sin borrarla?**
Sí, con `/skills disable <nombre>`. Vuelve a activarla con `/skills enable <nombre>`.

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · **Gemini** · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
