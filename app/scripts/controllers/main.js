'use strict';

/**
 * @ngdoc function
 * @name snakesAndLadderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the snakesAndLadderApp
 */
angular.module('snakesAndLadderApp')
  .controller('MainCtrl', function(board, dice, player) {
    var main = this;
    main.numberOfPlayers = 2;
    main.boardPositions = board.getBoardPostions();
    main.diceValue = dice.getDiceValue();
    main.players = [];
    main.currentPlayer = {};
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
    };

    var nextPlayer = function() {
      currentPlayerIndex = currentPlayerIndex + 1;
      if (currentPlayerIndex > main.players.length - 1) {
        currentPlayerIndex = 0;
      }
      return main.players[currentPlayerIndex];
    };

    var diceClick = function() {
      main.diceValue = dice.getDiceValue();
      movePlayer(main.diceValue + main.currentPlayer.position);
    };

    var movePlayer = function(val) {
      if (val > 100) {
        val = 100;
      }
      player.setPostion(main.currentPlayer, val);
    };

    var checkPlayerAndMove = function() {
      var pos = main.currentPlayer.position;
      var finalMove = board.getMoveValue(pos);
      movePlayer(finalMove);
    };

    main.runGame = function() {
      diceClick();
      checkPlayerAndMove();
      main.currentPlayer = nextPlayer();
    };

    initGame();
  });
