---
title: "Skills en ChatGPT: cómo usarlas y qué hacer si no te aparecen"
description: "Cómo funcionan las skills en ChatGPT, en qué planes y apps están, cómo se invocan con @ y cómo aprovechar estas skills aunque tu cuenta todavía no las tenga."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "ChatGPT", "OpenAI"]
---

Para la mayoría de equipos de marketing, la IA no está en una terminal: está en ChatGPT. Por eso importa que OpenAI haya adoptado el mismo estándar de skills que Claude, Codex o Cursor. Una skill escrita una vez puede usarse en todas.

Lo que no es igual en todas es la disponibilidad. En ChatGPT depende del plan, de la configuración del espacio de trabajo y de la app que uses, y la propia documentación de OpenAI no es del todo coherente al respecto. Esta guía separa lo confirmado de lo que depende de tu cuenta, y da una alternativa que funciona aunque tu cuenta no tenga skills.

## ¿Qué es una skill en ChatGPT?

Lo mismo que en el resto de herramientas: una carpeta con un archivo `SKILL.md` que describe un proceso. ChatGPT tiene presente la descripción de cada skill y la usa cuando lo que pides encaja, o cuando la llamas tú.

La diferencia con un GPT personalizado es de enfoque. Un GPT es un asistente aparte que abres para una tarea. Una skill es un procedimiento que se carga dentro de cualquier conversación cuando hace falta.

## ¿Qué planes tienen skills?

La ayuda de OpenAI indica que las skills personales están disponibles de forma general en ChatGPT Business, Enterprise, Healthcare y Edu. En otra página, sobre plugins, habla de skills personales en planes de pago salvo Free y Go.

Las dos páginas no coinciden del todo, así que lo prudente es esto:

- **Business, Enterprise y Edu**: disponibles. En Enterprise y Edu vienen desactivadas por defecto hasta que quien administra el espacio las activa en los permisos.
- **Plus y Pro**: compruébalo en tu cuenta. Puede depender de la app y del momento del despliegue.
- **Free y Go**: no están incluidas.

## ¿Dónde se usan?

Según la documentación de OpenAI, las skills independientes funcionan en la app de escritorio de ChatGPT. Las skills que forman parte de un plugin están también en la web, en el escritorio y en el móvil.

En la interfaz suelen aparecer en el directorio de plugins, en una pestaña de Skills. Si tu versión es distinta, busca Skills en la barra lateral.

## ¿Cómo se invoca una skill?

- **Sola**: ChatGPT la usa cuando la tarea encaja con su descripción.
- **A mano**: escribe `@` en el chat y elige la skill, por ejemplo `@auditoria-paid-b2b`.

## ¿Cómo se crea una skill en ChatGPT?

Con `@skill-creator`, que te guía para crearla. Si ya tienes el `SKILL.md`, como los de esta serie, pídele que cree una skill con ese contenido exacto, sin reescribirlo, y pégaselo.

Revisa el resultado antes de usarlo. Cualquier asistente que "mejora" una skill tiende a suavizar las prohibiciones, y en estas skills las prohibiciones son lo que evita los errores caros, como inventar cifras.

## ¿Qué hacer si tu cuenta no tiene skills?

Usar un proyecto. Se pierde la activación automática, pero el proceso es el mismo:

1. **Crea un proyecto** para la tarea. Por ejemplo, "Auditoría de paid".
2. **Sube el `SKILL.md`** como archivo del proyecto.
3. **Escribe en las instrucciones del proyecto**: "En este proyecto, sigue al pie de la letra el proceso del archivo SKILL.md, incluido el formato de salida y lo que no hay que hacer."

La diferencia práctica es que las instrucciones de un proyecto se aplican siempre dentro de ese proyecto, así que conviene un proyecto por skill en lugar de mezclarlas todas.

## ¿Qué skills de esta serie van mejor en ChatGPT?

Todas funcionan, pero tres aprovechan especialmente lo que ChatGPT hace bien:

- **auditoria-paid-b2b** y **diagnostico-crm**, porque trabajan sobre archivos CSV y ChatGPT los analiza con código dentro de la conversación.
- **seleccion-creadores**, porque puedes pegarle capturas de pantalla de perfiles y comentarios, que las plataformas sociales no dejan leer de forma automática.

Para **brief-seo-b2b**, asegúrate de que la búsqueda web está activada en la conversación.

| Servicio | Skill | Invocarla a mano | Descargar |
|---|---|---|---|
| SEO | [brief-seo-b2b](/blog/skill-seo-para-ia) | `@brief-seo-b2b` | [SKILL.md](/skills/brief-seo-b2b/SKILL.md) · [.zip](/skills/brief-seo-b2b.zip) |
| Outbound | [secuencia-outbound](/blog/skill-outbound-para-ia) | `@secuencia-outbound` | [SKILL.md](/skills/secuencia-outbound/SKILL.md) · [.zip](/skills/secuencia-outbound.zip) |
| Influencers | [seleccion-creadores](/blog/skill-influencers-para-ia) | `@seleccion-creadores` | [SKILL.md](/skills/seleccion-creadores/SKILL.md) · [.zip](/skills/seleccion-creadores.zip) |
| Paid media | [auditoria-paid-b2b](/blog/skill-paid-media-para-ia) | `@auditoria-paid-b2b` | [SKILL.md](/skills/auditoria-paid-b2b/SKILL.md) · [.zip](/skills/auditoria-paid-b2b.zip) |
| Agentes de IA | [spec-agente-ia](/blog/skill-disenar-agentes-de-ia) | `@spec-agente-ia` | [SKILL.md](/skills/spec-agente-ia/SKILL.md) · [.zip](/skills/spec-agente-ia.zip) |
| CRM y RevOps | [diagnostico-crm](/blog/skill-crm-revops-para-ia) | `@diagnostico-crm` | [SKILL.md](/skills/diagnostico-crm/SKILL.md) · [.zip](/skills/diagnostico-crm.zip) |

## Preguntas frecuentes

**¿Una skill de ChatGPT sirve en Codex?**
Sí. El formato es el mismo, y OpenAI plantea las skills como algo que se escribe una vez y se usa en ChatGPT, en Codex y en otras herramientas compatibles.

**¿Por qué no veo @skill-creator?**
Porque las skills no están activas en tu cuenta o en tu espacio de trabajo. En Enterprise y Edu, pide a quien administra el espacio que las active.

**¿Mis datos se usan para entrenar modelos?**
En Business, Enterprise y Edu, OpenAI no usa por defecto tus datos para entrenar. En los planes individuales se puede desactivar en los controles de datos. Aun así, no subas datos personales de clientes si no los necesitas: para los diagnósticos basta con cifras agregadas.

**¿Funcionan en el móvil?**
Las skills incluidas en plugins sí. Las independientes, según la documentación, están en la app de escritorio.

**¿Qué es mejor, una skill o un GPT personalizado?**
Para un proceso concreto que usas dentro de tu trabajo diario, una skill, porque se carga donde estés. Un GPT tiene sentido cuando quieres un asistente aparte, por ejemplo para compartirlo con alguien de fuera.

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · **ChatGPT** · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
