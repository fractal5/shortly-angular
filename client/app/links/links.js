angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = [];

  Links.getLinks().then(function(linkArray) {
    $scope.data = linkArray;
    console.log("Links.getLinks: ", $scope.data);
  });
});
