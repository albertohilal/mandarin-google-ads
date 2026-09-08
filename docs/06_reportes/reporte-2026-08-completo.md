# Informe completo de Google Ads — Agosto 2026

> **INTERNO — NO ES INFORME PARA CLIENTE.** Las conversiones indicadas son atribuciones de Google Ads y no equivalen automáticamente a contactos comerciales, ventas ni conversaciones de WhatsApp confirmadas.

- **Propósito:** documentar el rendimiento de Google Ads de Mandarin durante agosto de 2026 con una extracción auditable, un procedimiento repetible y límites explícitos.
- **Alcance:** `2026-08-01` a `2026-08-31`; el mes de julio se usa únicamente como baseline comparativo/metodológico.
- **Estado:** baseline técnico interno de agosto 2026; pendiente únicamente de validación comercial Ads-GA4/WhatsApp.
- **Fecha de actualización:** 2026-09-07.
- **Nivel de confiabilidad:** medio-alto para rendimiento de Google Ads; medio para Auction Insights porque el binding por criterio fue validado, aunque el CSV no documenta completamente los filtros utilizados en la exportación; bajo para conciliación Ads-GA4 y calidad comercial.

## 1. Datos generales del informe

| Campo | Valor |
|---|---|
| Customer ID consultado | `6590327345` |
| Campaña con entrega | `Search \| Leads \| Tabiques Sanitarios \| AR \| Diario 10K` (`23669915226`) |
| Período Google Ads | `2026-08-01`–`2026-08-31` |
| Extracción live principal | `2026-09-07T22:39:00.358229+00:00` UTC |
| Extracción live de control de keyword/search terms | `2026-09-07T22:40:02.384934+00:00` UTC |
| Base | API Google Ads vía `mcp-google-ads` + exportación manual/UI de Auction Insights |
| Baseline de julio | `docs/06_reportes/reporte-2026-07-baseline.md`, identidad confirmada con Google Doc `Informes Google Ads 2026`, tab `Julio 2026 Completo` (`t.vt1ezso1kjql`) |

## 2. Resumen ejecutivo

- La cuenta devolvió tres campañas `ENABLED`; solo `23669915226` tuvo entrega: 2.159 impresiones, 260 clics, costo `301.296,225036`, CTR `12,0426%`, CPC promedio `1.158,831635` y **52,0 conversiones atribuidas por Google Ads**.
- Frente a julio (1.842 impresiones, 190 clics, `300.187,79` y 41 conversiones atribuidas), agosto tuvo +17,2% impresiones, +36,8% clics, costo prácticamente estable (+0,4%) y +26,8% conversiones atribuidas. El CTR subió 1,73 puntos porcentuales y el CPC bajó 26,7%; la tasa de conversión bajó de 21,58% a 20,00%. Es una mejora del rendimiento medido y atribuido por Google Ads, no una mejora demostrada del resultado comercial.
- El rendimiento activo se concentra en 11 combinaciones de keyword y concordancia. `tabiques para baños` frase concentró el mayor gasto; `tabiques sanitarios` frase y `boxes sanitarios` mostraron señales de eficiencia atribuida favorables, mientras `tabiques sanitarios` exacta empeoró frente a julio.
- El binding objetivo se verificó: las 11 combinaciones del CSV que tienen fila `Usted` coinciden de forma inequívoca con criterios de keyword de la campaña activa mediante `criterion_id`, texto y concordancia. El CSV sigue sin documentar completamente los filtros de exportación, por lo que la confiabilidad competitiva es media y el alcance queda limitado a ese binding de criterios.
- No hay exporte GA4 de agosto, logs comerciales de WhatsApp ni validación de calidad. Las 52,0 conversiones no se presentan como clientes, ventas, leads válidos ni contactos confirmados.

## 3. Scorecard principal

| Métrica | Agosto 2026 | Julio 2026 | Variación agosto vs julio |
|---|---:|---:|---:|
| Impresiones | 2.159 | 1.842 | +317 (+17,2%) |
| Clics | 260 | 190 | +70 (+36,8%) |
| CTR | 12,04% | 10,31% | +1,73 pp |
| CPC promedio | $1.158,83 | $1.579,94 | -$421,10 (-26,7%) |
| Costo | $301.296,23 | $300.187,79 | +$1.108,44 (+0,4%) |
| Conversiones atribuidas por Google Ads | 52,0 | 41,0 | +11,0 (+26,8%) |
| Tasa de conversión | 20,00% | 21,58% | -1,58 pp |
| Costo por conversión | $5.794,16 | $7.321,65 | -$1.527,49 (-20,9%) |

