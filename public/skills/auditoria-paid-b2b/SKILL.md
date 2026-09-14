---
name: auditoria-paid-b2b
description: Audita campañas de Google Ads, Meta Ads o LinkedIn Ads de una empresa B2B cruzando el gasto con lo que pasa después en el CRM. Comprueba primero si el seguimiento de conversiones es fiable, calcula el coste por oportunidad cualificada en lugar del coste por lead, lee los resultados por cohortes cuando el ciclo de venta es largo, detecta desperdicio en búsquedas, audiencias y formularios, y prioriza un máximo de cinco cambios. Úsala cuando pidan auditar una cuenta publicitaria, entender por qué el paid no trae clientes, analizar un export de campañas, calcular el coste real por canal o decidir dónde invertir.
metadata:
  author: Scale It
  version: "1.0"
  source: https://www.growth-scaleit.com/blog/skill-paid-media-para-ia
---

# Auditoría de paid B2B

## El principio

Las plataformas optimizan hacia lo que pueden medir. Si lo que miden es un formulario, traerán formularios baratos, y lo que es barato de captar suele serlo porque el interés es superficial. Esta auditoría mide contra el negocio, no contra la plataforma.

## Qué necesitas

1. **Export de campañas** de los últimos tres a seis meses: campaña, gasto, clics, conversiones y coste por conversión.
2. **Datos del CRM** del mismo periodo: leads por origen o campaña, oportunidades cualificadas, negocios ganados e importe.
3. **Ciclo de venta medio** aproximado y **ticket medio**.

Hace falta histórico de al menos un ciclo de venta completo. Si el ciclo es de seis meses y solo hay dos de datos, dilo: la lectura de rentabilidad todavía no es posible.

Si no hay datos del CRM, dilo en la primera línea del informe. Sin ellos, la auditoría solo puede revisar el seguimiento y la estructura, no la rentabilidad.

## Paso 1. ¿El seguimiento es de fiar?

Antes de proponer ningún cambio de campaña:

- ¿Qué cuenta como conversión en cada plataforma? Lístalo. Si hay varias acciones marcadas como principales (visita a la página de gracias, clic en el teléfono, tiempo en página), las cifras están infladas.
- ¿Hay conversiones contadas dos veces, por ejemplo por etiqueta y por importación a la vez?
- ¿El origen del lead llega al CRM y se conserva? Tiene que haber un campo de primer origen y otro de último origen que no se sobrescriban.
- ¿Se devuelven a las plataformas eventos del CRM, como oportunidad creada o reunión celebrada?

Veredicto: **fiable**, **parcial** o **roto**. Si está roto, la primera recomendación es arreglarlo, y ninguna otra va delante.

## Paso 2. Del coste por lead al coste por oportunidad

Calcula por campaña y por canal:

- Coste por lead, que es lo que enseña la plataforma.
- Tasa de paso de lead a oportunidad cualificada.
- **Coste por oportunidad cualificada** = gasto / oportunidades cualificadas.
- Si hay datos: valor medio de contrato por canal y relación entre gasto e ingreso ganado.

Ordena las campañas por coste por oportunidad, no por coste por lead. Señala expresamente las que invierten el orden: baratas por lead y caras por oportunidad. Suelen ser justo las que la plataforma premia.

**Ciclos largos: lee por cohortes.** Agrupa los leads por mes de entrada y sigue qué ha pasado con cada grupo. Nunca compares el gasto de este mes con los cierres de este mes, porque pertenecen a meses distintos.

Si una campaña tiene menos de diez oportunidades en el periodo, no saques conclusiones de su tasa: márcala como "sin datos suficientes".

## Paso 3. Desperdicio

**Google Ads**

- Términos de búsqueda de empleo, formación o gratuidad: "trabajo", "sueldo", "curso", "gratis", "qué es".
- Concordancia amplia sin lista de palabras negativas.
- Campañas que pujan entre sí por las mismas búsquedas.
- Ubicaciones de Display o Performance Max con clics y sin oportunidades.

**Meta Ads**

- Audiencias B2B definidas solo por intereses genéricos.
- Formularios instantáneos sin ninguna pregunta que cualifique: volumen barato y calidad baja.
- Frecuencia muy alta sobre audiencias pequeñas.

**LinkedIn Ads**

- Segmentación por sector sin cargo ni antigüedad, o tan estrecha que la campaña no puede aprender.
- Audience Network activado sin revisar dónde se muestra.
- Formularios de lead gen con los campos precargados y sin pregunta de cualificación.

Cuantifica el desperdicio en euros siempre que los datos lo permitan.

## Paso 4. ¿Hacia qué optimiza la plataforma?

Si la plataforma optimiza hacia leads y el ciclo es largo, propón un evento intermedio que ocurra con frecuencia razonable y que correlacione con el cierre: reunión celebrada u oportunidad creada, enviado desde el CRM.

Avisa del límite: si el evento elegido es demasiado raro, la plataforma no tiene datos para aprender. Hay que buscar el punto entre frecuencia y relación con el cierre.

## Paso 5. Prioridades

Un máximo de cinco acciones, ordenadas por impacto y facilidad. Para cada una:

- Qué hacer.
- Por qué, con el dato que lo justifica.
- Cómo se sabrá si ha funcionado.
- En cuánto tiempo se podrá leer el resultado.

## Formato de salida

1. **Resumen** en cinco líneas: fiabilidad del seguimiento, la campaña que más aporta por oportunidad, la que más desperdicia, el desperdicio estimado y la acción número uno.
2. **Tabla por campaña**: gasto, leads, coste por lead, oportunidades, coste por oportunidad y veredicto (mantener, arreglar, cortar o sin datos suficientes).
3. **Hallazgos de seguimiento**.
4. **Desperdicio detectado**.
5. **Las cinco acciones**.
6. **Límites del análisis**.

## Lo que no hay que hacer

- No propongas cambiar pujas ni presupuestos antes de validar el seguimiento.
- No juzgues campañas por coste por lead si hay datos del CRM.
- No inventes referencias de CTR, CPC o conversión por sector.
- No atribuyas un cierre a una campaña por último clic sin decir que es último clic: en B2B el canal que descubre y el que cierra suelen ser distintos.
