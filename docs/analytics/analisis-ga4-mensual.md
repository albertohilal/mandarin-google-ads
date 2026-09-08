# Análisis mensual GA4 para conciliación con Google Ads

## Propósito
Definir el proceso documental y analítico para contrastar, en cada cierre mensual, las conversiones atribuidas por Google Ads con los eventos observables en GA4, sin asumir equivalencias no validadas.

## Alcance
Aplica a los reportes mensuales de Mandarin, a la lectura operativa de conversiones de WhatsApp y a la preparación de insumos para una futura automatización del análisis. No modifica tracking productivo ni reemplaza la fuente global de conversiones del proyecto.

## Estado
Pendiente validación

## Fecha de actualización
2026-09-08

---

## 1) Relación con otros documentos
- Fuente global de conversiones: `docs/01_base_tecnica/conversiones.md`
- Fuente técnica del seguimiento de WhatsApp: `docs/analytics/evento_whatsapp.md`
- Plantilla de reporte mensual: `docs/06_reportes/plantilla-reporte-mensual.md`
- Checklist operativo del proceso: `docs/analytics/checklist-analisis-ga4-mensual.md`

Este documento es la fuente de verdad para el procedimiento mensual de análisis y conciliación Ads-GA4.

**Estado actual:** `data/ga4/` contiene únicamente su README, sin exportaciones `raw/` ni resultados `processed/`; por lo tanto, la conciliación Ads-GA4 del estado actual es **no calculable**, no cero.

---

## 2) Objetivo del análisis mensual
El análisis mensual debe responder, con trazabilidad documental, qué está midiendo Google Ads, qué está registrando GA4 y qué afirmaciones son sostenibles en el reporte al cliente.

Preguntas mínimas del análisis:

1. ¿Cuántas conversiones atribuye Google Ads?
2. ¿Cuántos eventos relacionados con WhatsApp registra GA4?
3. ¿Cuántos usuarios distintos realizaron esos eventos?
4. ¿Cuántos eventos o usuarios provienen de `google / cpc` o `Paid Search`?
5. ¿Qué evento registra GA4 realmente: `click_whatsapp` o `click`?
6. Si se usa `click`, ¿cumple el filtro `event_name=click`, `link_domain=api.whatsapp.com`, `outbound=true` y conserva `link_url` como evidencia útil?
7. ¿Existen indicios de eventos duplicados?
8. ¿Qué páginas de destino producen más interacciones?
9. ¿Qué diferencia existe entre Google Ads y GA4?
10. ¿Qué afirmaciones pueden realizarse de forma confiable en el informe para el cliente?

---

## 3) Fuentes de datos admitidas

### Google Ads API
Fuente para obtener conversiones atribuidas por campaña, costo, tasa de conversión y costo por conversión dentro del período analizado.

### Exportaciones manuales de GA4
Fuente transitoria para revisar eventos, usuarios, sesiones, páginas de destino y procedencia del tráfico sin depender todavía de GA4 Data API.

### Pruebas técnicas con Tiempo real o DebugView
Fuente de validación puntual para determinar qué evento entra realmente a GA4 y con qué parámetros, especialmente en el flujo de WhatsApp.

### Metadatos de cada exportación
Toda exportación futura debe conservar, junto con el archivo o en un registro asociado, el período cubierto, la fuente/origen, la fecha de extracción, el hash del archivo cuando esté disponible y la evidencia utilizada para interpretar el dato.

---

## 4) Diferencias conceptuales que no deben colapsarse

### Conversiones atribuidas por Google Ads
Son resultados adjudicados por el modelo de atribución y la configuración de conversiones de Google Ads. No equivalen automáticamente a eventos crudos ni a contactos comerciales confirmados.

### Eventos registrados por GA4
Son ocurrencias técnicas medidas por GA4. Pueden representar clics, interacciones o eventos clave, pero no implican por sí solos atribución publicitaria ni calidad comercial.

### Usuarios que realizan eventos
Representan usuarios distintos asociados a esos eventos. Un usuario puede generar múltiples eventos dentro del mismo período.

### Sesiones
Representan sesiones atribuidas a una fuente/canal. No equivalen a eventos ni a usuarios únicos.

### Clics reales
Son interacciones efectivas sobre un enlace o CTA. Pueden observarse en GA4 como `click` u otro nombre, y pueden diferir de la forma en que Google Ads computa conversiones.

### Contactos comerciales confirmados
Son contactos validados por una fuente comercial o por una validación que permita sostener la equivalencia entre medición técnica y resultado de negocio.

### Validación comercial independiente
La validación comercial se realiza fuera de Google Ads y GA4, con evidencia del negocio. Un clic técnico, una conversión atribuida, un evento o un usuario medido no debe presentarse como lead, conversación, venta o cliente sin esa validación independiente.

