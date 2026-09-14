---
title: "Skills con GLM: usar Claude Code con el modelo de Z.ai"
description: "Cómo conectar Claude Code a GLM con el endpoint compatible de Z.ai para usar tus skills con otro modelo, qué configurar y qué comprobar antes de fiarte."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "GLM", "Z.ai", "Claude Code"]
---

GLM, la familia de modelos de Z.ai, no tiene una carpeta de skills propia. La forma de usar skills con GLM es otra, y resulta más sencilla de lo que parece: se usa Claude Code como herramienta y GLM como modelo.

Z.ai ofrece un punto de acceso compatible con el formato de Anthropic. Claude Code le envía las peticiones a esa dirección en lugar de a Anthropic, y todo lo que vive en Claude Code sigue funcionando. Las skills incluidas.

## ¿Cómo funciona por dentro?

Claude Code se divide en dos partes. Una es la herramienta: lee tus archivos, carga las skills, ejecuta comandos y gestiona las conexiones MCP. La otra es el modelo que razona sobre todo eso.

Al cambiar la dirección a la que Claude Code envía las peticiones, cambias solo la segunda parte. Z.ai recibe la petición, la traduce para GLM y devuelve la respuesta en el formato que Claude Code espera.

Por eso las skills se cargan exactamente igual: quien las busca en `~/.claude/skills` es Claude Code, no el modelo. Lo que cambia es el modelo que las lee y las sigue.

## ¿Qué es el GLM Coding Plan?

Es la suscripción de Z.ai para usar GLM dentro de herramientas de programación como Claude Code o Cline, a través de ese punto de acceso compatible. Los precios y los límites cambian con frecuencia; consúltalos en la web de Z.ai antes de contratar.

## ¿Cómo se configura?

Hay dos formas, las dos en la documentación oficial de Z.ai.

**Con su asistente de configuración**, que hace los cambios por ti:

```bash
npx @z_ai/coding-helper
```

**A mano**, añadiendo este bloque a `~/.claude/settings.json`:

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "tu_clave_de_zai",
    "ANTHROPIC_BASE_URL": "https://api.z.ai/api/anthropic",
    "API_TIMEOUT_MS": "3000000",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-5.3-flash",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-5.3",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-5.3"
  }
}
```

Los nombres de modelo son los de la documentación de Z.ai en septiembre de 2026. Cambian con cada versión nueva, así que compruébalos en [docs.z.ai](https://docs.z.ai/devpack/tool/claude) antes de copiarlos.

Un aviso: `~/.claude/settings.json` afecta a todas tus sesiones de Claude Code. Si quieres seguir usando los modelos de Anthropic en otros proyectos, pon ese bloque en el `.claude/settings.json` de las carpetas donde quieras usar GLM, en lugar de en tu carpeta personal.

## ¿Funcionan igual las skills con GLM?

Se cargan igual. Si se siguen igual depende del modelo, y eso hay que comprobarlo en lugar de suponerlo. Una prueba que lleva media hora:

1. **Elige tres casos reales** que ya hayas resuelto con una skill usando otro modelo.
2. **Pásalos por GLM** con la misma skill y la misma petición.
3. **Compara con tres preguntas**: ¿respeta el formato de salida? ¿Cumple las prohibiciones, como no inventar cifras o no escribir sin señal? ¿Pide lo que falta en lugar de suponerlo?

La tercera es la que más conviene vigilar. Un modelo que rellena los huecos con suposiciones produce respuestas que parecen completas y no lo son.

## ¿Qué pasa con los datos?

Con esta configuración, tus peticiones, incluidos los archivos que Claude Code lea para responder, se procesan en los servidores de Z.ai. Antes de pasarle datos de clientes, como un export de CRM o una lista de prospectos, lee su política de datos y comprueba dónde se procesan. Si son datos personales de la Unión Europea, revisa también la base legal de ese tratamiento.

Para tareas sin datos personales, como preparar un brief SEO o especificar un agente, la cuestión es mucho menos delicada.

## Las seis skills de Scale It con GLM

| Servicio | Skill | Invocarla a mano | Descargar |
|---|---|---|---|
| SEO | [brief-seo-b2b](/blog/skill-seo-para-ia) | `/brief-seo-b2b` | [SKILL.md](/skills/brief-seo-b2b/SKILL.md) · [.zip](/skills/brief-seo-b2b.zip) |
| Outbound | [secuencia-outbound](/blog/skill-outbound-para-ia) | `/secuencia-outbound` | [SKILL.md](/skills/secuencia-outbound/SKILL.md) · [.zip](/skills/secuencia-outbound.zip) |
| Influencers | [seleccion-creadores](/blog/skill-influencers-para-ia) | `/seleccion-creadores` | [SKILL.md](/skills/seleccion-creadores/SKILL.md) · [.zip](/skills/seleccion-creadores.zip) |
| Paid media | [auditoria-paid-b2b](/blog/skill-paid-media-para-ia) | `/auditoria-paid-b2b` | [SKILL.md](/skills/auditoria-paid-b2b/SKILL.md) · [.zip](/skills/auditoria-paid-b2b.zip) |
| Agentes de IA | [spec-agente-ia](/blog/skill-disenar-agentes-de-ia) | `/spec-agente-ia` | [SKILL.md](/skills/spec-agente-ia/SKILL.md) · [.zip](/skills/spec-agente-ia.zip) |
| CRM y RevOps | [diagnostico-crm](/blog/skill-crm-revops-para-ia) | `/diagnostico-crm` | [SKILL.md](/skills/diagnostico-crm/SKILL.md) · [.zip](/skills/diagnostico-crm.zip) |

Se instalan en la carpeta de Claude Code:

```bash
for s in brief-seo-b2b secuencia-outbound seleccion-creadores auditoria-paid-b2b spec-agente-ia diagnostico-crm; do
  mkdir -p ~/.claude/skills/$s
  curl -fsSL https://www.growth-scaleit.com/skills/$s/SKILL.md -o ~/.claude/skills/$s/SKILL.md
done
```

## Preguntas frecuentes

**¿Necesito una cuenta de Anthropic para usar GLM en Claude Code?**
Con el punto de acceso de Z.ai, la autenticación es con tu clave de Z.ai. Claude Code actúa solo como herramienta.

**¿Siguen funcionando los servidores MCP?**
Sí. Las conexiones MCP las gestiona Claude Code. Lo que depende del modelo es que decida usarlas cuando toca.

**¿Cómo vuelvo a los modelos de Anthropic?**
Quita el bloque `env` de `settings.json`, o usa la configuración por proyecto para tener GLM solo donde lo quieras.

**¿Es GLM mejor o peor que Claude para estas skills?**
Depende de la tarea, y cambia con cada versión. Por eso la recomendación es la prueba de tres casos con tus propios datos, en lugar de fiarse de una comparativa general.

**¿Puedo usar el GLM Coding Plan en otras herramientas?**
Sí. Z.ai lo conecta también con otras herramientas de programación, como Cline. En esas herramientas, las skills funcionan según lo que cada una admita.

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · **GLM** · [DeepSeek](/blog/skills-en-deepseek)
