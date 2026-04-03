# Reporte mensual de Google Ads – Marzo 2026

## Propósito
Documentar el desempeño mensual de la cuenta de Google Ads de Mandarin para el período 01/03/2026–31/03/2026, con foco en métricas de rendimiento, estado real de medición y decisiones operativas para el siguiente período.

## Alcance
Aplica al análisis mensual de campañas activas, su rendimiento en Google Ads y la utilidad operativa del sistema de reporting vigente al cierre de marzo de 2026.

## Estado
Vigente

## Fecha de actualización
2026-04-03

---

## 1) Datos generales del informe
- **Cliente:** Mandarin
- **Período analizado:** 2026-03-01 a 2026-03-31
- **Responsable del informe:** [Completar]
- **Fuentes de datos utilizadas:** Google Ads (interfaz), Google Ads Scripts Preview, Google Analytics 4 DebugView, validación manual de landing, documentación operativa del repositorio
- **Tipo de base del informe:**
  - [x] Datos consolidados
  - [ ] Datos parciales
  - [x] Evidencia manual / capturas
- **Nivel de confiabilidad del reporte:**
  - [ ] Alta
  - [x] Media
  - [ ] Baja
- **Justificación del nivel de confiabilidad:** El informe se apoya en datos consolidados de Google Ads, una validación manual real de la landing y una revisión directa de GA4 y Google Ads. La confiabilidad sigue siendo media porque la trazabilidad entre GA4 y Google Ads no está completamente alineada por nombre de evento: el clic real a WhatsApp se observó en GA4 como `click` y no como `click_whatsapp`.

---

## 2) Resumen ejecutivo

### Principales hallazgos
- Durante marzo de 2026 la cuenta registró **3011 impresiones**, **237 clics**, **CTR de 7.87%**, **costo de $224720.18** y **32.94 conversiones**.
- En marzo coexistieron **3 campañas**, pero solo **2 tuvieron entrega real** y aportaron tráfico y conversiones.
- La campaña **Search | Leads | Tabiques Sanitarios | AR** fue la más eficiente en **costo por conversión**, con **$5973.95**, por debajo del promedio de cuenta.
- La campaña **Search | Leads | Tabiques Sanitarios | AR | Diario 10K** mostró mejor **CTR** y mejor **tasa de conversión post clic**, pero peor **costo por conversión**, con **$7970.24**.
- La campaña **Search | Leads | Tabiques Sanitarios | AR #2** existió en el período, pero **no registró entrega relevante**.
- La medición operativa vigente hoy se concentra en **WhatsApp**.
- En la validación manual realizada, el clic real a WhatsApp se observó en **GA4 DebugView** como evento genérico **`click`** con parámetros de enlace saliente hacia `api.whatsapp.com`, no como `click_whatsapp`.
- En **Google Ads** existe la conversión **`Whatsapp`** de fuente **Sitio web**, asociada a la landing y con conversiones registradas.
- La campaña vigente quedó ajustada para optimizar con **objetivo específico de campaña = `Contactos`**, evitando mezclar señales de formulario o cotización.

### Diagnóstico general del período
El período muestra una base de rendimiento utilizable para toma de decisiones. La cuenta tuvo volumen suficiente para obtener señales iniciales de eficiencia entre campañas y términos de búsqueda. Marzo debe leerse como un mes de **transición operativa** entre campañas con presupuesto total y campaña con presupuesto diario.

La campaña vigente no presenta un problema de respuesta básica del tráfico, sino principalmente un problema de **eficiencia de costo**, dado que compra clics más caros que la campaña histórica con mejor CPA.

A nivel de medición, la validación manual confirmó que el recorrido real de WhatsApp funciona y que Google Ads registra conversiones sobre la landing. Sin embargo, la trazabilidad con GA4 no está completamente alineada a nivel de nombre de evento, ya que el clic observado entró como `click` y no como `click_whatsapp`.

