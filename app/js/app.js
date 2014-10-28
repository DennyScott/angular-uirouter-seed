'use strict';

// Declare app level module which depends on views, and components
angular.module('kioskApp', [
  'ui.router'
])
.constant('API_ENDPOINT', 'http://192.168.56.101:3000')
.constant('DEV_MODE', false)
.config(function($stateProvider, $urlRouterProvider) {
  
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainCtrl'
    });
});

