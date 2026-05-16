# Extracción manual de Estadísticas de subasta – Google Ads

## Propósito

Documentar el procedimiento manual para extraer Estadísticas de subasta de Google Ads y construir un radar competitivo para Mandarin.

El objetivo es detectar qué dominios participan en las mismas subastas que Mandarin, verificar si aparece `mavatec.com.ar` y registrar otros competidores que puedan surgir de los datos.

## Ubicación del documento

Ruta sugerida dentro del proyecto:

```bash
/home/beto/Documentos/Github/mandarin-google-ads/docs/02_estrategia/extraccion_manual_auction_insights.md
```

## Ubicación de los archivos exportados

Ruta sugerida para guardar los CSV crudos:

```bash
/home/beto/Documentos/Github/mandarin-google-ads/data/auction_insights/YYYY-MM-DD/
```

Ejemplo:

```bash
/home/beto/Documentos/Github/mandarin-google-ads/data/auction_insights/2026-05-16/
```

---

## 1. Alcance

Este procedimiento aplica a la extracción manual de Estadísticas de subasta para:

- campañas;
- grupos de anuncios;
- keywords de búsqueda.

El foco inicial es la campaña de búsqueda de Mandarin orientada a leads para tabiques sanitarios.

---

## 2. Fuente de datos

Fuente primaria:

- Google Ads
- Informe: Estadísticas de subasta
- Niveles de análisis:
  - Campaña
  - Grupo de anuncios
  - Palabra clave de búsqueda

---

## 3. Frecuencia recomendada

Durante la etapa inicial:

- semanal, para detectar competidores recurrentes;
- mensual, para integrarlo al reporte general de performance.

Cuando el sistema esté estabilizado:

- mensual como mínimo;
- semanal solo si hay cambios fuertes de CPC, CTR, conversiones o pérdida de visibilidad.

---

## 4. Convención de carpetas

Crear una carpeta por fecha de extracción:

```bash
mkdir -p data/auction_insights/2026-05-16
```

La fecha debe representar el día en que se hizo la exportación, no necesariamente el período analizado.

---

## 5. Convención de nombres de archivo

Usar nombres explícitos, sin espacios y con período incluido.

### Campaña

```text
auction_insights_campaigns_2026-05-01_a_2026-05-15.csv
```

### Grupo de anuncios

```text
auction_insights_adgroups_2026-05-01_a_2026-05-15.csv
```

### Keywords

```text
auction_insights_keywords_2026-05-01_a_2026-05-15.csv
```

Si se exporta solo una campaña o grupo específico, agregar identificador:

```text
auction_insights_keywords_tabiques_sanitarios_2026-05-01_a_2026-05-15.csv
```

---

## 6. Procedimiento manual en Google Ads

### Paso 1 — Entrar a Google Ads

1. Ingresar a Google Ads.
2. Seleccionar la cuenta de Mandarin.
3. Verificar que se está trabajando sobre la cuenta correcta antes de exportar datos.

### Paso 2 — Definir el período

1. Ir al selector de fechas.
2. Seleccionar el período a analizar.
3. Para control semanal, usar semana cerrada.
4. Para reporte mensual, usar mes calendario completo.

Ejemplo:

```text
2026-05-01 a 2026-05-15
```

Regla: no mezclar períodos parciales con períodos cerrados en el mismo análisis comparativo.

### Paso 3 — Ir al nivel de análisis

Elegir uno de estos niveles:

#### Opción A — Campañas

Usar cuando se quiere obtener una visión general competitiva.

Ruta conceptual:

```text
Campañas → Campañas
```

Seleccionar la campaña correspondiente, por ejemplo:

```text
Search | Leads | Tabiques Sanitarios | AR | Diario 10K
```

#### Opción B — Grupos de anuncios

Usar cuando se quiere saber en qué línea o conjunto de anuncios aparece competencia.

Ruta conceptual:

```text
Campañas → Grupos de anuncios
```

Seleccionar el grupo correspondiente, por ejemplo:

```text
Tabiques Sanitarios
```

#### Opción C — Keywords de búsqueda

Usar cuando se quiere analizar competencia en búsquedas puntuales.

Ruta conceptual:

```text
Campañas → Palabras clave de la Búsqueda
```

Seleccionar keywords relevantes, por ejemplo:

```text
"tabiques sanitarios"
"divisiones sanitarias"
"tabiques para baños"
"divisores de baños"
"boxes sanitarios"
```

Nota operativa: si hay muchas keywords, exportar en tandas o usar la opción de informe para todo el conjunto disponible.

### Paso 4 — Abrir Estadísticas de subasta

1. Marcar la campaña, grupo o keyword a analizar.
2. Seleccionar la opción `Estadísticas de subasta`.
3. Esperar a que Google Ads genere el informe.
4. Verificar que el informe tenga datos suficientes.

Si el informe no aparece o muestra datos incompletos, puede deberse a bajo volumen de actividad en el período seleccionado.

### Paso 5 — Revisar columnas esperadas

El informe debería incluir, según disponibilidad y tipo de campaña, columnas como:

