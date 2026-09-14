---
title: "Skill de SEO para IA: un brief B2B que la IA pueda citar"
description: "La skill brief-seo-b2b, completa y descargable: convierte una keyword en un brief listo para redactar. Para Claude, Codex, ChatGPT, Gemini, Cursor y GLM."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "seo"
tags: ["skills", "SEO", "Claude Code", "Codex", "GEO"]
---

Pídele a cualquier modelo un brief SEO para una keyword y te devolverá un esquema correcto, genérico y distinto cada vez. Introducción, qué es, ventajas, conclusión. Nada de lo que decide si esa pieza va a posicionar: si la búsqueda la gana un artículo o una página de servicio, si ya tienes otra página compitiendo por lo mismo, o qué tiene que aportar tu empresa para que el texto no sea intercambiable con el de la competencia.

El problema no es el modelo. Es que el criterio no está escrito en ninguna parte, y cada conversación empieza de cero.

Una skill resuelve eso. Esta es la que usamos para preparar contenido B2B: completa, descargable y lista para instalar en nueve herramientas.

## ¿Qué es una skill y por qué no basta con un buen prompt?

Una skill es una carpeta con un archivo `SKILL.md`: unas líneas de metadatos con el nombre y la descripción, y debajo las instrucciones. El modelo solo lee el nombre y la descripción hasta que la tarea encaja, y entonces carga el resto. Por eso puedes tener decenas instaladas sin llenar la conversación.

