// require 的配置文件 
require.config({
	// 引入核心文件
	paths : {
		"angular"       : "./lib/angular.min",
		"angular-route" : "./lib/angular-route",
		"angularAMD"    : "./lib/angularAMD.min",
		"jquery"        : "./lib/jquery-2.2.3",
		"footApp"       : "./footApp",
		//这里引用的是依赖jquery的版本，所以下面要写上依赖
		"swiper"        : "./lib/swiper-3.3.1.jquery.min"
	},
	// 定义非AMD规范JS
	shim : {
		"angular-route" : ["angular"],
		"angularAMD"    : ["angular"],
		"swiper"        : ["jquery"]
	},
	// 当所有依赖文件加载完毕之后，启动footApp.js文件
	deps : ["footApp"]
});