### Regla de interpretación
Ninguno de estos valores debe tratarse automáticamente como equivalente a otro sin validación adicional del evento, del origen del tráfico y del criterio comercial.

---

## 5) Criterios para no asumir equivalencias automáticas
- Google Ads puede atribuir conversiones por reglas y ventanas que no coinciden con la lectura de eventos en GA4.
- GA4 puede registrar un clic técnico sin que eso implique una conversión atribuida en Ads.
- Un mismo usuario puede generar más de un evento.
- Una sesión puede contener varios eventos o ningún evento relevante.
- Un clic a WhatsApp no equivale automáticamente a un contacto comercial confirmado.
- Mientras `click_whatsapp` no esté validado y el evento observado siga pudiendo ser `click`, debe documentarse esa desalineación.
- La observación operativa actual de WhatsApp se identifica con `event_name=click`, `link_domain=api.whatsapp.com`, `outbound=true`; `link_url` se conserva como evidencia útil.
- La conciliación principal no debe comparar Google Ads contra todos los eventos de WhatsApp de GA4, porque ese total puede incluir tráfico orgánico, directo, referido u otros canales no comparables con la atribución publicitaria analizada.

---

## 6) Dimensiones y métricas mínimas necesarias

### Google Ads
- Período analizado
- Campaña
- Conversiones
- Costo
- Tasa de conversión
- Costo por conversión

### GA4
- Rango de fechas exportado
- Nombre del evento
- Cantidad total de eventos relacionados con WhatsApp
- Usuarios totales asociados a esos eventos
- Sesiones totales asociadas
- Cantidad de eventos relacionados con WhatsApp procedentes de `google / cpc` o `Paid Search`
- Cantidad de usuarios procedentes de `google / cpc` o `Paid Search`
- Fuente / medio
- Grupo de canales, con foco en `Paid Search`
- Página de destino o página asociada a la interacción
- Parámetros de validación técnica cuando se observe `click`: `link_domain`, `link_url`, `outbound`, `page_location`
- Metadatos de trazabilidad: período, fuente/origen, fecha de extracción, hash del archivo cuando esté disponible y evidencia utilizada

Si la exportación manual no expone alguno de estos campos en un informe puntual, la limitación debe quedar registrada en el reporte mensual.

---

## 7) Metodología de conciliación Ads-GA4

### Valor comparable principal
La conciliación principal del período debe comparar exclusivamente:

- **Google Ads:** conversiones atribuidas por Google Ads.
- **GA4:** eventos que cumplan el filtro operativo de WhatsApp y procedan de `google / cpc` o `Paid Search`.

El evento técnico observado actualmente en GA4 es el evento genérico `click` filtrado por `event_name=click`, `link_domain=api.whatsapp.com` y `outbound=true`. `click_whatsapp` es esperado/configurado, pero no está confirmado como evento que esté disparando. La acción `Whatsapp` de Google Ads es una conversión de sitio web y no se debe asumir que sea una importación de GA4.

### Métricas complementarias
Se registran por separado, como contexto y no como valor principal de comparación:

- total de eventos relacionados con WhatsApp en GA4;
- usuarios totales asociados;
- sesiones asociadas;
- eventos relacionados con WhatsApp procedentes de tráfico pago;
- usuarios procedentes de tráfico pago.

### Fórmulas de conciliación

Las fórmulas solo pueden aplicarse cuando exista evidencia suficiente de ambas plataformas: mismo período y zona horaria, acción `Whatsapp` identificada en Google Ads, exportación de GA4 con el filtro operativo y el origen de tráfico requerido, metadatos de trazabilidad y evidencia técnica documentada. La validación comercial se registra por separado y no convierte esta conciliación técnica en un resultado comercial. Si falta cualquiera de los elementos técnicos requeridos, el resultado debe ser **`no calculable`** y no un cero.

```text
diferencia_en_unidades =
eventos_whatsapp_trafico_pago_ga4
- conversiones_atribuidas_google_ads
```

```text
diferencia_porcentual =
((eventos_whatsapp_trafico_pago_ga4
- conversiones_atribuidas_google_ads)
/ conversiones_atribuidas_google_ads) * 100
```

Si `conversiones_atribuidas_google_ads = 0`, la diferencia porcentual no debe calcularse sin una nota metodológica explícita.

**Regla de valores ausentes:** `0` solo puede usarse cuando la fuente completa y verificable informa cero. Si el dato no está disponible, la exportación es incompleta o la evidencia no permite sostener la comparación, escribir **`no calculable`**; nunca completar el valor ausente con cero.

