app.controller("ListController", ["$scope", "data", "caps", "seasons" ,"$location", function($scope, data, caps, seasons, $location) {
	$scope.data = data;
  $scope.caps = caps;
  $scope.seasons = seasons;
}])
