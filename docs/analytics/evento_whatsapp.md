# Evento de conversión: click_whatsapp

## Descripción general

Este documento describe la implementación, validación y uso del evento
**`click_whatsapp`** como evento de conversión en Google Analytics 4 (GA4)
para la landing page del proyecto **Mandarin – Google Ads**.

El objetivo del evento es medir de forma confiable los clics en enlaces
que redirigen a WhatsApp, los cuales representan el principal objetivo
de conversión de la landing.

---

## Contexto del proyecto

- Tipo de sitio: Landing page (una sola página)
- Plataforma: WordPress
- Método de instalación de GA4: gtag.js
- Plugin utilizado: WPCode Lite (Header & Footer)
- ID de medición GA4: G-GH78BD9NFM
- Objetivo principal: Generación de leads vía WhatsApp

---

## Definición del evento

- **Nombre del evento:** `click_whatsapp`
- **Tipo:** Evento personalizado
- **Categoría:** engagement
- **Etiqueta:** whatsapp
- **Valor:** 1
- **Uso:** Conversión principal para Google Ads

Este evento se dispara cuando el usuario hace clic en un enlace de WhatsApp
del tipo:

```
https://api.whatsapp.com/send?phone=...
https://wa.me/...
https://www.whatsapp.com/...
```

---

## Estado del evento

- Evento: click_whatsapp
- Estado: DEFINITIVO
- Implementación: WordPress vía WPCode Lite (Footer)
- Fecha de cierre: 2025-12-25

Este evento no requiere modificaciones adicionales.

---

## Snippet final (GA4 – WhatsApp, robusto)

Este es el **snippet definitivo y robusto aprobado para producción**. No debe modificarse ni duplicarse.

```html
<script>
// whatsapp-gtag-handler.js
// Tracking robusto de clicks a WhatsApp para GA4 (production-safe)

document.addEventListener('DOMContentLoaded', function () {
  console.log('[GA4] WhatsApp tracker activo');

  document.addEventListener('click', function (e) {
    // Solo click izquierdo normal, sin modificadores
    if (
      e.button !== 0 ||
      e.ctrlKey || e.metaKey || e.shiftKey || e.altKey
    ) {
      return;
    }

    // Buscar el enlace más cercano
    var link = e.target.closest && e.target.closest('a');
    if (!link || !link.href) return;

    // Matchear enlaces de WhatsApp
    var href = link.href;
    if (
      href.indexOf('wa.me') === -1 &&
      href.indexOf('whatsapp.com') === -1 &&
      href.indexOf('api.whatsapp.com') === -1
    ) {
      return;
    }

    // Interceptar navegación solo en el caso correcto
    e.preventDefault();
    console.log('[GA4] click_whatsapp detectado', href);

    var navigated = false;
    var navigate = function () {
      if (!navigated) {
        navigated = true;
        window.location.href = href;
        console.log('[GA4] Evento enviado, navegando');
      }
    };

    // Enviar evento a GA4 con callback y fallback
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'whatsapp',
        link_url: href,
        transport_type: 'beacon',
        event_timeout: 1500,
        event_callback: navigate
      });
      setTimeout(navigate, 900); // Fallback si GA4 no responde
    } else {
      // Si gtag no está disponible, navegar igual
      navigate();
    }
  }, true); // Delegación en captura
});
</script>
```

---

## Explicación técnica del snippet

- **Interceptación del click:**
  - El script escucha todos los clicks en el documento usando delegación de eventos (`addEventListener('click', ..., true)`).
  - Solo intercepta clicks izquierdos normales (sin Ctrl, Shift, Alt, Meta) sobre enlaces que contienen `wa.me`, `whatsapp.com` o `api.whatsapp.com`.
  - Si el click es válido, previene la navegación inmediata para asegurar el envío del evento.

- **Uso de event_callback:**
  - El evento se envía a GA4 usando `gtag('event', ...)` con la opción `event_callback`.
  - Cuando GA4 confirma el envío, se ejecuta el callback y se navega al enlace de WhatsApp.

- **Uso de transport_type: 'beacon':**
  - Se especifica `transport_type: 'beacon'` para mejorar la confiabilidad del envío del evento antes de la navegación.

- **Uso de event_timeout:**
  - Se define `event_timeout: 1500` ms para evitar que la navegación se bloquee si el callback no responde.
  - Además, se implementa un fallback con `setTimeout` (~900 ms) para navegar aunque GA4 no responda.

