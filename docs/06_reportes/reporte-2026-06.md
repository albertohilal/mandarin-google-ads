# Reporte mensual de Google Ads – Junio 2026

## Propósito
Documentar el desempeño mensual de la cuenta de Google Ads de Mandarin para el período 01/06/2026–30/06/2026, con foco en métricas de rendimiento, estado operativo de medición y decisiones para el período siguiente.

## Alcance
Aplica al análisis mensual de campañas activas, su rendimiento en Google Ads y la utilidad operativa del sistema de reporting vigente al cierre de junio de 2026.

## Estado
Vigente

## Fecha de actualización
2026-07-15

---

## 1) Datos generales del informe
- **Cliente:** Mandarin
- **Período analizado:** 2026-06-01 a 2026-06-30
- **Responsable del informe:** OpenCode
- **Fuentes de datos utilizadas:** Google Ads (API), JSON bruto de extracción, reporte previo de mayo 2026
- **Tipo de base del informe:**
  - [x] Datos consolidados
  - [ ] Datos parciales
  - [ ] Evidencia manual / capturas
- **Nivel de confiabilidad del reporte:**
  - [ ] Alta
  - [x] Media
  - [ ] Baja
- **Justificación del nivel de confiabilidad:** El informe se apoya en datos reales extraídos por Google Ads API. La confiabilidad sigue siendo media porque las conversiones se analizan desde `campaign_metrics` y no existe desglose usable por acción de conversión en `conversion_metrics` para este corte. Tampoco se realizó validación manual de GA4 en junio.

---

## 2) Resumen ejecutivo

### Principales hallazgos
- Durante junio de 2026 la cuenta registró **1942 impresiones**, **257 clics**, **CTR de 13.23%**, **costo de $304,115.57** y **48 conversiones atribuidas por Google Ads**.
- La actividad siguió concentrada en una sola campaña con entrega real: **Search | Leads | Tabiques Sanitarios | AR | Diario 10K**.
- Frente a mayo, el volumen cayó levemente, pero la cuenta sostuvo el mismo número de conversiones.
- El principal deterioro del mes estuvo en el costo: subieron el **CPC promedio** y el **costo por conversión**.

### Diagnóstico general del período
Junio mostró continuidad operativa y demanda suficiente para sostener resultados. La cuenta perdió algo de volumen frente a mayo, pero compensó con una mejora leve en CTR y tasa de conversión. Aun así, la eficiencia económica bajó: el costo total subió levemente, el CPC promedio quedó más alto y el costo por conversión empeoró respecto del cierre de mayo.

### Limitaciones del análisis
- No se validó GA4 / DebugView en este corte.
- La consulta de `conversion_metrics` volvió a fallar por limitación conocida de segmentos y métricas en la API.
- Las conversiones utilizadas para decisión operativa provienen de `campaign_metrics`, no de un desglose por nombre de acción.
- La conciliación mensual entre Google Ads y GA4 quedó pendiente por falta de exportaciones manuales de GA4 para junio.
- Las 48 conversiones del período no deben tratarse automáticamente como 48 contactos comerciales confirmados.

---

## 3) Scorecard principal
| Métrica | Valor del período | Variación vs período anterior | Observación |
|---|---:|---:|---|
| Impresiones | 1942 | -8.74% | Caída leve de volumen |
| Clics | 257 | -3.02% | Tráfico casi estable |
| CTR | 13.23% | +0.78 pp | Mejora de calidad de clic |
| CPC promedio | $1,183.33 | +6.01% | Clic más caro |
| Costo | $304,115.57 | +2.81% | Gasto levemente mayor |
| Conversiones | 48 | 0.00% | Mismo volumen que mayo |
| Tasa de conversión | 18.68% | +0.56 pp | Eficiencia de respuesta apenas mejor |
| Costo por conversión | $6,335.74 | +2.81% | Deterioro leve de eficiencia |

---

## 4) Estado de medición y conversiones
- **Estado de medición:**
  - Google Ads API: Operativa
  - GA4 / DebugView: [NO VERIFICADO]
  - `click_whatsapp`: PENDIENTE de validación manual
  - Conciliación Ads-GA4: PENDIENTE según `docs/analytics/analisis-ga4-mensual.md`
- **Conversiones:**
  - Junio tiene extracción de métricas OK.
  - `conversion_metrics` falló por incompatibilidad entre segmento y métrica en la API.
  - La base operativa para conversiones se tomó desde `campaign_metrics`.
  - El valor operativo del período es **48 conversiones atribuidas por Google Ads**.
  - No hay desglose confirmado por nombre real de acción de conversión para este corte.
  - No hay datos de exportación manual de GA4 cargados para conciliar este corte.

---