Frente a un prompt guardado en un documento, cambian tres cosas. Se activa sola cuando la tarea encaja, sin que tengas que acordarte de pegarla. Da el mismo proceso a todo el equipo. Y desde finales de 2025 es un [estándar abierto](https://agentskills.io/specification): el mismo archivo funciona en Claude, Codex, ChatGPT, Gemini CLI, Cursor y GitHub Copilot.

## ¿Qué hace la skill brief-seo-b2b?

Recibe una keyword, el dominio, qué vende la empresa y el país. Devuelve siete bloques: un veredicto sobre si conviene escribir esa pieza, los datos on-page, su lugar en el cluster, el esquema con lo que debe responder cada sección, las preguntas frecuentes, lo que tiene que aportar el experto de la empresa y la lista de lo que no se pudo comprobar.

No escribe el artículo, y es deliberado. El brief es donde se decide si el contenido va a servir. Redactar sin ese trabajo previo es exactamente donde se tira el dinero.

Detrás hay cuatro decisiones de diseño. Cada una responde a un error que vemos una y otra vez.

## ¿Por qué empieza por la intención y no por el volumen?

Porque el volumen dice cuánta gente busca algo, pero no qué quiere encontrar. La skill mira los diez primeros resultados y clasifica qué tipo de página está ganando. Si la primera página son páginas de servicio, un artículo de blog no va a entrar por bien escrito que esté: el buscador ya ha decidido que esa búsqueda la responde otra cosa.

Cuando pasa eso, la skill lo dice y recomienda el tipo de página correcto, aunque no sea lo que le pediste. Es la instrucción que más trabajo ahorra, porque evita escribir piezas que nacen sin opciones.

También puntúa de 1 a 3 cuánto acerca esa búsqueda a una compra. Un cluster que atrae a gente que nunca te va a comprar [es tráfico caro](/blog/clusters-de-contenido-b2b), y conviene saberlo antes de escribir, no seis meses después mirando Search Console.

## ¿Cómo evita que compitas contra ti mismo?

Antes de proponer nada, busca si el dominio ya tiene una página para esa intención. Y separa dos cosas que casi todo el mundo mezcla: compartir keyword no es [canibalizarse](/blog/canibalizacion-de-keywords). Dos páginas pueden usar las mismas palabras y responder preguntas distintas.

Si encuentra canibalización de verdad, propone las soluciones de la más barata a la más cara: primero reordenar el enlazado interno, después fusionar con una redirección 301. Y tiene prohibido recomendar un noindex a la página que peor va, que es la solución intuitiva y no traslada nada a la otra.

## ¿Por qué estructura el contenido para que una IA lo cite?

Porque una parte creciente de tus compradores ya no lee tu página: lee un resumen de ella en ChatGPT, en Perplexity o en un AI Overview. Para que ese resumen salga de tu contenido, cada sección tiene que poder copiarse sola y seguir teniendo sentido.

La skill aplica las reglas de [cómo escribir contenido que la IA pueda citar](/blog/escribir-para-que-la-ia-te-cite): encabezados formulados como la pregunta que haría una persona, la respuesta en las dos primeras frases, el sujeto explícito al empezar cada bloque, cifras y plazos concretos, y tablas cuando se comparan opciones.

Y añade una regla que suele faltar: al menos una sección con la opinión o la experiencia propia de la empresa. La estructura sirve para ser encontrado; la opinión, para ser recordado. Es además lo único que un competidor con esta misma skill no puede copiar.

## ¿Por qué tiene prohibido inventar volúmenes de búsqueda?

Porque un modelo sin una herramienta de datos conectada inventa cifras con total seguridad. Un volumen de 2.400 búsquedas mensuales inventado es peor que no tener ningún dato, porque se acaba usando para priorizar.

La regla es simple: si no hay herramienta, no hay número. Lo que no se pudo comprobar va a una sección aparte, "Pendiente de verificar", en lugar de mezclarse con lo que sí.

## La skill completa

**Descargar:** [SKILL.md](/skills/brief-seo-b2b/SKILL.md) · [brief-seo-b2b.zip](/skills/brief-seo-b2b.zip), para subirla a la app de Claude.

````markdown
---
name: brief-seo-b2b
description: Convierte una keyword o un tema en un brief SEO listo para redactar, pensado para empresas B2B y para que el contenido pueda ser citado por buscadores con IA (ChatGPT, Perplexity, AI Overviews). Comprueba la intención de búsqueda real, detecta canibalización con páginas existentes, sitúa la pieza dentro de un cluster y define la estructura en bloques autocontenidos. Úsala cuando pidan un brief SEO, un esquema de artículo, qué artículo escribir para una keyword, planificar contenido de blog B2B o preparar una pieza para aparecer en respuestas de IA.
metadata:
  author: Scale It
  version: "1.0"
  source: https://www.growth-scaleit.com/blog/skill-seo-para-ia
---

# Brief SEO B2B

Esta skill entrega un brief que un redactor puede ejecutar sin hacer preguntas. No escribe el artículo, salvo que lo pidan de forma explícita.

## Qué necesitas antes de empezar

Pide lo que falte, todo en un solo mensaje, antes de trabajar:

1. Keyword o tema principal.
2. Dominio del sitio, para buscar páginas que ya compitan por lo mismo.
3. Qué vende la empresa y a quién, en una frase.
4. País e idioma del público.

Opcional y muy útil: lista de URLs del blog y datos de Search Console de la consulta.

Si no tienes búsqueda web ni datos, dilo al principio y trabaja con lo que te den. Marca como "pendiente de verificar" todo lo que dependa de ver los resultados de búsqueda.

## Proceso

### Paso 1. Intención antes que volumen

Busca la keyword y mira los diez primeros resultados. Clasifica qué tipo de página está ganando:

- Informacional: guía, definición, tutorial.
- Comparativa o de decisión: "vs", alternativas, mejores opciones.
- Comercial: página de servicio, precios, demo.
- Navegacional: alguien busca una marca concreta.

El formato que domina la primera página es el que el buscador cree que responde. Si dominan páginas de servicio, un artículo de blog no va a posicionar. Dilo con claridad y recomienda el tipo de página correcto, aunque no sea lo que pidieron.

Puntúa de 1 a 3 cuánto acerca esta búsqueda a una compra de lo que vende la empresa. Si es 1, avisa de que puede traer tráfico que nunca compra.

### Paso 2. Canibalización

Busca `site:dominio keyword` o revisa la lista de URLs. Distingue misma keyword de misma intención: dos páginas pueden compartir palabras y responder cosas distintas, y eso no es canibalización.

Si ya existe una página que responde la misma intención:

- No propongas una página nueva. Recomienda ampliar o reescribir la existente.
- Si dos páginas compiten, prueba primero lo más barato: que todos los enlaces internos con ese texto apunten a la página que debe quedarse.
- Si no basta, fusiona el contenido en la más fuerte y redirige la otra con 301.
- Nunca recomiendes poner noindex a la que peor va: no traslada nada a la otra.

### Paso 3. Lugar en el cluster

Decide qué papel juega la pieza:

- Página principal: la consulta amplia, hace de índice del tema.
- Pieza de definición: qué es, cómo funciona.
- Pieza de ejecución: cómo se hace, con detalle real.
- Comparativa o decisión: la más cercana a la compra.

Indica a qué página principal enlaza hacia arriba, a qué dos o tres piezas hermanas enlaza de lado y a qué página de servicio lleva. Sin enlaces laterales entre piezas no hay cluster, hay una carpeta.

### Paso 4. Preguntas reales

Lista entre 6 y 10 preguntas que se hace el comprador sobre el tema. Fuentes, de más a menos fiable:

1. Preguntas reales de clientes que te pase el usuario.
2. "Otras preguntas de los usuarios" en los resultados de búsqueda.
3. Foros, Reddit y comunidades del sector.
4. Búsquedas relacionadas.

Descarta las preguntas que no cambien ninguna decisión del comprador.

### Paso 5. Estructura citable

Diseña el esquema con estas reglas:

- Los H2 se formulan como la pregunta que haría una persona. "¿Cuánto cuesta X?" y no "Consideraciones sobre el coste".
- Debajo de cada H2, la respuesta va en las dos o tres primeras frases y se entiende sola, aunque alguien copie solo ese bloque.
- Cada bloque empieza con el sujeto explícito. Nada de "esto", "aquello" o "lo anterior".
- Cifras, nombres y plazos concretos donde existan. Si no hay un dato fiable, se dice que no lo hay.
- Tabla cuando se comparan opciones. Lista cuando la respuesta es una lista.
- Al menos una sección con la opinión o la experiencia propia de la empresa. La estructura sirve para ser encontrado; la opinión, para ser recordado.

### Paso 6. Datos on-page

- Title de 60 caracteres como máximo, con la keyword al principio si suena natural.
- Meta description de entre 140 y 160 caracteres, con una promesa concreta.
- H1 distinto del title solo si mejora la lectura.
- Slug corto, sin fechas ni palabras vacías.
- Datos estructurados: BlogPosting o Article. FAQPage solo si las preguntas son reales y están en la página.

## Formato de salida

Devuelve exactamente estas secciones, en este orden:

1. **Veredicto**, en tres líneas: tipo de página recomendado, intención, relación con la venta de 1 a 3 y riesgo de canibalización con la URL afectada.
2. **Datos on-page**: title, meta description, H1 y slug.
3. **Lugar en el cluster**: página principal, piezas hermanas y página de servicio.
4. **Esquema**: H2 y H3. Para cada H2, qué tiene que responder en sus dos primeras frases.
5. **Preguntas frecuentes** que entran en la pieza.
6. **Lo que tiene que aportar el experto**: las dos o tres opiniones, datos o casos propios que el redactor debe pedir a la empresa. Sin esto, la pieza es intercambiable con la de cualquier competidor.
7. **Pendiente de verificar**: todo lo que no se pudo comprobar.

## Antes de entregar, comprueba

- ¿Un redactor que no conoce la empresa podría escribirlo sin preguntar nada?
- ¿Cada H2 responde una pregunta distinta? Si dos responden lo mismo, fusiónalos.
- ¿Hay al menos una sección que un competidor no podría copiar?
- ¿Has dicho claramente si la keyword no conviene?

## Lo que no hay que hacer

- No inventes volúmenes de búsqueda ni dificultades. Si no hay herramienta, no hay número.
- No marques una extensión objetivo en palabras. La extensión la decide lo que hay que responder.
- No propongas contenido de blog que compita con una página de servicio por una consulta comercial.
- No redactes el artículo completo si solo han pedido el brief.
````

## ¿Cómo se instala en cada herramienta?

### Instalación en un comando (Mac y Linux)

Este comando la deja en `~/.agents/skills`, la carpeta compartida que leen Codex, Gemini CLI, Cursor y GitHub Copilot, y copia la misma carpeta a la de Claude Code, que es la única que no lee la compartida:

```bash
mkdir -p ~/.agents/skills/brief-seo-b2b ~/.claude/skills
curl -fsSL https://www.growth-scaleit.com/skills/brief-seo-b2b/SKILL.md -o ~/.agents/skills/brief-seo-b2b/SKILL.md
cp -R ~/.agents/skills/brief-seo-b2b ~/.claude/skills/
```

En Windows, descarga el [.zip](/skills/brief-seo-b2b.zip) y descomprímelo dentro de la carpeta de skills de tu herramienta. Tiene que quedar una carpeta `brief-seo-b2b` con el `SKILL.md` dentro.

### Dónde va en cada herramienta

| Herramienta | Dónde se instala | Cómo se usa | Paso a paso |
|---|---|---|---|
| Claude Code | `~/.claude/skills/brief-seo-b2b/` | Sola, o escribiendo `/brief-seo-b2b` | [guía](/blog/skills-en-claude) |
| Claude (web y escritorio) | Subiendo el .zip en Customize, Skills | Sola cuando la tarea encaja | [guía](/blog/skills-en-claude) |
| Codex | `~/.agents/skills/brief-seo-b2b/` | Sola, o escribiendo `$brief-seo-b2b` | [guía](/blog/skills-en-codex) |
| ChatGPT | Pestaña Skills, o creándola con `@skill-creator` | Sola, o escribiendo `@brief-seo-b2b` | [guía](/blog/skills-en-chatgpt) |
| Gemini CLI | `~/.gemini/skills/brief-seo-b2b/` | Sola, tras pedirte permiso | [guía](/blog/skills-en-gemini) |
| Cursor | `~/.cursor/skills/brief-seo-b2b/` | Sola, o escribiendo `/brief-seo-b2b` | [guía](/blog/skills-en-cursor) |
| GitHub Copilot | `~/.copilot/skills/brief-seo-b2b/` | Sola, o con `/brief-seo-b2b` en VS Code | [guía](/blog/skills-en-github-copilot) |
| GLM | `~/.claude/skills/brief-seo-b2b/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-glm) |
| DeepSeek | `~/.claude/skills/brief-seo-b2b/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-deepseek) |

