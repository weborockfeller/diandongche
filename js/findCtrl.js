define(["footApp", "jquery"], function(app, $) {
	app.controller('findCtrl', function($scope, $http) {
		
		
	//设置footer样式
		$("footer .s1").attr("src", "./images/61_01.png");
		$("footer .w1").css("color", "#8f8f8f");
		$("footer .s2").attr("src", "./images/61_02.png");
		$("footer .w2").css("color", "#8f8f8f");
		$("footer .s3").attr("src", "./images/62_03.png");
		$("footer .w3").css("color", "#069cc4");
		$("footer .s4").attr("src", "./images/61_04.png");
		$("footer .w4").css("color", "#8f8f8f");
	});

});