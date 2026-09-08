# Bitácora de investigación — Auction Insights reales por keyword en Google Ads

**Proyecto:** El Mandarín — Google Ads
**Fecha:** 2026-09-06
**Estado:** Investigación técnica cerrada hasta Fase 2
**Objetivo:** Verificar si Google Ads Report Editor puede reproducir y exponer Auction Insights reales con granularidad por keyword criterion, como base para una automatización posterior.

---

## 1. Objetivo de la investigación

Se buscó determinar si los **Auction Insights reales de Google Ads** podían obtenerse de forma estructurada y automatizable, preservando granularidad por keyword, evitando depender de:

- Google Ads Scripts como extractor;
- Google Ads API pública;
- Playwright;
- endpoints privados/no documentados.

La prioridad fue verificar primero una vía nativa y soportada por Google.

---

## 2. Hipótesis iniciales

Antes de probar la cuenta real existían varias dudas:

1. Si Report Editor exponía Auction Insights a nivel keyword.
2. Si podía reproducir exactamente los mismos datos que la vista estándar de “Estadísticas de subasta”.
3. Si podía distinguir diferentes `KEYWORD_CRITERION` con el mismo texto pero distinto tipo de concordancia.
4. Si un único informe podía contener múltiples keywords y sus respectivos competidores.
5. Si Google Ads Scripts podía servir como extractor alternativo.

---

## 3. Documentación oficial consultada

### Auction Insights en Search
https://support.google.com/google-ads/answer/2579754

Google documenta Auction Insights para una o más:
- keywords;
- ad groups;
- campaigns.

También documenta las métricas y los umbrales mínimos de actividad.

### Report Editor — Auction insights search
https://support.google.com/google-ads/answer/14005836

El legacy mapping incluye explícitamente:

`Auction Insights > Search - Keyword`

### Navegación consolidada de Insights
https://support.google.com/google-ads/answer/13326985

Esta documentación enfatiza niveles:
- account;
- campaign;
- ad group;

sin explicitar keyword del mismo modo. Se registró esta diferencia como una ambigüedad documental que justificó la validación empírica.

### Google Ads Scripts — Reporting
https://developers.google.com/google-ads/scripts/docs/concepts/reports

Google Ads Scripts utiliza infraestructura basada en Google Ads API + GAQL.

### Google Ads API — keyword_view
https://developers.google.com/google-ads/api/fields/v25/keyword_view

La API documenta campos Auction Insights como:
- `segments.auction_insight_domain`
- métricas `auction_insight_*`

pero las métricas necesarias están marcadas como:

`This metric is not publicly available.`

**Conclusión:** Google Ads Scripts/API no debe utilizarse como extractor directo de Auction Insights reales.

---

## 4. Campaña utilizada en las pruebas

**Campaña:**
`Search | Leads | Tabiques Sanitarios | AR | Diario 10K`

**Campaign ID:**
`23669915226`

**Período de control:**
`2026-07-01` a `2026-07-31`

---

# FASE 1 — Reproducibilidad de la fuente

## 5. Ground truth

Se tomó como control el Auction Insights manual obtenido desde la vista estándar de Google Ads para:

- keyword text: `tabiques sanitarios`
- match type: `Concordancia de frase`
- período: julio 2026

Posteriormente se identificó:

`criterion_id = 317307330609`

---

## 6. Reconstrucción en Report Editor

En Report Editor se comprobó la existencia de la dimensión:

`Dominio de URL visible`

y de la categoría de métricas:

`Estadísticas de subasta`

con las seis métricas:

1. Porcentaje de impresiones de búsqueda
2. Porcentaje de ranking superior de búsqueda
3. Porcentaje de superposición de búsqueda
4. Porcentaje de posición superior
5. Porcentaje de parte superior de la página
6. Porcentaje absoluto en parte superior de la página

Se aplicaron filtros:

`keyword_text = tabiques sanitarios`

`match_type = Concordancia de frase`

---

## 7. Participantes obtenidos

Report Editor devolvió exactamente los mismos participantes del control:

- Usted
- easyboxdivisores.com
- hoff.design
- mavatec.com.ar
- mercadolibre.com.ar
- tabiquesymodulos.com.ar

---

## 8. Coincidencia cuantitativa

Los valores coincidieron con el Auction Insights manual.

### hoff.design
- Impression share: 78.40 %
- Outranking share: 49.38 %
- Overlap rate: 78.90 %
- Position above: 33.72 %
- Top of page: 75.20 %
- Absolute top: 19.29 %

### tabiquesymodulos.com.ar
- Impression share: 52.47 %
- Outranking share: 62.65 %
- Overlap rate: 46.79 %
- Position above: 14.71 %
- Top of page: 46.47 %
- Absolute top: 1.76 %

