---
title: "Lead scoring: cómo montarlo sin sobreingeniería"
description: "Por qué la mayoría de sistemas de puntuación de leads no se usan, y una versión simple de dos ejes que sí sobrevive al primer trimestre."
pubDate: 2026-09-15
author: "Philippe Saint-Hubert"
cluster: "revops"
tags: ["RevOps", "leads", "CRM", "ventas"]
---

Casi todos los sistemas de puntuación de leads que nos encontramos están abandonados. Se montaron con veinte reglas, nadie entiende de dónde sale el número, ventas no se lo cree y acaba ignorándolo.

El problema no es la idea. Es que se monta demasiado complejo para lo que hace falta.

## Los dos ejes

La simplificación que funciona: puntuar por separado dos cosas que casi todo el mundo mezcla en un solo número.

**Encaje.** ¿Es el tipo de empresa a la que vendemos? Sector, tamaño, modelo. Es estable y cambia poco.

**Intención.** ¿Da señales de estar buscando ahora? Ha pedido precio, ha vuelto tres veces a la web, ha abierto varios correos, ha visto la página de pricing.

Mezclarlos produce números sin sentido: un lead con encaje perfecto y cero intención suma lo mismo que uno con intención alta y encaje malo, y son casos completamente distintos que piden acciones distintas.

Con dos ejes tienes cuatro cuadrantes y cada uno tiene una acción obvia:

- **Encaje alto, intención alta**: contacto inmediato. Es todo lo que hay.
- **Encaje alto, intención baja**: nutrir. Volverán, y hay que existir cuando lo hagan.
- **Encaje bajo, intención alta**: mirar por si acaso. Puede ser un caso que no habías previsto.
- **Encaje bajo, intención baja**: fuera.

## Cuántas reglas

**Entre tres y cinco por eje.** Si necesitas más, es que no sabes cuáles predicen y estás cubriéndote.

Y las reglas tienen que salir de tus datos, no de una plantilla. El método: coge las oportunidades del último año, mira qué tenían en común las que cerraron y qué tenían las que no. Ahí están tus reglas. [Es el mismo ejercicio que define el perfil de cliente ideal](/blog/definir-icp-b2b).

## El error de puntuar con datos que no tienes

Si tu formulario pide tres campos, no puedes puntuar presupuesto ni urgencia. Y sin embargo se define la regla igualmente, se queda siempre en cero y nadie lo revisa.

Antes de definir cada regla, comprueba que el dato existe y está relleno en la mayoría de registros. Un campo vacío en el 40 % de los casos no sirve para puntuar nada.

## Cómo validar que funciona

La prueba es simple y casi nadie la hace: **¿los leads con puntuación alta cierran más que la media?**

Aplica la puntuación hacia atrás sobre las oportunidades del último año y compara tasas de cierre por tramo. Si el tramo alto no cierra claramente mejor que el bajo, tu puntuación no está midiendo nada y es peor que no tenerla, porque genera confianza falsa.

Repite esta comprobación cada seis meses. Los modelos envejecen.

## Que ventas se lo crea

Un sistema que ventas ignora no existe, por muy bien montado que esté. Tres cosas ayudan:

**Que se entienda.** Si un comercial no puede explicar por qué un lead tiene 80 puntos, no va a confiar. Prefiere reglas simples y transparentes a un modelo opaco que acierta algo más.

**Que ventas participe en definirlo.** Media hora con quien cualifica a diario vale más que un análisis en solitario.

**Que haya vuelta.** Que ventas pueda marcar "esto estaba mal puntuado" y que alguien lo mire. Sin ese circuito, el sistema no mejora nunca.

## Cuándo no montarlo

Si recibes pocos leads al mes, no lo montes. Que los mire una persona. La puntuación resuelve un problema de volumen, y sin volumen solo añade una cosa más que mantener.

Y si tu problema real es que tardas un día en responder, arregla eso primero. [Suele valer más que cualquier puntuación](/blog/senales-crm-frena-ventas).

## Preguntas rápidas

**¿Puntuación numérica o categorías?**
Categorías, del tipo A, B y C por eje. Los números invitan a una precisión que no tienes.

**¿Y el scoring con IA?**
Puede afinar si tienes muchos datos históricos limpios. Con pocos, ajusta al ruido. Y pierdes transparencia, que es justo lo que hace que ventas confíe. [Sobre agentes que califican](/blog/agente-para-calificar-leads).

**¿Cada cuánto se revisa?**
Semestral, o cuando cambie el producto o el precio.

**¿Sirve para outbound?**
El eje de encaje sí, es prácticamente el perfil de cliente. El de intención se sustituye por señales.

## Cómo lo hacemos

Dos ejes, pocas reglas sacadas de tus datos reales, y la validación hacia atrás antes de ponerlo en producción. Y una conversación con quien cualifica a diario, que suele cambiar la mitad de las reglas que salían del análisis.

Es parte de [RevOps y CRM](/servicios/revops-crm). [Media hora y lo montamos con tus números](/#contacto).
