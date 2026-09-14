---
title: "Skill para diseñar agentes de IA: decidir antes de construir"
description: "La skill spec-agente-ia, completa y descargable: decide si un proceso necesita un agente o una automatización y escribe la especificación con límites y pruebas."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "agentes-de-ia"
tags: ["skills", "agentes de IA", "automatización", "Claude Code", "Codex"]
---

La mayoría de los proyectos de agentes de IA que salen mal no fallan en el código. Fallan antes, en una decisión que casi nadie toma de forma explícita: si ese proceso necesitaba un agente, una automatización normal o, todavía, nada.

Y cuando la decisión es correcta, fallan en el mes dos, porque nadie escribió qué no podía hacer el agente, cuándo debía parar ni cómo se sabría que había empezado a degradarse.

Esta skill escribe esas dos cosas: la decisión y la especificación.

## ¿Una skill no es ya un agente?

No, y la diferencia es útil para entender esta skill. Una skill es un archivo `SKILL.md` con instrucciones que un modelo carga cuando la tarea encaja, dentro de una conversación con una persona. Enseña a hacer algo bien.

Un agente trabaja solo: se dispara con un evento, tiene acceso a sistemas, toma decisiones y produce efectos sin que nadie le escriba cada vez. Delega un trabajo.

Las skills son la forma más ligera de dar criterio a un modelo, y a veces bastan. Esta skill sirve precisamente para decidir cuándo no bastan, y para especificar lo que habría que construir. Al ser un [estándar abierto](https://agentskills.io/specification), funciona en Claude, Codex, ChatGPT, Gemini CLI, Cursor y GitHub Copilot.

## ¿Qué hace la skill spec-agente-ia?

Recibe tres cosas: el proceso tal como se hace hoy, tres ejemplos reales de entrada con lo que se hizo con cada uno, y lo que cuesta hacerlo mal. Devuelve un veredicto (agente, automatización o todavía no) y, si el veredicto es agente, la especificación completa, una plantilla de casos de prueba y los riesgos.

Si no le das ejemplos reales, los pide antes de seguir. Diseñar un agente sobre una descripción abstracta del proceso es la forma más segura de que falle con el primer caso real.

## ¿Cómo decide entre agente y automatización?

Con una pregunta que se contesta en treinta segundos: **¿se podrían dibujar todas las ramas posibles del proceso en un diagrama, sin que falte ninguna?**

Si la respuesta es sí, lo que necesitas es una automatización. Es más barata, más rápida, más fácil de depurar y no se inventa nada. La skill la recomienda, explica por qué y termina ahí. Si quieres saber con qué construirla, lo comparamos en [n8n, Make o código](/blog/n8n-make-o-codigo).

Si la respuesta es no, porque las entradas son texto libre, los casos son demasiado variados o hace falta criterio, ninguna automatización va a aguantar. Acabarías con un diagrama de cuarenta ramas que se rompe cada semana. La diferencia completa está en [agente de IA o automatización](/blog/agente-o-automatizacion).

## ¿Qué cuatro preguntas tienen que salir bien?

Superar la prueba del diagrama no basta. La skill hace cuatro preguntas más, y un no claro en cualquiera es motivo para no construir todavía:

1. **¿Hay variabilidad real?** Las entradas cambian lo bastante como para que un diagrama no las cubra.
2. **¿El error es tolerable y detectable?** Si se equivoca, se nota antes de hacer daño y cuesta poco corregirlo.
3. **¿Existe el contexto que necesita?** Si la información para decidir vive en la cabeza de una persona, primero hay que escribirla.
4. **¿Hay volumen suficiente?** Construir, medir y mantener un agente cuesta; tiene que repetirse lo bastante como para compensar.

El patrón de los procesos que salen bien es siempre el mismo: **el agente prepara y una persona decide**. Investigación previa a una reunión, clasificación de entrantes, verificación de listas, resúmenes de llamadas. Lo explicamos en [qué procesos conviene dar a un agente](/blog/que-procesos-dar-a-un-agente).

## ¿Por qué los límites se escriben en negativo?

Porque "el agente gestionará las respuestas a clientes con cuidado" no es un límite, es un deseo. Un límite duro es una frase que se puede comprobar y que no admite interpretación: "No envía nada a un cliente. No modifica importes. No borra registros."

La especificación que produce la skill separa tres cosas que suelen mezclarse:

- **Límites duros**: lo que no hace nunca, sin excepciones.
- **Cuándo para y pregunta**: las condiciones concretas de duda, como datos que faltan, un caso que no se parece a los ejemplos o fuentes que se contradicen, y qué hace en cada caso.
- **Revisión humana**: quién revisa, qué revisa y en qué plazo. Con una regla: nada tiene efecto fuera del agente sin esa revisión.

También limita el acceso. El agente recibe una lista cerrada de sistemas, con permiso de lectura o escritura para cada uno, y nada que no necesite para su tarea.

## ¿Cuántos casos de prueba hacen falta?

Entre veinte y cincuenta casos reales bien elegidos, cada uno con el resultado correcto esperado, y cubriendo los casos raros, no solo los fáciles.

La batería no es un trámite previo al lanzamiento. Se vuelve a ejecutar cada vez que cambian el modelo, las instrucciones o el contexto. Sin ella no hay forma de saber si un cambio mejora o empeora el agente, y se acaba reescribiendo instrucciones por intuición.

## ¿Qué métrica avisa de que se está degradando?

Una sola, si hay que elegir: **el porcentaje de ejecuciones que una persona tiene que corregir**. Cuando sube, algo ha cambiado. Casi siempre es una de cuatro cosas que explicamos en [por qué tu agente de IA falla en el mes dos](/blog/por-que-falla-tu-agente-de-ia): el contexto envejeció, le das demasiado contexto, nadie mide nada o cambió algo alrededor.

Y hay una medición que va antes de construir: medir el proceso manual durante dos semanas. Cuántas veces se hace, cuántos minutos lleva y cuántos errores tiene. Sin esa línea base, después no se podrá demostrar ningún ahorro. Cómo hacerlo, en [cómo medir el retorno de un agente](/blog/medir-retorno-agente-de-ia).

## La skill completa

**Descargar:** [SKILL.md](/skills/spec-agente-ia/SKILL.md) · [spec-agente-ia.zip](/skills/spec-agente-ia.zip), para subirla a la app de Claude.

````markdown
---
name: spec-agente-ia
description: Decide si un proceso de negocio conviene resolverlo con un agente de IA, con una automatización clásica o todavía con ninguno, y si procede escribe la especificación del agente: objetivo, entradas y salidas, herramientas y permisos, límites duros, cuándo debe parar y preguntar, revisión humana, casos de prueba y la métrica que avisa de que se está degradando. Úsala cuando pidan diseñar un agente, automatizar un proceso con IA, evaluar si algo se puede automatizar, preparar el encargo para construir un agente o revisar por qué un agente ha empezado a fallar.
metadata:
  author: Scale It
  version: "1.0"
  source: https://www.growth-scaleit.com/blog/skill-disenar-agentes-de-ia
---

# Especificación de un agente de IA

## El principio

La mayor parte del dinero que se pierde en agentes viene de equivocar una sola pregunta: si el proceso necesita criterio o solo necesita seguir pasos. Esta skill responde eso primero, y solo después diseña.

## Qué necesitas

1. **El proceso tal y como se hace hoy**: quién lo hace, cada cuánto, cuánto tarda y con qué herramientas.
2. **Tres ejemplos reales de entrada** (un correo, un formulario, un ticket) y qué se hizo con cada uno. Uno de ellos tiene que ser un caso raro.
3. **Qué pasa cuando se hace mal** y cuánto cuesta.

Sin ejemplos reales no se puede diseñar nada serio. Pídelos antes de seguir.

## Paso 1. ¿Agente, automatización o nada?

**La prueba de los treinta segundos**: ¿se podrían dibujar todas las ramas posibles del proceso en un diagrama, sin que falte ninguna?

- **Sí**: es una automatización (Make, n8n, Zapier o código). Es más barata, más predecible y no se inventa nada. Recomiéndala, explica por qué y termina aquí.
- **No**, porque las entradas son texto libre, los casos son muy variados o hace falta criterio: sigue.

Cuatro preguntas. Un no claro en cualquiera es motivo para no construir todavía:

1. **¿Hay variabilidad real?** Las entradas cambian lo bastante como para que un diagrama no las cubra.
2. **¿El error es tolerable y detectable?** Si se equivoca, se nota antes de causar daño y cuesta poco corregirlo.
3. **¿Existe el contexto que necesita?** La información para decidir está escrita y es accesible. Si vive en la cabeza de alguien, primero hay que escribirla.
4. **¿Hay volumen suficiente?** Se repite lo bastante como para compensar construirlo, medirlo y mantenerlo.

Candidatos que suelen funcionar: investigación previa a una reunión, clasificación y enrutado de entrantes, preparación y verificación de listas, resúmenes de llamadas con siguientes pasos, primeros borradores de respuestas repetitivas con revisión.

Candidatos que casi nunca conviene dar todavía: cualquier comunicación con un cliente sin revisión, decisiones sobre dinero (descuentos, presupuestos, facturación) y cualquier acción irreversible.

El patrón que hay que buscar: **el agente prepara y una persona decide**.

## Paso 2. La especificación

Si el veredicto es agente, escribe estas secciones:

### Objetivo

Una frase con el resultado, no con las tareas. Por ejemplo: "Que cada lead entrante tenga en menos de diez minutos una clasificación y un borrador de respuesta listo para revisar".

### Entradas y salidas

Qué recibe, de dónde y en qué formato. Qué entrega, dónde queda y en qué formato exacto.

### Herramientas y permisos

Lista cerrada de sistemas a los que accede, con permiso de lectura o de escritura para cada uno. Mínimo acceso: nada que no necesite para esta tarea concreta.

### Límites duros

Lo que no puede hacer nunca, en negativo y sin excepciones. Por ejemplo: "No envía nada a un cliente. No modifica importes. No borra registros."

### Cuándo para y pregunta

Condiciones concretas de duda: datos que faltan, un caso que no se parece a los ejemplos, fuentes que se contradicen, una decisión que toca un límite. Qué hace entonces: a quién avisa y dónde deja el caso.

### Revisión humana

Quién revisa, qué revisa y en qué plazo. Y la regla: nada tiene efecto fuera del agente sin esa revisión.

### Contexto

Qué documentos necesita: criterios, tono, catálogo, políticas. Poco y relevante: demasiado contexto empeora las decisiones. Nombra a la persona responsable de mantenerlo al día y la frecuencia de revisión, trimestral en la mayoría de negocios y mensual si cambian deprisa.

## Paso 3. Casos de prueba

Entre veinte y cincuenta casos reales bien elegidos, cada uno con el resultado correcto esperado. Tienen que cubrir los casos raros, no solo los fáciles.

La batería se ejecuta antes de lanzar y cada vez que cambian el modelo, las instrucciones o el contexto. Sin ella no hay forma de saber si un cambio mejora o empeora el agente.

## Paso 4. Medición

- **Antes de construir**, mide el proceso manual durante dos semanas: cuántas veces, cuántos minutos y cuántos errores. Sin esa línea base no se podrá demostrar ningún ahorro.
- **La métrica de salud**: el porcentaje de ejecuciones que una persona tiene que corregir. Si sube, algo ha cambiado: el contexto envejeció, llegan entradas nuevas o cambió algo alrededor.
- **La métrica de valor**: horas liberadas que de verdad se dedican a otra cosa, y velocidad convertida en ingresos cuando se pueda medir con cohortes de antes y después.

## Formato de salida

1. **Veredicto**: agente, automatización o todavía no, con la razón en tres líneas.
2. **Especificación completa**, si el veredicto es agente.
3. **Plantilla de casos de prueba**: tabla con entrada, resultado esperado y tipo (normal o difícil), rellenada con los ejemplos recibidos.
4. **Riesgos** y lo que no se ha podido valorar.

## Lo que no hay que hacer

- No diseñes un agente sin ejemplos reales.
- No propongas un segundo agente que revise al primero como sustituto de la revisión humana.
- No prometas ahorros sin una línea base medida.
- No metas varios procesos en un mismo agente: uno por proceso.
- No recomiendes cambiar de modelo para arreglar un fallo de contexto: el modelo nuevo fallará igual.
````

## ¿Cómo se instala en cada herramienta?

### Instalación en un comando (Mac y Linux)

Este comando la deja en `~/.agents/skills`, la carpeta compartida que leen Codex, Gemini CLI, Cursor y GitHub Copilot, y copia la misma carpeta a la de Claude Code, que es la única que no lee la compartida:

```bash
mkdir -p ~/.agents/skills/spec-agente-ia ~/.claude/skills
curl -fsSL https://www.growth-scaleit.com/skills/spec-agente-ia/SKILL.md -o ~/.agents/skills/spec-agente-ia/SKILL.md
cp -R ~/.agents/skills/spec-agente-ia ~/.claude/skills/
```

En Windows, descarga el [.zip](/skills/spec-agente-ia.zip) y descomprímelo dentro de la carpeta de skills de tu herramienta. Tiene que quedar una carpeta `spec-agente-ia` con el `SKILL.md` dentro.

### Dónde va en cada herramienta

| Herramienta | Dónde se instala | Cómo se usa | Paso a paso |
|---|---|---|---|
| Claude Code | `~/.claude/skills/spec-agente-ia/` | Sola, o escribiendo `/spec-agente-ia` | [guía](/blog/skills-en-claude) |
| Claude (web y escritorio) | Subiendo el .zip en Customize, Skills | Sola cuando la tarea encaja | [guía](/blog/skills-en-claude) |
| Codex | `~/.agents/skills/spec-agente-ia/` | Sola, o escribiendo `$spec-agente-ia` | [guía](/blog/skills-en-codex) |
| ChatGPT | Pestaña Skills, o creándola con `@skill-creator` | Sola, o escribiendo `@spec-agente-ia` | [guía](/blog/skills-en-chatgpt) |
| Gemini CLI | `~/.gemini/skills/spec-agente-ia/` | Sola, tras pedirte permiso | [guía](/blog/skills-en-gemini) |
| Cursor | `~/.cursor/skills/spec-agente-ia/` | Sola, o escribiendo `/spec-agente-ia` | [guía](/blog/skills-en-cursor) |
| GitHub Copilot | `~/.copilot/skills/spec-agente-ia/` | Sola, o con `/spec-agente-ia` en VS Code | [guía](/blog/skills-en-github-copilot) |
| GLM | `~/.claude/skills/spec-agente-ia/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-glm) |
| DeepSeek | `~/.claude/skills/spec-agente-ia/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-deepseek) |

