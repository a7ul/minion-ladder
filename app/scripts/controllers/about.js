'use strict';

/**
 * @ngdoc function
 * @name snakesAndLadderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the snakesAndLadderApp
 */
angular.module('snakesAndLadderApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
