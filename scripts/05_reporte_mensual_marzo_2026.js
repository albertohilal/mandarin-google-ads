/**
 * Script: 05_reporte_mensual_marzo_2026.js
 *
 * Propósito:
 * - Generar un reporte operativo mensual de desempeño en Google Ads
 *   para el período 01/03/2026 al 31/03/2026.
 *
 * Alcance:
 * - Lectura de métricas de cuenta, campañas y términos de búsqueda.
 * - Salida estructurada por Logger.log para revisión operativa.
 *
 * Seguridad:
 * - Script 100% de solo lectura.
 * - Compatible con Preview (no realiza cambios en la cuenta).
 *
 * Qué NO hace este script:
 * - No pausa campañas, anuncios ni keywords.
 * - No modifica pujas, presupuesto ni segmentación.
 * - No envía emails ni escribe en hojas de cálculo.
 */

var CONFIG = {
  FECHA_INICIO: '20260301',
  FECHA_FIN: '20260331',
  UMBRAL_CTR_BAJO: 1.5,
  UMBRAL_COSTO_ALTO: 50000,
  MAX_CAMPANIAS: 10,
  MAX_TERMINOS: 12,
  MIN_CLICS_TERMINO_SOSPECHOSO: 3
};

function main() {
  generarReporteMensual();
}

function generarReporteMensual() {
  try {
    var cuenta = AdsApp.currentAccount();
    var resumenCuenta = obtenerResumenCuenta(CONFIG);
    var metricasCampanias = obtenerMetricasCampanias(CONFIG);
    var alertas = obtenerAlertasCampanias(metricasCampanias, CONFIG);
    var terminos = obtenerTerminosBusqueda(CONFIG);

    Logger.log('============================================================');
    Logger.log('REPORTE OPERATIVO MENSUAL · GOOGLE ADS');
    Logger.log('Cuenta: ' + cuenta.getName() + ' (' + cuenta.getCustomerId() + ')');
    Logger.log('Rango: ' + CONFIG.FECHA_INICIO + ' a ' + CONFIG.FECHA_FIN);
    Logger.log('Fecha de ejecución: ' + new Date().toISOString());
    Logger.log('============================================================');

    logSeccion('RESUMEN GENERAL DE CUENTA');
    if (resumenCuenta.sinDatos) {
      Logger.log('Sin datos de impresiones/clics en el período seleccionado.');
    }
    Logger.log('Impresiones: ' + resumenCuenta.impresiones);
    Logger.log('Clics: ' + resumenCuenta.clics);
    Logger.log('CTR: ' + resumenCuenta.ctr + '%');
    Logger.log('Costo: ' + formatearMoneda(resumenCuenta.costo));
    Logger.log('Conversiones: ' + resumenCuenta.conversiones);
    Logger.log('Costo por conversión: ' + resumenCuenta.costoPorConversionTexto);

    logSeccion('DETALLE POR CAMPAÑA (TOP ' + CONFIG.MAX_CAMPANIAS + ')');
    if (!metricasCampanias.length) {
      Logger.log('No se encontraron campañas con datos en el período.');
    } else {
      for (var i = 0; i < metricasCampanias.length; i++) {
        var camp = metricasCampanias[i];
        Logger.log(
          (i + 1) + '. ' + camp.nombre +
          ' | Imp: ' + camp.impresiones +
          ' | Clics: ' + camp.clics +
          ' | CTR: ' + camp.ctr + '%' +
          ' | Costo: ' + formatearMoneda(camp.costo) +
          ' | Conv: ' + camp.conversiones +
          ' | Costo/Conv: ' + camp.costoPorConversionTexto
        );
      }
    }

    logSeccion('ALERTAS DE CAMPAÑA');
    if (!alertas.length) {
      Logger.log('Sin alertas relevantes para los umbrales configurados.');
    } else {
      for (var j = 0; j < alertas.length; j++) {
        Logger.log((j + 1) + '. ' + alertas[j]);
      }
    }

    logSeccion('TÉRMINOS DE BÚSQUEDA RELEVANTES');
    if (!terminos.relevantes.length) {
      Logger.log('No se detectaron términos relevantes en el período.');
    } else {
      for (var k = 0; k < terminos.relevantes.length; k++) {
        var rel = terminos.relevantes[k];
        Logger.log(
          (k + 1) + '. "' + rel.termino + '"' +
          ' | Campaña: ' + rel.campania +
          ' | Clics: ' + rel.clics +
          ' | Conv: ' + rel.conversiones +
          ' | Costo: ' + formatearMoneda(rel.costo)
        );
      }
    }

    logSeccion('TÉRMINOS SOSPECHOSOS / CANDIDATOS A NEGATIVAS');
    if (!terminos.sospechosos.length) {
      Logger.log('Sin términos sospechosos según umbrales actuales.');
    } else {
      for (var m = 0; m < terminos.sospechosos.length; m++) {
        var sos = terminos.sospechosos[m];
        Logger.log(
          (m + 1) + '. "' + sos.termino + '"' +
          ' | Campaña: ' + sos.campania +
          ' | Clics: ' + sos.clics +
          ' | Conv: ' + sos.conversiones +
          ' | Costo: ' + formatearMoneda(sos.costo)
        );
      }
    }

    logSeccion('OBSERVACIONES FINALES');
    Logger.log('- Reporte generado en modo solo lectura.');
    Logger.log('- Rango fijo para análisis mensual de marzo 2026.');
    Logger.log('- Útil como insumo directo para la plantilla de reporte mensual.');
  } catch (error) {
    Logger.log('ERROR EN REPORTE MENSUAL: ' + error);
  }
}

