# Plantilla de reporte mensual de Google Ads

## Propósito
Estandarizar el informe mensual de rendimiento para análisis, control de medición y toma de decisiones operativas en campañas de Google Ads.

## Alcance
Aplica al análisis mensual de campañas activas, su calidad de medición y las decisiones de optimización del siguiente período.

## Estado
Vigente

## Fecha de actualización
2026-09-08

---

## 1) Datos generales del informe
- **Cliente:** [Completar]
- **Período analizado:** [YYYY-MM-DD a YYYY-MM-DD]
- **Responsable del informe:** [Nombre y rol]
- **Fuentes de datos utilizadas:** [Google Ads / GA4 / capturas / logs / otros]
- **Trazabilidad de fuentes:** [Período / fuente u origen / fecha de extracción / hash si está disponible / evidencia utilizada]
- **Tipo de base del informe (marcar una):**
  - [ ] Datos consolidados
  - [ ] Datos parciales
  - [ ] Evidencia manual / capturas
- **Nivel de confiabilidad del reporte (marcar una):**
  - [ ] Alta
  - [ ] Media
  - [ ] Baja
- **Justificación del nivel de confiabilidad:** [Explicar en 2-4 líneas]

## 2) Resumen ejecutivo
### Principales hallazgos
- [Hallazgo 1]
- [Hallazgo 2]
- [Hallazgo 3]

### Diagnóstico general del período
- [Síntesis ejecutiva del desempeño: volumen, eficiencia y calidad de resultados]

### Limitaciones del análisis
- [Limitación de datos / tracking / ventana temporal / cambios durante el período]

## 3) Scorecard principal
| Métrica | Valor del período | Variación vs período anterior | Observación |
|---|---:|---:|---|
| Impresiones | [ ] | [ ] | [ ] |
| Clics | [ ] | [ ] | [ ] |
| CTR | [ ] | [ ] | [ ] |
| CPC promedio | [ ] | [ ] | [ ] |
| Costo | [ ] | [ ] | [ ] |
| Conversiones | [ ] | [ ] | [ ] |
| Tasa de conversión | [ ] | [ ] | [ ] |
| Costo por conversión | [ ] | [ ] | [ ] |

## 4) Estado de medición y conversiones
### Estado global de tracking
- [Vigente / Pendiente validación / Incidencias]
- [Detalle breve de estado de GA4 y Google Ads]

### Google Ads
- **Conversiones atribuidas por Google Ads:** [Cantidad y alcance del dato]
- **Modelo o fuente disponible:** [Sitio web / importación / no verificado / otro; no asumir importación desde GA4]
- **Costo por conversión:** [Valor del período]

### GA4
- **Evento observado:** [`click` con filtro `event_name=click`, `link_domain=api.whatsapp.com`, `outbound=true` / `click_whatsapp` no confirmado / no verificado]
- **Total de eventos de WhatsApp registrados por GA4:** [Valor del período]
- **Usuarios totales asociados:** [Valor del período]
- **Sesiones totales asociadas:** [Valor del período]
- **Eventos de WhatsApp procedentes de `google / cpc` o `Paid Search`:** [Valor comparable principal en GA4]
- **Usuarios procedentes de `google / cpc` o `Paid Search`:** [Valor complementario]
- **Páginas de destino con mayor interacción:** [Resumen breve]
- **Estado de validación:** [Validado / Parcial / Pendiente]

### Conciliación Ads-GA4
- **Valor comparable principal:** [Conversiones atribuidas por Google Ads vs eventos GA4 que cumplen el filtro de WhatsApp y provienen de tráfico pago]
- **Diferencia absoluta:** [Valor]
- **Diferencia porcentual:** [Valor]
- **Causas posibles:** [Resumen breve]
- **Conclusión:** [Síntesis operativa]
- **Nivel de confiabilidad:** [Alta / Media / Baja]
- **Regla de cálculo:** [Si falta evidencia suficiente, período coincidente, origen o exportación requerida, registrar `no calculable`; no usar cero para datos ausentes]

### Regla editorial obligatoria
- Usar “conversiones atribuidas por Google Ads” cuando no exista validación suficiente.
- Usar “eventos de WhatsApp registrados por GA4” cuando se hable de GA4.
- Reservar “contactos comerciales” para datos confirmados por una fuente comercial o por una validación que permita sostener esa equivalencia.
- No equiparar un clic técnico, una conversión atribuida por Ads o un evento de GA4 con un lead, una conversación, una venta o un cliente.
- Mantener la validación comercial separada de los resultados de Google Ads y GA4.

