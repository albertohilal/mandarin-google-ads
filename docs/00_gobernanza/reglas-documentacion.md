# Reglas de documentación

## Propósito
Definir reglas mínimas para que la documentación del proyecto sea clara, mantenible y trazable.

## Alcance
Aplica a todos los archivos Markdown del repositorio, especialmente los ubicados en `docs/`.

## Estado
Vigente

## Fecha de actualización
2026-04-02

---

## Reglas obligatorias

1. **Cada documento debe declarar metadatos mínimos**:
   - Propósito
   - Alcance
   - Estado
   - Fecha de actualización

2. **Un tema = una fuente de verdad**:
   - Cada tema operativo/técnico debe tener un documento principal.
   - Los demás documentos deben enlazar esa fuente en lugar de duplicarla.

3. **Evitar duplicación**:
   - No copiar bloques completos en múltiples archivos.
   - Cuando sea necesario resumir, usar síntesis breve y enlace al documento fuente.

4. **Manejo de obsolescencia**:
   - Si un archivo queda obsoleto, no borrarlo de inmediato.
   - Marcar claramente su estado y referenciar el documento reemplazo.

5. **Registrar decisiones operativas relevantes**:
   - Toda decisión que afecte estrategia, tracking, scripts o operación debe quedar documentada.
   - Incluir fecha, motivo e impacto.

## Estados documentales permitidos
- **Borrador**: contenido inicial, aún sin validación final.
- **Vigente**: contenido activo y válido para operación.
- **Pendiente validación**: propuesta definida, pendiente confirmación técnica o de negocio.
- **Archivado**: histórico no operativo, conservado por trazabilidad.
