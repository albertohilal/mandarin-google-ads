# Auction Insights por Keyword — Mandarin

## Propósito

Fuente de verdad consolidada sobre la investigación empírica de Auction Insights a nivel keyword criterion en la cuenta de Google Ads de Mandarin. Documenta lo demostrado en Fases 1-2, el esquema de datos resultante, la arquitectura candidata y los asuntos pendientes (Fase 3). No es un reporte mensual; es un documento de investigación consolidado que los reportes operativos pueden consultar como referencia.

## Alcance

Campaña `Search | Leads | Tabiques Sanitarios | AR | Diario 10K` (ID: `23669915226`). Hallazgos aplicables a la granularidad por `KEYWORD_CRITERION × COMPETITOR`. No incluye implementación de automatizaciones, scripts, Playwright ni programación de informes.

## Estado

Vigente — documento de investigación consolidado. Consolida la metodología y los hallazgos empíricos de las Fases 1-2; no sustituye los reportes mensuales históricos, que continúan existiendo de forma independiente en `docs/06_reportes/`.

## Fecha de actualización

2026-09-06

---

## 1. Documentación oficial de Google

Google documenta Auction Insights para una o más de: keywords, ad groups, campaigns. Tres enlaces fueron relevantes en esta investigación:

### Auction Insights en Search
https://support.google.com/google-ads/answer/2579754

Google documenta Auction Insights para una o más de: keywords, ad groups, campaigns. También documenta las métricas de Auction Insights y los umbrales de disponibilidad.

### Report Editor / Auction Insights Search
https://support.google.com/google-ads/answer/14005836

El legacy mapping incluye: `Auction Insights > Search - Keyword`. Las pruebas empíricas se realizaron en la interfaz de Report Editor de la cuenta real de Mandarin, validando la reproducibilidad y granularidad por keyword criterion.

### Navegación consolidada de Insights
https://support.google.com/google-ads/answer/13326985

Esta documentación enfatiza: account, campaign, ad group; sin explicitar keyword de la misma manera. Se registró como ambigüedad documental que justificó las pruebas empíricas.

**Hallazgo:** La documentación oficial no especifica explícitamente que Auction Insights esté disponible por keyword criterion de la misma forma que por ad group o campaign. Las pruebas empíricas (Fase 2) confirmaron que sí está disponible, pero la documentación no lo deja claro por sí sola.

## 2. Resultados empíricos (Fases 1-2)

### Fase 1 — Reproducibilidad de Report Editor

**Objetivo:** Comprobar si Report Editor reproduce el mismo Auction Insights obtenido manualmente desde la vista estándar de Google Ads.

**Control utilizado:**
- Keyword: `tabiques sanitarios`
- Match type: `Concordancia de frase`
- Criterion ID: `317307330609`
- Período: `2026-07-01` a `2026-07-31`

**Resultado:** Report Editor reprodujo Auction Insights equivalente a la vista estándar. Las 6 métricas coincidieron cuantitativamente para todos los participantes (usted, easyboxdivisores.com, hoff.design, mavatec.com.ar, mercadolibre.com.ar, tabiquesymodulos.com.ar).

**Gap identificada:** Para la fila `Usted`, algunas métricas no aplicables aparecen como `—` en la pantalla estándar de Auction Insights y como `0.00%` en Report Editor. No se considera un gap bloqueante.

**Registros:**

```text
PHASE_1_SOURCE_REPRODUCIBILITY = PASS
REPORT_EDITOR_DATA_MATCH = EQUIVALENT
REPORT_EDITOR_GAPS = [
  "La fila Usted representa algunas métricas no aplicables como 0.00% en Report Editor mientras la vista estándar utiliza —"
]
REPORT_EDITOR_GAPS_BLOCKING = NO
```

### Fase 2 — Granularidad por keyword

**Objetivo:** Determinar si Report Editor conserva granularidad real por keyword criterion o agrega los Auction Insights.

**Hallazgos clave:**

- Report Editor permite combinar simultáneamente: dominio de URL visible, palabra clave de la búsqueda, ID de palabra clave, tipo de concordancia, las seis métricas Auction Insights.
- Para el criterio de frase (`criterion_id = 317307330609`), los valores de `hoff.design` son diferentes a los de concordancia exacta (`criterion_id = 305986106769`).
- Al eliminar el filtro de match type, Report Editor devolvió simultáneamente dos criterios diferentes (exacta y frase), cada uno con sus propios competidores y valores.
- Al eliminar también el filtro de keyword, el informe mostró 80 filas totales de Auction Insights para los criteria elegibles de la campaña (`1 - 50 de 80`).

**Registros:**

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

### Esquema empírico resultante

La unidad mínima documentada es: `KEYWORD_CRITERION × COMPETITOR`.

**Campos disponibles comprobados:**

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

**No se agregan prematuramente:** PHRASE, EXACT, distintas keywords, distintos criterion IDs. Una capa analítica futura podrá hacer agregaciones comerciales.

### Identificadores internos observados en reportState

La URL generada por Report Editor contiene un parámetro interno `reportState`. Se documenta exclusivamente como **observación interna no contractual**:

- `DisplayUrlDomain`
- `Keyword`
- `ExternalCriterionId`
- `KeywordMatchType`

