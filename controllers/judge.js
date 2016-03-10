
'use strict'


var log4js = require('log4js');
var logger = log4js.getLogger();
var util = require('util');


var pointsLeftPlayer = 0;
var pointsRightPlayer = 0;


// ============================================================================
// getScore
// ============================================================================
function getScore(req, res) {
    logger.debug("--- getScore ---");
    var x = logScore();
    // logger.debug("pointsLeftPlayer: " + pointsLeftPlayer);
    // logger.debug("pointsRightPlayer: " + pointsRightPlayer);
    res.setHeader('Content-Type', 'application/json');
    var retBody = {
        "playerLeftName": "Sebastian",
        "playerRightName": "Matthias",
        "currentScore": ""+pointsLeftPlayer + " : " + pointsRightPlayer +"",
        "scoreSet1": "",
        "scoreSet2": "",
        "scoreSet3": "",
        "directWinnersPlayerLeft": "1",
        "errorsPlayerLeft": "1",
        "directWinnersPlayerRight": "1",
        "errorsPlayerRight": "1"
    }

    res.end(JSON.stringify(retBody));
    // res.end();
}

// ============================================================================
// point
// ============================================================================
function point(req, res) {
    logger.debug("--- point ---");
    // var workPointInfoPlayer = req.swagger.params.scoreInfo.player.value;
    var scoringPlayer = req.swagger.params.pointInfo.value.player;
    // logger.debug("test " + JSON.stringify(req.swagger.params,null,4));
    switch(scoringPlayer) {
      case "left":
          pointsLeftPlayer++;
          break;
      case "right":
          pointsRightPlayer++;
          break;
      default:
          logger.debug("error - with input parameter for scoringPlayer")
          return;
          break;

    }

    logger.debug("point for player (left or right) :" + scoringPlayer)
    var x = logScore();
    res.end();
}

// ============================================================================
// swagPutSpsVarValue
// ============================================================================
function startNewGame(req, res) {
    logger.debug("--- startNewGame ---");
    var pointsLeftPlayer = 0;
    var pointsRightPlayer = 0;
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
// swagGetSpsVarValue
// ============================================================================
function logScore() {
    logger.debug("pointsLeftPlayer: " + pointsLeftPlayer);
    logger.debug("pointsRightPlayer: " + pointsRightPlayer);

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
