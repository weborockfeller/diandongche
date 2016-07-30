define(["footApp", "jquery", "swiper"], function(app, $, swiper) {
	app.controller('docIndexCtrl', function($scope, $http) {
		$http.get("./data/main.json")
			.success(function(response) {
				$scope.slider = response.slider;
				$scope.hotNews = response.hotNews;
				$scope.hotCarType = response.hotCarType;
				$scope.hotBrand01 = response.hotBrand01;
				$scope.hotBrand02 = response.hotBrand02;
				$scope.hotVideo = response.hotVideo;
				var newImage = new Image();
				newImage.src = $scope.slider[0].img;
				newImage.onload = function() {
					mySwiper();
				}				
			});
		var imgSrcArr1 = ["./images/61_01.png","./images/61_02.png","./images/61_03.png","./images/61_04.png"];
		var imgSrcArr2 = ["./images/62_01.png","./images/62_02.png","./images/62_03.png","./images/62_04.png"];
		var colorArr = ["#069cc4","#8f8f8f"];
		//设置footer样式
		$("footer .s1").attr("src", "./images/62_01.png");
		$("footer .w1").css("color", "#069cc4");
		$("footer .s2").attr("src", "./images/61_02.png");
		$("footer .w2").css("color", "#8f8f8f");
		$("footer .s3").attr("src", "./images/61_03.png");
		$("footer .w3").css("color", "#8f8f8f");
		$("footer .s4").attr("src", "./images/61_04.png");
		$("footer .w4").css("color", "#8f8f8f");
	});

	function mySwiper() {
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 2000,
			loop: true,
			direction: "horizontal",
			pagination: '.swiper-pagination',
			paginationType: 'bullets',
			autoplayDisableOnInteraction: false
		})
	}

});