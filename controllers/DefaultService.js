'use strict';

exports.correct = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.getScore = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "directWinnersPlayerRight" : "aeiou",
  "errorsPlayerRight" : "aeiou",
  "currentScore" : "aeiou",
  "errorsPlayerLeft" : "aeiou",
  "playerRightName" : "aeiou",
  "scoreSet1" : "aeiou",
  "scoreSet2" : "aeiou",
  "directWinnersPlayerLeft" : "aeiou",
  "scoreSet3" : "aeiou",
  "playerLeftName" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.point = function(args, res, next) {
  /**
   * parameters expected in the args:
  * scoreInfo (PointInfo)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.startNewGame = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  
  
  res.end();
}

