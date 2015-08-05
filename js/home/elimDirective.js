app.directive('elimDirective', function() {
	return {
		templateUrl: 'js/home/elimTmpl.html',
		link: function(scope, element, attrs) {
			scope.eliminate = function () {
				scope.team.isAlive = !scope.team.isAlive;
			}
		}
	}
})