define(["footApp", "jquery"], function(app, $) {
	app.controller('newsCtrl', function($scope, $http) {
		$http.get("./data/news.json")
			.success(function(response) {

				$scope.hotNews = response.hotNews;

			});
	});

});