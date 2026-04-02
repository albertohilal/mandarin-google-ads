# AGENTS.md

## Propósito del repositorio
Repositorio operativo para planificar, ejecutar, medir y optimizar campañas de Google Ads de Mandarin, con trazabilidad documental y soporte de automatización mediante scripts.

## Alcance del proyecto
- Estrategia de campaña y estructura publicitaria.
- Tracking y conversiones (Google Ads + GA4).
- Operación y optimización periódica.
- Automatizaciones de control y reporte con Google Ads Scripts.
- Evidencia y registros de decisiones.

## Archivos que pueden modificar los agentes
- Documentación bajo `docs/`.
- Configuración no sensible bajo `config/` (por ejemplo, listas de negativas).
- Scripts bajo `scripts/` cuando el cambio esté documentado y justificado.
- Snippets y utilidades de inspección (`snippets/`, `inspector/`) si hay impacto operativo claro.
- `README.md` y `AGENTS.md` para mantener guía de uso y trabajo.

## Archivos que NO deben modificar sin revisión explícita
- Históricos de evidencia en `capturas/` y `logs/` (solo anexar, no reescribir).
- Cualquier credencial, secreto o configuración sensible.
- Lógica de tracking o conversión en producción sin documento de cambio asociado.
- Scripts en ejecución activa sin registrar impacto esperado y plan de reversión.

## Reglas para documentación
- Todo documento debe incluir: propósito, alcance, estado y fecha de actualización.
- Un tema debe tener una sola fuente de verdad.
- Evitar duplicación: cuando un contenido se repita, dejar resumen y enlazar al documento fuente.
- Si un archivo queda obsoleto, marcar estado y referenciar el reemplazo.
- Toda decisión operativa relevante debe quedar registrada.

## Reglas para scripts
- Cambios mínimos, reversibles y orientados a necesidad real.
- Cada cambio debe quedar trazado en documentación operativa.
- Evitar renombrar scripts existentes salvo necesidad justificada.
- Si cambia comportamiento, documentar entrada, salida, frecuencia y riesgo.

## Reglas para tracking y conversiones
- Prioridad: integridad de medición sobre volumen.
- No cambiar definiciones de conversión sin actualizar documentación técnica.
- Toda modificación en eventos, etiquetas o importaciones debe tener evidencia y fecha.
- Verificar consistencia entre GA4, Google Ads y documentos de tracking.

## Regla de fuente de verdad por tema
- Estructura documental: `docs/estructura_documentacion.md`.
- Gobernanza documental: `docs/00_gobernanza/*.md`.
- Conversiones: `docs/01_base_tecnica/conversiones.md`.
- Estrategia de campaña: `docs/02_estrategia/objetivo_campania.md` y `docs/estrategia-general.md`.
- Keywords: `docs/03_keywords/analisis_keywords.md`.
- Tracking WhatsApp: `docs/analytics/evento_whatsapp.md`.

## Registro de cambios y decisiones
- Registrar en el documento fuente del tema afectado.
- Incluir fecha, motivo, impacto y responsable.
- Si el cambio afecta operación mensual, añadir referencia en bitácora o log correspondiente.

## Criterios de calidad antes de cerrar una tarea
- Documento actualizado en la fuente de verdad correcta.
- Estado del documento declarado (borrador, vigente, pendiente validación o archivado).
- Referencias cruzadas verificadas.
- Sin duplicación innecesaria ni archivos redundantes.
- Impacto operativo explícito (si aplica).

## Estilo de redacción
- Idioma principal: español.
- Estilo: claro, técnico, directo y sin ambigüedad.
- Evitar texto ornamental y supuestos no verificados.

## Regla de no redundancia
No crear archivos nuevos si la información ya existe en otro documento vigente. En ese caso, actualizar el documento fuente y dejar referencias cruzadas donde corresponda.
