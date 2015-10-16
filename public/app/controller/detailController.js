//Controller for the detail view
app.controller("DetailController", ["$scope", "$routeParams","data", "seasons", "caps", "$location",
                                    function($scope, $routeParams, data, seasons, caps, $location) {

	// Loads the item data in the fields
	// readonly is not being currently used but can be used to disable all fields in the form and hide the save button
	angular.forEach(data, function(item, index) {
		if (item.id == $routeParams.id) {
			$scope.name = item.name;
			$scope.season = item.season;
      $scope.episode = item.episode;

		}
	});
}
])