**Cálculos:** CTR = clics / impresiones; CPC = costo / clics; tasa de conversión = conversiones atribuidas / clics; CPA = costo / conversiones atribuidas. Los cálculos de agosto usan la respuesta live y conservan conversiones decimales en el nivel keyword.

## 4. Estado de medición y conversiones

### Google Ads

- El dato disponible es **52,0 conversiones atribuidas por Google Ads** en la fila agregada de la campaña activa. No se lo etiqueta como contacto comercial, venta, lead válido o WhatsApp confirmado.
- El intento de `get_conversion_metrics` falló con `PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE`: la consulta combina `segments.conversion_action_name` con `metrics.cost_micros`.
- Una consulta read-only alternativa, sin `metrics.cost_micros`, devolvió una fila para la campaña activa: `conversion_action_name = Whatsapp` y `52,0` conversiones atribuidas. Esto documenta la acción de conversión reportada por Google Ads, pero no significa `52` conversaciones de WhatsApp ni convierte esas atribuciones en leads válidos o ventas.

### GA4 y WhatsApp

- No existe exportación GA4 de agosto ni cifra de eventos de WhatsApp procedentes de `google / cpc` o `Paid Search`; por eso no se calcula conciliación Ads-GA4, diferencia absoluta ni diferencia porcentual.
- Tampoco existe log comercial de conversaciones ni validación de calidad. Un clic técnico a WhatsApp no se convierte por inferencia en contacto comercial confirmado.
- La evidencia técnica disponible observó el evento GA4 `click` con `link_domain=api.whatsapp.com`, `link_url` y `outbound=true`; no se renombra como `click_whatsapp`. El evento `click_whatsapp` permanece documentado como esperado, no como flujo productivo verificado.

## 5. Rendimiento por campaña

| Campaña | Estado | Impr. | Clics | CTR | CPC prom. | Costo | Conv. atribuidas | Tasa conv. | CPA |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Search \| Leads \| Tabiques Sanitarios \| AR | ENABLED | 0 | 0 | 0,00% | $0,00 | $0,00 | 0,0 | — | — |
| Search \| Leads \| Tabiques Sanitarios \| AR \| Diario 10K | ENABLED | 2.159 | 260 | 12,04% | $1.158,83 | $301.296,23 | 52,0 | 20,00% | $5.794,16 |
| Search \| Leads \| Tabiques Sanitarios \| AR #2 | ENABLED | 0 | 0 | 0,00% | $0,00 | $0,00 | 0,0 | — | — |

Los ceros de las dos campañas sin entrega son observaciones explícitas de la respuesta de campaña; no se usan para completar faltantes de otras fuentes.

## 6. Rendimiento por keyword y Keyword Planner

La tabla activa proviene de `get_keyword_report`: 38 filas devueltas, 11 con entrega. La concordancia se conserva separada. Las columnas de Keyword Planner son **estimaciones a nivel de texto** para español/Argentina (volumen mensual, competencia, índice y CPC estimado); no son métricas de Auction Insights y pueden repetirse entre concordancias.

| Keyword | Conc. | Impr. | Clics | CTR | CPC | Costo | Conv. atrib. | CVR | CPA | Vol./mes | Comp. | Índice | CPC est. | IS búsqueda (API) | IS top (API) | IS abs. top (API) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|---:|---:|---:|
| tabiques para baños | Frase | 914 | 113 | 12,36% | $1.183,16 | $133.697,11 | 17,2 | 15,22% | $7.773,09 | 40 | Media | 50 | $1.133,68 | 59,86% | 41,11% | 24,17% |
| tabiques sanitarios | Frase | 404 | 55 | 13,61% | $954,39 | $52.491,33 | 14,8 | 26,91% | $3.546,71 | 170 | Media | 51 | $1.414,50 | 64,21% | 47,82% | 24,40% |
| paneles sanitarios | Frase | 261 | 25 | 9,58% | $610,78 | $15.269,47 | 3,0 | 12,00% | $5.089,82 | 20 | Media | 40 | $517,13 | 70,63% | 48,89% | 37,04% |
| tabiques sanitarios | Exacta | 196 | 29 | 14,80% | $1.706,84 | $49.498,39 | 7,0 | 24,14% | $7.071,20 | 170 | Media | 51 | $1.414,50 | 75,12% | 61,19% | 32,34% |
| boxes sanitarios | Frase | 175 | 16 | 9,14% | $1.190,14 | $19.042,31 | 6,0 | 37,50% | $3.173,72 | — | No disponible | — | — | 67,00% | 49,02% | 34,80% |
| paneles sanitarios | Exacta | 60 | 7 | 11,67% | $1.292,41 | $9.046,89 | 0,0 | 0,00% | — | 20 | Media | 40 | $517,13 | 77,05% | 43,55% | 35,48% |
| divisiones sanitarias | Exacta | 48 | 4 | 8,33% | $1.928,17 | $7.712,66 | 2,0 | 50,00% | $3.856,33 | 10 | Alta | 71 | $2.917,51 | 88,24% | 76,47% | 50,00% |
| divisiones sanitarias | Frase | 42 | 6 | 14,29% | $1.340,63 | $8.043,75 | 0,0 | 0,00% | — | 10 | Alta | 71 | $2.917,51 | 61,82% | 50,91% | 30,91% |
| boxes sanitarios | Exacta | 38 | 4 | 10,53% | $1.411,61 | $5.646,44 | 2,0 | 50,00% | $2.823,22 | — | No disponible | — | — | 58,70% | 54,35% | 21,74% |
| tabiques modulares | Exacta | 11 | 1 | 9,09% | $847,87 | $847,87 | 0,0 | 0,00% | — | 10 | Baja | 30 | $1.252,29 | 69,23% | 61,54% | 38,46% |
| tabiques modulares | Frase | 10 | 0 | 0,00% | $0,00 | $0,00 | 0,0 | — | — | 10 | Baja | 30 | $1.252,29 | 70,00% | 70,00% | 20,00% |