### Metodología aplicable
- Resumir aquí solo el resultado del período.
- La conciliación principal no compara Google Ads contra todos los eventos de WhatsApp de GA4.
- El valor comparable en GA4 debe limitarse a eventos de WhatsApp que cumplan el filtro operativo y procedan de `google / cpc` o `Paid Search`.
- La metodología mensual y el checklist operativo se mantienen en:
  - [docs/analytics/analisis-ga4-mensual.md](../analytics/analisis-ga4-mensual.md)
  - [docs/analytics/checklist-analisis-ga4-mensual.md](../analytics/checklist-analisis-ga4-mensual.md)
- La acción de Ads `Whatsapp`, el `click` observado en GA4 y `click_whatsapp` son señales distintas; no afirmar conciliación si falta la evidencia requerida.

## 5) Rendimiento por campaña
| Campaña | Impresiones | Clics | CTR | CPC prom. | Costo | Conversiones | Tasa conv. | Costo/conv. | Estado |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| [Nombre campaña 1] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| [Nombre campaña 2] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

### Observaciones por campaña
- [Campaña X: hallazgo principal y decisión sugerida]
- [Campaña Y: hallazgo principal y decisión sugerida]

## 6) Rendimiento por grupo de anuncios
| Campaña | Grupo de anuncios | Impresiones | Clics | CTR | CPC prom. | Costo | Conversiones | Observación |
|---|---|---:|---:|---:|---:|---:|---:|---|
| [Campaña] | [Grupo 1] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| [Campaña] | [Grupo 2] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

### Observaciones
- [Grupos con mejor relación costo/conversión]
- [Grupos con bajo rendimiento que requieren ajuste]

## 7) Términos de búsqueda y keywords
### Términos relevantes
- [Término + motivo de relevancia]

### Términos irrelevantes
- [Término + motivo de exclusión]

### Negativas agregadas o sugeridas
- [Negativa aplicada o propuesta]

### Oportunidades detectadas
- [Keyword nueva / ajuste de concordancia / nuevo grupo]

## 8) Cambios aplicados durante el período
### Cambios de puja
- [Qué se cambió, cuándo y por qué]

### Cambios de anuncios
- [Qué se editó/activó/pausó y motivo]

### Cambios de segmentación
- [Ubicaciones, horarios, audiencias u otros]

### Cambios de negativas
- [Lista breve de cambios]

### Cambios de tracking
- [Evento, ajuste, validación y estado]

## 9) Problemas, riesgos o anomalías
### Tracking
- [Riesgo o incidencia]

### Volumen
- [Riesgo o incidencia]

### Calidad de lead
- [Riesgo o incidencia]

### Gasto
- [Riesgo o incidencia]

### Inconsistencia de datos
- [Riesgo o incidencia]

## 10) Decisiones sugeridas para el próximo período
### Acciones prioritarias
- [Acción 1]
- [Acción 2]
- [Acción 3]

### Acciones opcionales
- [Acción opcional 1]
- [Acción opcional 2]

### Decisiones que requieren validación
- [Decisión + quién valida + fecha objetivo]

## 11) Evidencias y referencias
### Evidencias
- [Ruta a capturas relevantes en `capturas/`]
- [Ruta a registros en `logs/`]
- [Enlaces a exportes o reportes auxiliares]

### Documentos relacionados del repo
- [docs/01_base_tecnica/conversiones.md](../01_base_tecnica/conversiones.md)
- [docs/analytics/evento_whatsapp.md](../analytics/evento_whatsapp.md)
- [docs/analytics/analisis-ga4-mensual.md](../analytics/analisis-ga4-mensual.md)
- [docs/analytics/checklist-analisis-ga4-mensual.md](../analytics/checklist-analisis-ga4-mensual.md)
- [docs/checklist-publicacion.md](../checklist-publicacion.md)

## 12) Cierre
### Conclusión operativa breve
- [Resumen ejecutivo final en 3-5 líneas]

### Estado recomendado del siguiente período
- [ ] Escalar
- [ ] Mantener
- [ ] Corregir base de medición antes de escalar
- [ ] Replantear estructura de campaña

---

## Nota de uso
Esta plantilla puede completarse con datos consolidados, parciales o evidencia manual. Cuando haya limitaciones de datos, documentar explícitamente el nivel de confiabilidad y las decisiones condicionadas a validación posterior.
