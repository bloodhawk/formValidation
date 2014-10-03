var app = angular.module('devSocial');

app.controller('loginCtrl', function($scope, loginService) {
	$scope.authUser = function(){
		loginService.authUser($scope.user).then(function(result){
			if(result.success){
				$scope.loggedIn = true;
				$scope.message = 'You sucessfully logged in';
				setTimeout(function(){
					$scope.loggedIn = 'undefined';
					$scope.$apply()
				}, 3000);
			} else {
				$scope.loggedIn = false;
				$scope.message = result.message;
				setTimeout(function(){
					$scope.loggedIn = 'undefined';
					$scope.$apply()
				}, 3000);
			}
		});
	};
})