
'use strict'


var log4js = require('log4js');
var logger = log4js.getLogger();
var util = require('util');


var score = {
    "playerLeftName": "Sebastian",
    "playerRightName": "Matthias",
    "pointsLeftPlayer": 0,
    "pointsRightPlayer": 0,
    "directWinnersPlayerLeft": 0,
    "errorsPlayerLeft": 0,
    "directWinnersPlayerRight": 0,
    "errorsPlayerRight": 0,
    "sets" : {
      "first" : {
        "left": 10,
        "right" : 4
      },
      "second" : {
        "left": 8,
        "right" : 10
      },
      "third" : {
        "left": 0,
        "right" : 0
      }
    }
}

var emptyScore = JSON.parse(JSON.stringify(score));
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
    var pointType = req.swagger.params.pointInfo.value.pointType;

    switch(scoringPlayer) {
      case "left":
          prevScore = JSON.parse(JSON.stringify(score));
          score.pointsLeftPlayer++;
          if (pointType == "winner")
            score.directWinnersPlayerLeft++;
          if (pointType == "error")
            score.errorsPlayerRight++;
          break;
      case "right":
          prevScore = JSON.parse(JSON.stringify(score));
          score.pointsRightPlayer++;
          if (pointType == "winner")
            score.directWinnersPlayerRight++;
          if (pointType == "error")
            score.errorsPlayerLeft++;
          break;
      default:
          logger.debug("error - with input parameter for scoringPlayer")
          return;
          break;
    }
    logger.debug("test1");
    logger.debug("point for player (left or right) :" + scoringPlayer)
    logger.debug("test2");
    var x = logScore();
    logger.debug("test3");
    res.end();
}

// ============================================================================
// startNewGame
// ============================================================================
function startNewGame(req, res) {
    logger.debug("--- startNewGame ---");
    score = JSON.parse(JSON.stringify(emptyScore));
    prevScore = JSON.parse(JSON.stringify(emptyScore));
    logScore();
    res.end();
}




// ============================================================================
// swagGetSpsVarValue
// ============================================================================
function correct(req, res) {
    logger.debug("--- correct ---");
    score = JSON.parse(JSON.stringify(prevScore));
    logScore();
    res.end();
}


// ============================================================================
// swagGetSpsVarValue
// ============================================================================
function logScore() {
    logger.debug("===================================================");
    logger.debug("score.pointsLeftPlayer: " + score.pointsLeftPlayer);
    logger.debug("score.pointsRightPlayer: " + score.pointsRightPlayer);
    logger.debug("===================================================");
    logger.debug("prevScore.pointsLeftPlayer: " + prevScore.pointsLeftPlayer);
    logger.debug("prevScore.pointsRightPlayer: " + prevScore.pointsRightPlayer);
    logger.debug("===================================================");
    logger.debug("score");
    logger.debug(JSON.stringify(score,null,4));
    logger.debug(JSON.stringify(prevScore,null,4));
}




// ============================================================================
// exports
// ============================================================================
module.exports = {
  "getScore": getScore,
  "point": point,
  "startNewGame": startNewGame,
  "correct": correct
}
