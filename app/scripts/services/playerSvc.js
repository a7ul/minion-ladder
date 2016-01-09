/*globals $:true*/
angular.module('snakesAndLadderApp').service('player', function($timeout) {
  'use strict';
  var player = this;
  var id = -1;
  player.initPlayer = function(playerName) {
    id = id + 1;
    return {
      name: playerName,
      id: id,
      position: 0
    };
  };

  var movePlayerUI = function(playerInstance, destination) {
    $timeout(function() {
      var playerClass = '.player-pos-player-' + playerInstance.id;
      var destinationClass = '.board-cell-' + destination;
      $(playerClass).css($(destinationClass).offset());
    }, 1);
  };

  player.sizePlayerUI = function() {
    $timeout(function() {
      $('.player-box').width($('.board-cell').outerWidth() - 2);
      $('.player-box').height($('.board-cell').outerHeight() - 2);
      $('.dice-box').width($('.board-cell').outerWidth() - 2);
      $('.dice-box').height($('.board-cell').outerHeight() - 2);
    }, 1);
  };

  player.setPostion = function(playerInstance, destination) {
    playerInstance.position = destination;
    movePlayerUI(playerInstance, destination);
  };
});
