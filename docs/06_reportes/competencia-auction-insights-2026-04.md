# Competencia detectada por Estadísticas de subasta – Abril 2026

## Propósito

Documentar la primera extracción manual de **Estadísticas de subasta** de Google Ads para Mandarin, con foco en detectar competidores reales que participaron en las mismas subastas publicitarias.

El objetivo principal es verificar con datos si `mavatec.com.ar` aparece en el mismo universo competitivo de Mandarin y, además, identificar otros dominios relevantes que el cliente puede no tener en el radar.

---

## Estado del documento

- **Cliente:** Mandarin
- **Proyecto:** Google Ads – Campaña de búsqueda
- **Tipo de análisis:** Radar competitivo por Estadísticas de subasta
- **Fecha de documentación:** 2026-05-16
- **Período analizado:** 2026-03-27 a 2026-04-23
- **Estado:** Primera versión documentada

---

## Campaña analizada

```text
Search | Leads | Tabiques Sanitarios | AR | Diario 10K
```

## Grupo de anuncios analizado

```text
Tabiques Sanitarios
```

---

## Archivos fuente

Los archivos fueron exportados manualmente desde Google Ads y guardados en:

```text
data/auction_insights/2026-05-16/
```

Archivos utilizados:

```text
data/auction_insights/2026-05-16/auction_insights_adgroups_tabiques_sanitarios_2026-03-27_a_2026-04-23.csv
data/auction_insights/2026-05-16/auction_insights_keywords_principales_2026-03-27_a_2026-04-23.csv
data/auction_insights/2026-05-16/auction_insights_keyword_tabiques_para_banos_2026-03-27_a_2026-04-23.csv
data/auction_insights/2026-05-16/auction_insights_keyword_divisiones_sanitarias_2026-03-27_a_2026-04-23.csv
data/auction_insights/2026-05-16/auction_insights_keyword_tabiques_sanitarios_exacta_2026-03-27_a_2026-04-23.csv
data/auction_insights/2026-05-16/auction_insights_keyword_boxes_sanitarios_2026-03-27_a_2026-04-23.csv
```

---

## Niveles analizados

* [x] Grupo de anuncios completo
* [x] Keywords principales agrupadas
* [x] Keyword individual: `"tabiques para baños"`
* [x] Keyword individual: `"divisiones sanitarias"`
* [x] Keyword individual: `[tabiques sanitarios]`
* [x] Keyword individual: `"boxes sanitarios"`

---

## Métricas utilizadas

| Métrica                                            | Interpretación operativa                                                                           |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Porcentaje de impresiones                          | Participación visible del dominio dentro del universo de subastas analizado                        |
| Porcentaje de superposición                        | Frecuencia con la que el dominio competidor apareció cuando Mandarin también apareció              |
| Porcentaje de posición superior                    | Frecuencia con la que el competidor apareció por encima de Mandarin cuando ambos participaron      |
| Porcentaje de parte superior de la página          | Frecuencia con la que el anuncio apareció sobre los resultados orgánicos                           |
| Porcentaje absoluto en parte superior de la página | Frecuencia con la que el anuncio apareció en la primera posición absoluta                          |
| Porcentaje de ranking superior                     | Frecuencia con la que Mandarin superó a ese competidor o apareció cuando el competidor no apareció |

---

# 1. Resumen ejecutivo

La extracción confirma que `mavatec.com.ar` **sí aparece objetivamente en las mismas subastas que Mandarin**.

Sin embargo, el análisis también muestra que Mavatec **no es el único competidor relevante**. En varios niveles del análisis aparecen otros dominios con mayor presencia o mayor superposición, especialmente:

```text
hoff.design
easyboxdivisores.com
tabiquesymodulos.com.ar
mercadolibre.com.ar
```

El hallazgo más fuerte para Mavatec aparece en la keyword exacta:

```text
[tabiques sanitarios]
```

En esa búsqueda, `mavatec.com.ar` alcanza:

```text
58.33% de impresiones
62.37% de superposición
20.69% de posición superior
56.25% de ranking superior para Mandarin
```

