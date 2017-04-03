angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams) {
  $scope.travelInfo = mainSrv.travelInfo;
  $scope.packageInfo = mainSrv.packageInfo;
  $scope.countryPackage = mainSrv.getPackagesByCountry($stateParams.country)

})
