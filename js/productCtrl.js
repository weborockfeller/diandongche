define(["footApp", "jquery"], function(app, $) {
	app.controller('productCtrl', function($scope, $http) {
		$http.get("./data/product.json")
			.success(function(response) {

				$scope.products = response.products;

			});
	});

});