1. Definir el mismo período para Google Ads y GA4.
2. Registrar zona horaria, propiedad de GA4 y cuenta de Google Ads utilizadas.
3. Obtener de Google Ads la cifra de conversiones atribuidas que se usará en el reporte.
4. Exportar desde GA4 los informes manuales mínimos del período.
5. Validar técnicamente, con Tiempo real o DebugView, qué evento representa hoy el clic de WhatsApp.
6. Si el evento observado es `click`, revisar sus parámetros para confirmar que corresponde a una salida hacia WhatsApp.
7. Contar en GA4:
   - eventos relacionados con WhatsApp totales,
   - usuarios totales asociados,
   - sesiones asociadas,
   - eventos relacionados con WhatsApp procedentes de `google / cpc` o `Paid Search`,
   - usuarios procedentes de `google / cpc` o `Paid Search`,
   - páginas de destino con mayor interacción.
8. Solo si están presentes todas las evidencias requeridas, comparar la cifra de Google Ads exclusivamente con los eventos que cumplan el filtro operativo de WhatsApp y procedan de `google / cpc` o `Paid Search` en GA4, y calcular:
   - diferencia absoluta,
   - diferencia porcentual.
9. Documentar explicación, nivel de confiabilidad y límites de interpretación.
10. Trasladar al reporte mensual solo afirmaciones respaldadas por la evidencia disponible; separar siempre la validación comercial.

---

## 8) Posibles causas de discrepancias
- Diferencias de modelo de atribución entre Google Ads y GA4.
- Ventanas de conversión distintas.
- Desalineación entre `Whatsapp`, `click_whatsapp` y `click`.
- Eventos duplicados por múltiples disparadores.
- Pérdida de medición por consentimiento, bloqueadores o navegación interrumpida.
- Diferencias de zona horaria o cierre de período.
- Tráfico pago identificado en un informe de GA4, pero no en otro por combinación de dimensiones.
- Exportaciones manuales incompletas o limitadas.
- Conversión registrada en Google Ads por medición de sitio web sin equivalencia directa en GA4.

---

## 9) Niveles de confiabilidad del análisis

### Alta
Período cerrado, evento validado técnicamente, una única activación observable, exportaciones completas, misma ventana temporal en ambas plataformas y discrepancias explicadas con evidencia suficiente.

### Media
Datos utilizables para análisis operativo, pero con una o más limitaciones parciales: validación técnica no reciente, dudas sobre el evento real, cobertura incompleta por fuente/medio o discrepancias sin explicación definitiva.

### Baja
Faltan exportaciones clave, no existe validación técnica vigente del evento o la comparación entre Ads y GA4 no permite conclusiones operativas confiables.

---

## 10) Formato esperado de salida
El resultado mensual debe resumirse en tres bloques dentro del reporte:

1. Google Ads: conversiones atribuidas, costo por conversión y contexto de atribución disponible.
2. GA4: evento observado, total de eventos de WhatsApp, usuarios totales, sesiones totales, eventos que cumplen el filtro operativo desde `google / cpc` o `Paid Search`, usuarios desde tráfico pago y páginas de destino relevantes.
3. Conciliación Ads-GA4: comparación principal entre conversiones atribuidas por Google Ads y eventos de WhatsApp desde tráfico pago en GA4, diferencia absoluta, diferencia porcentual, causas posibles, conclusión y nivel de confiabilidad.

Cuando existan archivos auxiliares seguros, el resumen procesado puede guardarse en `data/ga4/YYYY-MM/processed/`.

---

## 11) Qué puede afirmarse y qué no

### Afirmaciones permitidas cuando no haya validación suficiente
- “conversiones atribuidas por Google Ads”
- “eventos de WhatsApp registrados por GA4”
- “usuarios que realizaron eventos asociados a WhatsApp en GA4”
- “conciliación pendiente” o “conciliación parcial”
- “conciliación no calculable por falta de evidencia suficiente”

### Afirmaciones que deben evitarse sin validación adicional
- que las conversiones de Google Ads equivalen exactamente a contactos reales;
- que `click_whatsapp` está validado si la prueba vigente solo muestra `click`;
- que un evento de GA4 representa por sí mismo una oportunidad comercial confirmada.
- que un clic técnico, una conversión atribuida o un evento de GA4 equivale a un lead, una conversación, una venta o un cliente.

---

## 12) Fase posterior: automatización con GA4 Data API
La automatización con GA4 Data API queda fuera de esta fase.

### Condición de fase posterior
Implementar esa automatización solo cuando existan insumos reales y definición operativa cerrada.

### Insumos necesarios para iniciar la implementación
- una muestra real de cada CSV exportado desde GA4;
- definición de columnas esperadas por informe;
- decisión sobre idioma de exportación;
- política de versionado de archivos crudos y procesados;
- método de autenticación para GA4 Data API;
- prueba técnica vigente del evento de WhatsApp realmente observado en producción.

### Fuera de alcance actual
- conexión a GA4 Data API;
- OAuth o cuentas de servicio;
- parser CSV definitivo;
- dashboard;
- automatización programada;
- datos simulados presentados como reales.
