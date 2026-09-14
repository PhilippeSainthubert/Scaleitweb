---
title: "Skills con DeepSeek: tus skills de Claude Code con otro modelo"
description: "Cómo usar tus skills con DeepSeek conectando Claude Code a su API compatible con Anthropic: variables, correspondencia de modelos y cómo comparar resultados."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "DeepSeek", "Claude Code", "API"]
---

DeepSeek ofrece su API también en el formato de Anthropic. Eso permite algo muy práctico: usar Claude Code como herramienta, con todas tus skills, y DeepSeek como el modelo que las ejecuta.

El principio es el mismo que explicamos para [GLM](/blog/skills-en-glm), con dos diferencias. DeepSeek se paga por uso a través de su API, no con una suscripción. Y la correspondencia entre modelos la hace DeepSeek de forma automática.

## ¿Qué cambia respecto a usar Claude?

Solo el modelo. Claude Code sigue siendo quien lee tus archivos, carga las skills de `~/.claude/skills` y gestiona las herramientas. Lo que cambia es quién razona sobre todo eso y sigue las instrucciones de la skill.

## ¿Cómo se configura?

Con dos variables de entorno antes de arrancar Claude Code:

```bash
export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="tu_clave_de_deepseek"
claude
```

No hace falta indicar el modelo. Según la documentación de DeepSeek, cuando Claude Code pide un modelo de la familia Opus, DeepSeek usa `deepseek-v4-pro`, y cuando pide Sonnet o Haiku, usa su modelo rápido. Si quieres fijar modelos concretos, la documentación de DeepSeek indica las variables y los nombres vigentes, que cambian con cada versión.

## ¿Cómo lo alterno con Claude sin tocar la configuración?

Con un alias. Guarda tu clave en una variable de entorno, por ejemplo `DEEPSEEK_API_KEY`, y añade esto a tu `~/.zshrc` o `~/.bashrc`:

```bash
alias claude-deepseek='ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic ANTHROPIC_AUTH_TOKEN=$DEEPSEEK_API_KEY claude'
```

Con `claude` sigues usando tu configuración normal, y con `claude-deepseek` abres una sesión con DeepSeek. No mezcles este método con un bloque `env` en `settings.json`, como el que se usa para GLM: tendrías dos configuraciones compitiendo.

## ¿Funciona la búsqueda web?

Sí. Según la documentación de DeepSeek, su API admite de forma nativa la búsqueda web de Claude Code: cuando el modelo decide que necesita buscar, la búsqueda se hace a través de DeepSeek. Es importante para skills como [brief-seo-b2b](/blog/skill-seo-para-ia), que rinden mucho más viendo los resultados reales.

## ¿Cómo comparo DeepSeek con Claude usando la misma skill?

Si vas a elegir un modelo para una skill que usarás cientos de veces, merece la pena una comparación a ciegas:

1. **Elige cinco casos reales** para la skill.
2. **Pásalos por los dos modelos** y guarda cada respuesta en un archivo con una letra, A o B, sin indicar el modelo.
3. **Pide a alguien que no las generó** que elija la mejor de cada par, usando la lista "Antes de entregar, comprueba" que llevan las skills de esta serie.
4. **Cuenta los resultados** y cruza la cifra con lo que ha costado cada ejecución en la consola de cada proveedor.

Hecho así, la decisión sale de tus casos y no de una comparativa general.

## ¿Qué pasa con los datos?

Con esta configuración, tus peticiones y los archivos que Claude Code lea para responder se procesan en la infraestructura de DeepSeek, según su política de privacidad. Léela antes de enviar datos personales de clientes o prospectos, y comprueba dónde se almacenan. Si son datos de la Unión Europea, revisa la base legal y las transferencias internacionales.

## ¿Para qué skills tiene más sentido?

Para las que no manejan datos personales y se usan con frecuencia. En esta serie, [brief-seo-b2b](/blog/skill-seo-para-ia) y [spec-agente-ia](/blog/skill-disenar-agentes-de-ia) son buenas candidatas.

Para [diagnostico-crm](/blog/skill-crm-revops-para-ia) o [auditoria-paid-b2b](/blog/skill-paid-media-para-ia), úsalo solo con datos agregados o anonimizados.

## Las seis skills de Scale It con DeepSeek

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

**¿Necesito una suscripción?**
No. La API de DeepSeek se paga por uso con una clave que se genera en su plataforma.

**¿Siguen funcionando los servidores MCP y los hooks?**
Sí, porque los gestiona Claude Code. Lo que depende del modelo es que decida usar las herramientas cuando corresponde.

**¿Qué modelo usa si no configuro ninguno?**
DeepSeek traduce automáticamente los nombres de modelo de Claude: Opus a `deepseek-v4-pro`, y Sonnet y Haiku a su modelo rápido.

**¿Es lo mismo que la app de DeepSeek?**
No. La app es un chat. Lo que explica esta guía es la API de DeepSeek usada desde Claude Code, con tus archivos, tus skills y tus herramientas.

**¿Puedo usar DeepSeek solo para algunas tareas?**
Sí. Con el alias de esta guía eliges modelo cada vez que abres una sesión.

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · **DeepSeek**
