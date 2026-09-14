---
title: "Skill de outbound para IA: secuencias que empiezan por la señal"
description: "La skill secuencia-outbound, completa y descargable: valida la señal, escribe el primer email y reparte los toques entre email y LinkedIn."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "outbound"
tags: ["skills", "outbound", "cold email", "LinkedIn", "Claude Code"]
---

Un modelo de lenguaje escribe un cold email en cuatro segundos. El problema es que escribe el mismo cold email para todo el mundo, y lo hace a la velocidad suficiente como para mandarlo a miles de personas antes de que alguien note que no funciona.

Las secuencias de outbound [casi nunca fallan por el copy](/blog/outbound-no-falla-por-el-copy). Fallan porque se escribe a gente que encaja en la descripción del cliente pero no tiene el problema ahora. Una IA sin criterio no arregla eso: lo multiplica.

Esta skill está hecha al revés. Lo primero que hace es negarse a escribir si no hay un motivo para hacerlo hoy.

## ¿Por qué convertir el outbound en una skill?

Una skill es un archivo `SKILL.md` con instrucciones que el modelo carga solo cuando la tarea encaja. Lo que aporta en outbound es muy concreto: que el criterio no dependa de quién escribe. La persona que entró la semana pasada y la que lleva tres años aplican la misma prueba a la señal, la misma estructura al primer email y el mismo reparto de toques.

