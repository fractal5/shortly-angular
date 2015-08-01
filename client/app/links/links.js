angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = [];

  Links.getLinks().then(function(linkArray) {
    $scope.data = linkArray;
    console.log("Links.getLinks: ", $scope.data);
  });
})
.directive('ngLink', function() {
  return {
    restrict: 'A',
    template: '<img src="assets/redirect_icon.png"/> \
      <div class="info"> \
        <div class="visits"><span class="count">{{link.visits}}</span>Visits</div> \
        <div class="title">{{link.title}}</div> \
        <div class="original">{{link.url}}</div> \
        <a href="{{link.base_url}}/api/links/{{link.code}}">{{link.base_url}}/{{link.code}}</a> \
      </div>'
  }
});
