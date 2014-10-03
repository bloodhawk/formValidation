var app = angular.module('devSocial');

app.controller('homeCtrl', function($scope) {
	$scope.signup = true;
	$scope.login = false;
	$scope.toggleLogin = function(){
		$scope.signup = false;
		$scope.login = true;
	};
	$scope.toggleSignup = function(){
		$scope.signup = true;
		$scope.login = false;
	};
})