### Limitaciones del análisis
- Este informe se basa principalmente en Google Ads.
- La validación con GA4 se hizo de forma manual sobre DebugView.
- Las conversiones aparecen con decimales, por lo que deben interpretarse dentro de la lógica de atribución/reporting de Google Ads y no como conteo manual de leads cerrados.
- La clasificación de términos sospechosos es orientativa y no implica acción automática.
- La verificación manual confirmó el clic real a WhatsApp, pero no confirmó que `click_whatsapp` esté disparando como evento efectivo en GA4 durante la prueba.

---

## 3) Scorecard principal

| Métrica | Valor del período | Variación vs período anterior | Observación |
|---|---:|---:|---|
| Impresiones | 3011 | [Completar] | Volumen base suficiente para análisis inicial |
| Clics | 237 | [Completar] | Tráfico útil para evaluación comparativa |
| CTR | 7.87% | [Completar] | Nivel aceptable para campaña de búsqueda |
| CPC promedio | $948.19 | [Completar] | Calculado como costo / clics |
| Costo | $224720.18 | [Completar] | Inversión total del período |
| Conversiones | 32.94 | [Completar] | Dato de Google Ads para el período |
| Tasa de conversión | 13.90% | [Completar] | Calculada como conversiones / clics |
| Costo por conversión | $6822.44 | [Completar] | Promedio general de cuenta |

---

## 4) Estado de medición y conversiones

### Estado global de tracking
- Estado general: **medición limitada pero operativa**
- La única medición real vigente para campaña es **WhatsApp**.
- La validación manual confirmó que el botón de WhatsApp funciona, abre `api.whatsapp.com` y genera un evento observable en GA4.
- La base de medición en Google Ads permitió obtener conversiones para marzo 2026.
- Sigue siendo recomendable fortalecer la trazabilidad entre landing, GA4 y Google Ads para que el evento real de WhatsApp quede alineado también por nombre.

### Conversiones consideradas
- **WhatsApp / `click_whatsapp`:** conversión operativa vigente y principal referencia de campaña.
- **form_submit:** no vigente para campaña. Puede existir markup residual en HTML, pero no se renderiza en frontend operativo y no debe considerarse conversión activa.
- **click_tel:** no existe en la landing actual y no forma parte del alcance operativo.

### Resultado de validación manual de `click_whatsapp`
- Se realizó una prueba manual sobre la landing con **Tag Assistant + GA4 DebugView**.
- El clic en el botón de WhatsApp abrió correctamente una URL hacia `api.whatsapp.com`.
- En **GA4 DebugView**, la interacción se registró como evento **`click`**.
- Los parámetros visibles del evento confirmaron:
  - `link_domain = api.whatsapp.com`
  - `link_url` correspondiente a la URL de WhatsApp
  - `outbound = true`
  - `page_location` dentro de la landing auditada
- En la misma validación, **no se observó el disparo efectivo de `click_whatsapp`** en DebugView.

### Estado de `click_whatsapp` en GA4
- `click_whatsapp` existe en GA4 como **evento clave**.
- En la revisión manual de la propiedad, ese evento figura con **“No se han detectado datos de flujo”**.
- Por lo tanto, hoy no puede afirmarse que la trazabilidad real en GA4 esté entrando por `click_whatsapp`; lo observado en la prueba fue un `click` saliente hacia WhatsApp.

### Estado de la conversión `Whatsapp` en Google Ads
- Existe una acción de conversión llamada **`Whatsapp`**.
- Fuente: **Sitio web**.
- La acción está asociada a la landing `https://mandarinsa.com.ar/mandarinsa`.
- La landing registra conversiones para esa acción.
- Google Ads muestra alerta de **conversiones avanzadas** con problemas de configuración, pero no de ausencia total de medición.
- La conversión no proviene de importación de GA4; se administra como conversión de sitio web.

### Ajuste realizado en objetivos de campaña
- La campaña vigente **Search | Leads | Tabiques Sanitarios | AR | Diario 10K** estaba optimizando contra objetivos mezclados:
  - Enviar formularios de clientes potenciales
  - Contactos
  - Solicitar cotizaciones
- Se ajustó la campaña para usar **objetivo específico de campaña = `Contactos`**.
- Ese cambio alinea mejor la optimización con la conversión operativa real hoy utilizada en campaña.

