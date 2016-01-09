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
  player.setPostion = function(playerInstance, destination) {
    playerInstance.position = destination;
    console.log(playerInstance.id,' ',playerInstance.name,' moved to ',playerInstance.position);
  };
});
