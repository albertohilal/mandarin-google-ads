# Estado de conversiones y medición operativa

## Propósito
Definir la fuente global de verdad sobre las conversiones vigentes del proyecto, su estado operativo real y la forma correcta de interpretarlas para campaña, tracking y documentación.

## Alcance
Aplica a la medición de la landing activa de Mandarin, a la configuración de conversiones en Google Ads, a su contraste con GA4 y a cualquier documento del repositorio que haga referencia al estado de conversiones.

## Estado
Vigente

## Fecha de actualización
2026-04-03

---

## 1) Resumen ejecutivo
La conversión operativa vigente del proyecto es **WhatsApp**.

La revisión funcional y documental actual permite afirmar lo siguiente:

- **WhatsApp** es la única conversión prioritaria y vigente para operación de campaña.
- **form_submit** no es una conversión vigente para campaña. Puede existir markup residual en HTML, pero no se renderiza en frontend operativo y no debe tratarse como objetivo activo.
- **click_tel** no existe en la landing actual y no forma parte del alcance operativo.

---

## 2) Conversión vigente

### WhatsApp
- **Nombre operativo:** `Whatsapp` / `click_whatsapp`
- **Estado:** vigente
- **Prioridad para campaña:** principal
- **Uso operativo:** optimización, validación manual y lectura de resultados
- **Landing asociada:** `https://mandarinsa.com.ar/mandarinsa/`

### Estado observado en validación manual
En la validación manual realizada con **Tag Assistant + GA4 DebugView** se confirmó que:

- el botón de WhatsApp funciona,
- abre una URL hacia `api.whatsapp.com`,
- la interacción se observa en GA4 como evento **`click`**,
- con parámetros de salida que identifican claramente el enlace de WhatsApp.

Parámetros observados en GA4 DebugView:
- `link_domain = api.whatsapp.com`
- `outbound = true`
- `page_location` dentro de la landing auditada
- `link_url` correspondiente a la URL saliente de WhatsApp

### Estado de `click_whatsapp` en GA4
- `click_whatsapp` existe en GA4 como **evento clave**.
- En la revisión manual de eventos, figura con **“No se han detectado datos de flujo”**.
- Por lo tanto, no quedó confirmado que el clic real de WhatsApp esté entrando hoy a GA4 con el nombre `click_whatsapp`.

### Estado de `Whatsapp` en Google Ads
- Existe una acción de conversión llamada **`Whatsapp`**.
- **Fuente:** Sitio web
- **Landing asociada:** `https://mandarinsa.com.ar/mandarinsa`
- **Estado operativo:** registra conversiones
- **Observación:** presenta alerta de configuración en conversiones avanzadas, pero la medición base existe y la acción está activa sobre la landing.

---

## 3) Conversiones no vigentes

### form_submit
- **Estado:** no vigente para campaña
- **Motivo:** no existe como experiencia funcional actual en frontend operativo
- **Observación:** puede persistir markup residual en HTML, pero eso no la convierte en conversión operativa válida
- **Criterio documental:** no tratar como objetivo activo, ni como pendiente prioritario, ni como señal válida para optimización de campaña

### click_tel
- **Estado:** no aplica
- **Motivo:** no existe en la landing actual
- **Criterio documental:** no documentar como conversión activa ni como requisito operativo actual

---

## 4) Jerarquía de conversiones para campaña

### Prioridad actual
1. **WhatsApp**
2. Ninguna otra conversión operativa vigente

### Regla operativa
Las campañas activas no deben optimizar contra:
- formularios no operativos,
- objetivos residuales,
- conversiones históricas fuera de alcance,
- señales ambiguas no alineadas con la landing real.

---

## 5) Estado de alineación entre plataformas

### Landing
- El botón de WhatsApp funciona correctamente.
- El recorrido real del clic puede reproducirse manualmente.

### GA4
- El clic a WhatsApp se observó como **`click`**.
- `click_whatsapp` existe como evento clave, pero no mostró flujo reciente en la validación realizada.
- Existe desalineación entre el nombre del evento esperado y el evento efectivamente observado.

### Google Ads
- La conversión **`Whatsapp`** existe como acción de sitio web.
- La landing registra conversiones para esa acción.
- La campaña vigente fue ajustada para optimizar solo por **`Contactos`**, evitando mezclar formularios o cotizaciones como señal principal.

---

## 6) Criterio documental obligatorio
Hasta resolver la desalineación entre GA4 y Google Ads, los documentos del repositorio deben respetar estas reglas:

- No afirmar que `click_whatsapp` fue verificado en GA4 si la prueba manual solo mostró `click`.
- No tratar `form_submit` como conversión vigente solo porque exista markup residual en HTML.
- No tratar `click_tel` como conversión pendiente o activa.
- Documentar explícitamente cuando Google Ads esté midiendo `Whatsapp` como conversión de sitio web y no como importación desde GA4.
- Si una campaña se ajusta para optimizar solo por `Contactos`, dejarlo asentado en el reporte operativo correspondiente.

---

## 7) Riesgos abiertos
- Falta definir si el estándar técnico definitivo será:
  - un evento específico `click_whatsapp`,
  - o un evento `click` filtrado por enlace saliente a `api.whatsapp.com`.
- Falta resolver la alerta de conversiones avanzadas en Google Ads.
- Si no se corrige la desalineación de nombres entre GA4 y Google Ads, puede persistir confusión documental y operativa.

---

## 8) Estado recomendado
- **Mantener** WhatsApp como única conversión operativa vigente.
- **Excluir** formulario y teléfono del alcance actual.
- **Documentar** toda validación manual real en el reporte mensual y en checklist operativo.
- **Revisar** cualquier automatización o script que asuma que el evento validado en GA4 se llama necesariamente `click_whatsapp`.

---

## 9) Documentos relacionados
- `docs/analytics/evento_whatsapp.md`
- `docs/checklist-publicacion.md`
- `docs/06_reportes/reporte-2026-03.md`