Las 11 filas suman exactamente 2.159 impresiones, 260 clics, `$301.296,225036` de costo y 52,0 conversiones. Las filas restantes de la respuesta son criterios sin entrega; no se interpretan como ausencia de demanda ni como cero de una métrica no consultada.

## 7. Evolución por keyword: julio → agosto

La comparación se limita a las combinaciones keyword + concordancia presentes en ambos períodos. La concordancia frase de `tabiques modulares` no se incluye porque no tiene una fila equivalente en el baseline de julio.

| Keyword | Conc. | Julio | Agosto | Cambio principal | Lectura |
|---|---|---|---|---|---|
| `tabiques para baños` | Frase | 704 impr.; 75 clics; 20,5 conv.; CVR 27,3%; CPA $6.988,26 | 914 impr.; 113 clics; 17,2 conv.; CVR 15,22%; CPA $7.773,09 | +210 impr.; +38 clics; -3,3 conv.; CVR -12,08 pp; CPA +11,2% | Más tráfico, pero menor eficiencia atribuida; sigue siendo relevante por volumen y requiere auditoría de términos/intención. |
| `tabiques sanitarios` | Frase | 261 impr.; 29 clics; 3,0 conv.; CVR 10,3%; CPA $14.185,18 | 404 impr.; 55 clics; 14,8 conv.; CVR 26,91%; CPA $3.546,71 | +143 impr.; +26 clics; +11,8 conv.; CVR +16,61 pp; CPA -75,0% | Mejora atribuida muy importante de eficiencia en agosto. |
| `tabiques sanitarios` | Exacta | 183 impr.; 18 clics; 7,0 conv.; CVR 38,9%; CPA $5.493,65 | 196 impr.; 29 clics; 7,0 conv.; CVR 24,14%; CPA $7.071,20 | +13 impr.; +11 clics; conversiones estables; CVR -14,76 pp; CPA +28,7% | Más clics, mismas conversiones y peor eficiencia atribuida; ya no es automáticamente la mejor variante por el resultado de julio. |
| `boxes sanitarios` | Frase | 133 impr.; 12 clics; 3,0 conv.; CVR 25,0%; CPA $5.025,20 | 175 impr.; 16 clics; 6,0 conv.; CVR 37,50%; CPA $3.173,72 | +42 impr.; +4 clics; +3,0 conv.; CVR +12,50 pp; CPA -36,8% | Segundo mes consecutivo con señal positiva; muestra todavía limitada, pero ya no es una observación aislada. |
| `divisiones sanitarias` | Frase | 274 impr.; 28 clics; 4,5 conv.; CVR 16,1%; CPA $7.756,36 | 42 impr.; 6 clics; 0,0 conv.; CVR 0,0%; CPA — | -232 impr.; -22 clics; -4,5 conv. | Deterioro atribuido con poco volumen en agosto; auditar antes de extraer una conclusión estructural. |
| `paneles sanitarios` | Frase | 177 impr.; 20 clics; 2,0 conv.; CVR 10,0%; CPA $6.841,42 | 261 impr.; 25 clics; 3,0 conv.; CVR 12,00%; CPA $5.089,82 | +84 impr.; +5 clics; +1,0 conv.; CVR +2,00 pp; CPA -25,6% | Mejora moderada de eficiencia atribuida, sin evidencia suficiente para escalar por sí sola. |
| `boxes sanitarios` | Exacta | 27 impr.; 3 clics; 1,0 conv.; CVR 33,3%; CPA $6.303,15 | 38 impr.; 4 clics; 2,0 conv.; CVR 50,00%; CPA $2.823,22 | +11 impr.; +1 clic; +1,0 conv.; CVR +16,67 pp; CPA -55,2% | Señal favorable, pero basada en una muestra mínima. |
| `paneles sanitarios` | Exacta | 31 impr.; 2 clics; 0,0 conv.; CVR 0,0%; CPA — | 60 impr.; 7 clics; 0,0 conv.; CVR 0,00%; CPA — | +29 impr.; +5 clics; conversiones estables en cero | Más tráfico sin conversiones atribuidas; auditar, sin confundir exposición con valor. |
| `divisiones sanitarias` | Exacta | 46 impr.; 2 clics; 0,0 conv.; CVR 0,0%; CPA — | 48 impr.; 4 clics; 2,0 conv.; CVR 50,00%; CPA $3.856,33 | +2 impr.; +2 clics; +2,0 conv. | Señal prometedora, pero muestra mínima: 4 clics no es comparable con keywords de decenas de clics. |
| `tabiques modulares` | Exacta | 6 impr.; 1 clic; 0,0 conv.; CVR 0,0%; CPA — | 11 impr.; 1 clic; 0,0 conv.; CVR 0,00%; CPA — | +5 impr.; sin cambio material | Valor no demostrado por volumen insuficiente. |