## ¿Cómo se usa en la práctica?

Descríbele el proceso como se lo contarías a alguien que va a sustituirte una semana, y pega tres casos reales. Un ejemplo con una empresa inventada:

> Queremos automatizar la clasificación de los correos que llegan a soporte técnico. Somos una empresa de mantenimiento industrial. Llegan unos 40 al día; los lee una persona, decide si es avería urgente, consulta de facturación o petición de presupuesto, y los reenvía. Te pego tres correos reales y lo que se hizo con cada uno. Uno de ellos es un cliente que mezcla una avería con una queja por una factura.

En un caso así, lo esperable es que el veredicto sea agente: el texto es libre y hay casos mezclados que ningún diagrama cubre. La especificación incluiría límites como "no responde al cliente" y "no cambia la prioridad de un aviso ya abierto", una condición de duda para los correos que mezclan temas y la revisión de la persona de soporte antes de reenviar.

## ¿Qué conviene adaptar a tu empresa?

- **Tus herramientas.** Si ya trabajas con un CRM, un sistema de tickets o una plataforma de automatización concreta, escríbelos en la skill para que la especificación hable de tus sistemas.
- **Tu política de aprobación.** Quién puede aprobar que algo tenga efecto, y qué nivel de revisión exige cada tipo de acción.
- **Tus datos sensibles.** Qué información no puede salir nunca de tus sistemas, para que los permisos del agente lo reflejen desde el diseño.

