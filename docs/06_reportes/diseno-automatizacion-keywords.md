# Diseño: Automatización de informe de keywords

- **Propósito**: diseñar el mecanismo que exporta automáticamente el desempeño por palabra clave, eliminando las descargas manuales desde Google Ads.
- **Alcance**: desempeño de keywords (métrica propia) + cuota de impresiones propias + métricas de Keyword Planner (volumen, competencia, índice, CPC estimado). NO incluye competidores concretos (Auction Insights).
- **Estado**: borrador — pendiente validación.
- **Fecha de actualización**: 2026-09-05.

## Contexto y decisiones verificadas

1. **Desempeño de keywords SÍ es automatable** vía Google Ads Scripts (`KEYWORDS_PERFORMANCE_REPORT` en AWQL, o `keyword_view` en GAQL v25).
2. **Cuota de impresiones propia** (`SearchImpressionShare`, `SearchTopImpressionShare`, `SearchAbsoluteTopImpressionShare`) SÍ está disponible: son métricas propias, distintas de las de competidores.
3. **Auction Insights NO está disponible por API pública**: los campos `auction_insight_search_*` existen en la referencia pero llevan la nota literal "This metric is not publicly available" (verificado en v22; gating estable en v25).
4. **Keyword Planner NO es accesible desde Google Ads Scripts**: volumen de búsqueda, competencia, índice 0-100 y CPC estimados requieren el servicio `KeywordPlanIdeaService` de la API completa (developer token + OAuth), no expuestos en Scripts. **Verificado 2026-09-05: este servicio ya funciona vía el servidor `mcp-google-ads`** (`GenerateKeywordHistoricalMetrics` devolvió volumen, nivel de competencia, índice 0-100 y CPC estimado para las keywords reales de Mandarin). Por lo tanto, el único camino que cubre el 100% automatizable es la API completa, no el Google Ads Script.

## Tabla canónica de keywords (fuente de verdad)

Estas son las columnas que el script debe generar. Reemplaza los formatos ad hoc de los informes previos (scorecard, bullets, tablas divergentes) por una sola tabla.

| # | Columna | Fuente AWQL (`KEYWORDS_PERFORMANCE_REPORT`) | Fuente GAQL (`keyword_view`) |
|---|---|---|---|
| 1 | Fecha | `Date` | `segments.date` |
| 2 | Campaña | `CampaignName` | `campaign.name` |
| 3 | Grupo de anuncios | `AdGroupName` | `ad_group.name` |
| 4 | Palabra clave | `Keyword` | `ad_group_criterion.keyword.text` |
| 5 | Tipo de concordancia | `KeywordMatchType` | `ad_group_criterion.keyword.match_type` |
| 6 | Impresiones | `Impressions` | `metrics.impressions` |
| 7 | Clics | `Clicks` | `metrics.clicks` |
| 8 | CTR | `Ctr` | `metrics.ctr` |
| 9 | CPC promedio | `AverageCpc` | `metrics.average_cpc` |
| 10 | Costo | `Cost` | `metrics.cost_micros` |
| 11 | Conversiones | `Conversions` | `metrics.conversions` |
| 12 | Costo/conversión | `CostPerConversion` | `metrics.cost_per_conversion` |
| 13 | Cuota de impresiones (búsqueda) | `SearchImpressionShare` | `metrics.search_impression_share` |
| 14 | % parte superior página | `SearchTopImpressionShare` | `metrics.search_top_impression_share` |
| 15 | % absoluto parte superior | `SearchAbsoluteTopImpressionShare` | `metrics.search_absolute_top_impression_share` |
| 16 | Volumen de búsqueda mensual | — (no disponible en Scripts) | `KeywordPlanIdeaService.GenerateKeywordHistoricalMetrics` → `avg_monthly_searches` |
| 17 | Nivel de competencia | — | `generate_keyword_historical_metrics` → `competition` |
| 18 | Índice de competencia 0-100 | — | `generate_keyword_historical_metrics` → `competition_index` |
| 19 | CPC estimado | — | `generate_keyword_historical_metrics` → `average_cpc_micros` |

> **Nota de alcance**: las columnas 1-15 provienen de `KEYWORDS_PERFORMANCE_REPORT` (AWQL en Scripts) o `keyword_view` (GAQL v25). Las columnas 16-19 solo están disponibles vía API completa (`KeywordPlanIdeaService`), por lo que requieren el servidor `mcp-google-ads` y quedan fuera de un Google Ads Script puro.

## Límites de automatización (documentado)

