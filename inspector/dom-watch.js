// dom-watch.js
// Observa el DOM y detecta dinámicamente la aparición de links de WhatsApp.

(function () {
  if (window.__MANDARIN_DOM_WATCH__) return;
  window.__MANDARIN_DOM_WATCH__ = true;

  const whatsappSelectors = [
    'a[href*="wa.me"]',
    'a[href*="api.whatsapp.com"]',
    'a[href*="whatsapp.com"]'
  ];

  function logNewWhatsappLinks(nodes) {
    nodes.forEach(node => {
      if (node.nodeType !== 1) return; // Solo elementos
      whatsappSelectors.forEach(sel => {
        if (node.matches && node.matches(sel)) {
          console.info('[Inspector] Nuevo CTA WhatsApp detectado:', node);
        }
      });
      // Buscar en hijos
      if (node.querySelectorAll) {
        node.querySelectorAll(whatsappSelectors.join(',')).forEach(link => {
          console.info('[Inspector] Nuevo CTA WhatsApp detectado:', link);
        });
      }
    });
  }

  // Inicial: loguea los existentes
  document.querySelectorAll(whatsappSelectors.join(',')).forEach(link => {
    console.info('[Inspector] CTA WhatsApp inicial:', link);
  });

  // Observa cambios en el DOM
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length) {
        logNewWhatsappLinks(Array.from(mutation.addedNodes));
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