Esto permite afirmar que Mavatec no es solo una referencia subjetiva del cliente: aparece como competidor directo en una búsqueda central del negocio.

---

# 2. Resultado por grupo de anuncios

## Nivel analizado

```text
Grupo de anuncios: Tabiques Sanitarios
```

## Archivo fuente

```text
data/auction_insights/2026-05-16/auction_insights_adgroups_tabiques_sanitarios_2026-03-27_a_2026-04-23.csv
```

## Tabla de dominios detectados

| Dominio                 | % impresiones | % superposición | % posición superior | % parte superior página | % absoluto parte superior | % ranking superior | Diagnóstico                            |
| ----------------------- | ------------: | --------------: | ------------------: | ----------------------: | ------------------------: | -----------------: | -------------------------------------- |
| Usted / Mandarin        |        59.49% |               — |                   — |                  86.91% |                    65.66% |                  — | Referencia propia                      |
| hoff.design             |        56.12% |          56.84% |              24.19% |                  82.70% |                    23.30% |             51.31% | Competidor principal por superposición |
| easyboxdivisores.com    |        32.85% |          35.00% |              15.34% |                  73.37% |                    10.25% |             56.30% | Competidor relevante                   |
| tabiquesymodulos.com.ar |        25.28% |          23.46% |               7.84% |                  63.49% |                     2.77% |             58.40% | Competidor de nicho                    |
| mavatec.com.ar          |        23.05% |          27.43% |              21.72% |                  90.70% |                    20.68% |             55.95% | Competidor confirmado                  |
| mercadolibre.com.ar     |        11.24% |          12.65% |               8.72% |                  93.00% |                     6.23% |             58.84% | Marketplace / resultado mixto          |

## Lectura

A nivel grupo de anuncios, `mavatec.com.ar` aparece como competidor confirmado, pero no es el dominio con mayor superposición.

El competidor más presente en este nivel es:

```text
hoff.design
```

con:

```text
56.12% de impresiones
56.84% de superposición
```

Mavatec aparece con:

```text
23.05% de impresiones
27.43% de superposición
21.72% de posición superior
55.95% de ranking superior para Mandarin
```

---

# 3. Resultado por keywords principales agrupadas

## Nivel analizado

```text
Keywords principales agrupadas
```

## Archivo fuente

```text
data/auction_insights/2026-05-16/auction_insights_keywords_principales_2026-03-27_a_2026-04-23.csv
```

## Tabla de dominios detectados

| Dominio                 | % impresiones | % superposición | % posición superior | % parte superior página | % absoluto parte superior | % ranking superior | Diagnóstico                            |
| ----------------------- | ------------: | --------------: | ------------------: | ----------------------: | ------------------------: | -----------------: | -------------------------------------- |
| Usted / Mandarin        |        59.11% |               — |                   — |                  86.56% |                    64.92% |                  — | Referencia propia                      |
| hoff.design             |        55.66% |          56.11% |              25.30% |                  82.42% |                    23.79% |             50.72% | Competidor principal por superposición |
| easyboxdivisores.com    |        32.76% |          34.85% |              15.69% |                  72.74% |                    10.41% |             55.88% | Competidor relevante                   |
| tabiquesymodulos.com.ar |        25.09% |          23.31% |               8.14% |                  64.04% |                     2.86% |             57.99% | Competidor de nicho                    |
| mavatec.com.ar          |        22.62% |          26.96% |              22.82% |                  90.48% |                    21.63% |             55.48% | Competidor confirmado                  |
| mercadolibre.com.ar     |        11.27% |          12.68% |               8.98% |                  92.83% |                     6.37% |             58.44% | Marketplace / resultado mixto          |

## Lectura

En el conjunto de keywords principales, Mavatec vuelve a aparecer con valores similares al análisis del grupo de anuncios completo.

Esto confirma que su presencia no fue ruido del nivel grupo. También aparece cuando el análisis se concentra sobre las keywords principales.

Mavatec registra:

```text
22.62% de impresiones
26.96% de superposición
22.82% de posición superior
55.48% de ranking superior para Mandarin
```

