angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    // janky validation
    console.log('janky validation url: ', $scope.link.url);
    if ($scope.link.url) {
      $http({
        method: 'POST',
        url: '/api/links',
        data: JSON.stringify($scope.link)
      });
    }

  };
});
