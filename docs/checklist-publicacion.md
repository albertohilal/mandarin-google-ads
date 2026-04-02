# Checklist operativo de publicación y validación

## Propósito
Establecer una verificación operativa mínima y consistente antes de lanzar, durante el lanzamiento y después de publicar campañas de Google Ads en este repositorio.

## Alcance
Aplica a la validación de cuenta, campaña, anuncios, tracking, conversiones y control inicial de operación para Mandarin.

## Estado
Vigente

## Fecha de actualización
2026-04-02

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
- [ ] Consistencia validada con docs/01_base_tecnica/conversiones.md (jerarquía y estado de conversiones).
- [ ] Consistencia validada con docs/analytics/evento_whatsapp.md para el evento click_whatsapp.
- [ ] Evento click_whatsapp visible en GA4 DebugView con prueba manual reciente.
- [ ] Evento click_whatsapp marcado como conversión en GA4 (si aplica al estado operativo).
- [ ] Conversiones importadas en Google Ads revisadas (nombre, origen, estado).
- [ ] No optimizar automáticamente por conversiones con estado pendiente validación.

## 6) Validación técnica del sitio
- [ ] Landing accesible en móvil y desktop sin errores críticos.
- [ ] Formulario de contacto funcional (envío y confirmación visibles).
- [ ] Enlaces de WhatsApp y teléfono funcionales.
- [ ] Carga base de página aceptable y sin bloqueos funcionales evidentes.

## 7) Validación previa al lanzamiento
- [ ] Revisión final de segmentación, presupuesto y anuncios completada.
- [ ] Estado de conversiones documentado y explícito (vigente o pendiente validación).
- [ ] Checklist revisado por responsable operativo.
- [ ] Fecha/hora de lanzamiento planificada y registrada.

## 8) Control post-publicación (primeras 24-72h)
- [ ] Campaña entrega impresiones y clics sin anomalías.
- [ ] Términos de búsqueda iniciales revisados y negativas ajustadas.
- [ ] Eventos clave observados en GA4 (incluyendo click_whatsapp si aplica).
- [ ] Conversiones en Google Ads comparadas contra GA4 para detectar desvíos.
- [ ] Ajustes iniciales documentados (qué se cambió y por qué).

## 9) Evidencias mínimas a conservar
- [ ] Capturas de configuración de campaña, anuncios y conversiones en Google Ads.
- [ ] Capturas o registro de DebugView/tiempo real en GA4 para eventos clave.
- [ ] Referencia de validación de click_whatsapp según docs/analytics/evento_whatsapp.md.
- [ ] Registro breve en logs/ con fecha, responsable, resultado y riesgos detectados.
- [ ] Enlace o referencia al documento fuente actualizado cuando haya cambios de estado.

---

## Uso dentro del repositorio
- Usar este checklist antes de publicar y durante el control inicial post-publicación.
- Si un ítem falla, registrar incidencia y actualizar el documento fuente correspondiente en docs/.
- Mantener trazabilidad con evidencias en capturas/ y/o logs/.