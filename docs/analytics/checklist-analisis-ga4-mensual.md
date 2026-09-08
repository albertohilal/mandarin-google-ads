# Checklist de análisis mensual GA4

## Propósito
Estandarizar un procedimiento reproducible para exportar, validar y conciliar datos mensuales de GA4 con Google Ads antes de cerrar el reporte operativo.

## Alcance
Aplica al análisis mensual de Mandarin mientras la conciliación se base en exportaciones manuales de GA4 y validaciones técnicas puntuales. No reemplaza la metodología fuente ni implica cambios productivos de tracking.

## Estado
Pendiente validación

## Fecha de actualización
2026-09-08

---

## Referencias
- Metodología fuente: `docs/analytics/analisis-ga4-mensual.md`
- Fuente global de conversiones: `docs/01_base_tecnica/conversiones.md`
- Seguimiento técnico de WhatsApp: `docs/analytics/evento_whatsapp.md`
- Plantilla del reporte: `docs/06_reportes/plantilla-reporte-mensual.md`

---

## A) Preparación del período
- [ ] Registrar período analizado: `YYYY-MM-DD a YYYY-MM-DD`.
- [ ] Definir y registrar el período comparativo.
- [ ] Registrar la zona horaria usada en Google Ads y en GA4.
- [ ] Registrar la propiedad de GA4 utilizada.
- [ ] Registrar la cuenta de Google Ads utilizada.
- [ ] Confirmar que el período de ambas plataformas es exactamente el mismo.
- [ ] Registrar para cada exportación el período cubierto, la fuente/origen, la fecha de extracción, el hash del archivo cuando esté disponible y la evidencia utilizada.

## B) Exportaciones manuales desde GA4
- [ ] Exportar adquisición de tráfico del período.
- [ ] Exportar eventos del período.
- [ ] Exportar eventos clave del período.
- [ ] Exportar páginas de destino del período.
- [ ] Exportar fuente/medio del período.
- [ ] Exportar o filtrar el canal `Paid Search`.
- [ ] Exportar o filtrar tráfico `google / cpc`.
- [ ] Guardar los archivos originales en `data/ga4/YYYY-MM/raw/` con convención de nombres consistente.
- [ ] Registrar si alguna exportación no estuvo disponible o no expuso las columnas necesarias.
- [ ] No completar exportaciones ausentes o campos faltantes con cero; marcar el dato como `no calculable`.

## C) Validación técnica actual
- [ ] Abrir Tag Assistant sobre la landing vigente.
- [ ] Abrir Tiempo real o DebugView en la propiedad correcta de GA4.
- [ ] Ejecutar un clic de prueba en WhatsApp.
- [ ] Registrar qué evento se observó realmente.
- [ ] Si el evento observado fue `click`, revisar `link_domain`.
- [ ] Si el evento observado fue `click`, revisar `link_url`.
- [ ] Si el evento observado fue `click`, revisar `outbound`.
- [ ] Si el evento observado fue `click`, revisar `page_location`.
- [ ] Registrar el filtro operativo completo: `event_name=click`, `link_domain=api.whatsapp.com`, `outbound=true`.
- [ ] Conservar `link_url` como evidencia útil de la URL saliente.
- [ ] Mantener separado `click_whatsapp` (esperado/configurado, no confirmado como disparo) del `click` observado y de la acción de Ads `Whatsapp`.
- [ ] Verificar si hubo una única activación o indicios de duplicación.
- [ ] Revisar la acción `Whatsapp` en Google Ads y registrar su fuente y estado.

## D) Conciliación
- [ ] Registrar conversiones atribuidas por Google Ads para el período.
- [ ] Registrar total de eventos de WhatsApp observables en GA4.
- [ ] Registrar total de usuarios distintos asociados en GA4.
- [ ] Registrar total de sesiones asociadas en GA4.
- [ ] Registrar eventos de WhatsApp procedentes de `google / cpc` o `Paid Search`.
- [ ] Registrar usuarios procedentes de `google / cpc` o `Paid Search`.
- [ ] Dejar explícito que la comparación principal usa conversiones atribuidas por Google Ads contra eventos de WhatsApp procedentes de tráfico pago en GA4.
- [ ] Confirmar antes de calcular que existen período coincidente, origen de tráfico, exportaciones completas, filtro operativo, metadatos y evidencia suficiente de Ads y GA4.
- [ ] Si falta cualquier evidencia requerida, registrar la conciliación como `no calculable` y no como cero.
- [ ] Solo con evidencia suficiente, calcular `diferencia_en_unidades = eventos_whatsapp_trafico_pago_ga4 - conversiones_atribuidas_google_ads`.
- [ ] Solo con evidencia suficiente y denominador distinto de cero, calcular `diferencia_porcentual = ((eventos_whatsapp_trafico_pago_ga4 - conversiones_atribuidas_google_ads) / conversiones_atribuidas_google_ads) * 100`.
- [ ] Si Google Ads registra 0 conversiones, documentar que la diferencia porcentual requiere una nota metodológica específica.
- [ ] Documentar explicación de la diferencia observada.
- [ ] Registrar si la conciliación es completa, parcial o pendiente.
- [ ] Mantener la validación comercial separada de los resultados de Google Ads y GA4.
- [ ] No presentar un clic, conversión atribuida o evento de GA4 como lead, conversación, venta o cliente sin evidencia comercial independiente.

## E) Cierre
- [ ] Definir nivel de confiabilidad del análisis: alta, media o baja.
- [ ] Enumerar limitaciones del período.
- [ ] Registrar decisiones permitidas con la evidencia disponible.
- [ ] Registrar decisiones que deben esperar validación adicional.
- [ ] Volcar el resumen final en el reporte mensual.
- [ ] Guardar, si corresponde, archivos derivados en `data/ga4/YYYY-MM/processed/`.
- [ ] Repetir en cada derivado la trazabilidad del origen: período, fuente/origen, fecha de extracción, hash cuando esté disponible y evidencia utilizada.