---

# 4. Resultado por keyword: "tabiques para baños"

## Nivel analizado

```text
Keyword individual: "tabiques para baños"
```

## Archivo fuente

```text
data/auction_insights/2026-05-16/auction_insights_keyword_tabiques_para_banos_2026-03-27_a_2026-04-23.csv
```

## Tabla de dominios detectados

| Dominio                 | % impresiones | % superposición | % posición superior | % parte superior página | % absoluto parte superior | % ranking superior | Diagnóstico                   |
| ----------------------- | ------------: | --------------: | ------------------: | ----------------------: | ------------------------: | -----------------: | ----------------------------- |
| hoff.design             |        67.69% |          71.32% |              26.20% |                  83.23% |                    26.67% |             44.98% | Competidor dominante          |
| Usted / Mandarin        |        55.31% |               — |                   — |                  84.47% |                    60.53% |                  — | Referencia propia             |
| tabiquesymodulos.com.ar |        31.73% |          30.26% |               7.83% |                  63.76% |                     1.83% |             54.00% | Competidor de nicho           |
| easyboxdivisores.com    |        23.44% |          25.53% |              14.43% |                  65.84% |                     7.45% |             53.28% | Competidor secundario         |
| mavatec.com.ar          |        17.76% |          21.58% |              25.61% |                  88.52% |                    21.31% |             52.26% | Competidor confirmado         |
| mercadolibre.com.ar     |        10.48% |          12.63% |              14.58% |                  90.28% |                     2.78% |             54.29% | Marketplace / resultado mixto |

## Lectura

Para `"tabiques para baños"`, el competidor más fuerte es:

```text
hoff.design
```

con:

```text
67.69% de impresiones
71.32% de superposición
```

Mavatec aparece, pero con menor presencia:

```text
17.76% de impresiones
21.58% de superposición
25.61% de posición superior
52.26% de ranking superior para Mandarin
```

Lectura comercial:

```text
Mavatec compite en esta búsqueda, pero Hoff aparece mucho más seguido en las mismas subastas.
```

---

# 5. Resultado por keyword: "divisiones sanitarias"

## Nivel analizado

```text
Keyword individual: "divisiones sanitarias"
```

## Archivo fuente

```text
data/auction_insights/2026-05-16/auction_insights_keyword_divisiones_sanitarias_2026-03-27_a_2026-04-23.csv
```

## Tabla de dominios detectados

| Dominio                 | % impresiones | % superposición | % posición superior | % parte superior página | % absoluto parte superior | % ranking superior | Diagnóstico                   |
| ----------------------- | ------------: | --------------: | ------------------: | ----------------------: | ------------------------: | -----------------: | ----------------------------- |
| hoff.design             |        64.59% |          64.37% |              22.33% |                  79.37% |                    20.10% |             48.23% | Competidor dominante          |
| Usted / Mandarin        |        56.32% |               — |                   — |                  90.42% |                    68.26% |                  — | Referencia propia             |
| easyboxdivisores.com    |        39.12% |          42.51% |              12.68% |                  73.28% |                    13.36% |             53.29% | Competidor relevante          |
| tabiquesymodulos.com.ar |        26.81% |          25.15% |              10.71% |                  64.78% |                     4.40% |             54.81% | Competidor de nicho           |
| mavatec.com.ar          |        21.42% |          26.95% |              22.22% |                  88.98% |                    19.69% |             52.95% | Competidor confirmado         |
| mercadolibre.com.ar     |        16.36% |          17.66% |              10.17% |                  95.88% |                    10.31% |             55.31% | Marketplace / resultado mixto |

## Lectura

Para `"divisiones sanitarias"`, Mavatec también aparece como competidor confirmado:

```text
21.42% de impresiones
26.95% de superposición
22.22% de posición superior
52.95% de ranking superior para Mandarin
```

Sin embargo, el principal competidor vuelve a ser:

```text
hoff.design
```

con:

```text
64.59% de impresiones
64.37% de superposición
```

Lectura comercial:

```text
Mavatec compite también en “divisiones sanitarias”, pero queda por debajo de Hoff y Easybox en presencia de subasta.
```

---

# 6. Resultado por keyword exacta: [tabiques sanitarios]

## Nivel analizado

```text
Keyword individual: [tabiques sanitarios]
```

## Archivo fuente

```text
data/auction_insights/2026-05-16/auction_insights_keyword_tabiques_sanitarios_exacta_2026-03-27_a_2026-04-23.csv
```

## Tabla de dominios detectados

| Dominio                 | % impresiones | % superposición | % posición superior | % parte superior página | % absoluto parte superior | % ranking superior | Diagnóstico                           |
| ----------------------- | ------------: | --------------: | ------------------: | ----------------------: | ------------------------: | -----------------: | ------------------------------------- |
| hoff.design             |        75.00% |          75.27% |              21.43% |                  89.81% |                    15.74% |             54.17% | Competidor dominante                  |
| Usted / Mandarin        |        64.58% |               — |                   — |                  91.40% |                    67.74% |                  — | Referencia propia                     |
| mavatec.com.ar          |        58.33% |          62.37% |              20.69% |                  96.43% |                    22.62% |             56.25% | Competidor directo fuerte             |
| easyboxdivisores.com    |        43.75% |          43.01% |              10.00% |                  73.02% |                     6.35% |             61.81% | Competidor relevante                  |
| tabiquesymodulos.com.ar |        29.86% |          24.73% |               4.35% |                  62.79% |                     4.65% |             63.89% | Competidor de nicho                   |
| zymprax.com.ar          |         < 10% |           6.45% |               0.00% |                 100.00% |                     0.00% |             64.58% | Competidor menor / baja participación |

## Lectura

Este es el hallazgo más importante del análisis.

Para la keyword exacta:

```text
[tabiques sanitarios]
```

`mavatec.com.ar` aparece como competidor directo fuerte:

```text
58.33% de impresiones
62.37% de superposición
20.69% de posición superior
56.25% de ranking superior para Mandarin
```

Frase documentable:

```text
En la keyword exacta [tabiques sanitarios], mavatec.com.ar aparece como competidor directo de alta presencia, con 58.33% de impresiones y 62.37% de superposición frente a Mandarin.
```

También se observa que `hoff.design` mantiene la mayor presencia de subasta:

```text
75.00% de impresiones
75.27% de superposición
```

---

# 7. Resultado por keyword: "boxes sanitarios"

## Nivel analizado

```text
Keyword individual: "boxes sanitarios"
```

## Archivo fuente

```text
data/auction_insights/2026-05-16/auction_insights_keyword_boxes_sanitarios_2026-03-27_a_2026-04-23.csv
```

## Tabla de dominios detectados

| Dominio                 | % impresiones | % superposición | % posición superior | % parte superior página | % absoluto parte superior | % ranking superior | Diagnóstico                                      |
| ----------------------- | ------------: | --------------: | ------------------: | ----------------------: | ------------------------: | -----------------: | ------------------------------------------------ |
| Usted / Mandarin        |        59.28% |               — |                   — |                  83.21% |                    62.60% |                  — | Referencia propia                                |
| easyboxdivisores.com    |        52.94% |          53.44% |              27.14% |                  76.92% |                    17.09% |             50.68% | Competidor principal para esta keyword           |
| mavatec.com.ar          |        21.27% |          25.95% |              23.53% |                  93.62% |                    21.28% |             55.66% | Competidor confirmado                            |
| hoff.design             |        20.81% |          21.37% |              35.71% |                  80.43% |                    19.57% |             54.75% | Competidor secundario con posición superior alta |
| tabiquesymodulos.com.ar |        17.19% |          17.56% |              13.04% |                  76.32% |                     5.26% |             57.92% | Competidor de nicho                              |
| mercadolibre.com.ar     |        13.12% |          14.50% |               0.00% |                  89.66% |                     0.00% |             59.28% | Marketplace / resultado mixto                    |

## Lectura

Para `"boxes sanitarios"`, el competidor más fuerte no es Mavatec ni Hoff, sino:

```text
easyboxdivisores.com
```

con:

```text
52.94% de impresiones
53.44% de superposición
27.14% de posición superior
```

Mavatec aparece como competidor secundario:

```text
21.27% de impresiones
25.95% de superposición
23.53% de posición superior
55.66% de ranking superior para Mandarin
```

Lectura comercial:

```text
En “boxes sanitarios”, Easybox es el competidor más relevante por presencia y superposición. Mavatec aparece, pero no lidera la subasta.
```

---

# 8. Comparativo resumido por keyword

## Mavatec por nivel analizado

| Nivel                          | % impresiones Mavatec | % superposición Mavatec | % posición superior Mavatec | Diagnóstico               |
| ------------------------------ | --------------------: | ----------------------: | --------------------------: | ------------------------- |
| Grupo de anuncios completo     |                23.05% |                  27.43% |                      21.72% | Competidor confirmado     |
| Keywords principales agrupadas |                22.62% |                  26.96% |                      22.82% | Competidor confirmado     |
| "tabiques para baños"          |                17.76% |                  21.58% |                      25.61% | Competidor secundario     |
| "divisiones sanitarias"        |                21.42% |                  26.95% |                      22.22% | Competidor confirmado     |
| [tabiques sanitarios]          |                58.33% |                  62.37% |                      20.69% | Competidor directo fuerte |
| "boxes sanitarios"             |                21.27% |                  25.95% |                      23.53% | Competidor secundario     |

## Lectura del comparativo

Mavatec aparece en todos los niveles analizados.

Su presencia más fuerte está en:

```text
[tabiques sanitarios]
```

En el resto de los niveles mantiene una presencia moderada, generalmente entre 17% y 23% de impresiones y entre 21% y 27% de superposición.

Esto indica que Mavatec es especialmente relevante para la búsqueda central exacta, pero no necesariamente domina todo el universo de búsquedas relacionadas.

---

# 9. Competidores principales detectados

## 9.1. hoff.design

Aparece como competidor dominante en varias extracciones:

| Nivel                          | % impresiones | % superposición |
| ------------------------------ | ------------: | --------------: |
| Grupo de anuncios completo     |        56.12% |          56.84% |
| Keywords principales agrupadas |        55.66% |          56.11% |
| "tabiques para baños"          |        67.69% |          71.32% |
| "divisiones sanitarias"        |        64.59% |          64.37% |
| [tabiques sanitarios]          |        75.00% |          75.27% |
| "boxes sanitarios"             |        20.81% |          21.37% |

### Diagnóstico

`hoff.design` es el competidor más relevante por frecuencia de aparición y superposición en la mayoría de las búsquedas principales.

Debe incorporarse al radar competitivo prioritario.

---

## 9.2. mavatec.com.ar

Aparece en todos los niveles analizados.

Su mayor peso está en:

```text
[tabiques sanitarios]
```

donde alcanza:

```text
58.33% de impresiones
62.37% de superposición
```

### Diagnóstico

`mavatec.com.ar` queda confirmado como competidor directo, especialmente en la keyword exacta central del negocio.

No obstante, no es el único competidor relevante ni el que mayor superposición tiene en todos los casos.

---

## 9.3. easyboxdivisores.com

Aparece como competidor relevante, especialmente en:

```text
"boxes sanitarios"
"divisiones sanitarias"
```

En `"boxes sanitarios"` lidera entre los competidores:

```text
52.94% de impresiones
53.44% de superposición
```

### Diagnóstico

`easyboxdivisores.com` debe considerarse competidor prioritario para búsquedas relacionadas con boxes y divisores.

---

## 9.4. tabiquesymodulos.com.ar

Aparece de forma recurrente en todas las extracciones, aunque generalmente con menor posición superior.

### Diagnóstico

`tabiquesymodulos.com.ar` es un competidor de nicho recurrente. Conviene mantenerlo en observación.

---

## 9.5. mercadolibre.com.ar

Aparece en varias extracciones con menor participación.

### Diagnóstico

