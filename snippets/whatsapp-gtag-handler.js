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
