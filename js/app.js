(function () {

'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject($scope);
function LunchCheckController($scope) {
	$scope.name = "";
	$scope.message = "";
	$scope.ll = 0;

	$scope.displaylength = function() {
	   var ll = checklength($scope.name);

	   if ($scope.name == "") {
		$scope.message = "Please enter data first";		
	   } else if (ll>3) {
		$scope.message = "Too much!";
	   } else {
		$scope.message = "Enjoy!";
	   }	   
		
	};	

	function checklength(nn) {
		var namelist = nn.split(","); 
		return namelist.length;				
	}



}

})();

