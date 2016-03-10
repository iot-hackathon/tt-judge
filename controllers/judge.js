
'use strict'


var log4js = require('log4js');
var logger = log4js.getLogger();
var util = require('util');


var score = {
    "playerLeftName": "Sebastian",
    "playerRightName": "Matthias",
    "pointsLeftPlayer": 0,
    "pointsRightPlayer": 0,
    "directWinnersPlayerLeft": "0",
    "errorsPlayerLeft": "0",
    "directWinnersPlayerRight": "0",
    "errorsPlayerRight": "0",
    "sets" : {
      "first" : {
        "left": 0,
        "right" : 0
      },
      "second" : {
        "left": 0,
        "right" : 0
      },
      "third" : {
        "left": 0,
        "right" : 0
      }
    }
}

var prevScore = JSON.parse(JSON.stringify(score));

// var pointsLeftPlayer = 0;
// var pointsRightPlayer = 0;
// var setsLeftPlayer = 0;
// var setsRightPlayer = 0;

// ============================================================================
// getScore
// ============================================================================
function getScore(req, res) {
    logger.debug("--- getScore ---");
    var x = logScore();
    res.setHeader('Content-Type', 'application/json');
    var retBody = {
        "playerLeftName": score.playerLeftName,
        "playerRightName": score.playerRightName,
        "currentScore": ""+ score.pointsLeftPlayer + " : " + score.pointsRightPlayer +"",
        "scoreSet1": ""+ score.sets.first.left + " : " + score.sets.first.right + "",
        "scoreSet2": ""+ score.sets.second.left + " : " + score.sets.second.right + "",
        "scoreSet3": ""+ score.sets.third.left + " : " + score.sets.third.right + "",
        "directWinnersPlayerLeft": score.directWinnersPlayerLeft,
        "errorsPlayerLeft": score.errorsPlayerLeft,
        "directWinnersPlayerRight": score.directWinnersPlayerRight,
        "errorsPlayerRight": score.directWinnersPlayerRight
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
          prevScore = JSON.parse(JSON.stringify(score));
          score.pointsLeftPlayer++;
          break;
      case "right":
          var prevScore = JSON.parse(JSON.stringify(score));
          score.pointsRightPlayer++;
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
    var score = JSON.parse(JSON.stringify(prevScore));
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
    logger.debug("score.pointsLeftPlayer: " + score.pointsLeftPlayer);
    logger.debug("score.pointsRightPlayer: " + score.pointsRightPlayer);

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