## ¿Cómo se usa en la práctica?

Una vez instalada no hace falta nombrarla. Basta con pedir lo que hace. Un ejemplo con una empresa inventada:

> Prepárame un brief para la keyword "mantenimiento predictivo en planta". Dominio: ejemplo-industrial.es. Vendemos sensores y software de monitorización para fábricas medianas. Público en España.

La skill pedirá lo que falte, buscará los resultados si la herramienta tiene búsqueda web y devolverá los siete bloques. En un caso así lo esperable es que el veredicto avise de que la consulta mezcla intención informativa y comercial, y proponga una guía que enlace a la página de producto en lugar de competir con ella.

Rinde mucho más con búsqueda web. Claude Code la trae incluida; en el resto de herramientas, comprueba que está activada en la conversación. Sin ella la skill trabaja igual, pero marca como pendiente todo lo que dependa de ver los resultados.

Si además conectas Search Console mediante un servidor MCP, puede comprobar la canibalización con datos reales de impresiones en lugar de con búsquedas `site:`.

## ¿Qué conviene adaptar a tu empresa?

La skill es genérica a propósito. Tres cambios la hacen tuya:

- **Tus páginas de servicio.** Añade al final del `SKILL.md` a qué URL debe llevar cada tema. Así el enlace a la página comercial deja de ser una suposición.
- **Tu mapa de contenidos.** Si ya lo tienes, guárdalo como archivo dentro de la carpeta de la skill y menciónalo en las instrucciones. El modelo lo leerá solo cuando lo necesite.
- **Tu tono.** Si tienes guía de estilo, enlázala del mismo modo. El brief marcará el tono y el redactor no tendrá que adivinarlo.

