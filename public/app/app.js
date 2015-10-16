//Creating the app
var app = angular.module("necroProdeApp", ["ngRoute"])

app.value("data", [{
	id: 0,
	name: 'Ned Stark',
	season: 1,
	episode: 9
}, {
	id: 1,
	name: 'Sansa Stark',
	season: 2,
	episode: 1
}, {
	id: 2,
	name: 'Tyrion Lannister',
	season: 7,
	episode: 6
}])
.value("caps", [ 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15 ])
.value("seasons", [ 1,2,3,4,5 ])
.config(["$routeProvider", function($routeProvider) {
	$routeProvider.when("/list", {
		controller: "ListController",
		templateUrl: "app/view/list.html"
	}).when("/delete/:id", {
		controller: "DeleteController",
		templateUrl: "app/view/list.html"
	}).when("/add", {
		controller: "AddController",
		templateUrl: "app/view/form.html"
	}).when("/", {
		templateUrl: "app/view/home.html"
	}).when("/detail/:id", {
		controller: "DetailController",
		templateUrl: "app/view/detail.html"
	}).otherwise({
		redirectTo: "/"
	});
}])