| Dato | Razón | Alternativa |
|---|---|---|
| Volumen de búsqueda mensual | Requiere `KeywordPlanIdeaService` (API completa) | ✅ Disponible vía `mcp-google-ads` (verificado 2026-09-05) |
| Competencia (nivel) e índice 0-100 | Ídem | ✅ Disponible vía `mcp-google-ads` |
| CPC bajo/alto estimado | Ídem | ✅ Disponible vía `mcp-google-ads` |
| Competidores concretos (dominio, superposición, outranking) | Auction Insights "not publicly available" | Mantener flujo manual/CSV actual |

## Estructura de implementación propuesta

### Ruta primaria (B): extractor Python en `mcp-google-ads`
- **Archivo**: `tools/keyword_planner.py` (nuevo) en `mcp-google-ads`, que invoca `KeywordPlanIdeaService.GenerateKeywordHistoricalMetrics` y combina con `fetch_keyword_metrics` (desempeño) para producir la tabla de 19 columnas en un JSON/Markdown local.
- Reutiliza el cliente y Helpers ya existentes (`fetch_keyword_metrics`, `_to_currency`, `_enum_name`).

### Ruta secundaria (A): Google Ads Script
> Aplicable solo si se prioriza ejecución automática desatendida y se acepta excluir las columnas 16-19 (Keyword Planner no expuesto en Scripts).

**Archivo**: `scripts/06_reporte_keywords.js` (sigue la numeración y estilo de `04_reporte_semanal.js` / `05_reporte_mensual_marzo_2026.js`).

**Bloques** (manteniendo convenciones existentes):
- Cabecera de comentario (Propósito, Alcance, Seguridad, Qué NO hace).
- `CONFIG` con constantes en mayúsculas (rango de fechas, nombre de hoja, límite de columnas).
- `main()` → `generarReporteKeywords()`.
- Consulta de keywords + escritura a Sheets.
- Helpers reusables ya existentes (`safeNumber`, `divisionSegura`, `formatearMoneda`, `logSeccion`).

**Consulta AWQL** (patrón consistente con 04/05, usa `AdsApp.report()`):

```
SELECT Date, CampaignName, AdGroupName, Keyword, KeywordMatchType,
       Impressions, Clicks, Ctr, AverageCpc, Cost, Conversions,
       CostPerConversion, SearchImpressionShare, SearchTopImpressionShare,
       SearchAbsoluteTopImpressionShare
FROM KEYWORDS_PERFORMANCE_REPORT
WHERE Impressions > 0
DURING LAST_30_DAYS
```

**Alternativa GAQL v25** (verificada en doc oficial):

```
SELECT ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type,
       campaign.name, ad_group.name, segments.date,
       metrics.impressions, metrics.clicks, metrics.ctr, metrics.average_cpc,
       metrics.cost_micros, metrics.conversions, metrics.cost_per_conversion,
       metrics.search_impression_share, metrics.search_top_impression_share,
       metrics.search_absolute_top_impression_share
FROM keyword_view
WHERE segments.date DURING LAST_30_DAYS
```

## Decisión de arquitectura (actualizada tras verificación)

Hay **dos mecanismos** para automatizar el informe, con cobertura distinta:

| Mecanismo | Desempeño + cuota (col 1-15) | Keyword Planner (col 16-19) | Ejecución |
|---|---|---|---|
| **A. Google Ads Script → Sheets** | ✅ | ❌ (no expone `KeywordPlanner`) | Automática (programada, sin servidor) |
| **B. `mcp-google-ads` (API completa)** | ✅ | ✅ (verificado 2026-09-05) | Requiere correr Python (local o scheduler) |

**Decisión**: mecanismo **B** (`mcp-google-ads`) como ruta primaria, porque cubre el 100% de lo automatizable (19 columnas). El mecanismo A (Google Ads Script → Sheets) queda como opcional solo si se prioriza ejecución automática desatendida y se acepta excluir volumen/competencia.

### Destino de salida (dentro de B)

| Opción | Ventaja | Contra |
|---|---|---|
| **JSON/Markdown local** | Sin dependencias; patrón ya usado por `mcp-google-ads` | No alimenta Drive directamente |
| **Google Sheets** | ChatGPT/Drive lo lee directo; "sin descargas manuales" | Requiere credenciales de Sheets API en Python |

**Decisión**: empezar por **JSON/Markdown local** (patrón consistente), y evaluar Google Sheets como extensión posterior si se quiere lectura directa desde Drive.

## Programación y seguridad

- **Frecuencia**: semanal (coherente con `04_reporte_semanal.js` y la propuesta original), configurable.
- **Seguridad**: solo lectura sobre la cuenta Ads; la escritura se limita a una hoja de cálculo propia.
- **Rollback**: el script no muta la cuenta; en caso de error, borrar filas de la hoja destino es la reversión.