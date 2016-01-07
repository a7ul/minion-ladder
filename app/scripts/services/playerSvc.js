angular.module('snakesAndLadderApp').service('player', function() {
  'use strict';
  var player = this;
  player.initPlayer = function(playerName){
    return {
      name:playerName,
      position:0
    };
  };
  player.setPostion = function(playerInstance,destination) {
    playerInstance.position = destination;
  };
});