### Inconsistencias detectadas
- El clic real de WhatsApp observado en GA4 entra como **`click`** y no como **`click_whatsapp`**.
- `click_whatsapp` existe configurado en GA4, pero no mostró flujo reciente en la validación manual.
- Google Ads sí registra conversiones de WhatsApp sobre la landing mediante acción de sitio web.
- Existe desalineación entre el nombre/documentación del evento esperado y el comportamiento efectivamente observado en GA4.

---

## 5) Rendimiento por campaña

| Campaña | Impresiones | Clics | CTR | CPC prom. | Costo | Conversiones | Tasa conv. | Costo/conv. | Estado |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Search \| Leads \| Tabiques Sanitarios \| AR | 2238 | 162 | 7.24% | $698.38 | $113136.86 | 18.94 | 11.69% | $5973.95 | Finalizada el 27/03/2026 |
| Search \| Leads \| Tabiques Sanitarios \| AR \| Diario 10K | 773 | 75 | 9.70% | $1487.78 | $111583.32 | 14.00 | 18.67% | $7970.24 | Vigente |
| Search \| Leads \| Tabiques Sanitarios \| AR #2 | 0 | 0 | — | — | $0.00 | 0.00 | — | $0.00 | Finalizada sin entrega relevante |

### Observaciones por campaña
- **Search | Leads | Tabiques Sanitarios | AR** fue la campaña más eficiente en costo por conversión durante marzo.
- **Search | Leads | Tabiques Sanitarios | AR | Diario 10K** mostró mejor CTR y mejor tasa de conversión post clic, pero con CPC mucho más alto.
- **Search | Leads | Tabiques Sanitarios | AR #2** no aportó volumen ni conversiones en el período y debe tratarse como campaña existente sin impacto real en resultados.
- La diferencia entre campañas sugiere que no alcanza con mirar CTR; el criterio principal debe seguir siendo costo por conversión, costo por clic y calidad del lead.

### Ciclo de vida de campañas
Durante marzo de 2026 coexistieron tres campañas bajo la misma lógica comercial general, pero con dos formatos presupuestarios distintos.

| Campaña | Inicio | Fin | Presupuesto | Tipo | Estrategia de oferta | Observación |
|---|---|---|---|---|---|---|
| Search \| Leads \| Tabiques Sanitarios \| AR | 27/12/2025 | 27/03/2026 | ARS 325.000,00 | Total | Maximiza las conversiones | Campaña histórica con mejor CPA del período |
| Search \| Leads \| Tabiques Sanitarios \| AR \| Diario 10K | 20/03/2026 | Sin fin | ARS 10.000,00/día | Diario | Maximiza las conversiones | Campaña vigente creada para continuidad operativa |
| Search \| Leads \| Tabiques Sanitarios \| AR #2 | 20/03/2026 | 27/03/2026 | ARS 325.000,00 | Total | Maximiza las conversiones | Campaña existente sin entrega relevante |

La campaña `AR` operó con presupuesto total y quedó finalizada el 27/03/2026. Para sostener continuidad operativa, el 20/03/2026 se activó `AR | Diario 10K` con presupuesto diario y sin fecha de finalización. `AR #2` coexistió en ese tramo, pero no generó entrega relevante. Por eso, marzo debe analizarse como un mes de transición entre formatos de campaña y no solo como comparación entre campañas independientes.

### Lectura estratégica de la campaña vigente
La campaña `Search | Leads | Tabiques Sanitarios | AR | Diario 10K` no presenta un problema de respuesta del tráfico: registra mejor CTR y mejor tasa de conversión post clic que la campaña histórica `AR`. Sin embargo, su eficiencia económica es inferior porque el costo por clic es sustancialmente más alto.

La principal línea de optimización para la campaña vigente no es aumentar volumen, sino reducir CPC y mejorar eficiencia de entrada, revisando mezcla de términos, concordancias, puja y segmentación efectiva.

---

## 6) Rendimiento por grupo de anuncios

| Campaña | Grupo de anuncios | Impresiones | Clics | CTR | CPC prom. | Costo | Conversiones | Observación |
|---|---|---:|---:|---:|---:|---:|---:|---|
| Search \| Leads \| Tabiques Sanitarios \| AR \| Diario 10K | Tabiques Sanitarios | 773 | 75 | 9.70% | $1487.78 | $111583.32 | 14.00 | Único grupo activo con datos en el período |

