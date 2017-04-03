angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
  $scope.travelInfo = mainSrv.travelInfo;
  $scope.packageInfo = mainSrv.packageInfo;
  $scope.currentPackage = mainSrv.getPackagesByID($stateParams.id)
  $scope.bookedBackground = {
    'background': 'url(' + $scope.currentPackage.image + ') center no-repeat',
    'background-size': 'cover'

  }
})
