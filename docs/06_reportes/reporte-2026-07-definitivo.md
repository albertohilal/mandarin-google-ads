# Informe Mensual Julio 2026 — Mandarin (Versión definitiva corregida)

## Propósito
Informe mensual de Google Ads con datos reales de la Google Ads API para el mes completo de julio 2026. Corrige las versiones anteriores del período, que mezclaban datos parciales de la primera quincena con el mes completo y contenían errores en las conversiones.

## Alcance
Análisis del mes completo (01/07/2026 a 31/07/2026) de la cuenta Google Ads de Mandarin (`customer_id 6590327345`).

## Estado
Vigente

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
- **Justificación:** Los datos de campaña, keywords, términos de búsqueda y cuota de impresiones provienen directamente de la Google Ads API y son completos para el mes. La conciliación con GA4 y los nombres de competidores quedan pendientes (secciones 4 y 8).

## 2) Resumen ejecutivo

### Principales hallazgos
1. **Julio completo registró 41 conversiones atribuidas por Google Ads**, no 20. Las versiones previas del informe solo contemplaban la primera quincena.
2. La única campaña con actividad es `Search | Leads | Tabiques Sanitarios | AR | Diario 10K`; las otras dos reportan `ENABLED` pero 0 impresiones, 0 clics y $0 de gasto.
3. **26,11% de impresiones se pierden por presupuesto** (21,58% por ranking), el mayor problema operativo identificable del mes.

### Diagnóstico general del período
Julio cerró con $300.187,79 de inversión (prácticamente estable vs. junio: -1,3%), pero con fuerte caída de clics (-26,1%) y de impresiones (-5,1%). El CPC subió +33,5% (de $1.183 a $1.580), y el costo por conversión subió +15,5%. A pesar de la caída de volumen, la **tasa de conversión mejoró** (de 18,68% a 21,58%), lo que indica eficiencia creciente del tráfico que sí llega.

### Limitaciones del análisis
- Conciliación Google Ads ↔ GA4 no realizada en esta extracción (requiere exportación GA4).
- Nombres de competidores no disponibles: la métrica `auction_insights` devuelve `METRIC_ACCESS_DENIED` (falta acceso estándar del developer token).
- Términos de búsqueda reportan ~$128.563 de los $300.188 de gasto (comportamiento normal de Google Ads: los términos de búsqueda no cubren el 100% del gasto en concordancia amplia).

## 3) Scorecard principal
| Métrica | Julio 2026 | Junio 2026 | Variación |
|---|---:|---:|---:|
| Impresiones | 1.842 | 1.942 | -5,1% |
| Clics | 190 | 257 | -26,1% |
| CTR | 10,31% | 13,23% | -2,92 pp |
| CPC promedio | $1.579,94 | $1.183,33 | +33,5% |
| Costo | $300.187,79 | $304.115,57 | -1,3% |
| Conversiones | 41 | 48 | -14,6% |
| Tasa de conversión (conv./clics) | 21,58% | 18,68% | +2,90 pp |
| Costo por conversión | $7.321,65 | $6.335,74 | +15,5% |

## 4) Estado de medición y conversiones

### Estado global de tracking
- Vigente en Google Ads; validación GA4 pendiente.

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
Usar "conversiones atribuidas por Google Ads" (no "contactos reales") hasta completar la validación comercial.

## 5) Rendimiento por campaña
| Campaña | Impr. | Clics | CTR | CPC | Costo | Conv. | Costo/conv. |
|---|---:|---:|---:|---:|---:|---:|---:|
| Diario 10K | 1.842 | 190 | 10,31% | $1.579,94 | $300.187,79 | 41 | $7.321,65 |
| Tabiques Sanitarios | AR | 0 | 0 | — | — | $0 | 0 | — |
| Tabiques Sanitarios | AR #2 | 0 | 0 | — | — | $0 | 0 | — |

### Observaciones por campaña
- **Diario 10K:** única campaña con gasto y tráfico; motiva el 100% de resultados.
- **AR y AR #2:** reportan estado `ENABLED` en la API pero sin tráfico; conviene confirmar en la UI si deben seguir habilitadas o pausarse para limpieza.

