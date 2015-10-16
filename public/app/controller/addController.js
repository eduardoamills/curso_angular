// Controller for the add form
app.controller("AddController", ["$scope", "$routeParams", "data", "seasons", "caps", "$location",
                              function($scope, $routeParams, data, seasons, caps, $location) {
  $scope.caps = caps;
  $scope.seasons = seasons;
  $scope.data = data;

	// Adds the new item to the list and goes back to the list view
	$scope.submitData = function() {
			newId = data[data.length-1].id + 1;
			$scope.data.id = newId;
			data.push($scope.data);
			$location.path('/list');
	}
}
])