**Regla de muestra:** un CPA o CVR favorable con 3–4 clics se clasifica como muestra mínima o señal prometedora, no como evidencia fuerte. No se aplican umbrales estadísticos artificiales.

## 8. Auditoría de términos de búsqueda e historial reciente

`get_search_terms` devolvió 162 filas; 49 tuvieron clics, costo o conversiones. Su subtotal observable fue 699 impresiones, 88 clics, `$117.026,471128` y 18,2 conversiones. El subtotal no coincide con el scorecard de campaña. La causa exacta de esa diferencia no queda establecida con la evidencia disponible; no se completan filas faltantes ni se infiere su naturaleza.

### Términos con gasto o clics y cero conversiones

| Término | Impr. | Clics | Costo | Conv. atribuidas |
|---|---:|---:|---:|---:|
| divisores de baños | 25 | 4 | $7.496,69 | 0,0 |
| tabiques divisorios de baños | 10 | 2 | $4.835,04 | 0,0 |
| divisores de baños en aluminio | 3 | 2 | $3.199,69 | 0,0 |
| divisores baños | 6 | 1 | $2.632,10 | 0,0 |
| divisorios de baños | 16 | 2 | $2.546,46 | 0,0 |
| tabiques divisorios sanitarios | 3 | 1 | $1.750,99 | 0,0 |
| tabiques divisorios para baños publicos | 3 | 1 | $1.729,45 | 0,0 |
| divisores de baños publicos | 15 | 1 | $1.565,39 | 0,0 |
| paneles sanitarios | 15 | 2 | $1.564,94 | 0,0 |
| divisor de mingitorio | 11 | 2 | $1.460,59 | 0,0 |

### Términos con conversiones atribuidas

| Término | Impr. | Clics | Costo | Conv. atribuidas |
|---|---:|---:|---:|---:|
| tabiques sanitarios | 57 | 15 | $25.081,10 | 2,0 |
| divisiones para baños | 12 | 5 | $9.414,51 | 2,0 |
| divisores de baño | 10 | 3 | $6.670,21 | 2,0 |
| box sanitarios | 24 | 4 | $5.646,44 | 2,0 |
| tabiqueria sanitaria | 17 | 2 | $4.297,95 | 1,0 |
| divisorios baños | 8 | 2 | $4.057,46 | 1,0 |
| tabiques para baños | 16 | 2 | $3.690,94 | 1,2 |
| tabiques divisorios para baños | 16 | 3 | $3.461,01 | 1,0 |
| divisores sanitarios | 8 | 2 | $2.070,70 | 1,0 |

Estos son hechos observados por el endpoint. La pertinencia comercial y cualquier negativa requieren revisión humana; no se infiere intención ni calidad del contacto.

### Historial reciente del término