## 5) Rendimiento por campaña
| Campaña | Impresiones | Clics | CTR | CPC prom. | Costo | Conversiones | Tasa conv. | Costo/conv. | Estado |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Search \| Leads \| Tabiques Sanitarios \| AR \| Diario 10K | 1942 | 257 | 13.23% | $1,183.33 | $304,115.57 | 48 | 18.68% | $6,335.74 | ENABLED |
| Search \| Leads \| Tabiques Sanitarios \| AR | 0 | 0 | — | — | — | — | — | — | ENABLED |
| Search \| Leads \| Tabiques Sanitarios \| AR #2 | 0 | 0 | — | — | — | — | — | — | ENABLED |

### Observaciones por campaña
- **Diario 10K** concentró el 100% de la entrega, el gasto y las conversiones del mes.
- Las otras dos campañas permanecieron habilitadas, pero sin actividad real durante el período.

---

## 6) Rendimiento por grupo de anuncios
| Campaña | Grupo de anuncios | Impresiones | Clics | CTR | CPC prom. | Costo | Conversiones | Observación |
|---|---|---:|---:|---:|---:|---:|---:|---|
| Search \| Leads \| Tabiques Sanitarios \| AR \| Diario 10K | Tabiques Sanitarios | 1942 | 257 | 13.23% | $1,183.33 | $304,115.57 | 48 | Único grupo con entrega real |
| Search \| Leads \| Tabiques Sanitarios \| AR | [Sin entrega] | 0 | 0 | — | — | — | — | Sin actividad en junio |
| Search \| Leads \| Tabiques Sanitarios \| AR #2 | [Sin entrega] | 0 | 0 | — | — | — | — | Sin actividad en junio |

### Observaciones
- La estructura efectiva siguió reducida a un solo grupo activo.
- No hubo diversificación operativa real entre campañas o grupos.

---

## 7) Términos de búsqueda y keywords
### Keywords con mejor rendimiento
- **tabiques para baños** PHRASE: 548 impresiones, 62 clics, $80,929.34, 13.5 conversiones.
- **divisiones sanitarias** PHRASE: 405 impresiones, 60 clics, $58,191.77, 11 conversiones.
- **tabiques sanitarios** EXACT: 192 impresiones, 23 clics, $31,457.32, 7 conversiones.
- **tabiques sanitarios** PHRASE: 225 impresiones, 27 clics, $29,404.35, 5 conversiones.
- **boxes sanitarios** PHRASE: 168 impresiones, 29 clics, $47,574.94, 4.5 conversiones.

### Términos relevantes
- **tabiques sanitarios**: 77 impresiones, 12 clics, 7 conversiones.
- **divisores sanitarios**: 14 impresiones, 5 clics, 2 conversiones.
- **divisorios de baños publicos**: 8 impresiones, 2 clics, 2 conversiones.
- **box sanitarios**: 15 impresiones, 5 clics, 1.5 conversiones.
- **divisiones para baños**: 7 impresiones, 5 clics, 1 conversión.
- **divisiones para baños públicos**: 5 impresiones, 3 clics, 1 conversión.

### Términos a revisar manualmente
No se aplican negativas automáticas con esta extracción. Se identifican términos a revisar manualmente antes de excluir:
- **tabiques divisorios para baños**
- **tabique sanitario**
- **box de baños publicos**
- **tabiques sanitarios melamina**
- **panel sanitario**
- Búsquedas orientadas a materiales o usos periféricos cuando no coincidan con tabiques sanitarios comerciales.

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

Nota: la extracción utilizada contiene métricas de rendimiento, no historial de cambios de configuración.

---

## 9) Problemas, riesgos o anomalías
- El costo por conversión subió frente a mayo pese a sostener el mismo volumen de conversiones.
- Toda la operación depende de una sola campaña con entrega real.
- Sigue pendiente la validación manual entre GA4, `click_whatsapp` y Google Ads.
- El desglose por acción de conversión continúa limitado por la consulta disponible en la API.

---

## 10) Decisiones sugeridas para el próximo período
- Mantener activa la campaña **Diario 10K** sin escalar presupuesto automáticamente.
- Revisar términos de búsqueda con clics sin conversión para depurar tráfico evitable.
- Monitorear de cerca el costo de **tabiques para baños** y **boxes sanitarios**, que aportan volumen pero absorben gasto relevante.
- Verificar manualmente la base de medición antes de tomar decisiones de escalado más agresivas.

---

## 11) Evidencias y referencias
- JSON bruto local: `/home/beto/Documentos/Github/mcp-google-ads/AUXILIAR/google-ads-2026-06.json`
- Reporte anterior de mayo: `/home/beto/Documentos/Github/mandarin-google-ads/AUXILIAR/Mandarin INFORME DE ESTADO CAMPAÑA-mayo quincena 2.pdf`
- Reporte abril: `docs/06_reportes/reporte-2026-04.md`
- Plantilla: `docs/06_reportes/plantilla-reporte-mensual.md`
- Metodología de conciliación Ads-GA4: `docs/analytics/analisis-ga4-mensual.md`

---

## 12) Cierre

### Estado recomendado del siguiente período
- [ ] Escalar
- [x] Mantener
- [x] Corregir base de medición antes de escalar
- [ ] Replantear estructura de campaña
