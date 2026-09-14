---
name: diagnostico-crm
description: Diagnostica la salud de un CRM B2B (HubSpot, Pipedrive, GoHighLevel, Salesforce u otro) a partir de exports de oportunidades y contactos. Revisa si las etapas describen al cliente o al comercial, si el origen de cada negocio se conserva, cuánto se tarda en atender un lead, cuántas oportunidades están paradas, duplicados y campos vacíos, y propone un lead scoring simple por encaje e intención. Úsala cuando pidan auditar un CRM, limpiar el pipeline, entender por qué el forecast no se cumple, montar lead scoring, revisar la atribución dentro del CRM o preparar una migración.
metadata:
  author: Scale It
  version: "1.0"
  source: https://www.growth-scaleit.com/blog/skill-crm-revops-para-ia
---

# Diagnóstico de CRM

## El principio

Un CRM falla antes por el proceso que por la herramienta. Migrar el mismo proceso roto a otro CRM da el mismo problema con otra factura y seis meses perdidos. Esta skill mira datos, no opiniones.

## Qué necesitas

1. **Export de oportunidades**, idealmente de los últimos 12 meses: nombre, etapa, importe, fecha de creación, fecha de cierre, fecha del último cambio de etapa, propietario, origen y motivo de pérdida.
2. **Export de contactos o leads**: fecha de creación, origen (primero y último si existen), fecha del primer contacto comercial, propietario y estado.
3. **Lista de etapas** del pipeline con lo que el equipo cree que significa cada una.

Si solo tienes una parte, trabaja con ella y marca qué conclusiones no se pueden sacar.

Trabaja con el mínimo de datos personales. Si el export trae correos o teléfonos, no los repitas en la respuesta.

## Proceso: seis comprobaciones

### 1. Etapas: ¿describen al cliente o al comercial?

"Propuesta enviada" es una acción del vendedor y no dice nada sobre la probabilidad de cerrar. "Presupuesto confirmado por el comprador" sí lo dice. Para cada etapa, pregúntate si tiene un criterio de entrada que se pueda verificar. Reescribe las que no.

Calcula la conversión entre etapas y el tiempo medio en cada una. La etapa donde se amontonan las oportunidades suele ser la que está mal definida.

### 2. Oportunidades paradas

Cuenta las oportunidades abiertas sin cambio de etapa en más del doble del tiempo medio de su etapa. Si no hay histórico para calcularlo, usa 60 días como referencia y dilo.

Da tres cifras: cuántas son, qué importe suman y qué porcentaje del pipeline abierto representan. Ese porcentaje es cuánto está inflado el forecast.

### 3. Origen

- ¿Qué porcentaje de oportunidades tiene el origen informado?
- ¿Existen primer origen y último origen en campos separados que no se sobrescriben?
- ¿Aparecen valores sin información ("Otros", "Offline", "Importación", vacío) en más del 20 % de los casos?

Sin un origen fiable no se puede decidir el presupuesto por canal. Dilo así si es el caso.

### 4. Velocidad de respuesta

Tiempo desde que se crea el lead hasta el primer contacto comercial: mediana y percentil 90, separado por origen. Señala si los leads de formulario esperan horas o días.

### 5. Higiene

- Duplicados probables: mismo dominio de empresa, nombres casi iguales.
- Campos importantes vacíos.
- Propietarios que ya no están en la empresa.
- Motivos de pérdida vacíos, o casi todos "Precio", que suele significar que nadie preguntó.

### 6. Uso real

Busca pistas de que el equipo trabaja fuera del CRM: actividad concentrada en un solo día de la semana, cambios de etapa en bloque, oportunidades creadas ya en etapas avanzadas o informes que el usuario dice que se hacen en hojas de cálculo. Un Excel paralelo es la señal más clara de que el CRM no le sirve a quien vende.

## Lead scoring

Hazlo si lo piden o si no existe ninguno.

Dos ejes separados, nunca uno solo:

- **Encaje**: ¿es el tipo de empresa que compra? Sector, tamaño, país, cargo.
- **Intención**: ¿está en momento de comprar? Visitas a la página de precios, formulario de contacto, respuesta a outbound, una señal externa.

Entre tres y cinco reglas por eje. Cada regla tiene que poder comprobarse con datos que el CRM ya tiene; si necesita un dato que no existe, se descarta.

Qué hacer con cada combinación:

| Encaje | Intención | Acción |
|---|---|---|
| Alto | Alta | Contacto inmediato |
| Alto | Baja | Nutrir, volverá |
| Bajo | Alta | Revisar a mano por si es un caso no previsto |
| Bajo | Baja | Fuera |

Validación: con el histórico, comprueba si los leads que habrían puntuado alto cerraron más que la media. Si no, las reglas no predicen nada y hay que cambiarlas.

## Formato de salida

1. **Resumen** de cinco líneas con los tres problemas que más dinero cuestan.
2. **Tabla de las seis comprobaciones**: estado (bien, regular o mal), dato que lo demuestra e impacto.
3. **Etapas reescritas**, cada una con su criterio de entrada.
4. **Lista de limpieza priorizada**: qué se arregla primero y qué se puede automatizar sin romper nada.
5. **Lead scoring propuesto**, si aplica.
6. **Lo que no se pudo comprobar** con los datos recibidos.

## Lo que no hay que hacer

- No recomiendes cambiar de CRM como primera medida.
- No propongas más campos obligatorios para arreglar datos malos: cada campo nuevo baja la adopción.
- No puntúes con datos que el CRM no tiene.
- No propongas una capa de IA sobre datos sucios: produce conclusiones malas más deprisa.
