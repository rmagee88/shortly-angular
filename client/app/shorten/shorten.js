angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = {};

  $scope.addLink = function(link) {
    if (link.$valid) {
      Links.addLink($scope.link);
    }
  };

});
