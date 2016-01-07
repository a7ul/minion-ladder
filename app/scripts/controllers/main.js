'use strict';

/**
 * @ngdoc function
 * @name snakesAndLadderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the snakesAndLadderApp
 */
angular.module('snakesAndLadderApp')
  .controller('MainCtrl', function(board) {
      var main = this;
      main.boardPositions = board.getBoardPostions();

  });