| Término | Julio | Agosto | Lectura |
|---|---|---|---|
| `divisores de baños` | 19 impresiones; 4 clics; $16.171,54; 3,0 conv. | 25 impresiones; 4 clics; $7.496,69; 0,0 conv. | No negativizar automáticamente por el resultado de agosto: convirtió en julio. Revisar historial reciente, intención y gasto acumulado. |

El historial comparable disponible en este informe es puntual y no constituye una serie completa de todos los términos. Para el resto de los términos, la ausencia de historial no se completa por inferencia. Un término con cero conversiones en un mes puede haber convertido antes; las negativas deben evaluarse con historial reciente, intención y gasto acumulado.

## 9. Cuota de impresiones y posición

### 9.1 Descomposición de cambios de clics

| Indicador | Agosto | Julio | Lectura permitida |
|---|---:|---:|---|
| Impresiones | 2.159 | 1.842 | Observación: +17,2%. |
| CTR | 12,04% | 10,31% | Observación: +1,73 pp; puede contribuir al aumento de clics, pero no prueba causalidad. |
| CPC | $1.158,83 | $1.579,94 | Observación: -26,7%; el costo total quedó casi estable. |
| Cuota de impresiones de búsqueda | 64,49% | 62,1% | +2,39 pp |
| Pérdida por presupuesto | 19,49% | 26,11% | -6,62 pp |
| Pérdida por ranking | 16,02% | 11,79% | +4,23 pp |
| Top / top absoluto | 46,62% / 27,82% | 47,83% / 30,39% | -1,21 pp / -2,57 pp |

**Interpretación:** el mayor volumen de clics coincide con más impresiones, mejor CTR y menor CPC. La cuota de impresiones subió 2,39 pp y la pérdida por presupuesto bajó 6,62 pp, mientras la pérdida por ranking subió 4,23 pp; estos movimientos describen el período, pero no prueban por sí solos qué factor produjo el cambio de clics. **Hipótesis a validar:** elegibilidad, demanda, ranking, presupuesto o mezcla de consultas podrían contribuir.

## 10. Auction Insights por keyword

El CSV tiene seis métricas: cuota de impresiones, ranking superior, superposición, posición superior, parte superior de página y parte superior absoluta. `Ranking superior` representa la proporción de subastas en las que Mandarin (`Usted`) obtuvo un ranking superior al participante, o apareció cuando el participante no apareció. No es la cuota del participante sobre Mandarin. La siguiente matriz conserva cada `criterion_id` y separa exacta/frase; muestra la fila `Usted` y el participante o participantes con mayor cuota de impresión observada dentro de ese criterio.

| Keyword | Criterion ID | Conc. | Filas | `Usted` IS (CSV/UI) / top / abs. | Dominio observado | IS Auction Insights (CSV/UI) | Ranking sup. | Superposición | Posición sup. | Top pág. | Abs. top |
|---|---:|---|---:|---|---|---:|---:|---:|---:|---:|---:|
| boxes sanitarios | 1185482633923 | Exacta | 7 | 60,00% / 92,59% / 37,04% | mavatec.com.ar | 73,33% | 40,00% | 77,78% | 42,86% | 66,67% | 30,30% |
| boxes sanitarios | 378326172903 | Frase | 8 | 63,85% / 73,53% / 52,21% | hoff.design | 48,83% | 54,93% | 55,15% | 25,33% | 75,00% | 15,38% |
| divisiones sanitarias | 308250599257 | Exacta | 7 | 83,33% / 86,67% / 56,67% | hoff.design | 80,56% | 61,11% | 83,33% | 32,00% | 79,31% | 20,69% |
| divisiones sanitarias | 317307324929 | Frase | 8 | 60,71% / 82,35% / 50,00% | hoff.design | 80,36% | 50,00% | 82,35% | 21,43% | 60,00% | 15,56% |
| paneles sanitarios | 353656453099 | Exacta | 6 | 73,44% / 57,45% / 46,81% | mavatec.com.ar | 31,25% | 65,63% | 31,91% | 33,33% | 70,00% | 15,00% |
| paneles sanitarios | 356713619029 | Frase | 8 | 67,62% / 69,47% / 52,63% | mercadolibre.com.ar | 26,33% | 64,06% | 27,89% | 18,87% | 71,62% | 17,57% |
| tabiques modulares | 372338846597 | Exacta | 14 | 69,23% / 88,89% / 55,56% | hoff.design | 84,62% | 61,54% | 77,78% | 14,29% | 36,36% | 0,00% |
| tabiques modulares | 345272651035 | Frase | 17 | 70,00% / 100,00% / 28,57% | mavatec.com.ar y hoff.design (empate IS) | 50,00% | 60,00% / 60,00% | 71,43% / 57,14% | 20,00% / 25,00% | 60,00% / 80,00% | 20,00% / 0,00% |
| tabiques para baños | 531728189752 | Frase | 6 | 58,57% / 68,61% / 40,34% | hoff.design | 66,89% | 41,68% | 67,76% | 42,56% | 68,91% | 25,12% |
| tabiques sanitarios | 305986106769 | Exacta | 8 | 72,95% / 81,46% / 43,05% | mavatec.com.ar | 77,29% | 47,83% | 80,13% | 42,98% | 81,88% | 38,13% |
| tabiques sanitarios | 317307330609 | Frase | 7 | 61,76% / 74,61% / 38,08% | hoff.design | 69,41% | 45,70% | 69,66% | 37,33% | 71,07% | 21,21% |

