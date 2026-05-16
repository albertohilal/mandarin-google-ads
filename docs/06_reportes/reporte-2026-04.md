# Reporte mensual de Google Ads – Abril 2026

## Propósito
Documentar el desempeño mensual de la cuenta de Google Ads de Mandarin para el período 01/04/2026–30/04/2026, con foco en métricas de rendimiento, estado real de medición y decisiones operativas para el siguiente período.

## Alcance
Aplica al análisis mensual de campañas activas, su rendimiento en Google Ads y la utilidad operativa del sistema de reporting vigente al cierre de abril de 2026.

## Estado
Vigente

## Fecha de actualización
2026-05-16

---

## 1) Datos generales del informe
- **Cliente:** Mandarin
- **Período analizado:** 2026-04-01 a 2026-04-30
- **Responsable del informe:** [Completar]
- **Fuentes de datos utilizadas:** Google Ads (API), JSON bruto de extracción, informe técnico de extracción
- **Tipo de base del informe:**
  - [x] Datos consolidados
  - [ ] Datos parciales
  - [ ] Evidencia manual / capturas
- **Nivel de confiabilidad del reporte:**
  - [ ] Alta
  - [x] Media
  - [ ] Baja
- **Justificación del nivel de confiabilidad:** El informe se apoya en datos consolidados de Google Ads y una extracción técnica validada. La confiabilidad sigue siendo media porque las conversiones están agregadas como `ALL_CONVERSIONS` y no desglosadas por acción específica.

---

## 2) Resumen ejecutivo

### Principales hallazgos
- Durante abril de 2026 la cuenta registró **2038 impresiones**, **258 clics**, **CTR de 12.66%**, **costo de $305,947.82** y **47 conversiones**.
- En abril coexistieron **3 campañas**, pero solo **1 tuvo entrega real significativa** y aportó tráfico y conversiones.
- La campaña **Search | Leads | Tabiques Sanitarios | AR | Diario 10K** fue la única con actividad relevante, mostrando un **costo por conversión** de **$6,509.53**.
- Las otras campañas no registraron actividad significativa durante el período.
- La medición operativa vigente sigue concentrada en **WhatsApp**.

### Diagnóstico general del período
El período muestra una base de rendimiento utilizable para toma de decisiones. Comparado con marzo:
- Abril tuvo menos impresiones: 2038 vs 3011.
- Más clics: 258 vs 237.
- CTR subió de 7.87% a 12.66%.
- Costo subió de $224,720.18 a $305,947.82.
- Conversiones subieron de 32.94 a 47.
- Costo por conversión bajó de $6,822.44 a $6,509.53.

El principal riesgo es que el CPC promedio sigue más alto que en marzo. No se recomienda escalar automáticamente porque GA4 y `click_whatsapp` siguen sin verificarse en abril.

---

## 3) Scorecard principal
| Métrica | Valor del período | Variación vs período anterior | Observación |
|---|---:|---:|---|
| Impresiones | 2038 | -32.31% | Reducción significativa |
| Clics | 258 | +8.86% | Incremento leve |
| CTR | 12.66% | +4.79 pp | Mejora notable |
| CPC promedio | $1,185.84 | +25.10% | Costo por clic más alto |
| Costo | $305,947.82 | +36.14% | Incremento significativo |
| Conversiones | 47 | +42.65% | Mejora destacada |
| Tasa de conversión | 18.22% | +4.32 pp | Eficiencia mejorada |
| Costo por conversión | $6,509.53 | -4.59% | Reducción positiva |

---

## 4) Estado de medición y conversiones
- **Estado de medición:**
  - Google Ads API: Operativa
  - GA4 / DebugView: [NO VERIFICADO]
  - `click_whatsapp`: PENDIENTE de validación manual
- **Conversiones:**
  - Abril tiene extracción de conversiones OK.
  - La extracción devuelve 1 fila.
  - La función usa fallback `ALL_CONVERSIONS`.
  - Las conversiones están agregadas por campaña y no por nombre real de acción de conversión.

---

