# Evento de conversión: click_whatsapp

## Propósito
Documentar el estado técnico y operativo del seguimiento relacionado con WhatsApp, distinguiendo entre la implementación específica esperada del evento `click_whatsapp` y el comportamiento efectivamente observado en la validación manual reciente.

## Alcance
Este documento aplica únicamente al seguimiento de interacciones de WhatsApp en la landing y no reemplaza la fuente global de conversiones del proyecto, que se mantiene en `docs/01_base_tecnica/conversiones.md`.

## Estado
Vigente como referencia técnica, con validación manual parcialmente desalineada

## Fecha de actualización
2026-04-03

---

## Descripción general

Este documento describe el seguimiento de clics en enlaces que redirigen a WhatsApp para la landing del proyecto **Mandarin – Google Ads**.

El objetivo operativo actual es medir de forma confiable los clics a WhatsApp, ya que representan la única conversión vigente utilizada en campaña.

La definición global de conversiones, su jerarquía y su estado consolidado se mantienen en:

- `docs/01_base_tecnica/conversiones.md`

---

## Contexto del proyecto

- Tipo de sitio: Landing page
- Plataforma: WordPress
- Método de instalación de GA4: gtag.js
- Plugin reportado para inserción: WPCode Lite (Header & Footer)
- ID de medición GA4: G-GH78BD9NFM
- Objetivo principal: Generación de leads vía WhatsApp

---

## Qué representa `click_whatsapp`

- **Nombre esperado del evento:** `click_whatsapp`
- **Tipo:** Evento personalizado
- **Uso esperado:** conversión específica de WhatsApp en GA4
- **Objetivo de negocio asociado:** contacto comercial vía WhatsApp

Este evento fue concebido para registrar clics en enlaces como:

```text
https://api.whatsapp.com/send?phone=...
https://wa.me/...
https://www.whatsapp.com/...
````

---

## Estado actual del evento

### Estado técnico esperado

* Existe documentación de una implementación específica de `click_whatsapp`.
* En HTML público de la landing se observaron:

  * enlaces reales a `api.whatsapp.com`
  * traza visible de `gtag('event', 'click_whatsapp', ...)`

### Estado observado en validación manual

En la validación manual realizada el **2026-04-03** con **Tag Assistant + GA4 DebugView** se comprobó que:

* el botón de WhatsApp funciona;
* el clic real abre correctamente una URL de `api.whatsapp.com`;
* la interacción entra en **GA4 DebugView** como evento **`click`**;
* ese evento `click` contiene parámetros que identifican el enlace de WhatsApp;
* durante esa validación **no se observó el disparo efectivo de `click_whatsapp`** en DebugView.

### Estado en GA4

* `click_whatsapp` existe en GA4 como **evento clave**.
* En la revisión manual de la lista de eventos figura con el estado:

  * **“No se han detectado datos de flujo”**
* Por lo tanto, no puede afirmarse que el clic real de WhatsApp esté entrando hoy a GA4 bajo el nombre `click_whatsapp`.

### Estado en Google Ads

* Existe una acción de conversión llamada **`Whatsapp`**.
* **Fuente:** Sitio web
* La acción está asociada a la landing:

  * `https://mandarinsa.com.ar/mandarinsa`
* Esa conversión registra resultados en Google Ads.
* No quedó verificado que esa conversión esté basada en importación desde GA4; en la revisión manual se observó como conversión de **sitio web**.

---

## Resultado de la validación manual

### Validación realizada

Se ejecutó una prueba manual sobre la landing con el siguiente flujo:

1. Activación de Tag Assistant
2. Apertura de la landing en modo debug
3. Clic real sobre el botón de WhatsApp
4. Revisión en GA4 DebugView
5. Revisión posterior en Google Ads

### Hallazgos confirmados

* El enlace de WhatsApp funciona correctamente.
* El clic real se observó en GA4 DebugView como evento:

  * `click`
* Los parámetros visibles del evento confirmaron:

  * `link_domain = api.whatsapp.com`
  * `outbound = true`
  * `page_location` dentro de la landing auditada
  * `link_url` correspondiente a la salida hacia WhatsApp
* `click_whatsapp` figura configurado en GA4, pero no se observó flujo reciente asociado durante la prueba.
* Google Ads registra una conversión `Whatsapp` sobre la landing auditada.

### Conclusión técnica de la prueba

Hoy existe una **desalineación** entre:

* el evento específico documentado: `click_whatsapp`
* y el comportamiento efectivamente observado en GA4: `click`

