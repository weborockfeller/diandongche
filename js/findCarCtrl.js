define(["footApp", "jquery"], function(app, $) {
	app.controller('findCarCtrl', function($scope, $http) {
		$http.get("./data/electrocar.json")
				.success(function(response) {

					$scope.electrocar = response.electrocar;

				});
		$("nav>a").click(function() {
			var data = "electrocar";
			if($(this).html() == "电动车") {
				data = "electrocar";
			} else if($(this).html() == "电动汽车") {
				data = "electromobile";
			} else {
				data = "electroCyclo";
			}
			console.log(data);
			$http.get("./data/" + data + ".json")
				.success(function(response) {

					$scope.electrocar = response.electrocar;

				});

		});
		

	});

});