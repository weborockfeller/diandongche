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
		});
	});


	
