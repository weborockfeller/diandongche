define(["footApp","jquery"],function (app,$) {
	app.controller("findCarCtrl",function ($scope,$http) {
		var lis = $(".brand ul li a");
		// alert(lis.length)
	    var pinpai = $("#pinpai");
	    var xuanze = $("#xuanze");
	    var car_money = $("#car_money");
	    var da = $("#da");
	    var price = $("#price");
	    var car_money_ul = $("#car_money_ul li");

	    //ajax数据切换
	    var navA = $("nav a");


	    //选择 品牌隐藏
	   	lis[1].onclick = function (e) {
	   		e.preventDefault();
	   		pinpai.hide();
	   		xuanze.show();
	   	};
	   	lis[0].onclick = function (e) {
	   		e.preventDefault();
	   		xuanze.hide();
	   		pinpai.show();
	   		// car_money.show();
	   	};
	   	//显示
	   	price[0].onclick = function (e) {
	   		da.css("transform","translate(-4.31rem)");
	   		da.css("transition","all 1s")
	   	};

	   	//收回
	   	car_money_ul.click(function () {
	   		da.css("transform","translate(0rem)");
	   		da.css("transition","all 1s");
	   		car_money_ul.css("background","#fff");
	   		$(this).css("background","red");
	   		price.html($(this).html())
	   	});

	  
		

		//后台数据
		// $http.get("./data/electrocar.json")
		// .success(function (data) {
		// 	// console.log(data)
		// 	// console.log(data.electrocar);
		// 	$scope.arr = data.electrocar;
		// 	// $scope.message = data.electrocar.message;
		// });

		var array = ["./data/electrocar.json","./data/electroCyclo.json","./data/electromobile.json"];
		navA.click(function (e) {
			json(array[$(this).index()]);
			//阻止事件默认行为
			return false;
		});

		//封装起来
		function json (url) {
			$http.get(url)
			.success(function (data) {
				$scope.arr = data.electrocar;
			})
		};
		json("./data/electrocar.json");




	});
})