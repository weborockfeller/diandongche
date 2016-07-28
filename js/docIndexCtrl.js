define(["footApp","jquery","swiper"], function(app,$,swiper) {
	app.controller('docIndexCtrl', function($scope,$timeout) {
		
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 2000,
				loop: true,
				direction: "horizontal",
				pagination: '.swiper-pagination',
				paginationType: 'bullets',
				autoplayDisableOnInteraction: false
			})
	
	});
});