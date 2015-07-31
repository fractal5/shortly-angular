angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.data = {};
  $scope.submit = function() {
    Links.shortenUrl($scope.data);
  };
});
