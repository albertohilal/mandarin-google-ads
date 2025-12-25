/**
 * SCRIPT: Negativos automáticos por términos de búsqueda
 * Proyecto: Mandarin S.A. – Google Ads
 *
 * Descripción:
 * - Analiza los términos de búsqueda reales de los últimos 7 días
 * - Detecta palabras prohibidas definidas internamente
 * - Agrega el término completo como palabra clave negativa
 *   a nivel de campaña correspondiente
 *
 * Seguridad:
 * - No modifica pujas
 * - No pausa campañas ni anuncios
 * - No elimina datos
 *
 * Compatible con Google Ads Scripts (AdsApp)
 * Listo para ejecutar en modo Preview y Producción
 */

function main() {

  // Lista de palabras prohibidas (en minúsculas)
  var PALABRAS_PROHIBIDAS = [
    'hogar',
    'casa',
    'usado',
    'usados',
    'alquiler',
    'alquilar',
    'gratis',
    'barato',
    'mercadolibre',
    'facebook',
    'empleo',
    'trabajo',
    'manual',
    'descargar',
    'diy',
    'plomeria'
  ];

  var negativasAgregadas = 0;

  // Control de duplicados durante esta ejecución
  var negativasPorCampania = {};

  // Reporte de términos de búsqueda (últimos 7 días)
  var report = AdsApp.report(
    "SELECT CampaignId, CampaignName, Query " +
    "FROM SEARCH_QUERY_PERFORMANCE_REPORT " +
    "WHERE Impressions > 0 " +
    "DURING LAST_7_DAYS"
  );

  var rows = report.rows();

  while (rows.hasNext()) {
    var row = rows.next();

    var queryOriginal = row['Query'];
    var query = queryOriginal.toLowerCase();
    var campaignId = row['CampaignId'];
    var campaignName = row['CampaignName'];

    // Verifica si el término contiene alguna palabra prohibida
    if (contienePalabraProhibida(query, PALABRAS_PROHIBIDAS)) {

      var campaign = obtenerCampaniaPorId(campaignId);
      if (!campaign) {
        Logger.log(
          'Campaña no encontrada | ID: ' + campaignId +
          ' | Término: "' + queryOriginal + '"'
        );
        continue;
      }

      // Inicializa control de duplicados por campaña
      if (!negativasPorCampania[campaignId]) {
        negativasPorCampania[campaignId] = {};
      }

      // Evita duplicados en la misma ejecución
      if (!negativasPorCampania[campaignId][query]) {
        campaign.createNegativeKeyword(queryOriginal);
        negativasPorCampania[campaignId][query] = true;
        negativasAgregadas++;

        Logger.log(
          'NEGATIVA AGREGADA | Campaña: ' + campaignName +
          ' | Término: "' + queryOriginal + '"'
        );
      }
    }
  }

  Logger.log('----------------------------------------------');
  Logger.log('Proceso finalizado.');
  Logger.log('Total de palabras clave negativas agregadas: ' + negativasAgregadas);
}

/**
 * Devuelve true si el término contiene alguna palabra prohibida
 */
function contienePalabraProhibida(termino, listaProhibidas) {
  for (var i = 0; i < listaProhibidas.length; i++) {
    if (termino.indexOf(listaProhibidas[i]) !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * Devuelve el objeto Campaign por ID o null si no existe
 */
function obtenerCampaniaPorId(campaignId) {
  var iterator = AdsApp
    .campaigns()
    .withIds([campaignId])
    .get();

  if (iterator.hasNext()) {
    return iterator.next();
  }
  return null;
}