## 5) Rendimiento por campaña
| Campaña | Impresiones | Clics | CTR | CPC prom. | Costo | Conversiones | Tasa conv. | Costo/conv. | Estado |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Search \| Leads \| Tabiques Sanitarios \| AR \| Diario 10K | 2038 | 258 | 12.66% | $1,185.84 | $305,947.82 | 47 | 18.22% | $6,509.53 | ENABLED |
| Search \| Leads \| Tabiques Sanitarios \| AR | 0 | 0 | — | — | — | — | — | ENABLED |
| Search \| Leads \| Tabiques Sanitarios \| AR #2 | 0 | 0 | — | — | — | — | — | ENABLED |

---

## 6) Rendimiento por grupo de anuncios
| Campaña | Grupo de anuncios | Impresiones | Clics | CTR | CPC prom. | Costo | Conversiones | Observación |
|---|---|---:|---:|---:|---:|---:|---:|---|
| Search \| Leads \| Tabiques Sanitarios \| AR \| Diario 10K | Tabiques Sanitarios | 2038 | 258 | 12.66% | $1,185.84 | $305,947.82 | 47 | Buen rendimiento |
| Search \| Leads \| Tabiques Sanitarios \| AR | [Sin entrega] | 0 | 0 | — | — | — | — | Sin entrega en abril |
| Search \| Leads \| Tabiques Sanitarios \| AR #2 | [Sin entrega] | 0 | 0 | — | — | — | — | Sin entrega en abril |

---

## 7) Términos de búsqueda y keywords
### Keywords con mejor rendimiento
- **divisiones sanitarias** PHRASE: 585 impresiones, 78 clics, $88,874.63, 19 conversiones.
- **tabiques para baños** PHRASE: 570 impresiones, 72 clics, $82,417.75, 7 conversiones.
- **boxes sanitarios** PHRASE: 197 impresiones, 25 clics, $40,404.83, 7 conversiones.
- **tabiques sanitarios** EXACT: 150 impresiones, 27 clics, $38,919.50, 8 conversiones.
- **tabiques sanitarios** PHRASE: 197 impresiones, 16 clics, $13,130.21, 3 conversiones.

### Términos relevantes
- **tabiques sanitarios**: 36 impresiones, 9 clics, 1 conversión.
- **divisiones para baños públicos**: 22 impresiones, 3 clics, 2 conversiones.
- **divisores de baños**: 31 impresiones, 3 clics, 1 conversión.
- **tabiques divisorios para baños**: 19 impresiones, 5 clics, 1 conversión.
- **tabiques divisorios sanitarios**: 4 impresiones, 2 clics, 2 conversiones.
- **tabiques para baños publicos**: 10 impresiones, 3 clics, 1 conversión.

### Términos a revisar manualmente
No se aplican negativas automáticas con esta extracción. Se identifican términos a revisar manualmente antes de excluir:
- **easybox divisores**
- **mavatec**
- **distrifia sanitarios**
- **box banheiro**
- Búsquedas orientadas a duchas, acrílico, PVC o baño particular cuando no coincidan con tabiques sanitarios comerciales.

---

## 8) Cambios aplicados durante el período

### Cambios de puja
- [NO VERIFICADO]

### Cambios de anuncios
- [NO VERIFICADO]

### Cambios de segmentación
- [NO VERIFICADO]

### Cambios de negativas
- [NO VERIFICADO]

### Cambios de tracking
- [NO VERIFICADO]

Nota: el JSON de abril contiene métricas de rendimiento, no historial de cambios.

---

## 9) Problemas, riesgos o anomalías
- Las campañas inactivas requieren revisión.

---

## 10) Decisiones sugeridas para el próximo período
- Mantener la campaña activa y optimizar términos de búsqueda.
- Revisar campañas inactivas para determinar ajustes o pausas.

---

## 11) Evidencias y referencias
- JSON bruto local: `/home/beto/Documentos/Github/mcp-google-ads/AUXILIAR/google-ads-2026-04.json`
- Informe técnico: `/home/beto/Documentos/Github/mcp-google-ads/docs/reports/extraccion-google-ads-abril-2026.md`
- Reporte marzo: `docs/06_reportes/reporte-2026-03.md`
- Plantilla: `docs/06_reportes/plantilla-reporte-mensual.md`

---

## 12) Cierre

### Estado recomendado del siguiente período
- [ ] Escalar
- [x] Mantener
- [x] Corregir base de medición antes de escalar
- [ ] Replantear estructura de campaña