### mavatec.com.ar
- Impression share: 35.49 %
- Outranking share: 61.11 %
- Overlap rate: 35.78 %
- Position above: 25.64 %
- Top of page: 78.26 %
- Absolute top: 16.52 %

### mercadolibre.com.ar
- Impression share: 18.21 %
- Outranking share: 65.12 %
- Overlap rate: 20.64 %
- Position above: 15.56 %
- Top of page: 76.27 %
- Absolute top: 13.56 %

### easyboxdivisores.com
- Impression share: <10 %
- Outranking share: 63.89 %
- Overlap rate: 10.55 %
- Position above: 47.83 %
- Top of page: 61.29 %
- Absolute top: 38.71 %

### Usted
- Impression share: 67.28 %
- Top of page: 72.48 %
- Absolute top: 48.62 %

En la fila `Usted`, algunas métricas no aplicables aparecen como `—` en la vista estándar y como `0.00%` en Report Editor. Se considera una diferencia de representación, no un gap funcional.

---

## 9. Resultado de Fase 1

```text
PHASE_1_SOURCE_REPRODUCIBILITY = PASS

REPORT_EDITOR_DATA_MATCH = EQUIVALENT

REPORT_EDITOR_GAPS = [
  "La fila Usted representa algunas métricas no aplicables como 0.00% en Report Editor mientras la vista estándar utiliza —"
]

REPORT_EDITOR_GAPS_BLOCKING = NO
```

**Conclusión Fase 1:** Report Editor reproduce los Auction Insights reales.

---

# FASE 2 — Granularidad real por keyword criterion

## 10. Dimensiones disponibles

Se comprobó que Report Editor permite combinar simultáneamente:

- `Dominio de URL visible`
- `Palabra clave de la Búsqueda`
- `ID de palabra clave`
- `Tipo de concordancia`
- las seis métricas Auction Insights

Esto permite modelar cada registro como:

`KEYWORD_CRITERION × COMPETITOR`

---

## 11. Identidad del criterio validado

Para la keyword de frase:

```text
keyword_text = tabiques sanitarios
criterion_id = 317307330609
match_type   = Concordancia de frase
```

---

## 12. Prueba con múltiples criterios del mismo texto

Se eliminó el filtro de tipo de concordancia manteniendo:

`keyword_text = tabiques sanitarios`

Report Editor devolvió simultáneamente:

```text
305986106769 | tabiques sanitarios | Concordancia exacta
317307330609 | tabiques sanitarios | Concordancia de frase
```

Cada criterio mantuvo sus propios competidores y métricas.

Ejemplo para `hoff.design`:

### EXACTA
```text
criterion_id      = 305986106769
impression_share  = 73.75%
overlap_rate      = 73.25%
position_above    = 16.52%
```

### FRASE
```text
criterion_id      = 317307330609
impression_share  = 78.40%
overlap_rate      = 78.90%
position_above    = 33.72%
```

**Conclusión:** Google no agrega ambos criterios.

---

## 13. Prueba sin filtro de keyword

Se eliminó también el filtro:

`keyword_text = tabiques sanitarios`

El mismo Report Editor devolvió múltiples keywords de la campaña, cada una identificada por:

- keyword text;
- criterion ID;
- match type;
- competitor domain;
- seis métricas Auction Insights.

Ejemplos observados:

```text
boxes sanitarios
378326172903 | Concordancia de frase
1185482633923 | Concordancia exacta

divisiones sanitarias
308250599257 | Concordancia exacta
317307324929 | Concordancia de frase

paneles sanitarios
353656453099 | Concordancia exacta
356713619029 | Concordancia de frase

tabiques modulares
372338846597 | Concordancia exacta

tabiques para baños
531728189752 | Concordancia de frase
```

En julio de 2026 el informe mostró:

`1 - 50 de 80`

es decir, 80 filas de Auction Insights para los criteria elegibles de la campaña.

---

## 14. Resultado de Fase 2

```text
PHASE_2_KEYWORD_GRANULARITY = PASS

GRANULARITY_MODE = MULTI_KEYWORD_DIMENSION

KEYWORD_DIMENSION_AVAILABLE = YES
KEYWORD_CRITERION_ID_AVAILABLE = YES
MATCH_TYPE_DIMENSION_AVAILABLE = YES
MULTIPLE_KEYWORDS_IN_ONE_REPORT = YES
MULTIPLE_MATCH_TYPES_IN_ONE_REPORT = YES
COMPETITOR_DOMAIN_AVAILABLE = YES
AUCTION_INSIGHT_METRICS_AVAILABLE = YES
```