Por lo tanto, este documento no debe afirmar que `click_whatsapp` quedó validado de punta a punta en GA4.

---

## Snippet técnico de referencia

El siguiente snippet se conserva como **referencia técnica de implementación esperada**.
No debe interpretarse automáticamente como prueba de que esa implementación esté siendo la que efectivamente genera los datos observados hoy en GA4.

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

## Cómo interpretar este snippet hoy

Este snippet representa la **implementación deseada o documentada** para el evento específico `click_whatsapp`.

Sin embargo, la prueba manual más reciente no confirmó que ese sea el evento que efectivamente llega a GA4 en el flujo real.
Hasta resolver esa diferencia, este bloque debe leerse como:

* referencia técnica útil,
* no como validación cerrada del comportamiento productivo actual.

---

## Implementación en producción

Según la documentación del proyecto, este seguimiento se implementa en WordPress y el snippet no se inserta en archivos del repositorio.

Ubicación documentada:

```text
WPCode Lite → Header & Footer → Footer
```

### Restricciones importantes

* No duplicar el código en otros plugins o ubicaciones.
* No insertar el código en múltiples lugares.
* Evitar tener otro snippet similar activo para no duplicar eventos.
* Cualquier cambio en implementación real debe quedar documentado.

---

## Troubleshooting

### Si el clic real aparece como `click`

Eso significa que:

* GA4 está recibiendo la interacción;
* la salida a WhatsApp existe;
* pero no puede darse por validado que `click_whatsapp` esté disparando efectivamente.

### Si `click_whatsapp` no aparece en DebugView

Revisar:

1. si el snippet documentado sigue siendo el realmente activo;
2. si existe otra capa de tracking capturando el clic como evento genérico;
3. si hay duplicación o conflicto entre snippets;
4. si el evento clave en GA4 fue creado, pero no corresponde al flujo real observado;
5. si Google Ads está midiendo la conversión desde sitio web por una vía distinta a GA4.

### Qué no asumir

* No asumir que `click_whatsapp` está validado solo porque exista en HTML.
* No asumir que Google Ads usa esa conversión vía importación de GA4.
* No asumir equivalencia entre:

  * `click_whatsapp` documentado
  * `click` observado en DebugView
    sin validación técnica adicional.

---

## Validación recomendada

### Validación técnica mínima

1. Abrir la landing con Tag Assistant
2. Activar sesión de debug
3. Hacer clic real en el botón de WhatsApp
4. Ir a GA4 DebugView
5. Verificar qué evento entra realmente:

   * `click_whatsapp`
   * o `click`
6. Si entra `click`, revisar sus parámetros:

   * `link_domain`
   * `link_url`
   * `outbound`
   * `page_location`

### Validación manual complementaria en Google Ads

1. Abrir la acción de conversión `Whatsapp`
2. Confirmar:

   * fuente real
   * landing asociada
   * estado de medición
   * alertas activas
3. Verificar si la campaña vigente optimiza por el objetivo correcto

---

## Estado operativo recomendado

A hoy, este documento debe leerse con esta regla:

* **WhatsApp** sigue siendo la única conversión vigente del proyecto.
* **`click_whatsapp`** sigue siendo un nombre técnico documentado y deseable.
* Pero la **validación manual real** observó el clic en GA4 como **`click`**.
* Hasta resolver esa diferencia, la documentación operativa principal debe apoyarse en:

  * `docs/01_base_tecnica/conversiones.md`
  * `docs/06_reportes/reporte-2026-03.md`

---

## Checklist de validación actual

* [ ] Confirmar si el evento productivo real en GA4 debe llamarse `click_whatsapp` o mantenerse como `click` filtrado por enlace a WhatsApp
* [ ] Confirmar si el snippet documentado es exactamente el que está activo en producción
* [ ] Confirmar si la acción `Whatsapp` de Google Ads depende de GA4 o de medición directa de sitio web
* [ ] Resolver la alerta de conversiones avanzadas en Google Ads si se decide mejorar la calidad de señal
* [ ] Mantener consistencia entre este documento y `docs/01_base_tecnica/conversiones.md`

---

## Observaciones finales

* Este documento funciona como referencia técnica específica del seguimiento de WhatsApp.
* No debe usarse como prueba cerrada de validación total del evento `click_whatsapp`.
* La fuente global de verdad del estado de conversiones del proyecto sigue siendo:

  * `docs/01_base_tecnica/conversiones.md`
* El informe operativo con resultados y validación manual aplicada se mantiene en:

  * `docs/06_reportes/reporte-2026-03.md`