**Integridad y alcance del exporte:** 10.993 bytes; UTF-8 estricto sin BOM; coma; dos líneas de preámbulo; encabezado de 10 columnas; 96 registros; seis textos; 11 combinaciones criterion/concordancia; 11 filas `Usted`; 27 dominios no `Usted`; 17 celdas `< 10%`; 36 tokens `--`; cero celdas vacías. `Usted` es el agregado de la cuenta, no un competidor.

**Nota de fuentes:** `IS búsqueda (API)`/`IS top (API)`/`IS abs. top (API)` provienen del rendimiento de keywords consultado vía API. `IS Auction Insights (CSV/UI)` y las métricas de la matriz anterior provienen del exporte de Auction Insights. Son reportes y contextos diferentes; no se fuerza igualdad entre sus valores y una diferencia no se interpreta automáticamente como error.

**Binding verificable:** una consulta read-only a `keyword_view` filtrada a la campaña activa `23669915226`, customer `6590327345`, fechas de agosto y `ad_group_criterion.status != REMOVED` devolvió 12 criterios únicos. Las 11 combinaciones del CSV con fila `Usted` coincidieron exactamente por `criterion_id + keyword + match_type`; hubo 0 no coincidentes, 0 duplicados o ambigüedades y 1 criterio API adicional no presente en el CSV (`tabiques para baños` exacta). La matriz anterior puede utilizarse para un cruce prudente por criterio. El CSV sigue sin informar filtros de exportación, por lo que no se infiere cobertura universal, intención, presupuesto, conversiones, GA4, calidad comercial, significancia ni causalidad.

### Síntesis competitiva transversal

En el exporte vinculado por criterio, `hoff.design` aparece como participante con mayor cuota observada en varias combinaciones, mientras `mavatec.com.ar` ocupa ese lugar en otras. `mercadolibre.com.ar` aparece como participante principal observado en `paneles sanitarios` frase. La presencia observada no es uniforme entre keywords ni concordancias: un dominio que lidera una combinación no debe extrapolarse automáticamente al conjunto de la campaña. Esta síntesis describe únicamente métricas del CSV y no atribuye presupuesto, estrategia, intención, conversiones, ventas o calidad comercial.

## 11. Rendimiento + competencia por keyword

El binding permite cruzar el rendimiento de agosto con las métricas observadas del CSV por `criterion_id`. Las categorías son lecturas analíticas, no reglas automáticas de puja. `Usted` no se interpreta como competidor.

| Keyword | Conc. | CPA | CVR | IS Mandarin (API) | IS Mandarin (CSV/UI) | Participante principal observado | Lectura |
|---|---|---:|---:|---:|---:|---|---|
| `tabiques para baños` | Frase | $7.773,09 | 15,22% | 59,86% | 58,57% | hoff.design | Auditar: alto volumen y gasto, CVR inferior al promedio de campaña y CPA superior; no se atribuye el resultado a falta de exposición. |
| `tabiques sanitarios` | Frase | $3.546,71 | 26,91% | 64,21% | 61,76% | hoff.design | Proteger: 55 clics, 14,8 conv. atribuidas y CPA inferior al de campaña; calidad comercial aún no validada. |
| `tabiques sanitarios` | Exacta | $7.071,20 | 24,14% | 75,12% | 72,95% | mavatec.com.ar | Auditar: cobertura alta y CPA superior al de campaña; el problema no parece explicarse solo por exposición. |
| `boxes sanitarios` | Frase | $3.173,72 | 37,50% | 67,00% | 63,85% | hoff.design | Señal prometedora: buen CPA/CVR con 16 clics; seguimiento antes de escalar. |
| `boxes sanitarios` | Exacta | $2.823,22 | 50,00% | 58,70% | 60,00% | mavatec.com.ar | Muestra mínima: buen resultado atribuido, pero solo 4 clics; no evidencia fuerte. |
| `divisiones sanitarias` | Frase | — | 0,00% | 61,82% | 60,71% | hoff.design | Auditar: 6 clics y 0 conv. atribuidas; la visibilidad observada no demuestra valor. |
| `divisiones sanitarias` | Exacta | $3.856,33 | 50,00% | 88,24% | 83,33% | hoff.design | Muestra mínima: 4 clics; no colocar al nivel de keywords con decenas de clics. |
| `paneles sanitarios` | Frase | $5.089,82 | 12,00% | 70,63% | 67,62% | mercadolibre.com.ar | Auditar: 25 clics, CVR bajo y CPA cercano al de campaña; no asumir que falta de cobertura sea la causa. |
| `paneles sanitarios` | Exacta | — | 0,00% | 77,05% | 73,44% | mavatec.com.ar | Valor no demostrado: cobertura alta con 7 clics y 0 conv. atribuidas. |
| `tabiques modulares` | Frase | — | — | 70,00% | 70,00% | mavatec.com.ar / hoff.design (empate) | Valor no demostrado: 0 clics; el empate de IS no implica valor comercial. |
| `tabiques modulares` | Exacta | — | 0,00% | 69,23% | 69,23% | hoff.design | Muestra mínima: 1 clic y 0 conv. atribuidas. |

