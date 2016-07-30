define(["footApp","jquery"],function(app,$){
		app.controller('meCtrl', function($scope) {
			$("#nav p").click(function () {
				// alert(111);
				$("#denglu").show();
			});
		
			$("#denglu img:eq(0)").click(function () {
				$(this).parent().hide();
			});
		
			$("#content ul li:lt(4)").click(function () {
				$("#denglu").show();
			});
		
			$("#content ul li:eq(4)").click(function () {
				$("#weixin").show();
			});
		
			$("#weixin h3").click(function () {
				$(this).parents("section").hide();
			})
		
			$("#content ul li:eq(5)").click(function () {
				$("#shoucang").show();
			});
		
			$("#shoucang dl dt:eq(0)").click(function () {
				$(this).parents("section").hide();
			});
		
			$("#content ul li:eq(6)").click(function () {
				$("#yijian").show();
			});
		
			$("#yijian h3 img").click(function () {
				$(this).parents("section").hide();
			})
		//设置footer样式
		$("footer .s1").attr("src", "./images/61_01.png");
		$("footer .w1").css("color", "#8f8f8f");
		$("footer .s2").attr("src", "./images/61_02.png");
		$("footer .w2").css("color", "#8f8f8f");
		$("footer .s3").attr("src", "./images/61_03.png");
		$("footer .w3").css("color", "#8f8f8f");
		$("footer .s4").attr("src", "./images/62_04.png");
		$("footer .w4").css("color", "#069cc4");
		});
	});


	