### Observaciones
- En la campaña vigente, marzo muestra un único grupo de anuncios con entrega real.
- Si se quiere profundizar optimización estructural, el siguiente nivel útil es el análisis por términos de búsqueda y CPC.

---

## 7) Términos de búsqueda y keywords

### Términos relevantes
- **"tabiques sanitarios"** → término con volumen y conversiones en ambas campañas.
- **"divisorios de baños"** → término con conversiones en la campaña Diario 10K.
- **"tabiques divisorios de baños precios"** → término con señal comercial clara y conversión.
- **"divisores de baños"** → aparece tanto como término con conversión como también en casos sin conversión; requiere revisión más fina, no descarte automático.
- **"modulos sanitarios"**, **"box sanitarios"**, **"divisiones de aluminio para baños"**, **"separadores baños publicos"** → términos que muestran potencial y deben seguir monitoreándose.

### Términos irrelevantes
- No se identificaron en este corte términos claramente irrelevantes que justifiquen exclusión automática sin revisión adicional.

### Negativas agregadas o sugeridas
- **No sugerir negativas automáticas todavía** sobre los términos marcados por el script como sospechosos.
- Revisar manualmente:
  - `divisores de baños`
  - `tabique sanitario`

### Oportunidades detectadas
- Consolidar y reforzar los términos que combinan intención técnica + sanitaria.
- Revisar si conviene separar mejor campañas o grupos por intención o variante léxica.
- Evaluar si algunos términos de alto costo en la campaña Diario 10K merecen ajuste de concordancia o de anuncio.
- Comparar específicamente el período **20/03/2026–27/03/2026** para entender por qué la campaña diaria compra tráfico más caro.

---

## 8) Cambios aplicados durante el período

### Cambios de puja
- [Completar si hubo cambios documentados adicionales]

### Cambios de anuncios
- [Completar si hubo cambios documentados adicionales]

### Cambios de segmentación
- [Completar si hubo cambios documentados adicionales]

### Cambios de negativas
- [Completar si hubo cambios documentados adicionales]

### Cambios de tracking
- Se validó manualmente el recorrido real del clic de WhatsApp sobre la landing.
- Se confirmó en GA4 DebugView el ingreso de un evento `click` con parámetros de enlace saliente hacia `api.whatsapp.com`.
- Se confirmó que `click_whatsapp` existe como evento clave en GA4, pero no mostró flujo reciente en la revisión manual.
- Se confirmó en Google Ads la existencia de la conversión `Whatsapp` como acción de sitio web asociada a la landing auditada.
- Se detectó alerta de configuración en conversiones avanzadas para la acción `Whatsapp`.

### Cambios operativos de campaña
- La campaña histórica `AR` finalizó el 27/03/2026 por la naturaleza de su presupuesto total.
- Se activó la campaña `AR | Diario 10K` el 20/03/2026 para mantener continuidad operativa mediante presupuesto diario.
- La campaña `AR #2` coexistió en el período, pero no registró entrega relevante.
- La campaña vigente quedó ajustada para optimizar con **objetivo específico de campaña = `Contactos`**.

---

## 9) Problemas, riesgos o anomalías

### Tracking
- Existe desalineación entre el evento esperado `click_whatsapp` y el evento efectivamente observado en GA4, que fue `click`.
- Falta resolver si `click_whatsapp` debe seguir existiendo como evento clave separado o si la medición operativa real va a documentarse y mantenerse sobre el evento genérico `click` filtrado por enlace a WhatsApp.
- La conversión `Whatsapp` de Google Ads tiene alerta de configuración en conversiones avanzadas.

### Volumen
- El volumen es suficiente para señales iniciales, pero todavía moderado para decisiones de automatización más agresivas.

### Calidad de lead
- El informe mide conversiones reportadas; no valida por sí mismo calidad comercial final del lead.

### Gasto
- La campaña Diario 10K tiene costo por conversión más alto y debe seguir bajo observación.
- El principal desvío detectado en la campaña vigente es el **CPC elevado** frente a la campaña histórica `AR`.

