> **HISTÓRICO/SUPERSEDIDO:** El único documento fuente actual y canónico es [`reporte-2026-07-baseline.md`](reporte-2026-07-baseline.md). Este archivo se conserva únicamente como registro histórico y no debe utilizarse como fuente vigente.

# Informe Mensual Julio 2026 — Mandarin (Versión definitiva corregida)

## Propósito
Informe mensual de Google Ads con datos reales de la Google Ads API para el mes completo de julio 2026. Corrige las versiones anteriores del período, que mezclaban datos parciales de la primera quincena con el mes completo y contenían errores en las conversiones atribuidas por Google Ads.

## Alcance
Análisis del mes completo (01/07/2026 a 31/07/2026) de la cuenta Google Ads de Mandarin (`customer_id 6590327345`).

## Estado
Histórico/superseded

## Fecha de actualización
2026-09-05

---

## 1) Datos generales del informe
- **Cliente:** Mandarin
- **Período analizado:** 2026-07-01 a 2026-07-31 (mes completo)
- **Responsable del informe:** Desarrollo y Diseño
- **Fuentes de datos:** Google Ads API (vía servidor `mcp-google-ads`, cliente `google-ads`)
- **Tipo de base del informe:** [x] Datos consolidados
- **Nivel de confiabilidad:** [x] Alta (datos Google Ads API) — ver limitaciones de GA4
- **Justificación:** Los datos de campaña, keywords, términos de búsqueda y cuota de impresiones provienen directamente de la Google Ads API y son completos para el mes. La conciliación con GA4 no se realizó y la extracción de nombres de competidores quedó limitada en la API; la evidencia manual de competencia de julio se conserva en el baseline canónico y el CSV bruto (secciones 4 y 8).

## 2) Resumen ejecutivo

### Principales hallazgos
1. **Julio completo registró 41 conversiones atribuidas por Google Ads**, no 20. Las versiones previas del informe solo contemplaban la primera quincena.
2. La única campaña con actividad es `Search | Leads | Tabiques Sanitarios | AR | Diario 10K`; las otras dos reportan `ENABLED` pero 0 impresiones, 0 clics y $0 de gasto.
3. **26,11% de impresiones se pierden por presupuesto** y **11,79% por ranking**, según las métricas disponibles para julio. Estos porcentajes son observaciones del período y no prueban por sí solos causalidad ni recuperación por cambios de presupuesto.

### Diagnóstico general del período
Julio cerró con $300.187,79 de inversión (prácticamente estable vs. junio: -1,3%), pero con fuerte caída de clics (-26,1%) y de impresiones (-5,1%). El CPC subió +33,5% (de $1.183 a $1.580), y el costo por conversión subió +15,5%. La **tasa de conversión reportada por Google Ads** pasó de 18,68% a 21,58%; este cambio descriptivo no permite concluir sobre la calidad comercial.

### Limitaciones del análisis
- Conciliación Google Ads ↔ GA4 no realizada en esta extracción (requiere exportación GA4).
- La respuesta `METRIC_ACCESS_DENIED` limita únicamente la extracción de Auction Insights mediante la API en esta consulta. Julio sí cuenta con evidencia real de competencia obtenida manualmente desde la interfaz/UI, conservada en el CSV bruto y documentada en el baseline canónico.
- Términos de búsqueda reportan ~$128.563 de los $300.188 de gasto (comportamiento normal de Google Ads: los términos de búsqueda no cubren el 100% del gasto en concordancia amplia).

## 3) Scorecard principal
| Métrica | Julio 2026 | Junio 2026 | Variación |
|---|---:|---:|---:|
| Impresiones | 1.842 | 1.942 | -5,1% |
| Clics | 190 | 257 | -26,1% |
| CTR | 10,31% | 13,23% | -2,92 pp |
| CPC promedio | $1.579,94 | $1.183,33 | +33,5% |
| Costo | $300.187,79 | $304.115,57 | -1,3% |
| Conversiones atribuidas por Google Ads | 41 | 48 | -14,6% |
| Tasa de conversión (conv./clics) | 21,58% | 18,68% | +2,90 pp |
| Costo por conversión | $7.321,65 | $6.335,74 | +15,5% |

## 4) Estado de medición y conversiones atribuidas por Google Ads

### Estado global de tracking
- Datos de julio disponibles en Google Ads; validación GA4 pendiente.

### Google Ads
- **Conversiones atribuidas por Google Ads:** 41 (mes completo)
- **Modelo o fuente disponible:** importación de conversiones vía Google Ads
- **Costo por conversión:** $7.321,65

### GA4
- **Excluido de este informe.** El evento `click_whatsapp` no está habilitado/medible en GA4 (checkbox del evento deshabilitado en la UI, sin datos de eventos de WhatsApp registrables). Por lo tanto, la conciliación Ads-GA4 no puede realizarse en este período.
- **Tarea pendiente (resolver en el futuro):** habilitar la medición del evento `click_whatsapp` (o su equivalente `click` con `link_url` a WhatsApp) en GA4 para poder conciliar conversiones de Google Ads contra eventos de WhatsApp de tráfico `google / cpc`.