El cruce utiliza métricas de rendimiento API y métricas competitivas observadas. Las dos columnas de IS se mantienen separadas por fuente y no se fuerza igualdad entre ellas; no se atribuye presupuesto, intención, estrategia, ventas o conversiones a dominios externos.

## 12. Problemas, riesgos o anomalías

| Riesgo | Estado | Evidencia / límite |
|---|---|---|
| Conciliación Ads-GA4 | Alto | No hay exporte GA4 de agosto ni valor comparable de Paid Search. |
| Calidad comercial | Alto | No hay log comercial de WhatsApp ni validación de conversaciones. |
| Acción de conversión | Medio | La consulta estándar falló, pero una consulta read-only alternativa devolvió la acción `Whatsapp` y 52,0 atribuciones; no demuestra 52 conversaciones ni contactos comerciales. |
| Disponibilidad de Auction Insights vía API | Alto | `METRIC_ACCESS_DENIED`; el CSV UI permite binding por criterio, pero no aporta filtros completos de exportación. |
| Cobertura de términos | Medio | 162 filas y 49 activas no reconcilian con la campaña; no se completan filas ausentes con ceros. |
| Presupuesto/ranking | Medio | Las métricas están disponibles; la pérdida por presupuesto bajó a 19,49% y la pérdida por ranking subió a 16,02%. La causalidad sobre el volumen no queda demostrada. |
| Runtime | Bajo | La extracción emitió advertencia de soporte futuro para Python 3.10; no bloqueó las consultas. |

## 13. Decisiones sugeridas para septiembre

1. **Mantener por ahora el presupuesto vigente de ARS 10.000 diarios:** el monto fue verificado en `campaign_budget.amount_micros = 10.000.000.000`. No aumentarlo hasta validar la calidad comercial; las métricas de pérdida de agosto ya están disponibles, pero no demuestran por sí solas calidad ni causalidad comercial.
2. **Cerrar la medición antes de escalar:** obtener exportación GA4 comparable (`google / cpc` o `Paid Search`), validar si el evento real es `click` o `click_whatsapp`, y contrastar conversiones atribuidas con conversaciones comerciales reales.
3. **Revisar la distribución de inversión:** auditar `tabiques para baños` frase por su concentración de costo y revisar `tabiques sanitarios` frase, `boxes sanitarios` y `divisiones sanitarias` exacta por sus señales de CPA/CVR atribuidos; no tomar esto como calidad comercial validada.
4. **Auditar términos sin conversión:** revisar intención y pertinencia de los términos con gasto/clics y cero conversiones antes de aplicar negativas; la lista observada no constituye una instrucción automática de cambio.
5. **Usar el diagnóstico de cuota disponible:** considerar IS 64,49%, pérdida por presupuesto 19,49% y pérdida por ranking 16,02% como contexto descriptivo antes de explicar cualquier caída o decidir redistribución; no tratarlos como prueba causal.
6. **Competencia:** conservar el CSV como evidencia manual con binding por criterio y repetir el exporte con customer, campaña, nivel de análisis y filtros documentados; utilizar la matriz solo como insumo descriptivo, no como regla automática de puja.

## 14. Evidencias y procedencia

### Extracción y consultas