### Inconsistencia de datos
- No se observaron inconsistencias relevantes entre interfaz de Google Ads y script mensual para marzo 2026.
- Sí se observó una inconsistencia entre la documentación esperada de `click_whatsapp` y el comportamiento visto en GA4 DebugView durante la prueba manual.

---

## 10) Decisiones sugeridas para el próximo período

### Acciones prioritarias
- Mantener la campaña vigente optimizando con **objetivo específico de campaña = `Contactos`**.
- Priorizar la optimización de la campaña **Search | Leads | Tabiques Sanitarios | AR | Diario 10K** con foco en **bajar CPC**.
- Revisar la ventana **20/03/2026–27/03/2026** para comparar coexistencia entre `AR` y `Diario 10K`.
- Auditar manualmente los términos sospechosos antes de convertirlos en negativas.
- Definir criterio técnico-documental único para medición de WhatsApp entre GA4 y Google Ads.

### Acciones opcionales
- Abrir un análisis específico por término de búsqueda y CPC por campaña.
- Incorporar apertura por grupo de anuncios en el próximo informe.
- Recalibrar umbrales del script si las alertas siguen siendo demasiado conservadoras.
- Resolver la alerta de conversiones avanzadas en Google Ads si se decide fortalecer la calidad de medición del sitio.

### Decisiones que requieren validación
- Confirmar por qué la campaña vigente paga un CPC mucho más alto que la campaña `AR`.
- Confirmar si el estándar documental definitivo será:
  - `click_whatsapp` como evento real,
  - o `click` filtrado por enlace saliente a `api.whatsapp.com`.
- Validar si la diferencia de CPA se explica por concordancias, mezcla de términos, presión competitiva o aprendizaje de campaña nueva.

---

## 11) Evidencias y referencias

### Evidencias
- Ejecución en Google Ads Scripts Preview del reporte mensual de marzo 2026.
- Validación visual contra la interfaz de campañas de Google Ads para el período 01/03/2026–31/03/2026.
- Revisión manual de configuración de campañas para confirmar fechas de inicio, finalización y tipo de presupuesto.
- Logs del script mensual con resumen de cuenta, campañas y términos.
- Validación manual con **Tag Assistant + GA4 DebugView** sobre clic real de WhatsApp.
- Revisión manual de la conversión `Whatsapp` en Google Ads y de sus objetivos de campaña asociados.

### Documentos relacionados del repo
- [docs/01_base_tecnica/conversiones.md](../01_base_tecnica/conversiones.md)
- [docs/analytics/evento_whatsapp.md](../analytics/evento_whatsapp.md)
- [docs/checklist-publicacion.md](../checklist-publicacion.md)
- [docs/06_reportes/plantilla-reporte-mensual.md](./plantilla-reporte-mensual.md)

---

## 12) Cierre

### Conclusión operativa breve
Marzo 2026 cerró con una base de rendimiento suficiente para análisis y decisiones iniciales. La cuenta mostró volumen útil, conversiones registradas y diferencias claras de eficiencia entre campañas. La campaña histórica `AR` presentó mejor costo por conversión, mientras que la campaña vigente `Diario 10K` mostró mejores señales de respuesta, pero con un costo por clic mucho más alto.

La validación manual posterior confirmó que el recorrido real de WhatsApp funciona y que Google Ads registra conversiones sobre la landing. Sin embargo, la trazabilidad con GA4 no quedó alineada al nombre de evento esperado: el clic real se observó como `click` y no como `click_whatsapp`. Además, la campaña vigente fue corregida para optimizar solo por `Contactos`, reduciendo el riesgo de mezclar objetivos no vigentes o no prioritarios.

### Estado recomendado del siguiente período
- [ ] Escalar
- [x] Mantener
- [x] Corregir base de medición antes de escalar
- [ ] Replantear estructura de campaña

---

## Nota de uso
Este informe fue completado con datos de Google Ads, validación manual en GA4 DebugView y revisión directa de la configuración de conversiones en Google Ads. Antes de usarlo como base de escalado o automatización más agresiva, conviene cerrar la definición técnica-documental del evento real de WhatsApp y resolver la desalineación entre `click_whatsapp` y `click`.