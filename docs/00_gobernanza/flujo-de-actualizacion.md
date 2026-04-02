# Flujo de actualización documental

## Propósito
Definir qué documentación debe actualizarse ante cambios de estrategia, tracking, scripts y cierres mensuales.

## Alcance
Aplica al mantenimiento operativo del repositorio y a toda actualización con impacto en resultados o medición.

## Estado
Vigente

## Fecha de actualización
2026-04-02

---

## 1) Cuando cambia la estrategia
Actualizar como mínimo:
- `docs/02_estrategia/objetivo_campania.md`
- `docs/estrategia-general.md` (si el cambio afecta lineamientos globales)
- `docs/checklist-publicacion.md` (si cambia validación previa a lanzamiento)

Registrar:
- motivo del cambio,
- hipótesis,
- impacto esperado,
- fecha y responsable.

## 2) Cuando cambia tracking o conversiones
Actualizar como mínimo:
- `docs/01_base_tecnica/conversiones.md`
- `docs/analytics/evento_whatsapp.md` (si aplica)
- `docs/etiquetaGoogleAds.md` (si aplica)

Registrar:
- evento/conversión afectada,
- definición anterior y nueva,
- evidencia de validación,
- fecha de entrada en vigencia.

## 3) Cuando cambia un script
Actualizar como mínimo:
- Documento operativo relacionado en `docs/`.
- Referencia en bitácora/log si el cambio afecta operación diaria/semanal.

Registrar:
- script afectado,
- objetivo del cambio,
- riesgos,
- criterio de reversión.

## 4) Al cierre de un período mensual
Actualizar como mínimo:
- reporte mensual correspondiente (según convención de nombres),
- decisiones aplicadas y pendientes,
- estado de acciones de optimización.

Conservar enlaces a evidencias en `capturas/` y/o `logs/`.

## 5) Checklist mínimo de actualización documental
- [ ] Documento fuente del tema actualizado.
- [ ] Estado documental correcto (borrador, vigente, pendiente validación o archivado).
- [ ] Fecha de actualización registrada.
- [ ] Referencias cruzadas verificadas.
- [ ] Impacto operativo resumido en lenguaje claro.
