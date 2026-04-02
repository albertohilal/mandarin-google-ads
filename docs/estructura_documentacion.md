# Estructura de documentación del repositorio

## Propósito
Definir la estructura documental real del proyecto y su ruta de evolución, manteniendo compatibilidad con los archivos existentes.

## Alcance
Aplica al contenido bajo `docs/` y su relación con carpetas operativas del repositorio (`scripts/`, `logs/`, `capturas/`, `config/`).

## Estado
Vigente

## Fecha de actualización
2026-04-02

---

## 1) Estructura real actual

```
docs/
├── 00_gobernanza/
│   ├── reglas-documentacion.md
│   ├── convenciones-nombre.md
│   └── flujo-de-actualizacion.md
├── 01_base_tecnica/
│   └── conversiones.md
├── 02_estrategia/
│   └── objetivo_campania.md
├── 03_keywords/
│   └── analisis_keywords.md
├── analytics/
│   └── evento_whatsapp.md
├── checklist-publicacion.md
├── estrategia-general.md
├── etiquetaGoogleAds.md
├── naming-campanias.md
├── estructura_documentacion.md
└── README.md
```

## 2) Estructura objetivo (crecimiento ordenado)

La estructura objetivo se adopta como guía para nuevos documentos, sin mover de forma destructiva los actuales:

```
docs/
├── 00_gobernanza/
├── 01_base_tecnica/
├── 02_estrategia/
├── 03_keywords/
├── 04_tracking/
├── 05_operacion/
├── 06_reportes/
└── 99_archivo/
```

## 3) Criterios de convivencia (actual + objetivo)
- No borrar documentación útil existente.
- Evitar mover archivos históricos sin necesidad operativa.
- Para nuevo contenido, priorizar la estructura objetivo.
- Cuando un documento cambie de ubicación futura, dejar referencia explícita entre origen y destino.

## 4) Fuente de verdad por tema
- Gobernanza y reglas de trabajo: `docs/00_gobernanza/`.
- Base técnica y conversiones: `docs/01_base_tecnica/conversiones.md`.
- Estrategia de campaña: `docs/02_estrategia/objetivo_campania.md` y `docs/estrategia-general.md`.
- Keywords: `docs/03_keywords/analisis_keywords.md`.
- Tracking WhatsApp (estado actual): `docs/analytics/evento_whatsapp.md`.

## 5) Relación con otras carpetas del repo
- `scripts/`: automatizaciones operativas; todo cambio relevante debe reflejarse en `docs/`.
- `logs/`: registro operativo e histórico.
- `capturas/`: evidencia visual de validaciones e hitos.
- `config/`: parámetros auxiliares (por ejemplo, negativas).