Y como es un [estándar abierto](https://agentskills.io/specification), no te ata a una herramienta. El mismo archivo funciona en Claude, Codex, ChatGPT, Gemini CLI, Cursor y GitHub Copilot.

## ¿Qué hace la skill secuencia-outbound?

Recibe cuatro cosas: la empresa y la persona, la señal con su fecha, qué vendes con una prueba real, y el idioma. Devuelve la frase que justifica escribir hoy, la secuencia completa en una tabla con cada mensaje redactado, dos variantes del primer email y la lista de lo que hay que verificar antes de enviar.

No envía nada. Prepara mensajes para que una persona los revise.

## ¿Por qué se niega a escribir sin señal?

Porque sin señal no hay secuencia: hay spam con buena redacción. La skill aplica lo que llamamos la prueba de la frase. Tiene que escribir, en una sola frase, por qué se escribe a esa empresa hoy, y después contestar tres preguntas:

- ¿Esa frase valdría igual para otras quinientas empresas?
- ¿La señal es reciente?
- ¿Conecta con lo que vendes?

Si falla cualquiera, devuelve "Señal insuficiente", explica por qué y sugiere qué señal sí serviría. No redacta ni una línea.

Parece una restricción y es la instrucción que más resultados da. Si construyes la lista [con señales de verdad](/blog/lista-prospeccion-con-senales), la personalización sale casi gratis, porque ya sabes por qué escribes a esa persona. Si la construyes filtrando por cargo y tamaño, ninguna redacción la va a salvar.

## ¿Qué señales pesan más?

La skill ordena las señales de B2B de más a menos fiables. Arriba del todo está la contratación del puesto que se ocupa del problema, porque nadie abre una vacante por capricho: hay presupuesto y hay prioridad.

Dentro de esa señal hay un matiz que aprendimos montando nuestro propio recolector de ofertas de empleo, y que la skill incorpora. Una oferta recién publicada dice que la empresa contrata. Una oferta con más de treinta días abierta, o que se ha vuelto a publicar, dice otra cosa: que no consiguen contratar. Ahí una ayuda externa deja de ser la competencia de esa contratación y pasa a ser la alternativa.

Después vienen las obligaciones normativas con fecha, los cambios de responsable, las publicaciones de la propia persona hablando del problema, la financiación y los cambios tecnológicos. La financiación está baja a propósito: sirve, pero cuando cierras una ronda te escriben treinta proveedores la misma semana.

## ¿Por qué el primer email busca una respuesta y no una reunión?

Porque una conversación abierta se puede llevar a una reunión y un silencio no. "Cuéntame más" o incluso "ahora no" cuentan como éxito. La skill construye el [primer email](/blog/primer-email-que-se-contesta) con cuatro piezas y menos de noventa palabras:

1. Una línea que demuestra que has mirado: el hecho concreto, con fecha.
2. Una frase sobre el problema que suele haber en esa situación, sin presentarte.
3. Una prueba corta: con quién y qué pasó.
4. Una pregunta que se contesta en una línea.

Un ejemplo con una empresa y una persona inventadas, dejando la prueba como hueco porque tiene que ser tuya:

> **Asunto:** la oferta de marketing
>
> Hola Marta, he visto que la oferta de responsable de marketing que publicasteis a finales de julio sigue abierta. Cuando un puesto así tarda en cubrirse, lo habitual es que la captación se quede parada justo mientras tanto. [Prueba real: con quién os pasó algo parecido y qué hicisteis.] ¿Lo estáis cubriendo solo con la contratación o también mirando apoyo externo mientras tanto?

Lo que la skill quita siempre: la presentación de la empresa al principio, la segunda pregunta, el enlace al calendario, los adjuntos y cualquier "espero que estés bien".

## ¿Cuántos toques y en qué orden?

Entre seis y diez, repartidos en tres o cuatro semanas. Menos de cuatro deja fuera a quien simplemente no vio el primero. Más de diez apenas suma respuestas y sí suma riesgo de acabar en spam. Lo explicamos a fondo en [cuántos toques hacen falta antes de rendirse](/blog/cuantos-toques-en-outbound).

Pero el número importa menos que la regla que la skill aplica a cada mensaje: **cada toque aporta algo nuevo**. Un ángulo distinto, una prueba, un recurso útil aunque no contesten, una pregunta más fácil o un cambio de canal. "Solo quería confirmar que recibiste mi correo" está expresamente prohibido.

El reparto entre canales sigue [cómo combinamos LinkedIn y email](/blog/linkedin-y-email-combinados): visita al perfil antes de escribir, el grueso por correo, solicitud de conexión después del segundo correo sin respuesta y nunca el mismo mensaje en los dos canales el mismo día. LinkedIn da contexto, no volumen.

Y el cierre. El último mensaje suele ser el que más respuestas produce de toda la secuencia, porque quita presión: dices que dejas de escribir y preguntas si no es tema o no es momento. La skill lo redacta sin dramatismo y marca la cuenta para volver en tres o cuatro meses con una señal nueva.

## ¿Por qué no envía nada?

Por dos razones. La primera es de criterio: un mensaje que sale con un dato equivocado sobre la empresa quema esa cuenta para siempre, y la revisión humana cuesta treinta segundos por mensaje.

La segunda es técnica. El outbound no sale del dominio principal de la empresa, sino de [dominios secundarios calentados durante dos o tres semanas](/blog/entregabilidad-email-frio). Si la skill detecta que eso no está montado, lo avisa antes de escribir la secuencia. Mandar mensajes perfectos desde una infraestructura rota es la forma más rápida de que nadie los lea.

## La skill completa

**Descargar:** [SKILL.md](/skills/secuencia-outbound/SKILL.md) · [secuencia-outbound.zip](/skills/secuencia-outbound.zip), para subirla a la app de Claude.

````markdown
---
name: secuencia-outbound
description: Diseña una secuencia de outbound B2B por email y LinkedIn para una cuenta concreta a partir de la señal por la que se le escribe hoy. Primero comprueba que la señal basta; después redacta un primer email corto que busca una respuesta y no una reunión, reparte entre seis y diez toques en tres o cuatro semanas con algo nuevo en cada uno, y cierra con un último mensaje honesto. Úsala cuando pidan escribir un cold email, una secuencia de prospección, mensajes de LinkedIn para prospectos o follow-ups, o convertir una lista de cuentas con señales en mensajes listos para revisar.
metadata:
  author: Scale It
  version: "1.0"
  source: https://www.growth-scaleit.com/blog/skill-outbound-para-ia
---

# Secuencia de outbound con señal

## El principio

Las secuencias de outbound casi nunca fallan por el copy. Fallan porque se escribe a gente que encaja en la descripción del cliente pero no tiene el problema ahora. Por eso esta skill no redacta nada hasta comprobar que hay un motivo para escribir hoy.

Esta skill prepara mensajes para que una persona los revise. No los envía.

## Qué necesitas

1. Empresa y persona: nombre, cargo y URL de LinkedIn si la hay.
2. La señal: qué ha pasado y cuándo, con fecha.
3. Qué vendes, en una frase, y una prueba real: un cliente, un resultado o un dato. Si no hay prueba, dilo y trabaja sin ella. No la inventes.
4. Idioma, país y si se trata de tú o de usted.

## Paso 1. La prueba de la frase

Escribe en una sola frase por qué se escribe a esta empresa hoy. Después evalúala:

- ¿Vale igual para otras quinientas empresas? Entonces la señal no basta.
- ¿Es reciente? Una señal de hace seis meses ya no es un motivo.
- ¿Conecta con lo que se vende? Una ronda de financiación no dice nada si el producto no se compra con dinero nuevo.

Si falla cualquiera de las tres, devuelve "Señal insuficiente", explica por qué y sugiere qué señal sí serviría para esa cuenta. No escribas mensajes.

Señales en B2B, de más a menos fiables:

1. **Contratación** del puesto que se ocupa del problema. Nadie abre una vacante por capricho. Si la oferta lleva más de 30 días abierta o se ha vuelto a publicar, no consiguen cubrirla, y la ayuda externa pasa a ser la alternativa.
2. **Obligación normativa** con fecha límite.
3. **Cambio de responsable** en el área que compra.
4. **Una publicación** de la persona hablando del problema o pidiendo recomendaciones.
5. **Financiación**. Sirve, pero está saturada: llegas a la vez que otros treinta.
6. **Cambio tecnológico** visible en su web o en sus ofertas de empleo.

## Paso 2. El primer email

El objetivo es una respuesta, no una reunión. "Cuéntame más" o "ahora no" cuentan como éxito, porque una conversación abierta se puede llevar a una reunión y un silencio no.

Cuatro piezas y menos de 90 palabras:

1. **Una línea que demuestra que has mirado**: el hecho concreto, con fecha. Si esa línea valdría para otra empresa, no sirve.
2. **Una frase sobre el problema** que suele haber en esa situación. Sin presentarte todavía.
3. **Una prueba corta**: con quién y qué pasó. Un dato vale más que tres adjetivos.
4. **Una pregunta que se contesta en una línea**. "¿Lo estáis llevando con equipo interno o con alguien de fuera?" se contesta. "¿Tienes 30 minutos el martes?" no.

Asunto: de dos a cinco palabras, en minúscula, que podría haber escrito un colega.

Quita siempre: la presentación de la empresa al principio, más de una pregunta, el enlace al calendario, adjuntos, imágenes, "espero que estés bien" y los superlativos.

## Paso 3. La secuencia

Entre seis y diez toques repartidos en tres o cuatro semanas, combinando correo y LinkedIn. Con menos de cuatro se queda fuera quien no vio el primero. Por encima de diez, las respuestas apenas suben y el riesgo de acabar en spam sí.

**Cada toque aporta algo nuevo.** Si no se te ocurren seis cosas que aportar, la secuencia no tiene seis toques. Un toque puede aportar:

- Un ángulo distinto del problema.
- Una prueba o un caso concreto.
- Un recurso que sirva aunque no contesten.
- Una pregunta más fácil de contestar que la anterior.
- Un cambio de canal.

Prohibido: "solo quería confirmar que recibiste mi correo". Eso no es un toque, es ruido.

**Espaciado**: dos o tres días entre los primeros toques y una semana entre los últimos. Si alguien no ha reaccionado a los tres primeros, el problema no es que no los viera. Es el momento, y el momento cambia en semanas, no en días.

**Reparto entre canales**:

- Antes del primer correo, visitar el perfil de LinkedIn.
- El grueso de la secuencia va por correo.
- Después del segundo correo sin respuesta, solicitud de conexión en LinkedIn.
- Nunca el mismo mensaje en los dos canales el mismo día.
- LinkedIn no es el canal de volumen: sus límites de actividad son estrictos y forzarlos cuesta la cuenta.

Plantilla de partida, que se ajusta a lo que haya que aportar:

| Día | Canal | Qué aporta |
|---|---|---|
| 0 | LinkedIn | Visita al perfil |
| 1 | Email | Primer email: señal, problema, prueba y pregunta |
| 3 | Email | Otro ángulo del problema |
| 6 | LinkedIn | Solicitud de conexión |
| 9 | Email | Prueba o caso concreto |
| 14 | Email | Recurso útil sin pedir nada |
| 17 | LinkedIn | Mensaje corto con otra pregunta, si aceptó |
| 24 | Email | Cierre |

## Paso 4. El cierre

El último mensaje suele ser el que más respuestas produce de toda la secuencia. Funciona porque quita la presión: dices que dejas de escribir y preguntas si no es tema o no es momento.

Si dices que es el último, que lo sea. Nada de cierres pasivo agresivos ni de falsos últimos avisos.

Después del cierre, marca la cuenta para volver en tres o cuatro meses, mejor con una señal nueva. En ciclos de venta largos, un "ahora no" es a menudo un sí meses después, si sigues existiendo para esa persona.

## Formato de salida

1. **La frase de la señal** y el veredicto: suficiente o insuficiente.
2. **La secuencia** en tabla: día, canal, asunto si es email, y el texto completo de cada mensaje.
3. **Dos variantes del primer email** para probar. Tienen que cambiar el ángulo, no solo las palabras.
4. **Qué revisar antes de enviar**: datos por verificar y afirmaciones que dependen de la prueba.

## Antes de entregar, comprueba

- ¿El primer email solo tiene sentido para esta empresa?
- ¿Cada toque aporta algo que el anterior no tenía?
- ¿Hay una sola pregunta por mensaje?
- ¿Todo lo que se afirma sobre la empresa está en la información recibida?

## Lo que no hay que hacer

- No inventes hechos sobre la empresa, clientes ni resultados.
- No escribas sin una señal que pase la prueba de la frase.
- No propongas enviar desde el dominio principal de la empresa. El outbound sale de dominios secundarios calentados durante dos o tres semanas; si no están montados, avísalo antes que nada.
- No envíes nada. La revisión humana va antes de cada mensaje.
````

## ¿Cómo se instala en cada herramienta?

### Instalación en un comando (Mac y Linux)

Este comando la deja en `~/.agents/skills`, la carpeta compartida que leen Codex, Gemini CLI, Cursor y GitHub Copilot, y copia la misma carpeta a la de Claude Code, que es la única que no lee la compartida:

```bash
mkdir -p ~/.agents/skills/secuencia-outbound ~/.claude/skills
curl -fsSL https://www.growth-scaleit.com/skills/secuencia-outbound/SKILL.md -o ~/.agents/skills/secuencia-outbound/SKILL.md
cp -R ~/.agents/skills/secuencia-outbound ~/.claude/skills/
```

En Windows, descarga el [.zip](/skills/secuencia-outbound.zip) y descomprímelo dentro de la carpeta de skills de tu herramienta. Tiene que quedar una carpeta `secuencia-outbound` con el `SKILL.md` dentro.

### Dónde va en cada herramienta

| Herramienta | Dónde se instala | Cómo se usa | Paso a paso |
|---|---|---|---|
| Claude Code | `~/.claude/skills/secuencia-outbound/` | Sola, o escribiendo `/secuencia-outbound` | [guía](/blog/skills-en-claude) |
| Claude (web y escritorio) | Subiendo el .zip en Customize, Skills | Sola cuando la tarea encaja | [guía](/blog/skills-en-claude) |
| Codex | `~/.agents/skills/secuencia-outbound/` | Sola, o escribiendo `$secuencia-outbound` | [guía](/blog/skills-en-codex) |
| ChatGPT | Pestaña Skills, o creándola con `@skill-creator` | Sola, o escribiendo `@secuencia-outbound` | [guía](/blog/skills-en-chatgpt) |
| Gemini CLI | `~/.gemini/skills/secuencia-outbound/` | Sola, tras pedirte permiso | [guía](/blog/skills-en-gemini) |
| Cursor | `~/.cursor/skills/secuencia-outbound/` | Sola, o escribiendo `/secuencia-outbound` | [guía](/blog/skills-en-cursor) |
| GitHub Copilot | `~/.copilot/skills/secuencia-outbound/` | Sola, o con `/secuencia-outbound` en VS Code | [guía](/blog/skills-en-github-copilot) |
| GLM | `~/.claude/skills/secuencia-outbound/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-glm) |
| DeepSeek | `~/.claude/skills/secuencia-outbound/`, dentro de Claude Code | Igual que en Claude Code | [guía](/blog/skills-en-deepseek) |

## ¿Cómo se usa con una lista entera?

Para una cuenta suelta basta con pegar los datos. Con una lista, lo que mejor funciona es trabajar en tandas pequeñas: una tabla con empresa, persona, cargo, señal y fecha, y la petición de preparar la secuencia de cada fila.

La skill descartará las filas cuya señal no pase la prueba, y eso es parte del resultado. Si de cuarenta cuentas descarta quince, tu lista tenía quince cuentas que te iban a costar reputación de dominio sin darte nada.

Nosotros la alimentamos con las señales que recoge nuestro propio sistema de ofertas de empleo y publicaciones, pero sirve cualquier fuente que dé una señal con fecha.

## ¿Qué conviene adaptar a tu empresa?

- **Tu prueba real.** Escribe en la skill dos o tres casos reales con resultado, para que no tenga que pedírtelos cada vez. Sin ellos, el tercer bloque del email queda como hueco.
- **Tus señales de sector.** Si vendes a industria, añade las que funcionan allí: ferias, certificaciones, ampliaciones de planta. Si vendes a despachos, cambios de socio o nuevas áreas de práctica.
- **Tu anti-ICP.** Añade las empresas a las que no quieres escribir aunque tengan señal. Se explica en [cómo definir tu ICP sin inventártelo](/blog/definir-icp-b2b).
- **Tu registro.** Tú o usted, y el vocabulario que usa tu comprador.

## Errores habituales al usarla

**Forzar la señal.** Si la skill dice que la señal no basta y la reescribes hasta que pase, estás haciendo trampas contra ti mismo.

**Rellenar la prueba con algo genérico.** "Hemos ayudado a muchas empresas como la tuya" no es una prueba. Si no tienes una, es mejor quitar ese bloque que inventarlo.

**Mandar las variantes a la vez.** Las dos variantes del primer email son para probar ángulos distintos en grupos distintos, no para mandar ambas a la misma persona.

**Saltarse la revisión porque "ha quedado muy bien".** Los errores caros en outbound son de datos, no de estilo, y no se ven leyendo en diagonal.

## Preguntas frecuentes

**¿Funciona para vender a LATAM?**
Sí. Indica país y registro en la petición. En varios países de LATAM el tratamiento de usted es más habitual en un primer contacto, y la skill lo aplica si se lo dices.

**¿Puede buscar la señal por mí?**
Si la herramienta tiene búsqueda web, puede ayudarte a encontrar ofertas o publicaciones de una empresa concreta. Pero la búsqueda sistemática de señales a escala es otro trabajo, que conviene hacer con un sistema aparte.

**¿Sirve para mensajes de LinkedIn sin email?**
Sí, aunque la secuencia se queda corta: LinkedIn tiene límites de actividad estrictos y no está pensado para volumen. Úsala para las cuentas donde más te importa acertar.

**¿Qué pasa si respondo a alguien que contestó?**
Esta skill cubre hasta el cierre de la secuencia. Una respuesta ya es una conversación y conviene llevarla una persona.

**¿Cuánto tarda en dar resultados una secuencia así?**
Contando infraestructura y calentamiento, las primeras reuniones suelen aparecer entre la cuarta y la sexta semana. Antes no hay nada que juzgar.

## Por dónde empezaríamos

Por la lista, no por los mensajes. Qué señales indican que tu cliente tiene el problema ahora, dónde se encuentran y qué cuentas descartas aunque encajen. Con eso, esta skill convierte cada señal en una secuencia que merece la pena revisar.

Es lo que hacemos en [outbound](/servicios/outbound). [Media hora y lo vemos](/#contacto).

## Toda la serie

**Las skills**, una por servicio:

- [SEO: brief-seo-b2b](/blog/skill-seo-para-ia)
- **Outbound: secuencia-outbound**
- [Influencers: seleccion-creadores](/blog/skill-influencers-para-ia)
- [Paid media: auditoria-paid-b2b](/blog/skill-paid-media-para-ia)
- [Agentes de IA: spec-agente-ia](/blog/skill-disenar-agentes-de-ia)
- [CRM y RevOps: diagnostico-crm](/blog/skill-crm-revops-para-ia)

**Cómo instalarlas**, una guía por herramienta:

[Claude](/blog/skills-en-claude) · [Codex](/blog/skills-en-codex) · [ChatGPT](/blog/skills-en-chatgpt) · [Gemini](/blog/skills-en-gemini) · [Cursor](/blog/skills-en-cursor) · [GitHub Copilot](/blog/skills-en-github-copilot) · [GLM](/blog/skills-en-glm) · [DeepSeek](/blog/skills-en-deepseek)