function obtenerResumenCuenta(config) {
  var stats = AdsApp.currentAccount().getStatsFor(config.FECHA_INICIO, config.FECHA_FIN);
  var impresiones = safeNumber(stats.getImpressions());
  var clics = safeNumber(stats.getClicks());
  var costo = safeNumber(stats.getCost());
  var conversiones = safeNumber(stats.getConversions());
  var ctr = divisionSegura(clics * 100, impresiones);
  var costoPorConversion = divisionSegura(costo, conversiones);

  return {
    impresiones: impresiones,
    clics: clics,
    ctr: ctr.toFixed(2),
    costo: costo,
    conversiones: conversiones.toFixed(2),
    costoPorConversionTexto: conversiones > 0 ? formatearMoneda(costoPorConversion) : 'N/A',
    sinDatos: impresiones === 0 && clics === 0
  };
}

function obtenerMetricasCampanias(config) {
  var resultado = [];
  var campanias = AdsApp
    .campaigns()
    .withCondition('Status != REMOVED')
    .get();

  while (campanias.hasNext()) {
    var campania = campanias.next();
    var stats = campania.getStatsFor(config.FECHA_INICIO, config.FECHA_FIN);
    var impresiones = safeNumber(stats.getImpressions());
    var clics = safeNumber(stats.getClicks());
    var costo = safeNumber(stats.getCost());
    var conversiones = safeNumber(stats.getConversions());

    if (impresiones === 0 && clics === 0 && costo === 0 && conversiones === 0) {
      continue;
    }

    var ctr = divisionSegura(clics * 100, impresiones);
    var costoPorConversion = divisionSegura(costo, conversiones);

    resultado.push({
      nombre: campania.getName(),
      impresiones: impresiones,
      clics: clics,
      ctr: ctr.toFixed(2),
      costo: costo,
      conversiones: conversiones.toFixed(2),
      conversionesNumero: conversiones,
      costoPorConversionTexto: conversiones > 0 ? formatearMoneda(costoPorConversion) : 'N/A'
    });
  }

  resultado.sort(function (a, b) {
    return b.costo - a.costo;
  });

  return resultado.slice(0, config.MAX_CAMPANIAS);
}

function obtenerAlertasCampanias(metricasCampanias, config) {
  var alertas = [];

  for (var i = 0; i < metricasCampanias.length; i++) {
    var camp = metricasCampanias[i];
    var ctr = safeNumber(camp.ctr);

    if (camp.costo >= config.UMBRAL_COSTO_ALTO && camp.conversionesNumero <= 0) {
      alertas.push(
        'Gasto alto sin conversiones: ' + camp.nombre +
        ' (' + formatearMoneda(camp.costo) + ', Conv: 0)'
      );
    }

    if (camp.clics > 0 && ctr < config.UMBRAL_CTR_BAJO) {
      alertas.push(
        'CTR bajo: ' + camp.nombre +
        ' (' + camp.ctr + '% < ' + config.UMBRAL_CTR_BAJO + '%)'
      );
    }

    if (camp.clics === 0) {
      alertas.push('Sin clics en el período: ' + camp.nombre);
    }
  }

  return alertas;
}

