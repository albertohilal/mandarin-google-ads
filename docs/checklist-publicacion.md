# Checklist operativo de publicación y validación

## Propósito
Establecer una verificación operativa mínima y consistente antes de lanzar, durante el lanzamiento y después de publicar campañas de Google Ads en este repositorio.

## Alcance
Aplica a la validación de cuenta, campaña, anuncios, tracking, conversiones y control inicial de operación para Mandarin.

## Estado
Vigente

## Fecha de actualización
2026-04-03

---

## 1) Cuenta y campaña
- [ ] Cuenta de Google Ads accesible con permisos correctos (administración y facturación).
- [ ] Zona horaria, moneda y configuración base de cuenta revisadas.
- [ ] Campaña correcta identificada (nombre, objetivo y estado).
- [ ] No hay campañas duplicadas activas que compitan por las mismas búsquedas.

## 2) Configuración de campaña
- [ ] Tipo de campaña confirmado según estrategia vigente.
- [ ] Presupuesto diario cargado y validado contra el plan actual.
- [ ] Estrategia de puja definida y coherente con el estado de conversiones.
- [ ] Ubicaciones geográficas y opciones de presencia correctamente configuradas.
- [ ] Idioma y programación horaria revisados.
- [ ] Red de Display desactivada si no forma parte del alcance.
- [ ] La campaña optimiza por objetivos vigentes y no por objetivos residuales o fuera de alcance.
- [ ] Si corresponde, la campaña usa **objetivo específico de campaña** y no mezcla objetivos predeterminados de cuenta que no aplican.

## 3) Keywords y negativas
- [ ] Keywords alineadas con intención comercial y estructura definida.
- [ ] Tipos de concordancia revisados por grupo.
- [ ] Lista inicial de negativas aplicada (config/palabras_negativas.json, si corresponde).
- [ ] No hay solapamientos obvios entre grupos que generen canibalización.

## 4) Anuncios y assets
- [ ] RSA con títulos y descripciones alineados a la oferta real.
- [ ] URL final y rutas visibles validadas.
- [ ] Assets (enlaces, destacados, llamada u otros) cargados y vigentes.
- [ ] Mensajes sin promesas no verificables ni inconsistencias legales/comerciales.

## 5) Tracking y conversiones
- [ ] GA4 activo y recibiendo eventos del sitio.
- [ ] Consistencia validada con `docs/01_base_tecnica/conversiones.md` (jerarquía y estado de conversiones).
- [ ] Consistencia validada con `docs/analytics/evento_whatsapp.md` para la referencia técnica del evento de WhatsApp.
- [ ] Conversión operativa vigente definida como única prioridad de campaña: **WhatsApp**.
- [ ] `form_submit` y `click_tel` excluidos del alcance operativo actual de campaña.
- [ ] La prueba manual del botón de WhatsApp abre correctamente una URL de `api.whatsapp.com` o equivalente.
- [ ] En GA4 DebugView, el clic real a WhatsApp queda visible y verificable.
- [ ] Si el clic entra como `click` y no como `click_whatsapp`, esa diferencia queda documentada explícitamente.
- [ ] Si `click_whatsapp` existe como evento clave en GA4, verificar si registra flujo real reciente.
- [ ] La acción de conversión `Whatsapp` en Google Ads existe, está asociada a la landing correcta y registra conversiones.
- [ ] Si Google Ads usa conversión de sitio web para WhatsApp, dejarlo documentado explícitamente.
- [ ] Revisar alertas de conversiones avanzadas en Google Ads y registrar si afectan o no la operativa actual.
- [ ] No optimizar automáticamente por conversiones con estado ambiguo, residual o pendiente de definición técnica.

## 6) Validación técnica del sitio
- [ ] Landing accesible en móvil y desktop sin errores críticos.
- [ ] Enlaces de WhatsApp funcionales.
- [ ] El clic real a WhatsApp puede reproducirse manualmente.
- [ ] Carga base de página aceptable y sin bloqueos funcionales evidentes.

## 7) Validación previa al lanzamiento
- [ ] Revisión final de segmentación, presupuesto y anuncios completada.
- [ ] Estado de conversiones documentado y explícito.
- [ ] La campaña optimiza solo por objetivos vigentes para negocio.
- [ ] Checklist revisado por responsable operativo.
- [ ] Fecha/hora de lanzamiento planificada y registrada.

## 8) Control post-publicación (primeras 24-72h)
- [ ] Campaña entrega impresiones y clics sin anomalías.
- [ ] Términos de búsqueda iniciales revisados y negativas ajustadas.
- [ ] Eventos clave observados en GA4 durante prueba manual.
- [ ] Conversiones en Google Ads comparadas contra la evidencia de GA4 y contra la landing real.
- [ ] Ajustes iniciales documentados (qué se cambió y por qué).
- [ ] Si se corrigen objetivos de campaña, dejar registro de qué objetivos se quitaron y cuál quedó vigente.

## 9) Evidencias mínimas a conservar
- [ ] Capturas de configuración de campaña, anuncios y conversiones en Google Ads.
- [ ] Capturas o registro de DebugView/tiempo real en GA4 para el clic real a WhatsApp.
- [ ] Captura del evento observado en DebugView con sus parámetros relevantes (`link_domain`, `link_url`, `outbound`, `page_location`).
- [ ] Captura de la acción de conversión `Whatsapp` en Google Ads y de su fuente real.
- [ ] Captura del objetivo de conversión efectivo de la campaña.
- [ ] Referencia de validación de WhatsApp según `docs/analytics/evento_whatsapp.md`.
- [ ] Registro breve en `logs/` con fecha, responsable, resultado y riesgos detectados.
- [ ] Enlace o referencia al documento fuente actualizado cuando haya cambios de estado.

---

## Uso dentro del repositorio
- Usar este checklist antes de publicar y durante el control inicial post-publicación.
- Si un ítem falla, registrar incidencia y actualizar el documento fuente correspondiente en `docs/`.
- Mantener trazabilidad con evidencias en `capturas/` y/o `logs/`.
- Si la prueba manual demuestra un comportamiento distinto al documentado, corregir primero la fuente global de conversiones y luego el reporte operativo.