### Conciliación Ads-GA4
- **Estado:** Pendiente — no realizable en este período por falta de medición de `click_whatsapp` en GA4 (evento no habilitado).

### Regla editorial
Usar siempre la denominación "conversiones atribuidas por Google Ads" hasta completar la validación comercial.

## 5) Rendimiento por campaña
| Campaña | Impr. | Clics | CTR | CPC | Costo | Conversiones atribuidas por Google Ads | Costo/conv. |
|---|---:|---:|---:|---:|---:|---:|---:|
| Diario 10K | 1.842 | 190 | 10,31% | $1.579,94 | $300.187,79 | 41 | $7.321,65 |
| Tabiques Sanitarios | AR | 0 | 0 | — | — | $0 | 0 | — |
| Tabiques Sanitarios | AR #2 | 0 | 0 | — | — | $0 | 0 | — |

### Observaciones por campaña
- **Diario 10K:** única campaña con gasto y tráfico; concentra el 100% de las conversiones atribuidas por Google Ads observadas en esta tabla.
- **AR y AR #2:** reportan estado `ENABLED` en la API pero sin tráfico; la decisión sobre mantenerlas habilitadas o pausarlas requiere confirmación en la UI.

## 6) Rendimiento y competencia por palabra clave (mes completo)
| Keyword | Match | Impr. | Clics | Costo | Conv. | Vol/mes | Competencia | Índice |
|---|---:|---:|---:|---:|---:|---:|---|---:|
| tabiques para baños | PHRASE | 704 | 75 | $143.259,25 | 20,5 | 40 | Media | 50 |
| tabiques sanitarios | PHRASE | 261 | 29 | $42.555,55 | 3,0 | 170 | Media | 51 |
| tabiques sanitarios | EXACT | 183 | 18 | $38.455,56 | 7,0 | 170 | Media | 51 |
| divisiones sanitarias | PHRASE | 274 | 28 | $34.903,60 | 4,5 | 10 | Alta | 71 |
| boxes sanitarios | PHRASE | 133 | 12 | $15.075,60 | 3,0 | — | — | — |
| paneles sanitarios | PHRASE | 177 | 20 | $13.682,83 | 2,0 | 20 | Media | 40 |
| boxes sanitarios | EXACT | 27 | 3 | $6.303,15 | 1,0 | — | — | — |
| paneles sanitarios | EXACT | 31 | 2 | $2.578,89 | 0,0 | 20 | Media | 40 |
| divisiones sanitarias | EXACT | 46 | 2 | $2.566,49 | 0,0 | 10 | Alta | 71 |
| tabiques modulares | EXACT | 6 | 1 | $806,87 | 0,0 | 10 | Baja | 30 |

*38 keywords en total; 28 no registran tráfico (pertenecen a las campañas pausadas). Volumen y competencia provienen de Keyword Planner (API), disponibles solo para las keywords con tráfico.*

### Lectura de competencia
- **`tabiques sanitarios`** registra el mayor volumen de búsqueda observado (170/mes) y competencia media (índice 51). Estos datos descriptivos no bastan para concluir que sea una oportunidad de escalamiento.
- **`divisiones sanitarias`** registra competencia alta (índice 71) y 10 búsquedas/mes; su concordancia EXACT no convirtió. No se atribuye una relación causal entre estos datos.
- **`boxes sanitarios`** no tiene volumen ni índice reportados en esta extracción de Keyword Planner (— en la tabla); se requiere auditoría antes de cualquier decisión.
- **`tabiques para baños`** concentra ~48% del gasto con 40 búsquedas/mes; estos datos no permiten concluir que el nivel de inversión del término sea inadecuado.

## 7) Términos de búsqueda relevantes (top por costo)
| Término | Impr. | Clics | Costo | Conv. |
|---|---:|---:|---:|---:|
| divisores de baños | 19 | 4 | $16.171,54 | 3,0 |
| tabiques divisorios para baños | 22 | 3 | $15.690,21 | 2,0 |
| tabiques sanitarios | 48 | 7 | $9.944,56 | 2,0 |
| separadores de baños publicos | 5 | 3 | $7.194,55 | 0,0 |
| divisores de baños publicos | 10 | 2 | $7.114,62 | 0,0 |
| box sanitarios | 15 | 3 | $6.303,15 | 1,0 |
| divisores sanitarios | 11 | 1 | $5.612,51 | 1,0 |
| divisores para baños publicos | 3 | 2 | $5.439,87 | 1,0 |
| paneles divisorios para baños | 2 | 1 | $4.813,02 | 1,0 |
| divisiones en aluminio para baños | 2 | 1 | $4.166,78 | 1,0 |
| tabiques sanitarios melamina | 4 | 1 | $4.018,27 | 0,0 |
| divisiones baños publicos | 9 | 3 | $3.895,64 | 0,0 |

