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
