---
title: "Cómo optimizar campañas de Google Ads en B2B: el orden correcto"
description: "El orden de revisión que más rinde por hora: medición, estructura, pujas, segmentación, anuncios y página de destino, con el umbral que indica problema en cada paso."
pubDate: 2026-11-20
author: "Philippe Saint-Hubert"
cluster: "paid"
tags: ["paid", "google ads", "optimización", "B2B"]
---

Se optimiza en este orden: medición y conversiones, estructura, pujas, segmentación, anuncios y página de destino. Y en B2B el cambio que más mueve el resultado no es la puja, es **qué conversión le das de comer al algoritmo**: si cuentas formularios, consigues formularios; si cuentas oportunidades cualificadas, empiezas a conseguir clientes.

Casi todas las listas de "25 acciones para optimizar Google Ads" empiezan por el CTR y las pujas. Eso es optimizar el final de la cadena mientras el principio está roto. Aquí va el orden inverso, con el sitio exacto donde se mira cada cosa y la señal que avisa de que hay un problema.

## ¿En qué orden hay que revisar una cuenta?

| Orden | Qué revisas | Señal de que hay problema | Cada cuánto |
|---|---|---|---|
| 1 | Medición y acciones de conversión | Más de una conversión principal contando lo mismo, o el diagnóstico de Conversiones mejoradas en "Requiere atención" | Mensual, y siempre tras tocar la web |
| 2 | Estructura y presupuestos | Estado "Limitada" por presupuesto en campañas que convierten | Mensual |
| 3 | Pujas | Menos de 30 conversiones al mes por estrategia | Cada 2 ciclos de conversión |
| 4 | Segmentación y términos de búsqueda | Gasto en términos sin intención de compra | Semanal |
| 5 | Anuncios y recursos | Recursos fijados que no se publican, texto que no dices tú | Mensual |
| 6 | Página de destino y formulario | Anuncio y página prometen cosas distintas | Trimestral |

Si solo tienes una hora al mes, gástala en los pasos 1 y 4.

## ¿Por qué la medición va antes que las pujas?

Porque Smart Bidding puja con lo que ve, y si lo que ve son formularios de gente que no te va a comprar nunca, optimizará para conseguir más de eso. Es la única parte de la cuenta en la que equivocarse multiplica el error en todo lo demás.

