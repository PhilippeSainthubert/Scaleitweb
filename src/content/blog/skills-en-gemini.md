---
title: "Cómo instalar skills en Gemini: app, Gemini CLI y Enterprise"
description: "Dónde se instala una skill (o habilidad) en Gemini: la página Habilidades de la app, las carpetas de Gemini CLI y la biblioteca de Gemini Enterprise."
pubDate: 2026-09-15
updatedDate: 2026-11-25
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "habilidades", "Gemini", "Gemini CLI", "Google"]
---

Depende de qué Gemini uses, porque hoy son tres sitios distintos. En la app de Gemini, donde Google las llama «habilidades», se suben desde la web, en **Personalizar → Habilidades → Crear → Subir**; en Gemini CLI se copian a `~/.gemini/skills/` o se instalan con `gemini skills install <url>`; y en Gemini Enterprise se instalan desde una biblioteca, en **Skills → + → Browse skills → + Install**.

El archivo es el mismo en los tres: una carpeta con un `SKILL.md`, según el [estándar abierto de agent skills](https://agentskills.io). Una skill escrita para Claude Code o Codex funciona en Gemini sin cambiarle nada.

## ¿Dónde se instala una skill en Gemini, según la versión que uses?

| Dónde | Cómo se instala | Cómo se usa |
|---|---|---|
| App web de Gemini (gemini.google.com) | Personalizar → Habilidades → Crear → Subir el `SKILL.md` | Sola, o con `/` y el nombre |
| App de Gemini en Mac y móvil | Solo crear a mano o con Gemini; la subida no está disponible | Sola, o con `/` |
| Gemini CLI | Carpeta `~/.gemini/skills/` o `gemini skills install` | Sola, tras pedirte permiso |
| Gemini Enterprise | Biblioteca: Browse skills → + Install | Con `/` o `@`, o sola |
| Antigravity | Carpeta `.agents/skills/` del proyecto | Como comando `/<nombre>` |

Si solo quieres una cosa que funcione hoy en todas las CLIs, deja la carpeta de la skill en `~/.agents/skills/`: Gemini CLI la lee como alias de `~/.gemini/skills/`, y además es la carpeta que miran Codex, Cursor y GitHub Copilot.

## ¿Cómo se instala una habilidad en la app de Gemini?

Subiendo el `SKILL.md`. Los pasos, según la [ayuda oficial de Google](https://support.google.com/gemini/answer/17094296?hl=es):

1. Entra en la web de Gemini, en gemini.google.com.
2. En la barra lateral, **Personalizar**. Si no la ves, pulsa antes **Más**.
3. Arriba, **Habilidades**.
4. **Crear → Subir**. Vale un `SKILL.md` suelto, o una carpeta o un `.zip` que lo lleve en la raíz.
5. Opcional: añade archivos de apoyo. Después, **Subir** y **Crear**.

Tres cosas que conviene saber antes:

- **La subida solo está en la aplicación web de Gemini.** En la app de Mac y en el móvil llegas a la página Habilidades y puedes crearlas a mano o pidiéndoselo a Gemini en el chat, pero no subir un archivo.
- **El nombre de la carpeta tiene que coincidir con el de la habilidad**, en minúsculas y con guiones.
- **Los límites son dos**: hasta 100 MB de archivos por habilidad y [100 habilidades activas a la vez](https://support.google.com/gemini/answer/18560919?hl=es). Puedes crear todas las que quieras; para activar una más, desactiva otra.

Para usarla, escribe `/` en cualquier conversación y elígela, o deja que Gemini la active cuando la tarea encaje con su descripción. Google avisa de que el atajo pasará de `/` a `@`. Y un detalle que descoloca: si tienes «Guardar actividad» desactivado puedes usar habilidades, pero no las que necesitan acceso a Drive o Calendar.

### ¿Y la sección «Recomendadas»? Ahí no hay nada que instalar

En la página Habilidades de la app hay un apartado **Recomendadas**, y la pregunta habitual es cómo se instala una de esas. La respuesta corta: no se instalan. Son plantillas con el nombre, la descripción y las instrucciones ya rellenadas. Haces clic en una, editas los tres campos y pulsas **Crear**. Lo que queda es una habilidad tuya, no una copia enlazada que se actualice.

El botón **Añadir habilidad** existe, pero es otra cosa: aparece al abrir el correo de una habilidad que otra persona te ha compartido. Las compartidas llegan desactivadas a la sección **Todas**.

Si lo que buscabas era un catálogo de skills recomendadas por Google con instalación en un comando, eso existe pero vive fuera de la app: el [repositorio oficial de skills de Google](https://github.com/google/skills), con licencia Apache 2.0, que se instala con `npx skills add google/skills` y te deja elegir qué skills, para qué agentes y en qué ámbito. Son skills de producto (BigQuery, GKE, Firebase, la API de Google Ads), no de marketing ni de ventas. Google lo [anunció el 22 de abril de 2026](https://cloud.google.com/blog/topics/developers-practitioners/level-up-your-agents-announcing-googles-official-skills-repository) con trece skills y hoy el índice es mucho más largo.

## ¿Qué pasa con los Gems?

Desaparecen, y la fecha ya está puesta. Según la [página oficial de la transición](https://support.google.com/gemini/answer/18560919?hl=es), el **17 de noviembre de 2026** los Gems de cuentas personales se convirtieron en habilidades y pasaron a solo lectura, y el **17 de diciembre de 2026** se eliminan de las aplicaciones de Gemini. Las cuentas de empresa de Workspace van en marzo de 2027 y las de centros educativos en junio de 2027. Opal y los Gems de Google Labs se retiran en el mismo movimiento.

La conversión es automática y los permisos para compartir se transfieren solos. Lo que no se transfiere son algunos archivos: los de GitHub, el audio, el vídeo, los formatos antiguos de Office (`.doc`, `.xls`, `.ppt`) y los comprimidos. Y si un Gem pasaba de 100 MB, Google elimina primero los archivos más grandes hasta que entre. Si tienes material en un Gem que te importe, descárgalo antes del 17 de diciembre.

El cambio no es gratis en funciones. Las habilidades todavía no funcionan con Canvas, Deep Research, Crear vídeo, Crear música ni Aprendizaje guiado. A cambio se usan dentro de la conversación que ya tienes abierta, se pueden combinar varias y se activan solas.

## ¿Cómo se instala una skill recomendada en Gemini Enterprise?

Aquí sí hay una biblioteca de verdad. La [documentación de Gemini Enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/skills) marca cuatro pasos:

1. En el menú de navegación, **Skills**.
2. El icono de añadir (**+**) y después **Browse skills**.
3. Elige sección: **All**, **Google** (las que mantiene Google) o **Shared with me**.
4. En la skill que quieras, **+ Install**.

Lo que cambia respecto a la app de consumo: aquí hay versiones con historial, estados que controla quien administra (suspendida, desactivada, eliminada) y la diferencia entre **Turn off**, que solo corta la activación automática, y **Uninstall**, que la quita de tu página pero la deja en la biblioteca para reinstalarla.

Dos límites que importan al subir las tuyas: el cuerpo del `SKILL.md` admite hasta 500.000 caracteres y la `description` 1.024, y en los `.zip` caben 100 archivos y 100 MB. En la edición Frontline puedes instalar y usar skills, pero no crear ni subir.

## ¿Dónde busca Gemini CLI las skills?

En cuatro niveles, de menor a mayor prioridad, según la [documentación de Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/skills.md):

| Nivel | Carpeta |
|---|---|
| 1. Incluidas | Vienen con Gemini CLI, ya aprobadas |
| 2. De extensiones | Las que traen las extensiones instaladas |
| 3. De usuario | `~/.gemini/skills/` o `~/.agents/skills/` |
| 4. De proyecto | `.gemini/skills/` o `.agents/skills/` |

De esa tabla salen dos reglas. Una skill de proyecto sustituye a una tuya con el mismo nombre, que es lo que permite que un repositorio tenga su versión del proceso. Y dentro del mismo nivel, `.agents/skills` gana a `.gemini/skills`.

## ¿Por qué Gemini CLI pide permiso antes de usar una skill?

Porque la activación es una llamada a una herramienta, no una lectura silenciosa. Cuando la tarea encaja con la descripción, el modelo llama a `activate_skill` y Gemini CLI te muestra una confirmación con tres datos: el nombre de la skill, su propósito y la ruta de la carpeta a la que va a tener acceso.

Si aceptas, el cuerpo del `SKILL.md` y la estructura de la carpeta entran en la conversación, y ese directorio pasa a las rutas de archivo permitidas del agente, con lo que puede leer cualquier recurso que la skill lleve dentro.

Son dos consentimientos distintos, y conviene no confundirlos: uno al instalar desde una URL remota, para confirmar el origen, y otro cada vez que una skill se activa en una sesión. El primero se salta con `--consent`. El segundo, no. Lee la descripción que aparece: si no es la skill que esperabas para esa tarea, recházala.

## ¿Qué comandos hay para gestionar skills en Gemini CLI?

Dentro de una sesión:

| Comando | Qué hace |
|---|---|
| `/skills list [all] [nodesc]` | Lista las skills; `all` incluye las de serie, `nodesc` oculta las descripciones |
| `/skills link <ruta>` | Enlaza una carpeta local, con `--scope user` o `--scope workspace` |
| `/skills enable <nombre>` | Activa una skill |
| `/skills disable <nombre>` | La desactiva sin borrarla |
| `/skills reload` | Vuelve a buscar skills, por ejemplo después de editar una |

`enable` y `disable` actúan en el ámbito de usuario salvo que añadas `--scope workspace`.

Desde la terminal, según la [referencia de comandos de la CLI](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/cli-reference.md):

| Comando | Qué hace |
|---|---|
| `gemini skills list --all` | Lista todas, incluidas las que vienen de serie |
| `gemini skills install <url-git> --consent` | Instala desde un repositorio; con `--path` eliges el subdirectorio |
| `gemini skills link <ruta>` | Enlaza una carpeta local por symlink |
| `gemini skills disable --all` | Apaga todas de golpe; `enable --all` las devuelve |
| `gemini skills uninstall <nombre> --scope workspace` | Quita una skill |

Para una skill que no está en un repositorio, copia su carpeta a una de las rutas de la tabla anterior y ejecuta `/skills reload`, sin reiniciar nada.

## ¿Cómo se crea una habilidad propia?

En la app, con **Crear → Crear con Gemini** o **Crear manualmente**, rellenando nombre, descripción e instrucciones. En Gemini CLI, pidiéndoselo al `skill-creator` que viene incluido: le describes el trabajo y te genera la carpeta con el `SKILL.md` y los directorios `scripts/`, `references/` y `assets/`.

El frontmatter obligatorio son dos campos, `name` y `description`, y tiene que ser lo primero del archivo:

```markdown
---
name: revisar-secuencia-outbound
description: Revisa una secuencia de emails en frío y señala qué cambiar. Úsala cuando pidan revisar, auditar o mejorar una secuencia, un email en frío o un asunto.
---
```

La descripción es la pieza crítica, porque es lo único que el modelo tiene delante antes de activar la skill. La recomendación oficial de Google es ser específico en las tareas y en las palabras que deben dispararla, y que no se solape con otras. Sobre el tamaño, su guía de [buenas prácticas](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/skills-best-practices.md) da dos cifras útiles: unas 100 palabras de metadatos, que están siempre en contexto, y menos de 5.000 palabras en el cuerpo, que se carga al activarse. El material de referencia largo va en `references/`, no en el `SKILL.md`.

## ¿Y en Antigravity?

Antigravity, el entorno de agentes de Google, usa el mismo estándar, pero sus carpetas no son las de Gemini CLI. Según [su documentación](https://antigravity.google/docs/skills/), las de proyecto van en `<raíz>/.agents/skills/<skill>/` y las globales en `~/.gemini/config/skills/<skill>/`. La CLI de Antigravity lee además `~/.gemini/skills/`, que es la carpeta de usuario de Gemini CLI; la app, no.

Cada skill se convierte en un comando: una skill llamada `deploy-staging` se invoca con `/deploy-staging`. Si la añades con la sesión abierta, `/skills reload`. Su documentación no menciona la confirmación al activar una skill que sí tiene Gemini CLI.

Conclusión práctica: si trabajas en un proyecto y quieres las skills en las dos herramientas, déjalas en `.agents/skills/` del repositorio.

## ¿Qué hacer si una skill no aparece?

Por orden, de lo más frecuente a lo menos:

- **No has recargado.** `/skills reload` en Gemini CLI. En la app, recarga la página.
- **La carpeta del proyecto no es de confianza.** En una carpeta sin confianza, Gemini CLI ignora los ajustes del proyecto, y el diálogo de confianza enumera las skills locales entre los elementos del proyecto afectados por esa decisión. Revisa o cambia el estado con [`/permissions`](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/trusted-folders.md).
- **El archivo no se llama exactamente `SKILL.md`.** `skill.md` o `Skill.md` se ignoran.
- **El frontmatter no es lo primero del archivo**, o le falta `name` o `description`. Un título, un comentario o incluso una línea en blanco antes del `---` bastan para que se omita sin avisar.
- **Está desactivada.** `/skills enable <nombre>`, o **Activar** en la app.
- **La descripción es genérica** y no se asocia a lo que pides. Llámala a mano: si así funciona, el problema es la descripción.

## Las seis skills de Scale It en Gemini

| Servicio | Skill | Descargar |
|---|---|---|
| SEO | [brief-seo-b2b](/blog/skill-seo-para-ia) | [SKILL.md](/skills/brief-seo-b2b/SKILL.md) · [.zip](/skills/brief-seo-b2b.zip) |
| Outbound | [secuencia-outbound](/blog/skill-outbound-para-ia) | [SKILL.md](/skills/secuencia-outbound/SKILL.md) · [.zip](/skills/secuencia-outbound.zip) |
| Influencers | [seleccion-creadores](/blog/skill-influencers-para-ia) | [SKILL.md](/skills/seleccion-creadores/SKILL.md) · [.zip](/skills/seleccion-creadores.zip) |
| Paid media | [auditoria-paid-b2b](/blog/skill-paid-media-para-ia) | [SKILL.md](/skills/auditoria-paid-b2b/SKILL.md) · [.zip](/skills/auditoria-paid-b2b.zip) |
| Agentes de IA | [spec-agente-ia](/blog/skill-disenar-agentes-de-ia) | [SKILL.md](/skills/spec-agente-ia/SKILL.md) · [.zip](/skills/spec-agente-ia.zip) |
| CRM y RevOps | [diagnostico-crm](/blog/skill-crm-revops-para-ia) | [SKILL.md](/skills/diagnostico-crm/SKILL.md) · [.zip](/skills/diagnostico-crm.zip) |

En la web de Gemini, descarga el `SKILL.md` que quieras y súbelo en **Personalizar → Habilidades → Crear → Subir**. En Gemini CLI, las seis de una vez:

```bash
for s in brief-seo-b2b secuencia-outbound seleccion-creadores auditoria-paid-b2b spec-agente-ia diagnostico-crm; do
  mkdir -p ~/.gemini/skills/$s
  curl -fsSL https://www.growth-scaleit.com/skills/$s/SKILL.md -o ~/.gemini/skills/$s/SKILL.md
done
```

Después, `/skills reload`. Si prefieres compartirlas con Codex, Cursor y Copilot, cambia `~/.gemini/skills` por `~/.agents/skills`.

Una habilidad le da a Gemini el criterio y el formato de un trabajo, pero sigue haciendo falta que alguien abra la conversación y lo pida. Si lo que quieres es algo que corra solo, eso es otra cosa, y empieza por decidir [qué procesos conviene dar a un agente y cuáles no](/blog/que-procesos-dar-a-un-agente). Un ejemplo montado de principio a fin está en [el agente de prospección en LinkedIn](/blog/agente-ia-prospeccion-linkedin), y es parte de lo que hacemos en [agentes de IA](/servicios/agentes-de-ia).

## Preguntas frecuentes

**¿Cómo se instala una skill recomendada en la biblioteca de la app de Gemini?**
No hay instalación. Las de la sección «Recomendadas» son plantillas: abres una, editas nombre, descripción e instrucciones y pulsas **Crear**. La única biblioteca con botón de instalar es la de Gemini Enterprise, en **Browse skills → + Install**.

**¿Qué diferencia hay entre una habilidad y un Gem?**
Un Gem era un asistente aparte al que te cambiabas. Una habilidad se usa dentro de la conversación que tienes abierta, se activa sola y se puede combinar con otras. Los Gems de cuentas personales se eliminan el 17 de diciembre de 2026; en cuentas de empresa de Workspace, en marzo de 2027, y en centros educativos, en junio de 2027.

**¿Las skills de Claude Code funcionan en Gemini?**
Sí, es el mismo estándar. Los campos exclusivos de [Claude Code](/blog/skills-en-claude) se ignoran. En Gemini CLI copias la carpeta; en la app subes el `SKILL.md`.

**¿Cuántas habilidades puedo tener?**
En la app, tantas creadas como quieras, con un máximo de 100 activas a la vez. En Gemini CLI no hay tope publicado, pero cada descripción ocupa contexto desde el inicio de la sesión.

**¿Qué diferencia hay entre una skill y GEMINI.md?**
GEMINI.md es el contexto que Gemini CLI carga en cada sesión. Una skill se carga solo cuando la tarea la necesita, y después de que des permiso.

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
