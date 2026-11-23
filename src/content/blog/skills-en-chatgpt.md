---
title: "Skills en ChatGPT: qué son, cómo usarlas y cómo crear una"
description: "Qué es una skill en ChatGPT, en qué planes está, cómo invocarla con @, cómo crear la tuya con skill-creator o el editor y qué hacer si no te aparecen."
pubDate: 2026-09-15
updatedDate: 2026-11-23
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "ChatGPT", "OpenAI"]
---

Una skill en ChatGPT es una carpeta con un archivo `SKILL.md` que describe cómo hacer una tarea concreta, siempre igual. OpenAI las define como [«flujos de trabajo reutilizables y compartibles que ayudan a ChatGPT a completar tareas concretas de forma más consistente»](https://help.openai.com/en/articles/20001066-skills-in-chatgpt), y pueden incluir instrucciones, ejemplos y código.

Para un equipo de marketing o ventas eso significa una cosa práctica: el proceso que hoy explicas a mano en cada conversación lo escribes una vez y ChatGPT lo sigue cuando toca. Y como OpenAI usa el mismo estándar abierto que Claude, Codex o Cursor, la misma skill te vale en todas. Esta guía cubre qué son, cómo se usan, cómo se crea una y qué hacer si en tu cuenta no aparecen.

## ¿En qué se diferencia una skill de un GPT personalizado?

En el enfoque. Un GPT es un asistente aparte que abres para una tarea. Una skill es un procedimiento que se carga dentro de cualquier conversación cuando hace falta, sin cambiar de sitio.

La dirección en la que va OpenAI es clara: en su documentación de plugins consta que [la creación de nuevos GPT terminó el 26 de octubre de 2026 en los espacios de trabajo Enterprise afectados](https://help.openai.com/en/articles/20001256). Si estás eligiendo dónde meter un proceso que usas cada semana, hoy la apuesta razonable son las skills.

Una skill tampoco convierte a ChatGPT en un agente. Le da el criterio y el formato, pero sigue haciendo falta que alguien abra el chat y le pida el trabajo. Si lo que buscas es algo que corra solo, eso es otra cosa: lo contamos en [un agente de IA para prospección en LinkedIn](/blog/agente-ia-prospeccion-linkedin) y en [la diferencia entre un agente y una automatización](/blog/agente-o-automatizacion).

## ¿En qué planes hay skills en ChatGPT?

Aquí OpenAI se contradice a sí misma, así que te doy las dos fuentes y qué hacer con ellas.

| Fuente oficial, consultada el 23 de noviembre de 2026 | Qué dice |
|---|---|
| [Ayuda: Skills in ChatGPT](https://help.openai.com/en/articles/20001066-skills-in-chatgpt) | Disponibles para usuarios «elegibles» de Business, Enterprise, Healthcare y Edu, sujeto a la configuración del espacio de trabajo |
| [Ayuda: Plugins in ChatGPT](https://help.openai.com/en/articles/20001256) | «Las Skills personales están disponibles de forma general para usuarios de Business, Enterprise, Healthcare y Edu» |
| [Página de precios de ChatGPT](https://chatgpt.com/pricing) | Una fila llamada «Skills», marcada como incluida en Free, Go, Plus y Pro |

La página de precios dice que sí en los cuatro planes individuales, y sin la etiqueta «beta». Las páginas de ayuda solo nombran los planes de empresa. Lo prudente:

- **Business, Enterprise, Healthcare y Edu**: disponibles. En Enterprise y Edu dependen de los permisos que active quien administra el espacio.
- **Free, Go, Plus y Pro**: la página de precios las incluye, pero la ayuda no lo confirma. Compruébalo en tu cuenta antes de montar nada encima.

La comprobación es de diez segundos: abre la barra lateral, entra en **Plugins** y mira si hay una pestaña **Skills**.

## ¿Cómo se usa una skill en ChatGPT?

De cuatro maneras, y la primera es la que más se usa sin darse cuenta:

- **Sola.** ChatGPT usa las skills instaladas cuando encajan con lo que pides. La ayuda lo dice así: «ChatGPT puede usar automáticamente una o varias skills cuando resultan útiles».
- **Con `@`.** Escribe `@` en el chat y elige la skill, por ejemplo `@auditoria-paid-b2b`.
- **Con el botón `+`** del compositor, escribiendo el nombre.
- **Desde el selector «Plugins»** del compositor.

Las opciones que ves dependen de dónde uses ChatGPT, de tu plan y de la configuración del espacio de trabajo.

Un detalle que ahorra frustración: si una skill no se activa sola, llámala con `@`. Si así funciona, el problema no es la skill, es su descripción.

## ¿Cómo se crea una skill en ChatGPT?

Desde la pestaña **Skills** del directorio de plugins, botón **Create**. Hay cuatro caminos:

1. **Create with chat.** Describe lo que quieres y ChatGPT te hace preguntas de seguimiento. Por debajo usa `skill-creator`, una skill que viene incluida en las cuentas elegibles y que OpenAI emplea para «generar, actualizar o depurar» skills.
2. **Create with editor.** El editor de skills, en `chatgpt.com/skills/editor`, para escribirla a mano.
3. **Upload from your computer.** Subes la skill ya hecha. Es lo que harás con las seis de esta serie.
4. **Instalar una compartida.** En **Shared with me** o **Shared by {espacio}**, menú `•••`, **Install**.

Si ya tienes el `SKILL.md` escrito, la vía rápida es pedirle a `skill-creator` que cree una skill con ese contenido exacto, sin reescribirlo, y pegárselo. Revisa el resultado: cualquier asistente que «mejora» una skill tiende a suavizar las prohibiciones, y en estas skills las prohibiciones son lo que evita los errores caros, como inventarse cifras.

OpenAI escanea cada skill que subes antes de ponerla disponible, y puede marcarla como **Needs Review** o **Blocked**. Su propio aviso es que ese escaneo «no debe sustituir a tu revisión, tus políticas ni tu criterio». Dicho de otro modo: no instales skills de fuentes que no conoces sin abrir el archivo y leerlo.

### Qué lleva dentro el archivo

Las skills se apoyan en el [estándar abierto de agent skills](https://agentskills.io). La [documentación de desarrollador de OpenAI](https://learn.chatgpt.com/codex/build-skills) lo resume: una skill es un directorio con un `SKILL.md` más scripts y referencias opcionales, y el `SKILL.md` tiene que incluir `name` y `description`.

La descripción es la parte que decide todo, porque es lo único que el modelo tiene delante antes de cargar la skill entera. La recomendación oficial es poner al principio el caso de uso y las palabras que dispararían la skill, porque cuando hay muchas instaladas el listado se recorta. El límite que marca OpenAI para ese listado inicial es del 2 % de la ventana de contexto, u 8.000 caracteres cuando no se conoce.

Por eso una descripción como «ayuda con SEO» no sirve. Tiene que decir qué hace y cuándo, con las palabras que usarías tú al pedirlo.

## ¿Qué hacer si no te aparecen las skills?

Por orden, de lo más probable a lo menos:

- **Tu espacio de trabajo las tiene desactivadas.** En Enterprise y Edu, quien administra controla cinco permisos distintos en **Permissions & roles**: crear y usar skills, subirlas, compartirlas, publicarlas en el espacio e instalarlas para otros. Pide que activen el que te falta, por su nombre.
- **Estás mirando en el sitio equivocado.** Van en la barra lateral, en **Plugins**, pestaña **Skills**.
- **Las tienes en Codex pero no en ChatGPT.** La ayuda de OpenAI avisa de que «las skills en ChatGPT y en Codex pueden gestionarse por separado», y que la disponibilidad, la instalación y la sincronización varían según el producto. No des por hecho que se sincronizan: puede que tengas que instalarla también en ChatGPT.
- **Tu plan todavía no las ha recibido.** El despliegue no es simultáneo para todas las cuentas.

Si después de eso sigues sin skills, hay una alternativa que funciona en cualquier plan: **un proyecto**.

1. **Crea un proyecto** para la tarea. Por ejemplo, «Auditoría de paid».
2. **Sube el `SKILL.md`** como archivo del proyecto.
3. **Escribe en las instrucciones del proyecto**: «En este proyecto, sigue al pie de la letra el proceso del archivo SKILL.md, incluido el formato de salida y lo que no hay que hacer.»

Pierdes la activación automática y la invocación con `@`, pero el proceso se cumple igual. Como las instrucciones del proyecto se aplican a todo lo que hagas dentro, conviene un proyecto por skill en lugar de mezclarlas.

## ¿Qué skills de esta serie van mejor en ChatGPT?

Las seis funcionan, pero tres aprovechan especialmente lo que ChatGPT hace bien:

- **auditoria-paid-b2b** y **diagnostico-crm**, porque trabajan sobre archivos CSV y ChatGPT los analiza con código dentro de la conversación.
- **seleccion-creadores**, porque puedes pegarle capturas de perfiles y comentarios, que las plataformas sociales no dejan leer de forma automática.

Para **brief-seo-b2b**, asegúrate de que la búsqueda web está activa en la conversación.

| Servicio | Skill | Invocarla a mano | Descargar |
|---|---|---|---|
| SEO | [brief-seo-b2b](/blog/skill-seo-para-ia) | `@brief-seo-b2b` | [SKILL.md](/skills/brief-seo-b2b/SKILL.md) · [.zip](/skills/brief-seo-b2b.zip) |
| Outbound | [secuencia-outbound](/blog/skill-outbound-para-ia) | `@secuencia-outbound` | [SKILL.md](/skills/secuencia-outbound/SKILL.md) · [.zip](/skills/secuencia-outbound.zip) |
| Influencers | [seleccion-creadores](/blog/skill-influencers-para-ia) | `@seleccion-creadores` | [SKILL.md](/skills/seleccion-creadores/SKILL.md) · [.zip](/skills/seleccion-creadores.zip) |
| Paid media | [auditoria-paid-b2b](/blog/skill-paid-media-para-ia) | `@auditoria-paid-b2b` | [SKILL.md](/skills/auditoria-paid-b2b/SKILL.md) · [.zip](/skills/auditoria-paid-b2b.zip) |
| Agentes de IA | [spec-agente-ia](/blog/skill-disenar-agentes-de-ia) | `@spec-agente-ia` | [SKILL.md](/skills/spec-agente-ia/SKILL.md) · [.zip](/skills/spec-agente-ia.zip) |
| CRM y RevOps | [diagnostico-crm](/blog/skill-crm-revops-para-ia) | `@diagnostico-crm` | [SKILL.md](/skills/diagnostico-crm/SKILL.md) · [.zip](/skills/diagnostico-crm.zip) |

Si lo que tienes delante no es un proceso que repites, sino un trabajo entero que quieres quitarte, una skill se queda corta. Ahí la pregunta es [qué procesos conviene dar a un agente de IA y cuáles no](/blog/que-procesos-dar-a-un-agente), y es parte de lo que hacemos en [agentes de IA](/servicios/agentes-de-ia).

## Preguntas frecuentes

**¿Una skill de ChatGPT sirve en Codex o en Claude?**
Sí. Es el mismo formato, construido sobre el estándar abierto de agentskills.io. Cambia dónde se guarda y cómo se invoca: con `@` en ChatGPT, con `$` o `/skills` en Codex, con `/` en [Claude Code](/blog/skills-en-claude).

**¿Funcionan en el móvil?**
El directorio de plugins está en la web, el escritorio y el móvil. Pero algunos plugins vienen marcados como «Desktop only» y no funcionan en la web, y si un plugin usa herramientas locales de tu ordenador, esas no están ni en web ni en móvil.

**¿Por qué no veo @skill-creator?**
Porque las skills no están activas en tu cuenta o en tu espacio de trabajo. En Enterprise y Edu, pide a quien administra que active el permiso **Enable skills**.

**¿Mis datos se usan para entrenar modelos?**
OpenAI indica que, por defecto, los datos compartidos con una skill no se usan para mejorar sus modelos en los planes de empresa de ChatGPT. Aun así, no subas datos personales de clientes si no los necesitas: para los diagnósticos basta con cifras agregadas.

**¿Cuántas skills puedo tener instaladas?**
No hay un número máximo publicado. El cuello de botella es el listado inicial, limitado al 2 % de la ventana de contexto u 8.000 caracteres: cuando hay muchas, las descripciones se recortan y alguna puede quedar fuera. Lo que da problemas no es el número, sino que dos descripciones se parezcan demasiado.

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
