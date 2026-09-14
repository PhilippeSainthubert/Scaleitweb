---
title: "Skill de influencers para IA: elegir creadores antes de pagar"
description: "La skill seleccion-creadores, completa y descargable: puntúa el encaje, el engagement real y el riesgo de un creador, y prepara el brief de la colaboración."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "influencers"
tags: ["skills", "influencers", "creadores", "UGC", "ChatGPT"]
---

La forma habitual de elegir un creador es mirar cuántos seguidores tiene, pedir su tarifa y cerrar un post. La forma habitual de medirlo es contar impresiones. Y la conclusión habitual, tres meses después, es que nadie sabe si entró un solo cliente.

Pedirle a una IA que analice un perfil no mejora eso por sí solo: sin criterio, el modelo resume la biografía, calcula una tasa de interacción y te dice que el creador "tiene una comunidad muy comprometida". Es decir, lo mismo que el media kit.

Esta skill hace el trabajo que casi nadie hace antes de pagar: leer quién comenta.

## ¿Por qué convertir la selección de creadores en una skill?

Una skill es un archivo `SKILL.md` con instrucciones que el modelo carga cuando la tarea encaja. En selección de creadores lo que aporta es comparabilidad: si evalúas a cinco perfiles con la misma skill, las cinco notas están hechas con el mismo criterio y se pueden poner una al lado de otra.

