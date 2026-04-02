# Convenciones de nombre

## Propósito
Estandarizar nombres de carpetas y archivos para facilitar búsqueda, mantenimiento y trabajo asistido por IA.

## Alcance
Aplica a documentación, logs, reportes y evidencias del repositorio.

## Estado
Vigente

## Fecha de actualización
2026-04-02

---

## Reglas generales
- Usar minúsculas.
- Usar guiones medios (`-`) para separar palabras.
- Evitar espacios, tildes y caracteres especiales en nombres de archivo.
- Usar prefijos numéricos para ordenar secciones principales cuando aplique (`00_`, `01_`, `02_`...).

## Carpetas
- Formato recomendado: `NN_categoria` (ejemplo: `03_keywords`).
- Para carpetas auxiliares sin orden numérico, usar nombre descriptivo corto (ejemplo: `analytics`).

## Archivos de documentación
- Formato recomendado: `tema-principal.md`.
- Evitar sufijos ambiguos como `final`, `nuevo`, `ok`.
- Si hay versión temporal, usar estado dentro del documento, no en el nombre.

## Reportes mensuales
- Formato recomendado: `reporte-YYYY-MM.md`.
- Ejemplo: `reporte-2026-04.md`.

## Logs
- Formato recomendado: `log-YYYY-MM-DD.md` o `bitacora-YYYY-MM.md`.
- Mantener consistencia por carpeta para facilitar comparación histórica.

## Capturas y evidencias
- Formato recomendado: `YYYY-MM-DD-descripcion-corta.ext`.
- Ejemplos:
  - `2026-04-02-validacion-evento-whatsapp.png`
  - `2026-04-02-importacion-conversiones.pdf`
