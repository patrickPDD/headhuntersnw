'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'ct.ui.router.extras.core',
  'ct.ui.router.extras.sticky',
  'afkl.lazyImage',
  'angular.filter',
  'ngConstants',
  'angular-inview',
  'duScroll',
  'ui.mask'
]).
config(['$stateProvider','$urlRouterProvider','$locationProvider', '$routeProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
