// event-inspector.js
// Inspector de eventos para GA4 y Google Ads. Diagnóstico y logging estructurado.

(function () {
  if (window.__MANDARIN_EVENT_INSPECTOR__) return; // Previene doble carga
  window.__MANDARIN_EVENT_INSPECTOR__ = true;

  window.__MANDARIN_EVENTS__ = window.__MANDARIN_EVENTS__ || [];

  let lastEvent = { name: null, time: 0 };

  window.trackEvent = function(eventName, params = {}) {
    const now = Date.now();
    // Evita duplicados en menos de 1 segundo
    if (lastEvent.name === eventName && (now - lastEvent.time) < 1000) return;
    lastEvent = { name: eventName, time: now };

    const eventObj = {
      event: eventName,
      params: { ...params },
      timestamp: new Date().toISOString(),
      url: location.href
    };
    window.__MANDARIN_EVENTS__.push(eventObj);

    // Logging estructurado
    console.table([{
      Evento: eventName,
      ...params,
      Timestamp: eventObj.timestamp,
      URL: eventObj.url
    }]);

    // Enviar a GA4 si gtag está disponible
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  };
})();
