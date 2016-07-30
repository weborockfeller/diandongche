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
		
	//设置footer样式
		$("footer .s1").attr("src", "./images/61_01.png");
		$("footer .w1").css("color", "#8f8f8f");
		$("footer .s2").attr("src", "./images/62_02.png");
		$("footer .w2").css("color", "#069cc4");
		$("footer .s3").attr("src", "./images/61_03.png");
		$("footer .w3").css("color", "#8f8f8f");
		$("footer .s4").attr("src", "./images/61_04.png");
		$("footer .w4").css("color", "#8f8f8f");
	});

});