**Dónde mirar.** En Google Ads, icono de Objetivos, luego Resumen. Ahí está el estado de cada acción de conversión y la pestaña de Diagnóstico. El [informe de diagnóstico de Conversiones mejoradas de oportunidades de venta](https://support.google.com/google-ads/answer/15249267?hl=es) cubre las acciones de conversión que reciben datos de Conversiones mejoradas, no cualquier acción de conversión de la cuenta, y clasifica la configuración en cuatro niveles: Excelente, Buena, Requiere atención y Urgente. "Urgente" significa que la configuración no está activa, por ejemplo porque las etiquetas no se disparan. Google avisa en esa misma página de que la función está indicada sobre todo para anunciantes con al menos 20 conversiones semanales, contando las orgánicas.

**El cambio que de verdad importa en B2B.** Dejar de mandar solo el formulario web y empezar a devolver lo que pasó después. Con [Conversiones mejoradas de clientes potenciales](https://support.google.com/google-ads/answer/15713840?hl=es) subes la conversión offline con el identificador de clic y, además, el correo o el teléfono cifrados con hash, de forma que Google pueda casar esa venta con el clic que la originó aunque el rastro del navegador se haya perdido. Sobre el identificador de clic, la documentación es clara: los GCLID son obligatorios si no usas una etiqueta para recoger los datos que aportan los usuarios, y aunque la etiqueta los recoja de forma automática, Google pide seguir importando los GCLID que ya tengas para que las conversiones offline se atribuyan al clic correcto.

Dos avisos que están en la propia documentación y que conviene tener en el calendario:

- Desde el **15 de junio de 2026**, la importación de conversiones offline y las subidas de Conversiones mejoradas de clientes potenciales se trasladan a la API Data Manager y quedan bloqueadas en la API de Google Ads. Si tu integración con el CRM la montó alguien hace dos años y nadie la ha tocado, esto te afecta.
- Si migras de importación offline clásica a Conversiones mejoradas, Google recomienda dejar que se acumulen datos durante [uno o dos ciclos de conversión o cuatro semanas](https://support.google.com/google-ads/answer/14274408?hl=es) antes de desactivar la importación antigua; en el paso de poner la nueva acción como principal y la antigua como secundaria añade que se espere el periodo que sea más largo de los dos.

La parte técnica de todo esto, y cuándo compensa montarla, está en [por qué hacen falta las conversiones desde servidor en B2B](/blog/conversiones-desde-servidor-b2b).

## ¿Qué revisar en la estructura antes de tocar una puja?

Dos cosas, y las dos se ven en el mismo sitio: icono de Herramientas, Presupuestos y puja, Estrategias de puja.

**Los estados de la estrategia.** La columna Estado avisa de lo que te está frenando. [Google documenta](https://support.google.com/google-ads/answer/6263057?hl=es) un único estado "Limitada" con cuatro factores posibles (inventario, límites de puja, presupuesto y estrategia de puja) y, como estado aparte, el más caro de ignorar: "Configuración errónea (definición de conversiones)". Una campaña que convierte bien y aparece limitada por presupuesto es el dinero más fácil de la cuenta.

**La fragmentación.** En las recomendaciones del [estado Aprendiendo](https://support.google.com/google-ads/answer/13020501?hl=es), Google pide expresamente consolidar grupos de anuncios y campañas para agrupar los datos de conversión. En B2B, donde el volumen es bajo por definición, tres campañas con ocho conversiones al mes cada una rinden peor que una con veinticuatro. La tentación de separar por producto, sector y región a la vez es casi siempre un error de aritmética.

## ¿Cuándo hay que cambiar la estrategia de puja y cuándo no?

La regla de oro: no evalúes nada en periodos con pocas conversiones. Google recomienda medir el rendimiento en ventanas de [un mes o más con al menos 30 conversiones](https://support.google.com/google-ads/answer/7065882?hl=es), o 50 si usas ROAS objetivo. Por debajo de eso estás mirando ruido, y optimizar sobre ruido empeora la cuenta.

Sobre el periodo de aprendizaje circula mucha mitología. Los datos oficiales son estos:

- El estado Aprendiendo **nunca dura más de 7 días**.
- Lo activan tres cosas: una estrategia nueva o reactivada, añadir o quitar campañas, grupos de anuncios o palabras clave, y un cambio significativo de objetivo de conversión.
- **No** lo activan los cambios de presupuesto, de objetivo de CPA o ROAS, de creatividades ni de segmentación. Google pone un ejemplo explícito: pasar el ROAS objetivo del 500 % al 400 % se aplica en la siguiente subasta y no muestra estado Aprendiendo.
- Para juzgar un cambio, espera 2 ciclos de conversión o 2 semanas, el periodo que sea más largo.

Si quieres pujar por valor en lugar de por volumen, que es lo correcto cuando no todos los leads valen lo mismo, los requisitos son concretos: [dos o más valores de conversión distintos](https://support.google.com/google-ads/answer/15099424?hl=es), al menos 15 conversiones en los últimos 30 días para ROAS objetivo, latencia de menos de 7 días entre el clic y el registro de la conversión, y tres semanas o uno o dos ciclos subiendo valores antes de activar la estrategia. Google dice literalmente que no se repongan valores históricos con efecto retroactivo. Con ciclos de venta de seis meses, esa latencia de 7 días es el verdadero cuello de botella, y la solución pasa por optimizar a una fase intermedia del embudo en lugar de al contrato firmado.

## ¿Dónde está el desperdicio en segmentación?

**El informe de términos de búsqueda.** Está en Campañas, submenú Estadísticas e informes, Términos de búsqueda. Dos cosas que casi nadie sabe de ese informe: la columna "Palabra clave", que te dice qué keyword activó cada búsqueda, [no aparece por defecto](https://support.google.com/google-ads/answer/2472708?hl=es) y hay que añadirla desde el icono de columnas, en Atributos. Y los términos con poca actividad de consulta se omiten por motivos de privacidad, así que no estás viendo todo el gasto: la parte que falta aparece agrupada por subtemas en las estadísticas de términos de búsqueda, generadas con los datos de los últimos 56 días.

**La segmentación geográfica.** La opción por defecto es "Presencia o interés" porque [Google migró las campañas](https://support.google.com/google-ads/answer/1722038?hl=es) a ese valor y esa migración no se revierte: lo que desapareció fue la segmentación positiva solo por interés y las exclusiones por presencia o interés. La segmentación sí se puede cambiar, y "Presencia" sigue siendo una opción seleccionable. Antes de dejarla tal cual, fíjate en el dato que Google usa para defenderla: un 5 % más de conversiones en los verticales Viajes, Mercado inmobiliario y Educación, con datos internos del 21 de mayo al 1 de junio de 2022. No hay nada de B2B ahí. Si vendes solo en España y tu producto no se investiga desde fuera, cambiar a "Presencia" reduce impresiones a propósito, y eso es justo lo que quieres.

## ¿Qué hago con los anuncios ahora que IA Max viene activado?

Este es el cambio que más cuentas B2B ha descolocado en 2026, y conviene entenderlo antes de culpar a las pujas.

IA Max no es un tipo de campaña, es una capa de optimización dentro de las campañas de búsqueda, con tres ajustes: optimización de términos de búsqueda, personalización de texto y expansión de URL final. Las [campañas de búsqueda nuevas lo traen activado de forma predeterminada](https://support.google.com/google-ads/answer/15909989?hl=es). Tres consecuencias prácticas:

- **Tus recursos fijados dejan de respetarse.** Con la expansión de URL final activada, los recursos fijados de los anuncios adaptables de búsqueda no se usan si Google elige una URL más relevante. Si fijaste el título por una razón legal o de marca, revísalo.
- **Los controles existen, pero son desiguales.** Las exclusiones de marca van a nivel de campaña, las inclusiones también a nivel de grupo de anuncios, y las exclusiones de URL exigen tener activadas personalización de texto y URL final. Ojo con las reglas de tipo "La URL contiene": buscan palabras exactas, no subcadenas.
- **La expansión de URL final no se desactiva sola.** Depende de la personalización de texto: si apagas esta, aquella se inhabilita automáticamente.

Si tu cuenta empezó a traer tráfico raro sin que nadie cambiara palabras clave, mira primero el informe de términos de búsqueda y el de páginas de destino.

## ¿Qué ha cambiado en Google Ads en el último año?

Solo lo confirmado por fuente oficial:

| Cambio | Qué implica | Fuente |
|---|---|---|
| IA Max sale de beta y viene activado en campañas nuevas | Hay que auditar los tres ajustes en cada campaña nueva | [Blog de Google, 15 de abril de 2026](https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/) |
| Los anuncios dinámicos de búsqueda se migran a IA Max | La migración automática se retrasó a febrero de 2027; los recursos creados automáticamente y la concordancia amplia a nivel de campaña se migran desde septiembre de 2026 | Misma fuente, actualización del 11 de junio de 2026 |
| Cambio de nomenclatura de pujas | Desde junio de 2026, "Maximizar conversiones con un CPA objetivo" se llama "CPA objetivo", sin cambio de comportamiento | [Ayuda de Google Ads](https://support.google.com/google-ads/answer/7065882?hl=es) |
| Actualización de los sistemas de puja el 17 de agosto de 2026 | Busca un rendimiento más constante y predecible en campañas limitadas por el presupuesto, y puede provocar fluctuaciones temporales en campañas con CPA objetivo o ROAS objetivo | [Ayuda de Google Ads](https://support.google.com/google-ads/answer/6268632?hl=es) |
| Exploración de Smart Bidding, en beta | Exige ROAS objetivo, tolerancia del 5 % al 30 % y campañas no limitadas por presupuesto | [Ayuda de Google Ads](https://support.google.com/google-ads/answer/18743168?hl=es) |

Sobre las cifras de IA Max, merece la pena leer la letra pequeña: el 7 % que cita el blog de Google compara el paquete completo frente a usar solo la optimización de términos de búsqueda, con datos de 2026. Es una media de anunciantes no minoristas, no una promesa para tu cuenta.

## Los cinco errores que más se repiten en B2B

**Optimizar al formulario.** Es el error raíz. Mientras la conversión principal sea "formulario enviado", la cuenta tenderá a los leads más baratos, que en B2B son estudiantes, curiosos y gente buscando trabajo. Devuelve el lead cualificado desde el CRM.

**Juzgar por coste por lead.** Con ciclos largos, el CPL es un número que no sabe nada de ingresos. El razonamiento completo está en [por qué el CPL te engaña en ciclos de venta largos](/blog/cpl-enganoso-ciclos-largos).

**Tocar la cuenta cada día.** Con poco volumen, las variaciones diarias son ruido. Y como los cambios de objetivo no reinician el aprendizaje, la tentación de ajustar es constante y casi siempre contraproducente.

**Dejar la marca mezclada con el resto.** Las campañas que pujan por tu nombre tienen métricas magníficas y contaminan cualquier decisión de presupuesto.

**Usar Maximizar conversiones con presupuesto holgado.** Esa estrategia [está diseñada para gastar todo el presupuesto diario](https://support.google.com/google-ads/answer/7381968?hl=es), y Google avisa de que, si antes gastabas por debajo, el gasto puede subir bastante.

Si lo que tienes entre manos es una cuenta que llevaba años sin mantenimiento, el recorrido es distinto y está en [dónde mirar al auditar una cuenta de Google Ads heredada](/blog/auditar-cuenta-google-ads-heredada). Y si la medición depende de que el CRM y la plataforma se hablen, eso es trabajo de [RevOps y datos](/servicios/revops-crm) antes que de [paid](/servicios/paid).

## Preguntas frecuentes

**¿Cada cuánto hay que optimizar una cuenta de Google Ads en B2B?**
Términos de búsqueda, semanal. Pujas y estructura, cada dos ciclos de conversión. Medición, mensual y siempre después de cualquier cambio en la web. Más frecuencia que eso, con volumen B2B, es optimizar sobre ruido.

**¿Cuántas conversiones necesito para que Smart Bidding funcione?**
Depende de la estrategia: Google dice que algunas estrategias de Smart Bidding necesitan un historial de datos de conversión mínimo, que varía según el tipo de campaña, aunque también que se puede activar Smart Bidding sin datos previos. Lo que sí recomienda es medir el rendimiento en ventanas con al menos 30 conversiones, o 50 con ROAS objetivo. Si no llegas, el problema es de volumen, no de estrategia de puja.

**¿Conviene desactivar IA Max en campañas B2B?**
No por norma. Lo que no conviene es tenerlo activado sin saberlo, con expansión de URL final llevando tráfico a páginas que no elegiste. Revisa los tres ajustes, activa las exclusiones de marca y de URL, y pruébalo con un experimento antes de decidir.

**¿Puedo optimizar a la venta firmada en lugar de al lead?**
Solo si la latencia lo permite. Google recomienda menos de 7 días entre el clic y el registro de la conversión para pujar por valor, y advierte de que, con retrasos mayores, el periodo de adaptación puede durar varios meses. Con ciclos largos, lo práctico es optimizar a una fase intermedia, como oportunidad creada, y usar la venta solo para informar.

**¿Y si Google Ads y mi CRM no cuadran?**
No van a cuadrar nunca del todo, porque miden cosas distintas con ventanas distintas. Lo que se busca es coherencia de tendencia. Si la diferencia es estructural, revisa el diagnóstico de conversiones y si el origen del lead se está sobrescribiendo en el CRM.
