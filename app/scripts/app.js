'use strict';

/**
 * @ngdoc overview
 * @name snakesAndLadderApp
 * @description
 * # snakesAndLadderApp
 *
 * Main module of the application.
 */
angular
  .module('snakesAndLadderApp', [
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