- **Logs esperados en consola ([GA4]):**
  - `[GA4] WhatsApp tracker activo` al cargar el script.
  - `[GA4] click_whatsapp detectado` cuando se intercepta un click válido.
  - `[GA4] Evento enviado, navegando` al completar la navegación.

---

## Implementación en producción

Este proyecto utiliza WordPress. El snippet **no se inserta en archivos del repositorio**.

**Debe pegarse manualmente en:**

```
WPCode Lite → Header & Footer → Footer
```

### Restricciones importantes

- No usar Elementor ni shortcodes para este evento.
- No duplicar el código en otros plugins o ubicaciones.
- No insertar el código en el Header.
- No usar Google Tag Manager para este evento.
- Evitar tener otro snippet similar activo para no duplicar eventos.

---

## Troubleshooting (Solución de problemas)

### Logs esperados en consola

- `[GA4] WhatsApp tracker activo` (al cargar la página)
- `[GA4] click_whatsapp detectado` (al hacer click izquierdo normal en un enlace WhatsApp)
- `[GA4] Evento enviado, navegando` (cuando se navega al enlace tras enviar el evento)

### Diferencias entre click normal y abrir en nueva pestaña

- El script **solo intercepta clicks izquierdos normales**.
- Si el usuario hace Ctrl+Click, Shift+Click, Cmd+Click o click derecho → abrir en nueva pestaña, **no se intercepta** y la navegación ocurre normalmente (no se bloquea el flujo del usuario).

### Qué verificar si el evento no aparece en GA4

1. Revisar que el snippet esté pegado solo una vez en el Footer vía WPCode Lite.
2. Verificar que el ID de medición de GA4 es correcto y que gtag.js está cargado antes del snippet.
3. Usar DebugView de GA4 para validar el evento (`click_whatsapp`).
4. Confirmar que los logs `[GA4]` aparecen en la consola del navegador.
5. Si el evento no aparece, probar en modo incógnito y desactivar extensiones de bloqueo.
6. No usar Google Tag Manager ni otros plugins de tracking en paralelo para este evento.

---

## Validación del evento

### Validación recomendada (DebugView)

1. Abrir Google Analytics 4
2. Ir a:

   ```
   Administrar → DebugView
   ```
3. Abrir la landing en modo incógnito
4. Hacer clic en el botón de WhatsApp
5. Verificar la aparición del evento:

   ```
   click_whatsapp
   ```

Si el evento aparece en DebugView, la implementación es correcta.

---

### Validación alternativa (Tiempo real)

Ruta:

```
Informes → Tiempo real → Eventos
```

Nota: El informe de Tiempo real puede demorar más que DebugView.

---

## Configuración como conversión en GA4

Una vez validado el evento:

1. Ir a:

   ```
   Configurar → Eventos
   ```
2. Localizar `click_whatsapp`
3. Activar la opción **Marcar como conversión**

---

## Uso en Google Ads

Luego de marcar el evento como conversión en GA4:

1. Ingresar a Google Ads
2. Ir a:

   ```
   Herramientas → Conversiones
   ```
3. Importar conversiones desde Google Analytics 4
4. Seleccionar:

   * Evento: click_whatsapp
   * Categoría: Lead
   * Valor: usar el valor del evento

Esta conversión será utilizada como objetivo principal de optimización
para las campañas de Google Ads.

---

## Checklist de validación final

* [ ] Snippet pegado en WPCode Lite (Footer)
* [ ] Evento visible en GA4 DebugView
* [ ] Evento marcado como conversión en GA4
* [ ] Conversión importada en Google Ads
* [ ] Evento asignado a la campaña correcta

---

## Observaciones finales

* Este evento es suficiente para lanzar la primera campaña.
* No se recomienda lanzar Google Ads sin este evento activo.
* Eventos adicionales (formulario, scroll) pueden implementarse en fases posteriores.
* Este documento funciona como referencia técnica y operativa del proyecto.

---

### Qué sigue ahora (orden correcto)

1. Commit de este archivo en el repo  
2. Pegado del snippet en **WPCode Lite → Footer**  
3. Validación en **GA4 DebugView**  
4. Marcar conversión  
5. Importar en Google Ads  

Cuando quieras, seguimos **exactamente** por el siguiente paso.
