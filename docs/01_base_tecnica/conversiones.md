# Definición de Conversiones para Mandarin

## Propósito
Definir las conversiones del proyecto y su estado operativo global para GA4 y Google Ads.

## Alcance
Aplica a la jerarquía de conversiones del proyecto y al estado de validación/importación.

## Estado
Pendiente validación

## Fecha de actualización
2026-04-02

## Objetivo del Documento
Definir las acciones del sitio web que se consideran conversiones reales de negocio y establecer cómo se miden utilizando Google Analytics 4 (GA4) y Google Ads.

## Definición General de Conversión
Para Mandarin, una conversión se define como cualquier acción realizada por un usuario en el sitio web que indique interés genuino en los servicios ofrecidos y que pueda ser considerada un lead calificado dentro del contexto B2B.

## Listado de Eventos Definidos

### 1. form_submit
- **Tipo de lead:** Lead calificado
- **Origen:** Formulario de contacto
- **Herramienta de medición:** Google Analytics 4 (GA4)
- **Estado:** Pendiente validación

### 2. click_whatsapp
- **Tipo de lead:** Lead potencial
- **Origen:** Enlace de WhatsApp
- **Herramienta de medición:** Google Analytics 4 (GA4)
- **Estado:** Pendiente validación operativa
- **Nota de consistencia:** La implementación técnica específica está documentada en `docs/analytics/evento_whatsapp.md`; este documento consolida el estado global de conversiones.

### 3. click_tel
- **Tipo de lead:** Lead potencial
- **Origen:** Enlace de teléfono
- **Herramienta de medición:** Google Analytics 4 (GA4)
- **Estado:** Pendiente validación

## Jerarquía de Conversión
1. form_submit (lead principal, pendiente validación)
2. click_whatsapp (lead directo, implementación técnica documentada; pendiente validación operativa)
3. click_tel (lead directo, pendiente validación)

## Conversiones Importadas en Google Ads
- [ ] form_submit
- [ ] click_whatsapp
- [ ] click_tel

## Nota Aclaratoria
La optimización de pujas en Google Ads se realiza únicamente cuando se dispone de datos de conversión confiables y suficientes para garantizar decisiones basadas en métricas reales.

Las conversiones solo se importan a Google Ads cuando:
- El evento se dispara correctamente en GA4
- Se valida en DebugView
- Se registra tráfico real.