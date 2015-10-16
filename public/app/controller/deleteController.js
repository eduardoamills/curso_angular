//Controller for the delete action
app.controller("DeleteController", ["$scope", "$routeParams", "data", "$location",
                                    function($scope, $routeParams, data, $location) {

	// Look for the selected item and remove it from the list
	angular.forEach(data, function(item, index) {
		if (item.id == $routeParams.id) {
			data.splice(index, 1);
			$location.path('/list');
		}
	});

}
])
