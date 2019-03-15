'use strict';

var policiesList = [
    {
        name: "Jicko",
        entryage: "12",
        maxmatage: "N/A",
        term: "N/A",
        minprem: "Rs. 100000",
        minsumass: "Rs. 7190/- Annually"
    },
    {
        name: "Jicko",
        entryage: "12",
        maxmatage: "N/A",
        term: "N/A",
        minprem: "Rs. 100000",
        minsumass: "Rs. 7190/- Annually"
    },
    {
        name: "Jicko",
        entryage: "12",
        maxmatage: "N/A",
        term: "N/A",
        minprem: "Rs. 100000",
        minsumass: "Rs. 7190/- Annually"
    },
    {
        name: "Jicko",
        entryage: "12",
        maxmatage: "N/A",
        term: "N/A",
        minprem: "Rs. 100000",
        minsumass: "Rs. 7190/- Annually"
    },
    {
        name: "Jicko",
        entryage: "12",
        maxmatage: "N/A",
        term: "N/A",
        minprem: "Rs. 100000",
        minsumass: "Rs. 7190/- Annually"
    }
];

angular.module('myApp.policylist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/policylist', {
    templateUrl: 'policylist/policylist.html',
    controller: 'PoliciesListCtrl'
  });
}])

.controller('PoliciesListCtrl', function($scope, $http) {

    $scope.polList = policiesList;

    // $http.get(APP_BASE_URL + "/pets")
    // .then(function(response) {
    //     $scope.petsList = response.data;
    // });
});