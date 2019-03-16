'use strict';

// var policiesList = [
//     {
//         name: "Jicko",
//         entryage: "12",
//         maxmatage: "N/A",
//         term: "N/A",
//         minprem: "Rs. 100000",
//         minsumass: "Rs. 7190/- Annually"
//     },
//     {
//         name: "Jicko",
//         entryage: "12",
//         maxmatage: "N/A",
//         term: "N/A",
//         minprem: "Rs. 100000",
//         minsumass: "Rs. 7190/- Annually"
//     },
//     {
//         name: "Jicko",
//         entryage: "12",
//         maxmatage: "N/A",
//         term: "N/A",
//         minprem: "Rs. 100000",
//         minsumass: "Rs. 7190/- Annually"
//     },
//     {
//         name: "Jicko",
//         entryage: "12",
//         maxmatage: "N/A",
//         term: "N/A",
//         minprem: "Rs. 100000",
//         minsumass: "Rs. 7190/- Annually"
//     },
//     {
//         name: "Jicko",
//         entryage: "12",
//         maxmatage: "N/A",
//         term: "N/A",
//         minprem: "Rs. 100000",
//         minsumass: "Rs. 7190/- Annually"
//     }
// ];

angular.module('myApp.policylist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/policylist', {
    templateUrl: 'policylist/policylist.html',
    controller: 'PoliciesListCtrl'
  });
}])

.controller('PoliciesListCtrl', function($scope, $http) {

    // $scope.polList = policiesList;
    // $scope.terms = "";

    $http.get(APP_BASE_URL + "/policies")
    .then(function(response) {
        //console.log("Data:" + response);
        $scope.polList = response.data;
    });

    $scope.showData = function(policyId) {
        // console.log("Data:" + policyId);

        $http.get("http://10.117.189.72:8081/Insurance/api/policydetail/" + policyId)
        .then(function(response) {
            // console.log(JSON.stringify(response.data.textualDescription));
            $scope.polDetails = response.data;
        });
    }

    $scope.buy = function() {
        alert("Thanks for buying a policy !!!");
    }
});