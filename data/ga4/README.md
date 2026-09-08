# Datos GA4 para análisis mensual

## Propósito
Definir cómo organizar exportaciones manuales y resultados procesados de GA4 para el análisis mensual y la conciliación con Google Ads.

## Alcance
Aplica a archivos de trabajo bajo `data/ga4/` utilizados para reportes mensuales y futuras automatizaciones. No autoriza cargar datos ficticios ni datos personales innecesarios.

## Estado
Pendiente validación

## Fecha de actualización
2026-09-08

---

## Estructura lógica

```text
data/ga4/
└── YYYY-MM/
    ├── raw/
    └── processed/
```

## Significado de cada carpeta

### `raw/`
Contiene exportaciones originales de GA4 sin alterar. Deben conservar el contenido tal como salió de la interfaz antes de cualquier limpieza o normalización.

### `processed/`
Contiene resultados derivados y normalizados para conciliación, resúmenes mensuales y archivos auxiliares seguros para trazabilidad.

---

## Convención de nombres sugerida
- `ga4-adquisicion-trafico-YYYY-MM.csv`
- `ga4-eventos-YYYY-MM.csv`
- `ga4-eventos-clave-YYYY-MM.csv`
- `ga4-paginas-destino-YYYY-MM.csv`
- `ga4-fuente-medio-YYYY-MM.csv`
- `resumen-ga4-YYYY-MM.json`
- `conciliacion-ads-ga4-YYYY-MM.json`

Si un archivo incluye un recorte adicional, agregar un sufijo descriptivo breve y estable.

---

## Reglas de trazabilidad
- Cada archivo debe poder asociarse a un período mensual concreto.
- Los archivos procesados deben indicar de qué exportaciones crudas derivan.
- El reporte mensual debe enlazar, cuando corresponda, a los archivos procesados utilizados.
- No sobrescribir un archivo crudo para corregirlo; generar un derivado en `processed/`.
- Toda exportación o registro asociado debe conservar: período cubierto, fuente/origen, fecha de extracción, hash del archivo cuando esté disponible y evidencia utilizada.
- Si no existe evidencia suficiente para una métrica o comparación, registrarla como `no calculable`; nunca reemplazar un valor ausente por cero.

## Estado actual
- Esta carpeta contiene únicamente este README; no hay exportaciones `raw/` ni resultados `processed/` versionados.
- La regla `data/ga4/*/raw/*` de `.gitignore` mantiene fuera del versionado los archivos crudos futuros bajo `data/ga4/YYYY-MM/raw/`, sin ocultar este README ni los archivos de `processed/`.

---

## Datos personales y minimización
- No incluir datos personales innecesarios.
- Si alguna exportación expone teléfonos, correos o identificadores directos, deben excluirse del versionado o sanitizarse antes de generar derivados compartibles.
- No usar `processed/` para replicar información sensible que no aporte al análisis mensual.

---

## Criterio de versionado
- `raw/`: por defecto no versionar exportaciones originales si existe riesgo de exponer datos innecesarios o sensibles.
- `processed/`: versionar solo archivos agregados, documentados y seguros para trazabilidad operativa.
- README y resúmenes estructurados: sí pueden versionarse cuando no contienen datos sensibles y ayudan a reconstruir el análisis.

Si aparece un caso dudoso, prevalece el criterio de minimización y se documenta la decisión en el reporte o en la metodología fuente.