- Dominio visible / anunciante
- Porcentaje de impresiones
- Porcentaje de superposición
- Porcentaje de ranking superior
- Porcentaje de posición superior
- Porcentaje en parte superior de la página
- Tasa en la parte superior absoluta de la página

Para campañas de búsqueda, estas métricas son las más útiles para el análisis competitivo.

### Paso 6 — Descargar CSV

1. Usar la opción de descarga/exportación del informe.
2. Elegir formato CSV.
3. Guardar el archivo sin modificar.
4. No abrir y guardar el CSV desde Excel antes de conservar una copia cruda.

Guardar en:

```bash
data/auction_insights/YYYY-MM-DD/
```

Ejemplo:

```bash
data/auction_insights/2026-05-16/auction_insights_keywords_2026-05-01_a_2026-05-15.csv
```

### Paso 7 — Registrar evidencia visual opcional

Si el análisis se va a presentar al cliente, guardar captura de pantalla del informe.

Ruta sugerida:

```bash
capturas/YYYY-MM-DD/auction_insights_keywords_2026-05-01_a_2026-05-15.png
```

---

## 7. Checklist de extracción

Antes de cerrar la tarea, validar:

- [ ] Cuenta correcta de Google Ads.
- [ ] Período seleccionado correctamente.
- [ ] Nivel de análisis definido: campaña, grupo o keyword.
- [ ] Campaña/grupo/keyword seleccionados.
- [ ] Informe de Estadísticas de subasta visible.
- [ ] CSV descargado.
- [ ] CSV guardado en `data/auction_insights/YYYY-MM-DD/`.
- [ ] Archivo crudo sin editar conservado.
- [ ] Nombre de archivo respeta la convención.
- [ ] Se registró si aparece `mavatec.com.ar`.
- [ ] Se registraron otros dominios detectados.
- [ ] Se anotaron limitaciones si no hubo datos suficientes.

---

## 8. Lectura inicial de los datos

Para cada dominio detectado, registrar:

| Campo | Descripción |
|---|---|
| Dominio | Dominio competidor detectado |
| Nivel | Campaña, grupo o keyword |
| Período | Rango de fechas analizado |
| Porcentaje de impresiones | Participación visible en ese universo de subastas |
| Porcentaje de superposición | Frecuencia con la que aparece junto a Mandarin |
| Porcentaje de posición superior | Frecuencia con la que aparece por encima de Mandarin |
| Porcentaje de ranking superior | Frecuencia con la que Mandarin supera a ese dominio o aparece cuando el otro no aparece |
| Parte superior de página | Presencia en posiciones superiores |
| Parte superior absoluta | Frecuencia en la primera posición absoluta |

---

## 9. Reglas de interpretación

| Situación | Interpretación |
|---|---|
| `mavatec.com.ar` no aparece | No hay evidencia de competencia directa en ese período y nivel |
| `mavatec.com.ar` aparece con baja superposición | Competidor ocasional |
| `mavatec.com.ar` aparece con alta superposición | Competidor directo recurrente |
| Alta superposición + alta posición superior del competidor | Riesgo competitivo relevante |
| Alto ranking superior de Mandarin | Mandarin suele superar al competidor |
| Nuevos dominios recurrentes | Agregar al radar competitivo |

---

## 10. Reporte derivado

Luego de cada extracción, crear o actualizar un reporte en:

```bash
docs/06_reportes/competencia-auction-insights-YYYY-MM.md
```

Ejemplo:

```bash
docs/06_reportes/competencia-auction-insights-2026-05.md
```

---

## 11. Plantilla mínima de reporte

```md
# Competencia detectada por Estadísticas de subasta – YYYY-MM

## Período analizado

YYYY-MM-DD a YYYY-MM-DD

## Nivel analizado

- [ ] Campaña
- [ ] Grupo de anuncios
- [ ] Keyword

## Archivos fuente

- `data/auction_insights/YYYY-MM-DD/archivo.csv`

## Estado de Mavatec

- ¿Aparece `mavatec.com.ar`?
  - [ ] Sí
  - [ ] No

## Dominios detectados

| Dominio | Impression share | Overlap rate | Position above rate | Outranking share | Diagnóstico |
|---|---:|---:|---:|---:|---|
| mavatec.com.ar | — | — | — | — | — |

## Hallazgos

- [Completar]

## Decisiones sugeridas

- [Completar]

## Limitaciones

- [Completar si el informe no tuvo volumen suficiente o si faltan niveles de análisis]
```

---

## 12. Limitaciones del informe

Las Estadísticas de subasta no permiten ver:

- inversión exacta del competidor;
- keywords exactas del competidor;
- términos de búsqueda internos del competidor;
- presupuesto diario;
- conversiones del competidor;
- estrategia completa de puja.

El informe solo muestra comparación relativa entre anunciantes que participaron en las mismas subastas disponibles para el anunciante.

---

## 13. Próximo paso recomendado

Primera extracción manual sugerida:

1. Campaña activa principal.
2. Grupo de anuncios `Tabiques Sanitarios`.
3. Keywords principales.
4. Período: últimos 30 días cerrados o mes calendario completo.
5. Guardar CSV crudo.
6. Crear reporte mensual de competencia.
