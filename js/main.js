var app = angular.module('myApp', []);

app.controller('CalendarController', ['$scope', function($scope) {
	$scope.today = 'Monday';
}]);