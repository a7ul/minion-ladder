angular.module('snakesAndLadderApp').service('wait', function($timeout) {
  'use strict';
  var wait = this;
  wait.For = function(millisec) {
    var p = new Promise(function(resolve) {
      $timeout(function() {
        resolve(true);
      }, millisec);
    });
    return p;
  };
});
