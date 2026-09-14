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
