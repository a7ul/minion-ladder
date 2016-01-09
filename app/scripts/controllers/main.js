/*globals _:true, $:true */
'use strict';

/**
 * @ngdoc function
 * @name snakesAndLadderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the snakesAndLadderApp
 */
angular.module('snakesAndLadderApp')
  .controller('MainCtrl', function(board, dice, player, wait, $scope) {
    var main = this;
    main.numberOfPlayers = 2;
    main.boardPositions = board.getBoardPostions();
    main.diceValue = dice.getDiceValue();
    main.players = [];
    main.currentPlayer = {};
    main.freezeUI = false;

    var currentPlayerIndex = 0;

    var generatePlayers = function(noOfPlayers) {
      var playerArray = [];
      for (var i = 0; i < noOfPlayers; ++i) {
        playerArray.push(player.initPlayer('player' + i));
      }
      return playerArray;
    };

    var initGame = function() {
      main.players = generatePlayers(main.numberOfPlayers);
      main.currentPlayer = main.players[currentPlayerIndex];
      $(window).resize(function() {
        _.forEach(main.players,function(plr){
          player.setPostion(plr, plr.position);
        });
      });
    };

    var nextPlayer = function(promise) {
      currentPlayerIndex = currentPlayerIndex + 1;
      if (currentPlayerIndex > main.players.length - 1) {
        currentPlayerIndex = 0;
      }
      main.currentPlayer = main.players[currentPlayerIndex];
      return promise;
    };

    var diceClick = function() {
      main.diceValue = dice.getDiceValue();
      movePlayer(main.diceValue + main.currentPlayer.position);
    };

    var movePlayer = function(val) {
      if (val >= 100) {
        val = 100;
        console.log(main.currentPlayer.name + ' Won !');
      }
      player.setPostion(main.currentPlayer, val);
    };

    var checkPlayerAndMove = function(promise) {
      var pos = main.currentPlayer.position;
      var finalMove = board.getMoveValue(pos);
      movePlayer(finalMove);
      return promise;
    };

    $scope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };

    main.getClass = function(prefix, boardCellValue) {
      return prefix + boardCellValue;
    };
    main.runGame = function() {
      main.freezeUI = true;
      diceClick();
      wait.For(1000)
        .then(checkPlayerAndMove)
        .then(nextPlayer)
        .then(function() {
          main.freezeUI = false;
          $scope.safeApply();
        });
    };

    initGame();
  });
