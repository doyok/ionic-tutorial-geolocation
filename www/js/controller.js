angular.module('prr.controllers', [])

.controller('geoLocationCtrl', function($scope,$window) {
	$window.navigator.geolocation.getCurrentPosition(function(position){
		$scope.$apply(function(){
			$scope.lat = position.coords.latitude;
			$scope.lng = position.coords.longitude;
		})
		
		console.log(position);
	})
})