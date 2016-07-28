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