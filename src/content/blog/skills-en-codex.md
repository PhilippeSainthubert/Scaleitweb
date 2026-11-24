---
title: "Skills en Codex: dónde van, cómo se activan y cómo instalarlas"
description: "Dónde van las skills en Codex (.agents/skills), cómo se invocan con $, qué pone en agents/openai.yaml y por qué en Codex Cloud puede que no te aparezcan."
pubDate: 2026-09-15
updatedDate: 2026-11-24
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "Codex", "OpenAI", "agentes de IA"]
---

Una skill en Codex es una carpeta con un archivo `SKILL.md` que va en `.agents/skills`, y se invoca escribiendo `$` seguido de su nombre. El formato es el mismo que en Claude Code, porque las dos herramientas se apoyan en el [estándar abierto de agent skills](https://agentskills.io).

Lo que más confunde al empezar es la carpeta. Algunas guías publicadas hablan de `~/.codex/skills`, y la [documentación oficial](https://learn.chatgpt.com/docs/build-skills) usa `.agents/skills`. Esta guía sigue la documentación actual, que además cambió de sitio: las URLs de `developers.openai.com/codex/*` ahora redirigen a `learn.chatgpt.com`.

## Ya estoy usando Codex: ¿cómo le añado una skill?

Tres pasos, desde una sesión abierta:

1. **Crea la carpeta personal**: `mkdir -p ~/.agents/skills`.
2. **Copia dentro la carpeta de la skill**, con su `SKILL.md`. La carpeta tiene que llamarse igual que la skill.
3. **Escribe `/skills`** en la sesión para comprobar que aparece. Si no está, sal de Codex y vuelve a entrar.

Antes de nada, actualiza Codex CLI. Las skills personales en `~/.agents/skills` llegaron en la [versión 0.95.0](https://github.com/openai/codex/releases/tag/rust-v0.95.0), y la selección con `$` o `/skills`, en la [0.65.0](https://github.com/openai/codex/releases/tag/rust-v0.65.0). Con una versión anterior no hay nada que configurar porque la función no existe.

## ¿Dónde busca Codex las skills?

En cuatro ámbitos, que la documentación llama REPO, USER, ADMIN y SYSTEM:

| Ámbito | Ruta | Para qué |
|---|---|---|
| REPO | `$CWD/.agents/skills` | La carpeta desde la que lanzas Codex |
| REPO | `$CWD/../.agents/skills` | Una carpeta por encima, dentro de un repositorio |
| REPO | `$REPO_ROOT/.agents/skills` | La raíz del repositorio: las skills del equipo |
| USER | `$HOME/.agents/skills` | Tus skills, en todos tus proyectos |
| ADMIN | `/etc/codex/skills` | Skills de la máquina o del contenedor |
| SYSTEM | Incluidas en Codex | `skill-creator` y `skill-installer`, activas por defecto |

La regla es que Codex «recorre `.agents/skills` en cada directorio desde tu carpeta de trabajo hasta la raíz del repositorio». Y hay un detalle que casi ninguna guía cuenta: **esa lista no es un orden de prioridad**. Si dos skills se llaman igual, Codex no las fusiona ni gana una, sino que las dos aparecen en el selector. Si te salen duplicados, es eso, y tendrás que renombrar o desactivar una.

Codex también sigue los enlaces simbólicos, así que puedes dejar las skills en un repositorio y enlazarlas desde `~/.agents/skills` en lugar de duplicarlas.

La buena noticia es que `~/.agents/skills` no es solo de Codex. [Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/skills.md) la lee como alias de `~/.gemini/skills` en el ámbito de usuario, [Cursor](https://cursor.com/docs/skills) la carga también como carpeta de usuario, y [GitHub Copilot](https://docs.github.com/en/copilot/concepts/customizations/agent-skills) guarda sus skills personales en `~/.copilot/skills` pero lee además `~/.agents/skills`. Una skill instalada ahí sirve en las cuatro herramientas.

### ¿Y si mis skills están en ~/.codex/skills?

Siguen cargándose: la 0.95.0 añadió `~/.agents/skills` manteniendo la compatibilidad con la carpeta antigua. Pero la documentación ya no la menciona como sitio de búsqueda, así que lo razonable es mover las skills a `~/.agents/skills`.

Esa carpeta vieja no desapareció por un motivo incómodo: hay un [informe abierto desde el 22 de mayo de 2026](https://github.com/openai/skills/issues/420) de que `skill-installer` y `skill-creator` siguen instalando por defecto en `$CODEX_HOME/skills`, es decir `~/.codex/skills`. Sin respuesta de OpenAI. Si instalas una skill con esos comandos y luego no la ves donde esperabas, mira ahí.

## ¿Cómo se invoca una skill en Codex?

De dos formas, según la documentación:

- **Explícita**: escribiendo `$` y el nombre, por ejemplo `$brief-seo-b2b`, o con el comando `/skills` para verlas y elegir. Funciona en Codex CLI y en la extensión del editor.
- **Implícita**: Codex elige la skill cuando la tarea encaja con su `description`.

Ojo con una confusión muy repetida: `@` es la forma de llamar skills **en ChatGPT**, no en Codex. En Codex son `$` y `/skills`. Si vienes de la [guía de skills en ChatGPT](/blog/skills-en-chatgpt), es el cambio que más despista.

Como en cualquier herramienta compatible, la descripción decide cuándo se activa sola. La recomendación oficial es poner al principio el caso de uso y las palabras que dispararían la skill. Si una skill no salta cuando esperas, casi siempre es porque su descripción no usa las palabras con las que la pides.

## ¿Cuántas skills caben antes de que estorben?

Esta es la parte que nadie mira hasta que falla. Codex carga al principio solo el nombre, la descripción y la ruta de cada skill, y ese listado tiene un techo: «como máximo el 2 % de la ventana de contexto del modelo, u 8.000 caracteres cuando no se conoce».

Cuando te pasas, Codex primero recorta las descripciones, y si aún no caben, **deja skills fuera del listado y avisa**. Con la opción `skills.max_context_tokens` puedes subir el presupuesto hasta 10.000 tokens. El límite solo afecta al listado inicial: cuando una skill se activa, se lee entera.

Traducido a decisiones: no acumules skills que no usas, y escribe descripciones cortas y específicas, porque son lo primero que se recorta.

## ¿Cómo se crea una skill sin escribirla a mano?

Con `$skill-creator`, una skill incluida en Codex. Le explicas qué quieres y te genera la carpeta con el `SKILL.md`. Por defecto crea skills de solo instrucciones, sin scripts, que es lo que quieres casi siempre.

Revisa sobre todo la descripción que produce, que es lo que decide cuándo se usa, y las prohibiciones: lo que la skill no debe hacer suele ser más útil que lo que debe hacer, y es lo que menos aparece cuando se genera sin indicaciones.

Si el proceso es más fácil de enseñar que de explicar, hay otra vía: [Record & Replay](https://learn.chatgpt.com/docs/extend/record-and-replay), de momento en macOS, graba cómo haces el trabajo y redacta una skill a partir de la demostración.

## ¿Para qué sirve $skill-installer, y qué son los plugins?

`$skill-installer` instala skills curadas sin buscar la carpeta, por ejemplo `$skill-installer linear`. También puedes pedirle que descargue skills de otros repositorios.

Aquí hubo un cambio importante. El repositorio `openai/skills` **está deprecado**: su README dice literalmente «This repository is deprecated» y manda al [repositorio de plugins](https://github.com/openai/plugins). Un [plugin](https://learn.chatgpt.com/docs/plugins) empaqueta una o varias skills, y puede traer además servidores MCP, hooks y extensiones de navegador. Se instalan con `/plugins` dentro de Codex CLI.

El criterio oficial es claro:

| Quieres | Usa |
|---|---|
| Tus propias skills y pruebas locales | Carpetas en `.agents/skills` |
| Añadir alguna skill curada a tu entorno local | `$skill-installer` |
| Repartir skills a otras personas, o juntarlas con un conector | Un plugin |

Un detalle práctico: las skills sueltas funcionan en la app de escritorio de ChatGPT, en Codex CLI y en la extensión del editor, pero **la extensión del editor no admite plugins**. Si trabajas desde el editor, las carpetas son la vía segura.

## ¿Qué es agents/openai.yaml?

Un archivo opcional dentro de la carpeta de la skill que solo lee Codex, con tres bloques:

```yaml
interface:
  display_name: "Nombre visible"
  short_description: "Descripción corta para la interfaz"
  icon_small: "./assets/small-logo.svg"
  icon_large: "./assets/large-logo.png"
  brand_color: "#3B82F6"
  default_prompt: "Prompt por defecto al invocar la skill"

policy:
  allow_implicit_invocation: false

dependencies:
  tools:
    - type: "mcp"
      value: "miServidor"
      description: "Servidor MCP que necesita la skill"
      transport: "streamable_http"
      url: "https://ejemplo.com/mcp"
```

La opción más útil es `allow_implicit_invocation`, que por defecto está en `true`. Puesta en `false`, Codex no activa la skill por su cuenta y solo se usa cuando la llamas con `$`. Tiene sentido en skills que hacen algo con efectos, como publicar o enviar, donde prefieres decidir tú el momento.

Y aquí está el fallo que más tiempo hace perder a quien llega desde Claude Code: **Codex no entiende `disable-model-invocation`**. Ese campo es de Claude Code, no está en la documentación de OpenAI, y la única forma de conseguir lo mismo en Codex es `allow_implicit_invocation: false` en este archivo. Si pensabas que una skill estaba bloqueada, probablemente no lo está.

Las demás herramientas ignoran este archivo, así que no rompe la compatibilidad de la skill.

## ¿Cómo desactivo una skill sin borrarla?

Con entradas `[[skills.config]]` en `~/.codex/config.toml`:

```toml
[[skills.config]]
name = "nombre-de-la-skill"
enabled = false
```

Cada entrada lleva un solo selector: `path`, que apunta a un `SKILL.md` concreto, o `name`, que afecta a todas las skills con ese nombre. Si varias entradas encajan con la misma skill, gana la última. Para apagar de golpe las skills incluidas en Codex dentro de un proyecto, `[skills.bundled]` con `enabled = false` en un `.codex/config.toml` de confianza. Reinicia Codex después de tocar la configuración.

## ¿Funcionan las skills en Codex Cloud?

No lo da por hecho nadie, y conviene saberlo antes de montar un proceso encima. La documentación de skills no menciona Codex Cloud: la disponibilidad que declara es app de escritorio de ChatGPT, Codex CLI y extensión del editor.

Peor aún, hay un [informe abierto desde el 8 de octubre de 2026](https://github.com/openai/codex/issues/52266) de que las skills del repositorio en `.agents/skills` no se descubren en un entorno gestionado en la nube, con tres personas reproduciéndolo y una de ellas viendo lo mismo con las skills personales. OpenAI no ha respondido en el hilo.

Mientras siga así, en la nube no cuentes con la activación automática. Si necesitas una skill allí, lo que funciona es señalarle el archivo en el prompt y pedirle que siga ese proceso.

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

Al quedar en `~/.agents/skills`, también estarán disponibles en Gemini CLI, Cursor y GitHub Copilot, por lo que se explica con las fuentes oficiales en el apartado «¿Dónde busca Codex las skills?».

Una skill le da a Codex el criterio y el formato de un trabajo, pero sigue haciendo falta que alguien abra la sesión y lo pida. Si lo que quieres es algo que corra solo, eso es otra cosa, y empieza por decidir [qué procesos conviene dar a un agente y cuáles no](/blog/que-procesos-dar-a-un-agente). Un ejemplo montado de principio a fin está en [el agente de prospección en LinkedIn](/blog/agente-ia-prospeccion-linkedin), y es parte de lo que hacemos en [agentes de IA](/servicios/agentes-de-ia).

## ¿Qué hacer si una skill no aparece?

- **No has reiniciado.** Codex detecta los cambios solo, pero cuando una skill nueva o editada no sale, la solución es salir y volver a entrar. No hay comando de recarga en caliente.
- **Está en una carpeta antigua.** Muévela de `~/.codex/skills` a `~/.agents/skills`.
- **El nombre no coincide con la carpeta.** Tienen que ser iguales.
- **El frontmatter no está en la primera línea** del `SKILL.md`, o le falta `name` o `description`, que son los dos campos obligatorios.
- **Hay demasiadas skills** y la tuya quedó fuera del listado inicial. Codex avisa cuando pasa.
- **La descripción es genérica** y Codex no la asocia a lo que pides. Prueba con `$nombre`: si así funciona, el problema es la descripción.
- **Tiene `allow_implicit_invocation` en `false`** en su `openai.yaml`, así que solo se activa a mano.
- **Estás en la nube.** Mira el apartado de Codex Cloud de más arriba.

## Preguntas frecuentes

**¿Qué diferencia hay entre una skill y AGENTS.md?**
AGENTS.md contiene las instrucciones del proyecto que Codex tiene presentes siempre. Una skill es un proceso concreto que se carga solo cuando la tarea lo pide.

**¿Puedo usar en Codex las skills que ya tengo en Claude Code?**
Sí. El formato es el mismo: copia la carpeta de `~/.claude/skills` a `~/.agents/skills`. Los campos exclusivos de [Claude Code](/blog/skills-en-claude) se ignoran sin dar error, con una excepción que importa: `disable-model-invocation` no hace nada en Codex, y su equivalente es `allow_implicit_invocation: false` en `agents/openai.yaml`.

**¿Cómo me aseguro de que una skill esté disponible en cualquier entorno?**
Guárdala en `.agents/skills` dentro del propio repositorio. Así viaja con el código y la tiene cualquiera que trabaje en él, con la salvedad de Codex Cloud.

**¿Las skills consumen contexto aunque no se usen?**
Solo su nombre, su descripción y su ruta, y todo eso junto tiene un techo del 2 % de la ventana de contexto u 8.000 caracteres. El resto se carga cuando se activan.

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
