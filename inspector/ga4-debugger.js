// ga4-debugger.js
// Muestra información relevante sobre gtag y eventos enviados a GA4.

(function () {
  if (window.__MANDARIN_GA4_DEBUGGER__) return;
  window.__MANDARIN_GA4_DEBUGGER__ = true;

  function getLastEvent() {
    const events = window.__MANDARIN_EVENTS__ || [];
    return events.length ? events[events.length - 1] : null;
  }

  function logGA4Status() {
    const gtagAvailable = typeof window.gtag === 'function';
    const lastEvent = getLastEvent();
    console.group('[GA4 Debugger]');
    console.log('gtag disponible:', gtagAvailable);
    if (lastEvent) {
      console.log('Último evento:', lastEvent.event);
      console.log('Parámetros:', lastEvent.params);
      console.log('Timestamp:', lastEvent.timestamp);
      console.log('URL:', lastEvent.url);
    } else {
      console.log('No se han enviado eventos aún.');
    }
    console.log('URL actual:', location.href);
    console.groupEnd();
  }

  // Exponer función global para inspección manual
  window.ga4Debugger = logGA4Status;

  // Log automático al enviar evento
  const origTrackEvent = window.trackEvent;
  if (typeof origTrackEvent === 'function') {
    window.trackEvent = function(eventName, params) {
      origTrackEvent(eventName, params);
      logGA4Status();
    };
  }
})();