## 6) Rendimiento por palabras clave (top 10 por impresiones — mes completo)
| Keyword | Match | Impr. | Clics | Costo | Conv. |
|---|---|---:|---:|---:|---:|
| tabiques para baños | PHRASE | 704 | 75 | $143.259,25 | 20,5 |
| divisiones sanitarias | PHRASE | 274 | 28 | $34.903,60 | 4,5 |
| tabiques sanitarios | PHRASE | 261 | 29 | $42.555,55 | 3,0 |
| tabiques sanitarios | EXACT | 183 | 18 | $38.455,56 | 7,0 |
| paneles sanitarios | PHRASE | 177 | 20 | $13.682,83 | 2,0 |
| boxes sanitarios | PHRASE | 133 | 12 | $15.075,60 | 3,0 |
| divisiones sanitarias | EXACT | 46 | 2 | $2.566,49 | 0,0 |
| paneles sanitarios | EXACT | 31 | 2 | $2.578,89 | 0,0 |
| boxes sanitarios | EXACT | 27 | 3 | $6.303,15 | 1,0 |
| tabiques modulares | EXACT | 6 | 1 | $806,87 | 0,0 |

*38 keywords en total; 28 no registran tráfico (pertenecen a las campañas pausadas).*

### Observaciones
- `tabiques para baños` (frase) concentra ~48% del gasto y es la principal generadora de volumen.
- `tabiques sanitarios` (exacta) es la más eficiente en términos de costo por conversión.

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

*161 términos de búsqueda registrados en julio. Se listan los de mayor costo; los términos con varios clics y 0 conversiones (p. ej. `separadores de baños publicos`, `divisores de baños publicos`, `tabiques sanitarios melamina`) son candidatos a negativas a auditar.*

## 8) Cuota de impresiones y competencia (julio completo)
| Métrica | Valor |
|---|---:|
| Cuota de impresiones de búsqueda | 62,1% |
| Impresiones perdidas por ranking | 11,79% |
| Impresiones perdidas por presupuesto | 26,11% |
| Impresiones en top de página | 47,83% |
| Impresiones en posición absoluta top | 30,39% |

### Competidores
- **Nombres de competidores no disponibles vía API** (`METRIC_ACCESS_DENIED`).
- Para obtener los dominios competidores: exportar CSV "Cuota de impresiones de subasta" desde la UI y procesarlo con `AUXILIAR/ingresar_competencia.py`, o solicitar acceso estándar del developer token (documentado en `docs/operations/acceso-estandar-api.md`).

### Lectura
El **26,11% de impresiones perdidas por presupuesto** es la mayor oportunidad de recuperación: aumentando el presupuesto diario o redistribuyendo el gasto concentrado en `tabiques para baños` se recuperarían impresiones sin necesidad de competir más por ranking (solo 11,79% se pierde por ranking).

## 9) Problemas, riesgos o anomalías
- **Gasto:** 26,11% de impresiones perdidas por presupuesto (riesgo de techo de escala).
- **Calidad de lead:** conversiones sin validación comercial todavía.
- **Inconsistencia de datos:** los reportes previos de julio consignaban "20 conversiones" (solo 1ª quincena); el dato correcto del mes completo es 41.
- **Competencia:** sin nombres de competidores por falta de acceso estándar en la API.

## 10) Decisiones sugeridas para el próximo período
### Acciones prioritarias
1. Corregir el dato de conversiones en los reportes publicados (20 → 41).
2. Evaluar aumento o redistribución de presupuesto para recuperar el 26,11% de impresiones perdidas por presupuesto.
3. Auditar términos con gasto relevante y 0 conversiones para negativas.

### Acciones opcionales
- Consolidar o pausar las campañas `AR` y `AR #2` que no registran tráfico.
- Exportar CSV de "Cuota de impresiones de subasta" para obtener nombres de competidores.

### Decisiones que requieren validación
- Validación comercial de las 41 conversiones (equipo comercial, antes de escalar presupuesto).

### Tarea pendiente documentada (fuera del alcance de este informe)
- **Habilitar medición de `click_whatsapp` en GA4.** El evento no está habilitado/medible (checkbox del evento deshabilitado en la UI), por lo que no se puede conciliar Google Ads ↔ GA4 ni medir los clics reales a WhatsApp. Resolver en el futuro: implementar/activar el evento y retomar la conciliación.

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
Julio mantuvo la inversión estable (~$300K) con menos clics pero mejor tasa de conversión (21,58%). El costo por conversión subió a $7.321,65. La mayor oportunidad es recuperar impresiones perdidas por presupuesto (26,11%). La prioridad inmediata es corregir el dato de conversiones (41, no 20) y completar la validación comercial y la conciliación GA4.

### Estado recomendado del siguiente período
- [x] Mantener
- [ ] Escalar (solo tras validación comercial y ajuste de presupuesto)
- [ ] Corregir base de medición antes de escalar (conciliación GA4 pendiente)

---

*Reporte generado con datos reales de Google Ads API el 2026-09-05. Sustituye a las versiones anteriores de julio en lo referente a conversiones, impresiones y CPC del mes completo.*