- Repositorio MCP: `/home/beto/Proyectos/mcp-google-ads`.
- Cliente: `6590327345`; período exacto `2026-08-01`–`2026-08-31`; extracción principal UTC `2026-09-07T22:39:00.358229+00:00`.
- `server.py:get_campaigns` → 3 campañas.
- `server.py:get_campaign_metrics` / `tools/metrics.py:fetch_campaign_metrics` → 3 filas de campaña.
- `server.py:get_keyword_metrics` / `tools/keywords.py:fetch_keyword_metrics` → 38 filas, 11 activas.
- `server.py:get_keyword_report` / `tools/keyword_planner.py:build_keyword_report` → 38 filas, 11 activas; Planner en español/Argentina, Google Search + Partners.
- `server.py:get_search_terms` / `tools/search_terms.py:fetch_search_terms` → 162 filas, 49 activas.
- `server.py:get_conversion_metrics` / `tools/conversions.py:fetch_conversion_metrics` → error `PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE`; consulta alternativa read-only sin `metrics.cost_micros` → `Whatsapp`, 52,0 conversiones.
- `server.py:get_auction_insights` / `tools/auction_insights.py:fetch_auction_insights` para campaña `23669915226` → error `METRIC_ACCESS_DENIED`.
- Consulta read-only adicional de `keyword_view` con `campaign.id = 23669915226` → 12 criterios API únicos; 11/11 combinaciones del CSV coincidentes por `criterion_id + keyword + match_type`, sin duplicados ni ambigüedades.
- Consulta read-only adicional de `campaign` → presupuesto vigente `campaign_budget.amount_micros = 10.000.000.000` (ARS 10.000 diarios) y métricas de cuota de agosto: IS 64,49%, pérdida por presupuesto 19,49%, pérdida por ranking 16,02%, top 46,62%, top absoluto 27,82%.
- No se ejecutaron scripts mutantes, no se creó snapshot API y no se expusieron credenciales.

### Evidencia y metodología

- CSV íntegro: `data/auction_insights/2026-08-completo/agosto-completo - Auction Insights Keywords - Mandarin.csv`; SHA-256 `51bb99267242979e0381b4d08e48f0b9f994ce1d15675d06b25a698f79ce1366`.
- Baseline comparativo: `docs/06_reportes/reporte-2026-07-baseline.md` y Google Doc `Informes Google Ads 2026`, tab `Julio 2026 Completo`.
- Estado de conversiones: `docs/01_base_tecnica/conversiones.md`.
- Estado técnico de WhatsApp: `docs/analytics/evento_whatsapp.md`.
- Método Ads-GA4: `docs/analytics/analisis-ga4-mensual.md` y `docs/analytics/checklist-analisis-ga4-mensual.md`.
- Método Auction Insights: `docs/03_keywords/auction-insights-competencia-keyword.md` y `docs/02_estrategia/extraccion_manual_auction_insights.md`.
- La exportación CSV fue leída directamente, sin normalizarla ni reemplazar bytes; `< 10%`, `--` y `Usted` se conservaron como valores literales de análisis.

### Reglas metodológicas aplicadas

- Un valor ausente de Keyword Planner se presenta como `—`/`No disponible`, no como cero; solo se conserva cero cuando la fuente entrega un cero numérico con significado.
- `< 10%` y `--` no se convierten en cero; los criterios exacta y frase permanecen separados.
- Las conversiones se denominan conversiones atribuidas por Google Ads y no se convierten en leads, clientes, ventas o contactos confirmados.
- Las negativas de términos requieren historial reciente, intención y gasto acumulado; un único mes con cero conversiones no basta.
- La magnitud de muestra modula la lectura: 3–4 clics son muestra mínima, aunque el CPA o CVR sea favorable.
- El binding por `criterion_id + keyword + match_type` se valida antes del cruce rendimiento–competencia; si falla, el cruce debe cerrarse.

## 15. Cierre

Agosto cerró con inversión prácticamente igual a julio y con +17,2% de impresiones, +36,8% de clics y +26,8% de conversiones atribuidas; el CPC bajó 26,7% y el CPA 20,9%. La eficiencia económica medida por Google Ads mejoró principalmente porque el costo por clic bajó de forma importante, permitiendo obtener muchos más clics con prácticamente la misma inversión. La tasa de conversión fue ligeramente menor, de 21,58% a 20,00%. Por lo tanto, mejoró el rendimiento medido y atribuido por Google Ads, mientras que el impacto comercial permanece sin validar por falta de conciliación GA4 y registros de conversaciones o leads. El rendimiento permite priorizar auditorías y proteger señales favorables, pero cualquier aumento de presupuesto debe esperar la validación comercial.
