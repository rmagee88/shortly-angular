angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    $http({
      method: 'GET',
      url: '/api/links'
    }).success(function(data, status) {
      $scope.data.links = data;
    }).error(function(data, status) {
      // console.error(data);
    });
  };

  $scope.getLinks();
});

