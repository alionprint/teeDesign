'use strict';

angular.module('teeDesign', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