Lo que no conviene cambiar es el orden de los pasos. La intención va primero por una razón.

## Errores habituales al usarla

**Pedirle el artículo directamente.** La skill está diseñada para frenar ahí. Si necesitas el texto, pide primero el brief, revísalo y después pide la redacción con el brief delante.

**Ignorar el veredicto.** Si dice que la keyword la gana otro tipo de página, escribir el artículo igualmente es la forma más cara de comprobar que tenía razón.

**Saltarse la sección del experto.** Es la que convierte un contenido correcto en uno que nadie más tiene. Si nadie de la empresa aporta esas dos o tres ideas, el brief está incompleto aunque todo lo demás esté bien.

**Usarla sin la lista de URLs del blog.** Sin ella, la detección de canibalización depende de búsquedas `site:`, que se quedan cortas en sitios con muchas páginas.

## Preguntas frecuentes

**¿Sirve para cualquier sector o solo para B2B?**
Funciona en cualquiera, pero está afinada para B2B: prioriza la relación con la venta sobre el volumen y asume compradores que investigan antes de decidir. En ecommerce de consumo conviene ajustar el primer paso.

**¿Qué modelo da mejores resultados?**
Cualquier modelo de primera línea sigue bien estas instrucciones. Lo que más cambia el resultado es tener búsqueda web activada, no el modelo.

**¿Puedo tener esta skill y otras de SEO a la vez?**
Sí. Cada una se carga solo cuando su descripción encaja con la tarea. Si dos se solapan mucho, el modelo puede dudar entre ellas; en ese caso, haz más específica la descripción de una.

**¿Hace falta saber programar?**
No. Es un archivo de texto. El comando de terminal es un atajo: en la app de Claude se sube un .zip y en Windows basta con descomprimirlo en la carpeta correcta.

**¿Sustituye a herramientas como Semrush o Ahrefs?**
No. Las herramientas traen los datos y la skill aplica el criterio. Si conectas una herramienta de datos por MCP, la skill usa esos datos en lugar de marcarlos como pendientes.

**¿Se actualiza?**
Cuando la mejoremos, cambiará el archivo que se descarga desde esta página. Vuelve a ejecutar el comando de instalación y tendrás la última versión.

## Por dónde empezaríamos

Por el mapa: qué búsquedas acercan a una compra de lo que vendes, qué páginas tienes ya y cuáles compiten entre sí. Con eso resuelto, esta skill produce briefs que se pueden ejecutar uno detrás de otro sin que el contenido se pise.

Es lo que hacemos en [SEO y contenido](/servicios/seo). Si quieres que lo miremos con tu dominio, [media hora y lo vemos](/#contacto).

## Toda la serie

**Las skills**, una por servicio:

- **SEO: brief-seo-b2b**
- [Outbound: secuencia-outbound](/blog/skill-outbound-para-ia)
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