## Errores habituales al usarla

**Describir el proceso ideal en lugar del real.** Si le cuentas cómo debería hacerse, diseñará un agente para un proceso que no existe.

**Dar solo casos fáciles.** El caso raro es el que decide si el agente necesita una condición de duda. Sin él, la especificación queda optimista.

**Tomar el veredicto de automatización como un fracaso.** Es el mejor resultado posible cuando corresponde: más barato, más predecible y sin riesgo de que se invente nada.

**Construir sin la línea base.** Dos semanas de medición manual parecen una pérdida de tiempo hasta el día que dirección pregunta cuánto se ha ahorrado.

## Preguntas frecuentes

**¿La skill construye el agente?**
No. Produce la especificación. Con ella, cualquier equipo técnico, o una herramienta como Claude Code o Codex, tiene lo necesario para construirlo sin tener que adivinar los límites.

**¿Cuánto cuesta construir lo que especifica?**
Depende del alcance, las integraciones y el volumen. Lo desglosamos en [cuánto cuesta un agente de IA](/blog/cuanto-cuesta-un-agente-de-ia).

**¿Sirve para revisar un agente que ya existe y falla?**
Sí. Pásale la descripción de lo que hace, algunos casos donde falló y lo que se esperaba. La comparación con la especificación ideal suele señalar lo que falta: límites, condiciones de duda o casos de prueba.

**¿Con qué modelo se construye mejor?**
Con el que mejor encaje en la tarea y el presupuesto. La especificación no está atada a ningún proveedor, y conviene que no lo esté, porque este mercado cambia cada pocos meses.

**¿Qué pasa con los datos de mis clientes?**
La especificación incluye los permisos y los datos a los que accede el agente. Decide ahí qué no debe salir de tus sistemas y usa configuraciones que excluyan el uso de tus datos para entrenar modelos.

## Por dónde empezaríamos

Por el mapa de procesos: qué se repite cada semana, cuánto cuesta hoy en horas y qué merece automatizarse. Muchas veces la respuesta honesta para varios de ellos es que no, y esta skill está hecha para decirlo.

Es lo que hacemos en [agentes de IA a medida](/servicios/agentes-de-ia). [Media hora y lo vemos](/#contacto).

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- **Agentes de IA: spec-agente-ia**
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