Las 6 métricas Auction Insights aparecen codificadas:

```text
AISearchImpressionShare
SearchOutrankingShare
SearchOverlapRate
CompetitorAboveRate
PromotedRate
AbsoluteTopOfPageRate
```

El rango de fechas codificado fue: `2026-07-01` a `2026-07-31`.

La campaña aparece externamente como: `campaignId=23669915226`.

**URL de evidencia del informe multi-keyword:**
https://ads.google.com/aw/reporteditor/view?campaignId=23669915226&ocid=7901508229&workspaceId=0&authuser=0&__u=5506310298&__c=3088331421&reportState=GukBCkYKEERpc3BsYXlVcmxEb21haW4KB0tleXdvcmQKE0V4dGVybmFsQ3JpdGVyaW9uSWQKEEtleXdvcmRNYXRjaFR5cGUYACAyCn0KF0FJU2VhcmNoSW1wcmVzc2lvblNoYXJlChVTZWFyY2hPdXRyYW5raW5nU2hhcmUKEVNlYXJjaE92ZXJsYXBSYXRlChNDb21wZXRpdG9yQWJvdmVSYXRlCgxQcm9tb3RlZFJhdGUKFUFic29sdXRlVG9wT2ZQYWdlUmF0ZSIcCBwSGAoKMjAyNi0wNy0wMRIKMjAyNi0wNy0zMUoCCAEiBBoCCAI%3D

**Clasificación:** `reportState` = OBSERVACIÓN / detalle interno **no documentado** como API soportada. No se construye arquitectura dependiente de su formato.

### Arquitectura candidata después de Fase 2

La evidencia actual favorece el siguiente flujo:

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

Esto hace innecesario, según la evidencia actual:

- un reporte por keyword;
- Playwright;
- Google Ads Scripts como extractor;
- APIs privadas.

**Aún no se declara la arquitectura final** — falta validar Fase 3.

### Fase 3 — Pendiente

Por testear:

- guardar el informe;
- programación;
- frecuencia;
- formato;
- destinatarios;
- rango temporal relativo;
- comportamiento del período cuando el informe se ejecuta automáticamente;
- nombre del attachment;
- contenido del CSV programado.

**Registros:**

```text
SCHEDULED_REPORT_USABLE = NOT_TESTED
```

No se documenta todavía como YES.

---

## 3. Principio de datos

Mantener:

```text
RAW_SOURCE_IMMUTABLE = TRUE
```

Todo CSV real producido por Google deberá conservarse sin modificar.

Las transformaciones posteriores son:

```text
RAW
→ NORMALIZED
→ ANALYTICS
```

---

## 4. Distinción de tipos de contenido

Para claridad, el documento distingue claramente entre:

| Tipo | Origen | Propósito |
|---|---|---|
| **documentación oficial** | Fuentes de Google (support.google.com) | Contexto teórico; qué documenta Google sobre Auction Insights |
| **resultados empíricos** | Pruebas en cuenta real de Mandarin (Fases 1-2) | Datos comprobados; reproducibilidad, granularidad, schema |
| **observaciones internas** | `reportState` URL, identificadores internos | Evidencia diagnóstica; **no contractual**; detalle de implementación |
| **arquitectura candidata** | Inferencia de la investigación actual | Flujo propuesto; **pendiente validación** en Fase 3 |
| **cuestiones pendientes** | Fase 3 (scheduling, formato, destinatarios) | `NOT_TESTED`; no se declara como resuelto |

---

## 5. Bitácora histórica

La investigación conserva evidencia adicional en `data/auction_insights/2026-05-16/` (CSV previos de marzo-abril 2026) y en la bitácora `docs/02_estrategia/bitacora_auction_insights_keywords_mandarin_2026-09-06.md`. Los reportes mensuales en `docs/06_reportes/` también conservan su contenido original.

**Diferencia de propósito:**

- **`docs/02_estrategia/bitacora_auction_insights_keywords_mandarin_2026-09-06.md`** (bitácora): Recorrido y evidencia experimental de la investigación — registra el proceso de indagación, hipótesis puestas a prueba, resultados parciales y hallazgos en tiempo real. Es el registro cronológico de cómo se llegó a las conclusiones.

- **`docs/03_keywords/auction-insights-competencia-keyword.md`** (fuente de verdad técnica consolidada): Sintetiza los hechos comprobados y el schema de datos resultante. Es el documento de referencia técnica estable tras completar la investigación de Fases 1-2. Puede referenciar la bitácora como evidencia del proceso de descubrimiento, pero no contiene el recorrido completo paso a paso.

Los reportes mensuales en `docs/06_reportes/` continúan existiendo de forma independiente y no se modificaron con la creación de este documento.

---

## 6. Lo que NO contiene este documento

- No incluye implementación de Google Ads Scripts, Apps Script ni Playwright.
- No incluye programación de informes (frecuencia, formato, destinatarios, rango temporal relativo).
- No declara arquitectura final (Fase 3 pendiente).
- No incluye sección "Qué espero de tu respuesta ahora" ni instrucciones conversacionales.
- No documenta `reportState` como API soportada ni contrato estable.
- No modifica ningún archivo existente en `docs/06_reportes/` ni en `data/`.
