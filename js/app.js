var app = angular.module('TITracker', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'js/home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.when('/teams/:team', {
			templateUrl: 'js/teams/teamTmpl.html',
			controller: 'teamCtrl',
			resolve: {
				teamData: function ($route, teamService) {
					return teamService.getTeamData($route.current.params.team);
				}
			}
		})
});