# Mandarin Event Inspector

## Propósito

Este módulo permite inspeccionar, depurar y validar eventos relevantes para GA4 y Google Ads en una landing page WordPress (Elementor), especialmente eventos de salida como WhatsApp.

## Estructura

- `event-inspector.js`: expone `trackEvent(eventName, params)`, registra y loguea eventos, y los envía a GA4 si gtag está disponible.
- `dom-watch.js`: detecta dinámicamente la aparición de CTAs de WhatsApp en el DOM y los loguea en consola.
- `ga4-debugger.js`: muestra el estado de gtag, el último evento enviado y la URL actual en consola.

## Activación

Incluye los scripts solo en modo debug (por ejemplo, usando WPCode Lite en un entorno de staging o activando manualmente en producción para diagnóstico).

## Uso

1. Llama a `trackEvent('click_whatsapp', {event_category: 'engagement', event_label: 'whatsapp', value: 1})` en el handler de tu CTA.
2. Observa la consola para ver el registro estructurado y la información de depuración.
3. Usa `ga4Debugger()` en consola para ver el estado actual de gtag y el último evento enviado.
4. `dom-watch.js` te avisará en consola cuando aparezcan nuevos CTAs de WhatsApp en el DOM.

## Ejemplo de flujo

1. Usuario hace click en botón WhatsApp.
2. Se ejecuta `trackEvent`.
3. El evento se registra en `window.__MANDARIN_EVENTS__`, se loguea en consola y se envía a GA4 (si gtag está disponible).
4. Puedes validar el evento en GA4 (DebugView) y en consola con `ga4Debugger()`.

## Notas

- El módulo es solo para diagnóstico, no para producción.
- No modifica ni interfiere con la navegación ni eventos existentes.
- Seguro para ejecutar múltiples veces.
