var checkInputs = angular.module('checkInputs', []);
checkInputs.directive('checkInputs', function(){
	return {
		restrict: 'A',
		scope: {
			input: "=inputSecond",
			otherInput: "=inputFirst",
			truthValue: "=truthModel"
		},
		link: function(scope, element, attrs){
			var func = function(){
				scope.truthValue = false;	
				element.bind("keypress keyup keydown", function(){
					if(scope.input === scope.otherInput){
						scope.truthValue = true;
						scope.$apply();
					} else {
						scope.truthValue = false;
						scope.$apply();
					}
				});	
			}	
			func();	
		}
	}
});