`mercadolibre.com.ar` debe interpretarse con cuidado. Puede representar búsquedas amplias, productos relacionados o tráfico de marketplace, no necesariamente competencia directa B2B contra Mandarin.

---

## 9.6. zymprax.com.ar

Aparece solo en la extracción de `[tabiques sanitarios]` con bajo porcentaje de impresiones.

### Diagnóstico

`zymprax.com.ar` queda como competidor menor o dominio a monitorear si reaparece en próximas extracciones.

---

# 10. Ranking operativo de competidores

## Competidores prioritarios

| Prioridad | Dominio                 | Motivo                                                                  |
| --------: | ----------------------- | ----------------------------------------------------------------------- |
|         1 | hoff.design             | Mayor superposición general y fuerte presencia en keywords principales  |
|         2 | mavatec.com.ar          | Competidor confirmado y muy fuerte en `[tabiques sanitarios]`           |
|         3 | easyboxdivisores.com    | Fuerte en `"boxes sanitarios"` y relevante en `"divisiones sanitarias"` |
|         4 | tabiquesymodulos.com.ar | Presencia recurrente en varias búsquedas                                |
|         5 | mercadolibre.com.ar     | Presencia recurrente, pero interpretación más ambigua                   |
|         6 | zymprax.com.ar          | Aparición menor, monitoreo futuro                                       |

---

# 11. Hallazgos principales

* `mavatec.com.ar` aparece objetivamente en las mismas subastas que Mandarin.
* Mavatec aparece en todos los cortes analizados.
* La mayor presencia de Mavatec ocurre en `[tabiques sanitarios]`.
* En `[tabiques sanitarios]`, Mavatec alcanza 58.33% de impresiones y 62.37% de superposición.
* `hoff.design` aparece como el competidor más fuerte en términos generales.
* `easyboxdivisores.com` aparece como el competidor más fuerte para `"boxes sanitarios"`.
* `tabiquesymodulos.com.ar` aparece como competidor recurrente de nicho.
* `mercadolibre.com.ar` aparece en varias búsquedas, pero debe analizarse como resultado mixto o marketplace.
* El mapa competitivo real es más amplio que Mavatec.

---

# 12. Diagnóstico estratégico

La percepción inicial del cliente sobre Mavatec queda validada parcialmente.

Mavatec efectivamente compite contra Mandarin en Google Ads, pero el análisis muestra que hay otros dominios con mayor presencia en varias búsquedas.

El caso más claro para hablar de competencia directa con Mavatec es:

```text
[tabiques sanitarios]
```

En cambio, para búsquedas como:

```text
"tabiques para baños"
"divisiones sanitarias"
```

el competidor más fuerte es `hoff.design`.

Para:

```text
"boxes sanitarios"
```

el competidor más fuerte es `easyboxdivisores.com`.

Por lo tanto, el radar competitivo no debe estar centrado exclusivamente en Mavatec. Debe estructurarse por intención de búsqueda.

---

# 13. Implicancias para anuncios

A partir de estos datos, conviene reforzar en los anuncios los diferenciales técnicos de Mandarin, especialmente cuando la campaña compite en búsquedas donde aparecen competidores fuertes.

Diferenciales a reforzar:

* Sistema antivandálico.
* Terminación en aluminio anodizado.
* Sin sujeciones a la vista.
* Mejor terminación frente a sistemas con ABS.
* Posibilidad de ajuste en obra.
* Protección frente a golpes y maltrato.
* Corrección de desplomes de pared mediante terminación de aluminio.
* Solución orientada a baños públicos, obras, empresas e instituciones.

---

# 14. Mensajes sugeridos para anuncios

## Línea 1: sistema antivandálico

```text
Tabiques Sanitarios Antivandálicos
```

```text
Sistema Con Terminación En Aluminio
```

```text
Divisores Sanitarios Para Obras
```

## Línea 2: diferencial frente a competidores

```text
Sin Sujeciones A La Vista
```

```text
Mejor Terminación En Obra
```

```text
Sistema Robusto Para Alto Tránsito
```

## Línea 3: orientación comercial

```text
Cotizá Para Tu Obra
```

