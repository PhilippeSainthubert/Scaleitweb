---
title: "Asistentes de IA con skills: comparativa de los 8 principales"
description: "Qué asistentes de IA admiten skills hoy: ChatGPT, Claude, Gemini, Codex, Cursor, Copilot, DeepSeek y GLM, con dónde vive el SKILL.md, cómo se invoca y qué cuesta."
pubDate: 2026-11-26
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "agentes de IA", "comparativa", "ChatGPT", "Claude"]
---

Seis de los ocho asistentes de esta comparativa admiten el mismo archivo `SKILL.md` sin cambiarle una línea: ChatGPT, Claude, Gemini, Codex, Cursor y GitHub Copilot. DeepSeek y GLM no tienen skills propias, y la única vía documentada es poner Claude Code delante y apuntarlo a su API.

Así que la pregunta útil no es cuál las admite, sino cuál lee una carpeta de tu disco y cuál te obliga a subir un `.zip` a su web: eso decide si tu equipo versiona las skills en git o si cada persona mantiene su copia a mano. Los datos y precios de abajo los saqué hoy, 26 de noviembre de 2026, de las páginas oficiales de cada producto.

## Tabla comparativa

| Herramienta | Dónde viven las skills | Precio de entrada (nov. 2026) | Punto fuerte | Punto débil |
|---|---|---|---|---|
| [ChatGPT](https://help.openai.com/en/articles/20001066-skills-in-chatgpt) | Subidas a la cuenta, en Plugins → Skills | [Free 0 $, Go 8 $, Plus 20 $ al mes](https://learn.chatgpt.com/codex/pricing) | Se llaman con `@` y se activan solas | La ayuda oficial solo nombra los planes de empresa y la página de precios dice que están en todos |
| [Claude](https://support.claude.com/en/articles/12512176-what-are-skills) | Subidas en Customize → Skills, en `.zip`; carpetas en Claude Code | 0 $ en el plan Free; Pro 17 $/mes en anual (20 $ mensual) | Están incluso en el plan gratis y bajan solas a Claude Code | Exigen la ejecución de código activada; el despliegue para toda la organización es solo Team y Enterprise |
| [Gemini](https://support.google.com/gemini/answer/17094296) | Subidas en Personalizar → Habilidades | 0 € con una cuenta de Google | Sin plan de pago, 100 MB por habilidad y se combinan varias en un chat | [Solo cuentas personales de mayores de 18; no funcionan con Canvas ni Deep Research](https://support.google.com/gemini/answer/18560919) |
| [Codex](https://learn.chatgpt.com/docs/build-skills) | Carpetas `.agents/skills` del repo y `$HOME/.agents/skills` | Va incluido en tu plan de ChatGPT y comparte precio con él: ["ChatGPT Work and Codex share pricing, credits, and usage limits"](https://learn.chatgpt.com/codex/pricing), desde Free 0 $ y Plus 20 $ al mes | Busca la carpeta desde donde lanzas Codex hasta la raíz del repositorio | El listado inicial se limita al 2 % del contexto u 8.000 caracteres |
| [Cursor](https://cursor.com/docs/skills) | `.agents/skills/`, `.cursor/skills/` y también las de Claude y Codex | Free 0 $/mes; Plus 8 $/mes | Lee `.claude/skills/` y `.codex/skills/`, así que no duplicas carpetas | A la nube solo sincroniza `~/.cursor/skills/`, y el plan Plus solo da modelos Grok |
| [GitHub Copilot](https://docs.github.com/en/copilot/concepts/customizations/agent-skills) | `.github/skills`, `.claude/skills` o `.agents/skills` del repo | Free 0 $ con 2.000 sugerencias al mes; Pro 10 $/usuario/mes | Las mismas skills valen en el agente de la nube, la revisión de código, la CLI y el IDE | Para las sesiones en la nube, las personales van en un repositorio de dotfiles |
| [DeepSeek](https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code/) | No tiene formato propio; las lee Claude Code | Pago por uso: 0,15 $ por millón de tokens de entrada sin caché en horas valle | Lo más barato de la lista para procesar mucho texto | [Ignora `mcp_servers`](https://api-docs.deepseek.com/guides/anthropic_api/), así que una skill que dependa de MCP se queda a medias |
| [GLM (Z.ai)](https://docs.z.ai/devpack/tool/claude) | No tiene formato propio; las lee Claude Code | GLM Coding Plan "desde 18 USD al mes" | Suscripción plana con límites por créditos en lugar de por token | No publica formato de skills propio ni los precios de Pro y Max en texto |

## ¿Qué es una skill y por qué la misma vale en todas?

Una skill es una carpeta con un archivo `SKILL.md` dentro. El [estándar abierto](https://agentskills.io), que desarrolló Anthropic y publicó como formato abierto, la define como "a lightweight, open format for extending AI agent capabilities with specialized knowledge and workflows", y su [especificación](https://agentskills.io/specification.md) solo obliga a dos campos: `name`, de hasta 64 caracteres en minúsculas y guiones, y `description`, de hasta 1.024. Eso es lo que explica que la misma carpeta funcione en productos de empresas que compiten entre sí.

Hay un detalle que conviene saber antes de elegir herramienta: el estándar **no dice dónde van las carpetas**. Su [guía de implementación](https://agentskills.io/client-implementation/adding-skills-support.md) lo admite por escrito, "the Agent Skills specification does not mandate where skill directories live (it only defines what goes inside them)". El archivo es portable, la ruta no. Si quieres una sola copia para varias herramientas, déjala en `~/.agents/skills/` y en `.agents/skills/` del repositorio, que es lo que leen Codex, Cursor y Copilot. La única regla de precedencia que comparten todas las implementaciones es que las skills del proyecto ganan a las del usuario.

## ¿Qué cambia de verdad entre unas y otras?

Tres cosas, y ninguna es la calidad del modelo.

**Carpeta o subida.** En las apps de ChatGPT, Claude y Gemini subes el archivo a tu cuenta desde la web. En Codex, Cursor, Copilot y Claude Code dejas la carpeta en el disco o en el repositorio, y eso es lo que permite revisar un cambio de proceso en un pull request. Claude cruza las dos cosas: según su [ayuda](https://support.claude.com/en/articles/12512180-use-skills-in-claude), las skills activadas en claude.ai se cargan también en Claude Code si inicias sesión con la misma cuenta, desde la versión 2.1.273, en un solo sentido y revisando cambios cada diez minutos aproximadamente. Eso no ocurre con clave de API ni sobre un proveedor de nube como Amazon Bedrock.

**Si puedes llamarla a mano.** Importa más de lo que parece: cuando una skill no se activa sola, invocarla a mano te dice si el problema es la skill o su descripción.

| Herramienta | Cómo se llama a mano |
|---|---|
| ChatGPT | `@` y se elige la skill |
| Codex CLI y extensión de IDE | `$` para mencionarla, o el comando `/skills` |
| Claude Code | [`/nombre-de-la-skill`](https://code.claude.com/docs/en/skills) |
| Gemini | `/` y se elige; Google avisa de que pasará a `@` |
| Cursor | `/` y el nombre, que se aplica a un solo mensaje |
| GitHub Copilot CLI | [El nombre de la skill precedido de una barra](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills) |
| App de Claude | No hay comando documentado; se activan solas cuando la petición encaja |

**Quién ejecuta lo que hay dentro.** Una skill puede traer scripts, y ahí cada producto pone su límite. Gemini es el más restrictivo: su [ayuda](https://support.google.com/gemini/answer/17094296) avisa de que "Scripts that require access to the internet are not supported". En la [API de Claude](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) las skills corren en un contenedor sin acceso a red y sin instalar paquetes. GitHub Copilot pide permiso antes de usar una herramienta salvo que la declares en `allowed-tools`, y avisa en [su guía](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills) de que "Skills are not verified by GitHub and may contain prompt injections, hidden instructions, or malicious scripts". Es el aviso que vale para las ocho: una skill es texto que tu asistente va a obedecer, así que ábrela y léela antes de instalarla.

## ChatGPT: para quién sí y para quién no

Es la que tiene el lío de disponibilidad más grande. Su [página de precios](https://chatgpt.com/pricing) lista una fila "Skills" marcada como incluida en Free, Go, Plus y Pro, mientras que la [ayuda oficial](https://help.openai.com/en/articles/20001066-skills-in-chatgpt) dice que están disponibles "to eligible ChatGPT Business, Enterprise, Healthcare, and Edu users" y no nombra ningún plan individual. Los importes que OpenAI sí publica en texto están en la [página de precios de Codex y ChatGPT Work](https://learn.chatgpt.com/codex/pricing): Free 0 $, Go 8 $, Plus 20 $ y Pro desde 100 $ al mes, con planes de 100, 200 y 500 $, y Business 20 $ por usuario y mes facturado anualmente, 25 $ si pagas mes a mes. La invocación con `@` y el `skill-creator` incluido están en la [guía de skills de OpenAI](https://learn.chatgpt.com/docs/build-skills).

**Para ti si** tu equipo ya trabaja en ChatGPT y quieres que marketing o ventas sigan un proceso sin tocar una carpeta. **No para ti si** necesitas garantías de disponibilidad antes de montar nada encima, porque la contradicción entre sus dos fuentes oficiales sigue sin resolverse y la ayuda añade que las skills de otros productos, Codex incluido, "may be governed separately". Lo desglosamos en [skills en ChatGPT](/blog/skills-en-chatgpt).

## Claude: para quién sí y para quién no

La disponibilidad más clara de las ocho. Su [ayuda](https://support.claude.com/en/articles/12512176-what-are-skills) lo dice en una frase, "Skills are available for users on Free, Pro, Max, Ultra, Team, and Enterprise plans", con una condición: "This feature requires code execution to be enabled". Precios de su [página oficial](https://claude.com/pricing): Free 0 $, Pro 17 $ al mes con suscripción anual (200 $ por adelantado) o 20 $ mensual, Max 100 $, Ultra 200 $ y Team 20 $ por puesto y mes en anual. En esa misma tabla, la fila "Claude Code" aparece como no incluida en el plan Free, y el despliegue de skills para toda la organización solo está en Team y Enterprise.

**Para ti si** quieres el camino más corto entre probar una skill gratis en el chat y usarla después en el terminal, porque la sincronización la hace sola. **No para ti si** tienes que repartir skills a cincuenta personas desde arriba sin pagar Team. Es uno de los asistentes que usamos en Scale It; los pasos están en [skills en Claude](/blog/skills-en-claude).

## Gemini: para quién sí y para quién no

El único con habilidades sin plan de pago. La [ayuda de Google](https://support.google.com/gemini/answer/17094296) pide solo dos cosas, ser mayor de 18 años y haber iniciado sesión, y los límites publicados son 100 MB de archivos por habilidad y [100 habilidades activas a la vez](https://support.google.com/gemini/answer/18560919). A cambio, dos recortes reales: el acceso es solo para ["individuals over 18 signed in to a personal Google Account"](https://support.google.com/gemini/answer/18560919) y la ampliación a cuentas de trabajo y de centros educativos se enuncia solo como "soon"; las únicas fechas de 2027 que publica, marzo para las cuentas de Workspace business, enterprise y non-profit y junio para las de education, figuran en la lista de retirada de los Gems ("When are Gems going away?"), no en la de disponibilidad de las habilidades. Y las habilidades todavía no funcionan con Canvas, Deep Research, Crear vídeo, Crear música ni Aprendizaje guiado.

**Para ti si** quieres probar el concepto a coste cero o tu trabajo pasa por Drive y Calendar. **No para ti si** tu empresa va con Workspace, porque hoy no llega. Los tres sitios donde se instalan están en [cómo instalar skills en Gemini](/blog/skills-en-gemini). Precios consultados hoy en su [página de suscripciones](https://gemini.google/subscriptions/) para España: 0 €, Google AI Plus 4,99 €/mes, Google AI Pro 21,99 €/mes y AI Ultra desde 99,99 €/mes.

## Codex: para quién sí y para quién no

El que mejor entiende un repositorio. Según su [documentación](https://learn.chatgpt.com/docs/build-skills), Codex "scans `.agents/skills` in every directory from your current working directory up to the repository root", y además lee `$HOME/.agents/skills` y `/etc/codex/skills` para skills compartidas en una máquina o un contenedor. Trae dos de serie, `skill-creator` y `skill-installer`. Su límite publicado es el presupuesto del listado inicial: "By default, this list uses at most 2% of the model's context window, or 8,000 characters when the context window is unknown", ampliable hasta 10.000 tokens con `skills.max_context_tokens`.

**Para ti si** las skills describen trabajo sobre código y quieres que vivan junto a él, versionadas. **No para ti si** quien las va a usar no abre una terminal. Las rutas exactas, en [skills en Codex](/blog/skills-en-codex).

## Cursor: para quién sí y para quién no

El más generoso leyendo carpetas ajenas. Su [documentación](https://cursor.com/docs/skills) lo dice literal: "For compatibility, Cursor also loads skills from Claude and Codex directories: `.claude/skills/`, `.codex/skills/`, `~/.claude/skills/`, and `~/.codex/skills/`", además de sus cuatro propias. Y deja fijar una skill para toda la sesión, como modo personalizado con Option+Enter, en lugar de para un solo mensaje. Dos avisos de hoy: a los agentes en la nube solo sincroniza `~/.cursor/skills/`, y en su [página de precios](https://cursor.com/pricing) el plan Free es 0 $/mes y el Plus 8 $/mes, pero el Plus trae una nota literal, "Only Grok models are available on this plan"; el siguiente es Premium, 30 $/mes.

**Para ti si** ya tienes skills escritas para Claude Code o Codex y no quieres copiarlas. **No para ti si** dependes de los agentes en la nube para ejecutar procesos del repositorio. Más detalle en [skills en Cursor](/blog/skills-en-cursor).

## GitHub Copilot: para quién sí y para quién no

El que llega a más superficies con la misma carpeta. Su [documentación](https://docs.github.com/en/copilot/concepts/customizations/agent-skills) describe las skills como "folders of instructions, scripts, and resources that Copilot can load when relevant" y confirma que funcionan en la app de Copilot, la CLI, el agente de la nube, la revisión de código y el modo agente de VS Code, Visual Studio y los IDE de JetBrains. El detalle que se come una tarde: para las sesiones en un entorno aislado de la nube, las skills personales tienen que estar en `.copilot/skills` dentro de un repositorio de dotfiles. Ninguna de sus páginas de skills nombra un plan mínimo. Precios de su [página de planes](https://github.com/features/copilot/plans): Free 0 $ con 2.000 sugerencias al mes, Pro 10 $ por usuario y mes, Pro+ 39 $ y Max 100 $.

**Para ti si** quieres que la revisión de código y el agente de la nube sigan el mismo criterio escrito una sola vez. **No para ti si** tu trabajo no pasa por un repositorio de GitHub. Las tres vías, en [skills en GitHub Copilot](/blog/skills-en-github-copilot).

## DeepSeek: para quién sí y para quién no

No tiene skills. En su [página de compatibilidad con el formato de Anthropic](https://api-docs.deepseek.com/guides/anthropic_api/) y en su [guía de integración con Claude Code](https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code/) la palabra "skill" no aparece: lo que documentan es cómo usar su modelo dentro de un agente ajeno, con `ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic`. Las skills las carga Claude Code; DeepSeek solo razona sobre ellas. El atractivo es el precio: en su [página de precios](https://api-docs.deepseek.com/quick_start/pricing), `deepseek-flash` cuesta 0,15 $ por millón de tokens de entrada sin caché y 0,6 $ de salida en horas valle, y el doble en punta, que son "01:00 - 04:00 and 06:00 - 10:00 UTC, Monday through Friday". El límite importante: en esa compatibilidad, el campo `mcp_servers` figura como "Ignored".

**Para ti si** tus skills son texto y criterio, y el volumen de tokens te duele. **No para ti si** dependen de servidores MCP. Cómo apuntarlo, en [skills con DeepSeek](/blog/skills-en-deepseek).

## GLM: para quién sí y para quién no

Mismo esquema que DeepSeek. Z.ai no publica un formato de skills propio: su índice de documentación no tiene página de skills, y el único texto que las menciona remite al blog de Anthropic. La vía es [Claude Code contra `https://api.z.ai/api/anthropic`](https://docs.z.ai/devpack/tool/claude). Lo que cambia es la forma de pagar, una suscripción en lugar de tokens: su [documentación del plan](https://docs.z.ai/devpack/overview) dice "Starting at just 18 USD per month" y reparte el uso en créditos, con 2.000 cada cinco horas y 10.000 a la semana en el plan Lite. Los importes de Pro y Max no aparecen en texto en su página de suscripción.

**Para ti si** prefieres factura plana y previsible. **No para ti si** necesitas saber el precio exacto antes de contratar. Configuración en [skills con GLM](/blog/skills-en-glm).

## Cómo elegir en tu caso

- **Marketing o ventas, sin tocar carpetas:** Gemini si quieres coste cero y cuenta personal, Claude si quieres pasar después al terminal.
- **Equipo que quiere revisar los cambios de proceso:** Codex o GitHub Copilot, con las skills en `.agents/skills` del repositorio.
- **Ya tienes skills escritas y usas varias herramientas:** Cursor, por las carpetas que lee de las demás.
- **La misma skill en el IDE, la CLI y la revisión de código:** GitHub Copilot.
- **Mucho volumen de texto y presupuesto corto:** Claude Code con DeepSeek o GLM detrás, aceptando que con DeepSeek pierdes MCP.

Lo que no arregla ninguno es una skill mal descrita. La `description` es lo único que el modelo ve antes de cargar la skill entera: si dice "ayuda con SEO", no se va a activar nunca.

## Preguntas frecuentes

**¿Una skill de Claude funciona en ChatGPT?**
Sí. Es el mismo formato abierto, con `name` y `description` como únicos campos obligatorios. Cambia dónde se guarda y cómo se llama: `@` en ChatGPT, `$` o `/skills` en Codex, `/nombre` en Claude Code.

**¿Qué asistentes de IA admiten skills gratis?**
Claude las incluye en el plan Free, Gemini las da con una cuenta de Google sin coste, y GitHub Copilot y Cursor tienen plan Free. En ChatGPT depende de a qué fuente oficial hagas caso.

**¿Dónde se guardan las skills en cada asistente?**
Codex, Cursor y Copilot leen `.agents/skills` en el repositorio y `~/.agents/skills` en tu equipo. Claude Code usa `~/.claude/skills/` y `.claude/skills/`. Las apps de ChatGPT, Claude y Gemini no usan carpetas: subes el archivo a tu cuenta.

**¿Necesito saber programar para crear una skill?**
No. Es un archivo de texto con instrucciones. Tres de estos productos traen un creador incluido que te la escribe preguntándote: ChatGPT y Codex con `skill-creator`, y Cursor con `/create-skill`.

**¿Qué pasa si tengo muchas skills instaladas?**
Que empiezan a competir por el contexto. Codex limita el listado inicial al 2 % de la ventana u 8.000 caracteres y recorta descripciones, y Gemini permite 100 habilidades activas a la vez. El problema real no es el número, es que dos descripciones se parezcan.

## Cómo lo vemos

Una skill le da a un asistente el criterio y el formato de un trabajo, pero sigue haciendo falta que alguien abra el chat y lo pida. En Scale It usamos Claude, ChatGPT y Gemini, y el orden que seguimos es escribir la skill una vez, dejarla en `~/.agents/skills` y probarla con tres casos reales en cada herramienta antes de repartirla.

Si lo que tienes delante no es un proceso repetible sino un trabajo entero que quieres quitarte, una skill se queda corta: ahí empieza [qué procesos conviene dar a un agente y cuáles no](/blog/que-procesos-dar-a-un-agente), y un ejemplo montado de arriba abajo está en [el agente de keyword research y briefs](/blog/agente-ia-keyword-research). Es parte de lo que hacemos en [agentes de IA](/servicios/agentes-de-ia). [Media hora y lo vemos con tu caso](/#contacto).
