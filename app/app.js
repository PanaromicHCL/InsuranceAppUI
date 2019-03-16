'use strict';

var APP_BASE_URL = "http://10.117.189.212:8081/Insurance/api";

// http://10.117.189.72:8081/Insurance/api/policydetails

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.policylist',
  'myApp.vendor'
  // 'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/policylist'});
}]);
