angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function(res) {
        $scope.data.links = res.data;
      });
  };


  $scope.getLinks();
});

// Display the links on the listing page sorted by visit count
// Add a live-search box that displays only the links that match the search criteria
