# mandarin-google-ads

Proyecto para la **planificación, ejecución, medición y automatización** de la campaña de Google Ads del cliente **Mandarin**, con foco en la **generación de leads calificados**.

El repositorio documenta tanto la **estrategia publicitaria** como la **implementación técnica**, incluyendo automatizaciones mediante **Google Ads Scripts (JavaScript)** como soporte operativo.

---

## 1. Objetivos del proyecto

- Lanzar y optimizar una campaña de Google Ads orientada a leads.
- Medir resultados reales según conversiones vigentes documentadas (ver docs/01_base_tecnica/conversiones.md).
- Garantizar una base de medición confiable antes de escalar inversión.
- Estandarizar el proceso para reutilizarlo en futuros clientes.
- Automatizar tareas repetitivas cuando sea conveniente.

---

## 2. Alcance

Este proyecto incluye:

- Configuración de la cuenta de Google Ads.
- Definición de estrategia de campaña (búsqueda).
- Integración con Google Analytics 4 (GA4).
- Definición y medición de conversiones.
- Documentación estratégica y checklists operativos.
- Scripts de Google Ads para automatización y control.

No incluye desarrollo del sitio web (solo validación técnica).

---

## 3. Herramientas utilizadas

- Google Ads  
- Google Analytics 4 (GA4)  
- Google Ads Scripts (JavaScript)  
- Visual Studio Code + Copilot  
- Documentación en Markdown  

---

## 4. Estructura del repositorio

```
mandarin-google-ads/
├── capturas/
├── config/
├── docs/
│   ├── README.md
│   ├── 00_gobernanza/
│   ├── 01_base_tecnica/
│   ├── 02_estrategia/
│   ├── 03_keywords/
│   ├── analytics/
│   └── estructura_documentacion.md
├── inspector/
├── logs/
├── scripts/
├── snippets/
└── README.md
```


---

## 5. Documentación del proyecto

La organización documental y las reglas de trabajo se encuentran en:

- `docs/README.md`
- `docs/estructura_documentacion.md`

El README raíz mantiene la visión general; `docs/` concentra el detalle operativo y técnico.

---

## 6. Estado actual del proyecto

- Este README presenta una vista general; el estado operativo detallado debe verificarse en los documentos técnicos fuente.
- Estado general del proyecto: **pendiente validación**.
- Fuente global de conversiones: `docs/01_base_tecnica/conversiones.md`.
- Referencia específica del tracking WhatsApp (`click_whatsapp`): `docs/analytics/evento_whatsapp.md`.
- Validaciones de publicación y operación: `docs/checklist-publicacion.md` y documentos asociados en `docs/`.

---

## 7. Criterios de trabajo

- Prioridad en datos confiables antes que volumen de tráfico.
- Cambios estratégicos documentados antes de implementarse.
- Automatizaciones solo cuando aporten control o ahorro real de tiempo.
- Revisión periódica de términos de búsqueda y conversiones.

---
