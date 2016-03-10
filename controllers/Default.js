'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.correct = function correct (req, res, next) {
  Default.correct(req.swagger.params, res, next);
};

module.exports.getScore = function getScore (req, res, next) {
  Default.getScore(req.swagger.params, res, next);
};

module.exports.point = function point (req, res, next) {
  Default.point(req.swagger.params, res, next);
};

module.exports.startNewGame = function startNewGame (req, res, next) {
  Default.startNewGame(req.swagger.params, res, next);
};