Además, al ser un [estándar abierto](https://agentskills.io/specification), funciona igual en ChatGPT, en Claude, en Gemini CLI o en Cursor. Útil si en tu equipo cada persona usa una herramienta distinta.

## ¿Qué hace la skill seleccion-creadores?

Recibe el perfil del creador, qué vende la marca y a quién, el objetivo de la colaboración y los competidores. Puntúa cinco criterios de 0 a 5, cada uno con la evidencia que lo justifica, calcula una nota final y decide: contratar, negociar o descartar. Si la decisión es contratar o negociar, prepara el brief.

Funciona con creadores de consumo, pero está pensada para lo que más cuesta acertar: marcas B2B o de nicho, donde un creador pequeño y bien elegido rinde mucho más que uno grande.

## ¿Por qué el encaje de la audiencia cuenta doble?

Porque es lo único que no se arregla negociando. Un creador de 8.000 seguidores del sector correcto vende más que uno de 300.000 que habla a otro público, y ninguna condición de contrato convierte a la audiencia equivocada en compradora.

Para medirlo, la skill no mira datos demográficos agregados. Lee entre veinte y treinta comentarios de publicaciones distintas y se pregunta quién los escribe: qué cargos se ven, qué preguntas hacen, qué vocabulario usan. Si comentan técnicos de mantenimiento y vendes software de mantenimiento, el encaje es alto aunque el creador sea pequeño. Si comentan estudiantes y vendes a directores de planta, es bajo aunque las cifras sean enormes.

## ¿Cómo distingue el engagement real del comprado?

Busca señales concretas: comentarios genéricos que valdrían para cualquier publicación, comentarios repetidos entre publicaciones, cuentas sin foto o en idiomas que no tienen nada que ver con el contenido, y saltos de seguidores sin una publicación que los explique.

Y mira lo contrario: la proporción de comentarios con conversación de verdad. Preguntas, desacuerdos, gente contando su propia experiencia. Eso no se compra.

Hay una regla que la skill cumple siempre: **nunca afirma que hay fraude**. Habla de señales que conviene verificar pidiendo al creador las estadísticas nativas de la plataforma. Acusar a alguien de comprar seguidores basándose en un vistazo a los comentarios es un error, y además cierra una negociación que quizá merecía la pena.

## ¿Qué dice el historial de un creador con tus competidores?

Depende de cuándo. Si trabajó con un competidor directo hace menos de seis meses, hay un conflicto, o como mínimo una exclusividad que negociar. Si fue hace más tiempo, es una prueba de que el tema funciona con su audiencia, y eso sube la nota.

La skill también cuenta cuántas de sus publicaciones son patrocinadas. Si más de una de cada tres son publicidad, su audiencia ha aprendido a ignorarla, por buena que sea. Y compara cómo rindieron sus publicaciones patrocinadas frente a las orgánicas: la diferencia dice cuánto confía su audiencia en sus recomendaciones.

## ¿Por qué descarta lo que solo se mide en impresiones?

Porque en B2B una campaña que solo se mide en impresiones es tirar el dinero con más pasos. La skill pregunta si el creador acepta enlace con seguimiento, código propio, página de destino específica y derechos de uso del contenido. Si la respuesta es no a todo, la nota de medibilidad es cero, y un cero en medibilidad descarta al creador aunque el resto sea excelente.

Lo mismo con el riesgo de marca: polémicas recientes, un tono incompatible o publicidad sin identificar. En España y en la mayoría de mercados la publicidad con creadores tiene que identificarse como tal, y quien no lo hace expone también a la marca que le paga.

## ¿Qué tiene que llevar el brief?

Menos de lo que parece, y algunas cosas que casi siempre se olvidan. La skill limita el brief a un único mensaje que tiene que quedar, deja formato, tono y guion en manos del creador, porque su voz es lo que se está pagando, y fija por escrito lo que no es negociable: identificación como publicidad, enlace o código, afirmaciones prohibidas y fechas.

Lo que más se olvida son los derechos de uso. Un vídeo que funciona vale mucho más si lo puedes usar como anuncio pagado, y eso hay que acordarlo antes de grabar: canales, plazo, uso en publicidad y exclusividad.

## La skill completa

**Descargar:** [SKILL.md](/skills/seleccion-creadores/SKILL.md) · [seleccion-creadores.zip](/skills/seleccion-creadores.zip), para subirla a la app de Claude.

````markdown
---
name: seleccion-creadores
description: Evalúa si un creador de contenido o influencer encaja con una marca B2B o de nicho antes de pagarle, y prepara el brief de la colaboración. Puntúa el encaje de su audiencia con el cliente ideal, la calidad real del engagement leyendo comentarios, sus trabajos previos con competidores, el riesgo de marca y si la campaña se podrá medir, y decide contratar, negociar o descartar. Úsala cuando pidan analizar un influencer, comparar creadores, elegir perfiles para una campaña de UGC, LinkedIn, YouTube o TikTok, auditar una cuenta antes de contratar o escribir un brief para un creador.
metadata:
  author: Scale It
  version: "1.0"
  source: https://www.growth-scaleit.com/blog/skill-influencers-para-ia
---

# Selección de creadores

## El principio

Quién sigue a un creador importa mucho más que cuántos le siguen. Un creador de 8.000 seguidores del sector correcto vende más que uno de 300.000 que habla a otro público. Esta skill no busca alcance, busca compradores.

## Qué necesitas

1. Perfil o perfiles del creador: URL y plataforma.
2. Qué vende la marca y a quién: cargo, sector y país del comprador.
3. Objetivo de la colaboración: oportunidades de venta, registros, ventas o contenido para usar en anuncios.
4. Tres a cinco competidores directos de la marca.

Opcional: el media kit o las estadísticas que haya compartido el creador.

Si no puedes abrir los perfiles, pide que te peguen la biografía, las diez últimas publicaciones con sus métricas y una muestra de comentarios de tres publicaciones distintas. No puntúes sin esa información.

## Proceso: cinco criterios, de 0 a 5

Cada nota lleva al lado la observación concreta que la justifica. Una nota sin evidencia no vale.

### 1. Encaje de la audiencia (cuenta doble)

- Lee entre 20 y 30 comentarios de publicaciones distintas. ¿Quién comenta? Cargos visibles, tipo de preguntas, vocabulario.
- ¿La audiencia está en el país donde vende la marca?
- ¿El tema habitual del creador está a un paso del problema que resuelve el producto, o a cinco?

Un 5 es que los comentaristas parecen compradores. Un 0 es una audiencia de otro mundo.

### 2. Engagement real

- Compara su tasa de interacción con la de creadores de tamaño y plataforma parecidos. No existe un umbral universal y no lo inventes.
- Señales que conviene verificar: comentarios genéricos ("¡Genial!", emojis sueltos), comentarios repetidos entre publicaciones, cuentas sin foto o en idiomas sin relación con el contenido, saltos de seguidores sin una publicación que los explique.
- Proporción de comentarios con conversación de verdad: preguntas, desacuerdo, experiencia propia.

Nunca afirmes que hay fraude. Habla de "señales que conviene verificar pidiendo las estadísticas nativas de la plataforma".

### 3. Historial con marcas y competidores

- ¿Ha trabajado con competidores? Si fue hace menos de seis meses, hay conflicto o una exclusividad que negociar. Si fue antes, es una prueba de que el tema funciona con su audiencia.
- ¿Cuántas publicaciones patrocinadas hay frente a las orgánicas? Si más de una de cada tres son publicidad, su audiencia ha aprendido a ignorarla.
- ¿Cómo rindieron sus publicaciones patrocinadas comparadas con las orgánicas?

### 4. Riesgo de marca

Revisa al menos los últimos tres meses: polémicas, tono incompatible con la marca, afirmaciones que la marca no podría suscribir y publicidad sin identificar. En España y en la mayoría de mercados la publicidad con creadores tiene que identificarse como tal; quien no lo hace expone también a la marca.

### 5. Medibilidad

¿Acepta enlace con UTM, código propio, página de destino específica y derechos de uso del contenido en anuncios? Si la colaboración solo se puede medir en impresiones, la nota es 0.

## Decisión

Nota final = (encaje × 2 + engagement + historial + riesgo + medibilidad) / 6

- 4 o más: contratar.
- De 3 a 3,9: negociar, indicando qué condición concreta subiría la nota.
- Menos de 3: descartar, con el motivo principal en una frase.

Un 0 en riesgo de marca o en medibilidad descarta al creador aunque el resto sea excelente.

## Brief de la colaboración

Solo si la decisión es contratar o negociar:

- **Contexto** en tres frases: qué hace la marca, a quién ayuda y por qué este creador.
- **El único mensaje** que tiene que quedar. Uno, no tres.
- **Lo que decide el creador**: formato, tono y guion. Su voz es lo que se está pagando.
- **Lo obligatorio**: identificación como publicidad, enlace o código, afirmaciones prohibidas, fechas.
- **Derechos de uso**: canales, plazo, uso en anuncios pagados, exclusividad y su duración.
- **Medición**: UTM, código, qué datos reporta el creador y cuándo.
- **Revisión**: una ronda de cambios sobre hechos, no sobre estilo.

## Formato de salida

1. Tabla por creador: criterio, nota y evidencia en una línea.
2. Nota final y veredicto.
3. Brief, si aplica.
4. Lo que no se pudo verificar y qué pedirle al creador antes de firmar: estadísticas nativas de audiencia por país y edad, y resultados de colaboraciones anteriores.

Si hay varios creadores, añade al final una tabla comparativa ordenada por nota final.

## Lo que no hay que hacer

- No recomiendes a nadie por su número de seguidores.
- No inventes datos demográficos de la audiencia.
- No reescribas la voz del creador en el brief.
- No aceptes como objetivo de negocio una campaña que solo se mide en impresiones.
````

## ¿Cómo se instala en cada herramienta?

### Instalación en un comando (Mac y Linux)

Este comando la deja en `~/.agents/skills`, la carpeta compartida que leen Codex, Gemini CLI, Cursor y GitHub Copilot, y copia la misma carpeta a la de Claude Code, que es la única que no lee la compartida:

```bash
mkdir -p ~/.agents/skills/seleccion-creadores ~/.claude/skills
curl -fsSL https://www.growth-scaleit.com/skills/seleccion-creadores/SKILL.md -o ~/.agents/skills/seleccion-creadores/SKILL.md
cp -R ~/.agents/skills/seleccion-creadores ~/.claude/skills/
```

En Windows, descarga el [.zip](/skills/seleccion-creadores.zip) y descomprímelo dentro de la carpeta de skills de tu herramienta. Tiene que quedar una carpeta `seleccion-creadores` con el `SKILL.md` dentro.

### Dónde va en cada herramienta

| Herramienta | Dónde se instala | Cómo se usa | Paso a paso |
|---|---|---|---|
| Claude Code | `~/.claude/skills/seleccion-creadores/` | Sola, o escribiendo `/seleccion-creadores` | [guía](/blog/skills-en-claude) |
| Claude (web y escritorio) | Subiendo el .zip en Customize, Skills | Sola cuando la tarea encaja | [guía](/blog/skills-en-claude) |
| Codex | `~/.agents/skills/seleccion-creadores/` | Sola, o escribiendo `$seleccion-creadores` | [guía](/blog/skills-en-codex) |
| ChatGPT | Pestaña Skills, o creándola con `@skill-creator` | Sola, o escribiendo `@seleccion-creadores` | [guía](/blog/skills-en-chatgpt) |
| Gemini CLI | `~/.gemini/skills/seleccion-creadores/` | Sola, tras pedirte permiso | [guía](/blog/skills-en-gemini) |
| Cursor | `~/.cursor/skills/seleccion-creadores/` | Sola, o escribiendo `/seleccion-creadores` | [guía](/blog/skills-en-cursor) |
| GitHub Copilot | `~/.copilot/skills/seleccion-creadores/` | Sola, o con `/seleccion-creadores` en VS Code | [guía](/blog/skills-en-github-copilot) |
| GLM | `~/.claude/skills/seleccion-creadores/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-glm) |
| DeepSeek | `~/.claude/skills/seleccion-creadores/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-deepseek) |