function obtenerTerminosBusqueda(config) {
  var relevantes = [];
  var sospechosos = [];

  try {
    var query =
      'SELECT CampaignName, Query, Impressions, Clicks, Cost, Conversions ' +
      'FROM SEARCH_QUERY_PERFORMANCE_REPORT ' +
      'WHERE Impressions > 0 ' +
      'DURING ' + config.FECHA_INICIO + ',' + config.FECHA_FIN;

    var reporte = AdsApp.report(query);
    var filas = reporte.rows();

    while (filas.hasNext()) {
      var fila = filas.next();
      var termino = String(fila.Query || '').trim();
      var campania = String(fila.CampaignName || '').trim();
      var clics = safeNumber(fila.Clicks);
      var conversiones = safeNumber(fila.Conversions);
      var costo = safeNumber(fila.Cost);

      if (!termino) {
        continue;
      }

      if (conversiones > 0) {
        relevantes.push({
          termino: termino,
          campania: campania,
          clics: clics,
          conversiones: conversiones.toFixed(2),
          conversionesNumero: conversiones,
          costo: costo
        });
      }

      if (clics >= config.MIN_CLICS_TERMINO_SOSPECHOSO && conversiones <= 0) {
        sospechosos.push({
          termino: termino,
          campania: campania,
          clics: clics,
          conversiones: conversiones.toFixed(2),
          costo: costo
        });
      }
    }
  } catch (error) {
    Logger.log('Aviso: no fue posible leer términos de búsqueda. Detalle: ' + error);
  }

  relevantes.sort(function (a, b) {
    if (b.conversionesNumero !== a.conversionesNumero) {
      return b.conversionesNumero - a.conversionesNumero;
    }
    return b.clics - a.clics;
  });

  sospechosos.sort(function (a, b) {
    if (b.clics !== a.clics) {
      return b.clics - a.clics;
    }
    return b.costo - a.costo;
  });

  return {
    relevantes: relevantes.slice(0, config.MAX_TERMINOS),
    sospechosos: sospechosos.slice(0, config.MAX_TERMINOS)
  };
}

function formatearMoneda(valor) {
  var numero = safeNumber(valor);
  return '$' + numero.toFixed(2);
}

function safeNumber(valor) {
  if (valor === null || valor === undefined || valor === '') {
    return 0;
  }

  if (typeof valor === 'number') {
    return isFinite(valor) ? valor : 0;
  }

  var texto = String(valor).trim();
  if (!texto) {
    return 0;
  }

  var esNegativoPorParentesis = /^\(.*\)$/.test(texto);
  if (esNegativoPorParentesis) {
    texto = texto.substring(1, texto.length - 1);
  }

  texto = texto
    .replace(/\s+/g, '')
    .replace(/[\$€£¥]/g, '')
    .replace(/[^\d,\.\-]/g, '')
    .replace(/(?!^)-/g, '');

  var ultimaComa = texto.lastIndexOf(',');
  var ultimoPunto = texto.lastIndexOf('.');

  if (ultimaComa !== -1 && ultimoPunto !== -1) {
    if (ultimoPunto > ultimaComa) {
      texto = texto.replace(/,/g, '');
    } else {
      texto = texto.replace(/\./g, '').replace(',', '.');
    }
  } else if (ultimaComa !== -1) {
    var partesComa = texto.split(',');

    if (partesComa.length > 2) {
      var decimalComa = partesComa[partesComa.length - 1];
      if (decimalComa.length === 2) {
        texto = partesComa.slice(0, -1).join('') + '.' + decimalComa;
      } else {
        texto = partesComa.join('');
      }
    } else {
      var derechaComa = partesComa[1] || '';
      if (derechaComa.length === 3) {
        texto = partesComa[0] + derechaComa;
      } else {
        texto = partesComa[0] + '.' + derechaComa;
      }
    }
  } else if (ultimoPunto !== -1) {
    var partesPunto = texto.split('.');
    if (partesPunto.length > 2) {
      var decimalPunto = partesPunto[partesPunto.length - 1];
      if (decimalPunto.length === 2) {
        texto = partesPunto.slice(0, -1).join('') + '.' + decimalPunto;
      } else {
        texto = partesPunto.join('');
      }
    }
  }

  if (esNegativoPorParentesis && texto.charAt(0) !== '-') {
    texto = '-' + texto;
  }

  var numero = Number(texto);
  return isNaN(numero) ? 0 : numero;
}

function divisionSegura(numerador, denominador) {
  var den = safeNumber(denominador);
  if (den <= 0) {
    return 0;
  }
  return safeNumber(numerador) / den;
}

function logSeccion(titulo) {
  Logger.log('');
  Logger.log('--- ' + titulo + ' ---');
}