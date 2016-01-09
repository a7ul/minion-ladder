/*globals $:true*/
angular.module('snakesAndLadderApp').service('player', function() {
  'use strict';
  var player = this;
  var id = -1;
  player.initPlayer = function(playerName) {
    id = id + 1;
    return {
      name: playerName,
      id: 'player-' + id,
      position: 0
    };
  };

  var movePlayerUI = function(playerInstance, destination) {
    var playerClass = '.player-pos-' + playerInstance.id;
    var destinationClass = '.board-cell-' + destination;
    $(playerClass).css($(destinationClass).offset());
  };

  player.setPostion = function(playerInstance, destination) {
    playerInstance.position = destination;
    movePlayerUI(playerInstance,destination);
  };
});
