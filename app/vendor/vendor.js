'use strict';

angular.module('myApp.vendor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vendor', {
    templateUrl: 'vendor/vendor.html',
    controller: 'VendorCtrl'
  });
}])

.controller('VendorCtrl', [function($scope, $http) {
       
}]);