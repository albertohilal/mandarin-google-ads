# Radar de competidores por Estadísticas de subasta

## Propósito

Convertir la percepción competitiva del cliente en evidencia objetiva basada en Google Ads.

El objetivo es detectar qué dominios participan en las mismas subastas que Mandarin, medir si `mavatec.com.ar` aparece realmente como competidor publicitario y descubrir otros anunciantes relevantes que puedan estar compitiendo por las mismas búsquedas.

## Fuente de datos

- Google Ads
- Estadísticas de subasta
- Exportación manual desde campaña, grupo de anuncios o keyword
- Período recomendado inicial: semanal

## Preguntas que responde

1. ¿Qué dominios compiten en las mismas subastas que Mandarin?
2. ¿Aparece `mavatec.com.ar`?
3. ¿Con qué frecuencia aparece?
4. ¿Aparece por encima o por debajo de Mandarin?
5. ¿Qué competidores no estaban identificados previamente?

## Métricas principales

- Impression share
- Overlap rate
- Position above rate
- Outranking share
- Top of page rate
- Absolute top of page rate

## Competidores observados

### Competidor prioritario

- mavatec.com.ar

### Competidores descubiertos

A completar automáticamente o manualmente a partir de cada exportación.

## Criterios de lectura

- Un dominio con alto `Overlap rate` compite frecuentemente contra Mandarin.
- Un dominio con alto `Position above rate` suele aparecer por encima de Mandarin cuando ambos participan.
- Un dominio con bajo `Outranking share` frente a Mandarin puede representar una amenaza de visibilidad.
- Un dominio nuevo que aparece en varias semanas consecutivas debe agregarse al radar competitivo.

## Limitaciones

Las Estadísticas de subasta no muestran inversión del competidor, keywords exactas del competidor ni estrategia publicitaria completa. Solo muestran participación relativa en las mismas subastas donde Mandarin fue elegible o tuvo actividad suficiente.

## Salida esperada

Cada exportación debe generar un reporte con:

- dominios detectados;
- estado de `mavatec.com.ar`;
- competidores nuevos;
- competidores recurrentes;
- alertas por pérdida de posición;
- acciones sugeridas.

Próximo paso concreto

El desarrollo debería avanzar así:

Crear docs/02_estrategia/radar_competidores_auction_insights.md.
Crear carpeta data/auction_insights/.
Hacer una primera exportación manual desde Google Ads.
Guardar el CSV crudo sin editar.
Procesarlo para generar un reporte Markdown.
Incorporar el bloque “Competencia detectada” en el reporte mensual.