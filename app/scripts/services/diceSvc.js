angular.module('snakesAndLadderApp').service('dice', function() {
  'use strict';
  var dice = this;
  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  dice.getDiceValue = function() {
    return getRandomInt(1, 6);
  };
  dice.getClass = function(val){
    return 'dice-val-'+val;
  };
});
