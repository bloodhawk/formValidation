var app = angular.module('devSocial');

app.service('loginService', function($http, $q) {
	this.authUser = function(data){
		var defer = $q.defer();
		$http.post('http://localhost:1212/loginUser', {user: data}).then(function(data){
			data = data.data;
			defer.resolve(data);
		});
		return defer.promise;
	};

});