*161 términos de búsqueda registrados en julio. Se listan los de mayor costo; los términos con varios clics y 0 conversiones atribuidas por Google Ads (p. ej. `separadores de baños publicos`, `divisores de baños publicos`, `tabiques sanitarios melamina`) son candidatos a negativas a auditar.*

## 8) Cuota de impresiones y competencia (julio completo)
| Métrica | Valor |
|---|---:|
| Cuota de impresiones de búsqueda | 62,1% |
| Impresiones perdidas por ranking | 11,79% |
| Impresiones perdidas por presupuesto | 26,11% |
| Impresiones en top de página | 47,83% |
| Impresiones en posición absoluta top | 30,39% |

### Competidores
- **Nombres de competidores no disponibles vía API en esta extracción** (`METRIC_ACCESS_DENIED`). Esta limitación de la API no implica que falten los nombres en la evidencia manual de julio: los dominios observados están documentados en el [baseline canónico](reporte-2026-07-baseline.md) y respaldados por el [CSV bruto exacto](../../data/auction_insights/2026-09-06/auction_insights_keywords_2026-07-01_2026-07-31_raw.csv).
- Para futuras extracciones vía API, puede solicitarse acceso estándar del developer token (documentado en `docs/operations/acceso-estandar-api.md`); el detalle manual de julio se mantiene en las referencias anteriores, sin duplicar aquí la tabla de Auction Insights.

### Lectura
El **26,11% de impresiones perdidas por presupuesto** es un dato observado junto con el **11,79% perdido por ranking**. Por sí solo, el indicador no permite afirmar que aumentar o redistribuir el presupuesto recupere impresiones, ni atribuir resultados de ranking o comerciales al presupuesto; cualquier cambio requiere validación posterior.

## 9) Problemas, riesgos o anomalías
- **Impresiones:** 26,11% perdidas por presupuesto y 11,79% por ranking; el efecto operativo de estas métricas requiere validación.
- **Validación comercial:** conversiones atribuidas por Google Ads sin validación comercial todavía.
- **Inconsistencia de datos:** los reportes previos de julio consignaban "20 conversiones atribuidas por Google Ads" (solo 1ª quincena); el dato del mes completo es 41.
- **Competencia:** esta extracción de la API no devuelve nombres de competidores (`METRIC_ACCESS_DENIED`); los dominios observados manualmente para julio están documentados en el baseline canónico y en el CSV exacto enlazados arriba.

## 10) Decisiones sugeridas para el próximo período
### Acciones prioritarias
1. Corregir el dato de conversiones atribuidas por Google Ads en los reportes publicados (20 → 41).
2. Evaluar, sin asumir recuperación, el posible efecto de cambios de presupuesto sobre el 26,11% de impresiones perdidas por presupuesto.
3. Auditar términos con gasto relevante y 0 conversiones atribuidas por Google Ads para negativas.

### Acciones opcionales
- Consolidar o pausar las campañas `AR` y `AR #2` que no registran tráfico.
- Para futuras extracciones vía API, solicitar acceso estándar del developer token; el detalle manual de julio ya está documentado en el baseline canónico y su CSV de evidencia.

### Decisiones que requieren validación
- Validación comercial de las 41 conversiones atribuidas por Google Ads (equipo comercial, antes de tomar decisiones de presupuesto).

### Tarea pendiente documentada (fuera del alcance de este informe)
- **Habilitar medición de `click_whatsapp` en GA4.** El evento no está habilitado/medible (checkbox del evento deshabilitado en la UI), por lo que no se puede conciliar Google Ads ↔ GA4 ni medir clics a WhatsApp. Resolver en el futuro: implementar/activar el evento y retomar la conciliación.

## 11) Evidencias y referencias
### Fuentes
- Google Ads API vía `mcp-google-ads` (extracción directa 2026-07-01 a 2026-07-31).
- Datos junio: `docs/06_reportes/reporte-2026-06.md`.
- Plantilla: `docs/06_reportes/plantilla-reporte-mensual.md`.

### Documentos relacionados
- `docs/01_base_tecnica/conversiones.md`
- `docs/analytics/evento_whatsapp.md`

## 12) Cierre
### Conclusión operativa breve
Julio mantuvo la inversión estable (~$300K) con menos clics; Google Ads reportó una tasa de conversión de 21,58%. El costo por conversión subió a $7.321,65. El período registró 26,11% de impresiones perdidas por presupuesto y 11,79% por ranking, sin que estos datos permitan afirmar una recuperación derivada de cambios presupuestarios. La prioridad inmediata es corregir el dato de conversiones atribuidas por Google Ads (41, no 20) y completar la validación comercial; la conciliación GA4 no fue realizada.

### Estado recomendado del siguiente período
- [x] Mantener
- [ ] Evaluar cambios de presupuesto (solo tras validación comercial)
- [ ] Corregir base de medición (conciliación GA4 pendiente)

---

*Reporte generado con datos reales de Google Ads API el 2026-09-05. Queda retenido como registro histórico/superseded; la fuente actual y canónica es `reporte-2026-07-baseline.md`.*
