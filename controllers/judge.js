
'use strict'


var log4js = require('log4js');
var logger = log4js.getLogger();
var util = require('util');


// ============================================================================
// swagAdsCommConfig
// ============================================================================
function getScore(req, res) {
    logger.debug("--- getScore ---");
    res.end();
}

// ============================================================================
// swagPutSpsVarValue
// ============================================================================
function point(req, res) {
    logger.debug("--- point ---");
    res.end();
}

// ============================================================================
// swagPutSpsVarValue
// ============================================================================
function startNewGame(req, res) {
    logger.debug("--- startNewGame ---");
    res.end();
}



// ============================================================================
// swagPutSpsVarValue
// ============================================================================
function removeLastPoint(req, res) {
    logger.debug("--- removeLastPoint ---");
    res.end();
}




// ============================================================================
// swagGetSpsVarValue
// ============================================================================
function correct(req, res) {
    logger.debug("--- correct ---");
    res.end();
}



// ============================================================================
// exports
// ============================================================================
module.exports = {
  "getScore": getScore,
  "point": point,
  "startNewGame": startNewGame,
  "removeLastPoint": removeLastPoint,
  "correct": correct
}
