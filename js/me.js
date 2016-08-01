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
			//登陆注册验证
			//登陆
			$("#login").click(function () {
				$.ajax({
					type:"get",
					url:"http://10.0.158.224/login.php",
					async:true,
					data :{
						name : $("#username").val(),
						pwd  : $("#pwd").val()
					},
					success : function (data) {
						if(data == "1"){
							alert("登陆成功");
						}else{
							alert("没有此账号，请先注册");
						}
					}
				});
			});
			//注册的逻辑
			$("#denglu>p").click(function () {
				$("#denglu").css("display","none");
				$("#register").css("display","block");
			});
			$("#register img").first().click(function () {
				$("#register").css("display","none");
				$("#denglu").css("display","none");
			});
			$("#registerP").click(function () {
				$("#register").css("display","none");
				$("#denglu").css("display","block");
			});
			
			//注册的验证
			$("#zhuce").click(function () {
				$.ajax({
					type:"get",
					url:"http://10.0.158.224/register.php",
					async:true,
					data :{
						name : $("#username1").val(),
						pwd  : $("#pwd1").val(),
						email  : $("#email").val(),
					},
					success : function (data) {
						if(data == "1"){
							alert("注册成功");
						}else{
							alert("用户已存在");
						}
					}
				});
			});
		});
	});


	