---

# 15. Esquema empírico resultante

La unidad mínima recomendada es:

`KEYWORD_CRITERION × COMPETITOR`

Campos comprobados:

```text
keyword_text
criterion_id
match_type
competitor_domain

auction_search_impression_share
auction_search_outranking_share
auction_search_overlap_rate
auction_position_above_rate
auction_top_of_page_rate
auction_absolute_top_of_page_rate
```

Principio:

**No agregar prematuramente** PHRASE, EXACT, distintas keywords ni distintos `criterion_id`.

---

# 16. reportState observado

La URL generada por Report Editor contiene un parámetro interno:

`reportState`

En el estado observado aparecen:

```text
DisplayUrlDomain
Keyword
ExternalCriterionId
KeywordMatchType

AISearchImpressionShare
SearchOutrankingShare
SearchOverlapRate
CompetitorAboveRate
PromotedRate
AbsoluteTopOfPageRate
```

Rango de fechas codificado:

```text
2026-07-01
2026-07-31
```

La campaña aparece externamente como:

```text
campaignId=23669915226
```

URL de evidencia:

https://ads.google.com/aw/reporteditor/view?campaignId=23669915226&ocid=7901508229&workspaceId=0&authuser=0&__u=5506310298&__c=3088331421&reportState=GukBCkYKEERpc3BsYXlVcmxEb21haW4KB0tleXdvcmQKE0V4dGVybmFsQ3JpdGVyaW9uSWQKEEtleXdvcmRNYXRjaFR5cGUYACAyCn0KF0FJU2VhcmNoSW1wcmVzc2lvblNoYXJlChVTZWFyY2hPdXRyYW5raW5nU2hhcmUKEVNlYXJjaE92ZXJsYXBSYXRlChNDb21wZXRpdG9yQWJvdmVSYXRlCgxQcm9tb3RlZFJhdGUKFUFic29sdXRlVG9wT2ZQYWdlUmF0ZSIcCBwSGAoKMjAyNi0wNy0wMRIKMjAyNi0wNy0zMUoCCAEiBBoCCAI%3D

**Clasificación:** observación técnica / detalle interno no documentado.

NO tratar `reportState` como API pública ni contrato estable.

---

# 17. Arquitectura candidata después de Fase 2

La evidencia actual favorece:

```text
Google Ads
  ↓
UN SOLO Report Editor
  ↓
todas las KEYWORD_CRITERION elegibles
  ↓
competitor domain
  ↓
6 métricas Auction Insights
  ↓
informe programado
  ↓
CSV
  ↓
ingesta
  ↓
RAW
  ↓
NORMALIZED
  ↓
ANALYTICS
  ↓
agente / informe
```

Esto vuelve innecesario, según la evidencia actual:

- un reporte por keyword;
- Playwright;
- Google Ads Scripts como extractor;
- APIs privadas.

La arquitectura final todavía no se declara cerrada porque falta Fase 3.

---

# 18. Estado pendiente — Fase 3

Todavía NO realizada.

Debe validar:

- guardar el informe;
- programación;
- frecuencia;
- formato;
- destinatarios;
- rango temporal relativo;
- comportamiento del período;
- nombre del attachment;
- contenido del CSV programado.

```text
SCHEDULED_REPORT_USABLE = NOT_TESTED
```

---

# 19. Estado general actual

```text
PHASE_1_SOURCE_REPRODUCIBILITY = PASS
REPORT_EDITOR_DATA_MATCH = EQUIVALENT
REPORT_EDITOR_GAPS_BLOCKING = NO

PHASE_2_KEYWORD_GRANULARITY = PASS
GRANULARITY_MODE = MULTI_KEYWORD_DIMENSION

SCHEDULED_REPORT_USABLE = NOT_TESTED
GOOGLE_SHEETS_ADDON_AVAILABLE = NOT_TESTED
GOOGLE_SHEETS_ADDON_HAS_AUCTION_INSIGHTS = NOT_TESTED
EMAIL_INGEST_OPERATIONALLY_VALIDATED = NOT_TESTED

SELECTED_ARCHITECTURE = UNDECIDED
```

---

# 20. Principio de datos

```text
RAW_SOURCE_IMMUTABLE = TRUE
```

Todo CSV producido por Google debe conservarse intacto.

Las transformaciones posteriores serán:

```text
RAW
→ NORMALIZED
→ ANALYTICS
```

---

## 21. Próximo paso

**Fase 3 — Programación del Report Editor.**

Antes de implementarla, esta bitácora debe quedar disponible para OpenCode como referencia histórica de la investigación y como evidencia de los gates ya cerrados.