## ¿Cómo se usa en la práctica?

Aquí hay un detalle importante: Instagram, TikTok y LinkedIn suelen bloquear la lectura automática de perfiles y comentarios. Aunque tu herramienta tenga búsqueda web, lo más probable es que no pueda abrir el perfil.

Lo que funciona es darle la información directamente. Por cada creador, pega la biografía, sus diez últimas publicaciones con las métricas visibles y los comentarios de tres publicaciones distintas. Con capturas de pantalla también sirve en las herramientas que leen imágenes, como ChatGPT o la app de Claude.

Un ejemplo de petición, con marca y creadores inventados:

> Evalúa a estos dos creadores para una campaña de un software de prevención de riesgos laborales. Vendemos a responsables de seguridad en empresas industriales de España. Objetivo: solicitudes de demo. Competidores: [tres nombres]. Te pego la información de cada uno.

La skill devolverá una tabla por creador, la nota final de cada uno y una comparativa ordenada. Lo esperable en un caso así es que un perfil técnico pequeño supere a uno generalista grande en encaje y medibilidad.

## ¿Qué conviene adaptar a tu empresa?

- **Los pesos según el objetivo.** Si buscas contenido para usar en anuncios y no ventas directas, la medibilidad y los derechos de uso deberían pesar más que el encaje. Cambia la fórmula en la sección de decisión.
- **Tu lista de competidores.** Escríbela dentro de la skill para no tener que dársela cada vez.
- **Tu política de marca.** Temas que no quieres cerca de tu marca, afirmaciones que no puedes hacer por regulación de tu sector.
- **Tus plataformas.** Si solo trabajas con LinkedIn o con YouTube, añade lo que miras en esa plataforma en concreto.

