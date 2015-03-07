angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links, Auth) {
  $scope.link = {};

  $scope.addLink = function(link) {
    if (link.$valid) {
      // $scope.link.data = Links.addLink($scope.link);
      Links.addLink($scope.link)
        .then(function(res) {
          $scope.link.data = res.data;
        });
    }
  };

  $scope.signout = function() {
    Auth.signout();
  };

});
