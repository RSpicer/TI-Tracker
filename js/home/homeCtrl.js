app.controller('homeCtrl', function($scope, $routeParams, homeService) {
	$scope.teamsList = homeService.teamsList; 
})