```text
Soluciones Para Empresas
```

```text
Tabiques Para Baños Públicos
```

---

# 15. Decisiones sugeridas

## Mantener

* Mantener la campaña activa.
* Mantener monitoreo competitivo mensual.
* Mantener a Mavatec dentro del radar competitivo.
* Mantener revisión individual por keyword.

## Agregar al radar competitivo

Agregar como competidores observados:

```text
hoff.design
easyboxdivisores.com
tabiquesymodulos.com.ar
mercadolibre.com.ar
zymprax.com.ar
```

## Analizar en próximos ciclos

* Si Mavatec aumenta o reduce superposición en `[tabiques sanitarios]`.
* Si Hoff sigue dominando `"tabiques para baños"` y `"divisiones sanitarias"`.
* Si Easybox mantiene liderazgo en `"boxes sanitarios"`.
* Si aparecen nuevos dominios por encima del 10% de impresiones.
* Si las variaciones de CPC coinciden con mayor presión competitiva.

---

# 16. Limitaciones del análisis

Las Estadísticas de subasta no muestran:

* inversión exacta de los competidores;
* presupuesto diario de competidores;
* keywords exactas compradas por cada competidor;
* términos de búsqueda internos de competidores;
* conversiones de competidores;
* estrategia completa de puja;
* calidad comercial de los leads de la competencia.

El informe solo permite comparar visibilidad relativa entre anunciantes que participaron en las mismas subastas disponibles para Mandarin.

---

# 17. Riesgos de interpretación

* Un alto porcentaje de impresiones no significa necesariamente mayor cantidad de ventas.
* Un alto porcentaje de parte superior de página no significa mejor rentabilidad.
* MercadoLibre puede aparecer por búsquedas más amplias o mixtas.
* La presencia de un dominio no prueba que ese dominio esté pujando por la misma keyword exacta en todos los casos, salvo cuando el informe se exporta desde esa keyword específica.
* Los datos dependen del período seleccionado: 2026-03-27 a 2026-04-23.

---

# 18. Próximos pasos recomendados

## Próximo ciclo de extracción

Repetir extracción en el siguiente período mensual para comparar:

```text
2026-04-24 a 2026-05-23
```

o usar mes calendario cerrado:

```text
2026-05-01 a 2026-05-31
```

## Niveles a repetir

* Grupo de anuncios completo.
* Keywords principales agrupadas.
* `[tabiques sanitarios]`.
* `"tabiques para baños"`.
* `"divisiones sanitarias"`.
* `"boxes sanitarios"`.

## Comparaciones futuras

Crear una tabla de evolución mensual con:

| Dominio                 | Marzo/Abril | Mayo | Variación | Diagnóstico |
| ----------------------- | ----------: | ---: | --------: | ----------- |
| hoff.design             |           — |    — |         — | —           |
| mavatec.com.ar          |           — |    — |         — | —           |
| easyboxdivisores.com    |           — |    — |         — | —           |
| tabiquesymodulos.com.ar |           — |    — |         — | —           |
| mercadolibre.com.ar     |           — |    — |         — | —           |

---

# 19. Conclusión

La extracción manual de Estadísticas de subasta permitió transformar una hipótesis comercial en evidencia medible.

Conclusión principal:

```text
mavatec.com.ar sí compite contra Mandarin en Google Ads.
```

Conclusión ampliada:

```text
El mapa competitivo real de Mandarin no se limita a Mavatec. Hoff, Easybox y Tabiques y Módulos también aparecen como competidores relevantes, con distintos niveles de fuerza según la keyword analizada.
```

Conclusión operativa:

```text
La campaña debe optimizarse por intención de búsqueda y no solo contra un competidor específico.
```

La keyword más sensible frente a Mavatec es:

```text
[tabiques sanitarios]
```

La keyword donde Hoff domina con más claridad es:

```text
"tabiques para baños"
```

La keyword donde Easybox domina con más claridad es:

```text
"boxes sanitarios"
```

Este reporte debe incorporarse como base del radar competitivo mensual de Mandarin.