## Errores habituales al usarla

**Pasarle solo el media kit.** El media kit lo escribe el creador para venderse. Sin comentarios reales, la skill no puede medir el encaje y lo dirá.

**Leer solo la nota final.** La evidencia de cada criterio es lo que te permite discrepar con criterio. Una nota alta con evidencia floja merece una segunda mirada.

**Negociar sin mirar qué subiría la nota.** Cuando la decisión es negociar, la skill dice qué condición concreta la cambiaría. Ese es el punto de partida de la negociación.

**Reescribir el guion del creador.** El brief deja la voz en sus manos por una razón. Si su audiencia nota que no habla él, la campaña pierde lo que estabas pagando.

## Preguntas frecuentes

**¿Sirve para creadores muy pequeños?**
Sí, y es donde más rinde. En nano y microcreadores las cifras agregadas dicen poco y los comentarios lo dicen casi todo.

**¿Puede encontrar creadores por mí?**
No es su función. Evalúa perfiles que ya tienes localizados. La búsqueda de candidatos se hace antes, con herramientas de búsqueda de creadores o a mano en la plataforma.

**¿Funciona con UGC, donde el creador no publica en su cuenta?**
Parcialmente. Si el contenido va a tus anuncios y no a su audiencia, el encaje de audiencia pesa poco y lo que importa es la calidad del contenido y los derechos. Ajusta los pesos.

**¿Qué hago si un creador no me da estadísticas nativas?**
La skill lo marca como pendiente. Un creador que se niega a enseñar sus estadísticas antes de cobrar es, en sí mismo, una señal que conviene tener en cuenta.

**¿Sustituye a una plataforma de influencer marketing?**
No. Las plataformas dan datos de audiencia a escala. La skill aplica criterio sobre esos datos o sobre lo que le pegues.

## Por dónde empezaríamos

Por saber si en tu sector existen creadores con audiencia compradora. En sectores técnicos suele haber referentes pequeños con audiencias muy cualificadas; cuando no los hay, lo decimos y el presupuesto se va a otro canal.

Es lo que hacemos en [influencers y creadores](/servicios/influencers). [Media hora y lo vemos](/#contacto).

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- **Influencers: seleccion-creadores**
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
