//单独angular路由
//angular.module('myApp', ['ngRoute'])
//	.config(['$routeProvider', function($routeProvider) {
//		$routeProvider
//			.when('/docIndex', {
//				templateUrl: './tpl/docIndex.html',
//				//				controller: "docIndexCtrl"
//			})
//			.when('/findCar', {
//				templateUrl: './tpl/findCar.html',
//				//				controller: "findCarCtrl"
//			})
//			.when('/find', {
//				templateUrl: './tpl/find.html',
//				//				controller: "findCtrl"
//			})
//			.when('/me', {
//				templateUrl: './tpl/me.html',
//				//				controller: "meCtrl"
//			})
//			.when('/news', {
//				templateUrl: './tpl/news.html',
//				//				controller: "newsCtrl"
//			})
//			.when('/product', {
//				templateUrl: './tpl/product.html',
//				//				controller: "productCtrl"
//			})
//			.when('/video', {
//				templateUrl: './tpl/video.html',
//				//				controller: "videoCtrl"
//			})
//			.when('/shoppingGuide', {
//				templateUrl: './tpl/shoppingGuide.html',
//				//				controller: "shoppingGuideCtrl"
//			})
//
//		.otherwise({
//			redirectTo: 'docIndex'
//		});
//	}]);


// 引入所需的 angularAMD、angular-route
define(["angularAMD", "angular-route"], function(angularAMD) {
	// 实例化angular module ， 定义ng-app为webapp ， 引入依赖文件ngRoute
	var app = angular.module("myApp", ["ngRoute"]);
	// 配置angular路由
	app.config(function($routeProvider) {
		$routeProvider
			.when(
				"/docIndex",
				// 访问#/home 后会执行angularAMD.route
				angularAMD.route({
					// 触发锚点后访问的页面
					templateUrl: "./tpl/docIndex.html",
					// 当前页面的控制器名字homeCtrl
					controller: "docIndexCtrl",
					// 控制器的路径./js/homeCtrl.js
					controllerUrl: "./js/docIndexCtrl"
				})
			)
			.when(
				"/findCar",
				// 访问#/home 后会执行angularAMD.route
				angularAMD.route({
					// 触发锚点后访问的页面
					templateUrl: "./tpl/findCar.html",
					// 当前页面的控制器名字homeCtrl
//					controller: "findCarCtrl",
					// 控制器的路径./js/homeCtrl.js
//					controllerUrl: "./js/findCarCtrl"
				})
			)
			.when(
				"/find",
				// 访问#/home 后会执行angularAMD.route
				angularAMD.route({
					// 触发锚点后访问的页面
					templateUrl: "./tpl/find.html",
					// 当前页面的控制器名字homeCtrl
//					controller: "findCtrl",
					// 控制器的路径./js/homeCtrl.js
//					controllerUrl: "./js/findCtrl"
				})
			)
			.when(
				"/me",
				// 访问#/home 后会执行angularAMD.route
				angularAMD.route({
					// 触发锚点后访问的页面
					templateUrl: "./tpl/me.html",
					// 当前页面的控制器名字homeCtrl
					controller: "meCtrl",
					// 控制器的路径./js/homeCtrl.js
					controllerUrl: "./js/me"
				})
			)
			.when(
				"/news",
				// 访问#/home 后会执行angularAMD.route
				angularAMD.route({
					// 触发锚点后访问的页面
					templateUrl: "./tpl/news.html",
					// 当前页面的控制器名字homeCtrl
//					controller: "newsCtrl",
					// 控制器的路径./js/homeCtrl.js
//					controllerUrl: "./js/newsCtrl"
				})
			)
			.when(
				"/product",
				// 访问#/home 后会执行angularAMD.route
				angularAMD.route({
					// 触发锚点后访问的页面
					templateUrl: "./tpl/product.html",
					// 当前页面的控制器名字homeCtrl
//					controller: "productCtrl",
					// 控制器的路径./js/homeCtrl.js
//					controllerUrl: "./js/productCtrl"
				})
			)
			.when(
				"/video",
				// 访问#/home 后会执行angularAMD.route
				angularAMD.route({
					// 触发锚点后访问的页面
					templateUrl: "./tpl/video.html",
					// 当前页面的控制器名字homeCtrl
//					controller: "videoCtrl",
					// 控制器的路径./js/homeCtrl.js
//					controllerUrl: "./js/videoCtrl"
				})
			)
			.when(
				"/shoppingGuide",
				// 访问#/home 后会执行angularAMD.route
				angularAMD.route({
					// 触发锚点后访问的页面
					templateUrl: "./tpl/shoppingGuide.html",
					// 当前页面的控制器名字homeCtrl
//					controller: "shoppingGuideCtrl",
					// 控制器的路径./js/homeCtrl.js
//					controllerUrl: "./js/shoppingGuideCtrl"
				})
			)
			.otherwise({
				redirectTo: 'docIndex'
			})
			
	});
	return angularAMD.bootstrap(app);
});