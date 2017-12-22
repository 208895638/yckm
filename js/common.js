$(function(){
//	$(window).on('scroll',function(){
//      var top = $(window).scrollTop();
//      if(top >= 142){
//         $(".lBox").addClass("fix");
//         $(".rBox").css("left","240px")
//      }else{
//          $(".lBox").removeClass("fix");
//         	$(".rBox").css("left","0")
//      };
//  });
//顶部消息通知划过展开
	$(".tongzhi").hover(function(){
		if(!$(".tongzhi .newsInfo").is(":animated")){
			$(".tongzhi .newsInfo").stop(true,true).slideDown();
		}
	},function(){
		$(".tongzhi .newsInfo").stop(true,true).slideUp();
	});
	select($(".khbh"));  //我的下级查询客户编号
	select($(".khjb"));  //我的下级客户级别
	
//	function select(obj){
//		//控制select框的缩放
//		obj.on("click",function(){
//			$(this).find(".option").slideToggle();
//		});
//		//选取点击的值
//		obj.find(".option").on("click","li",function(){
//			var text = $(this).html();
//			obj.find("em").html(text);
//		});
//		//移出时box缩进
//		obj.mouseleave(function(){
//			$(this).find(".option").slideUp();
//		});
//	};
})
function select(obj){

		//控制select框的缩放
		obj.on("click",function(){
			console.log(obj)
			$(this).find(".option").slideToggle();
		});
		//选取点击的值
		obj.find(".option").on("click","li",function(){
			var text = $(this).html();
			obj.find("em").html(text);
		});
		//移出时box缩进
		obj.mouseleave(function(){
			$(this).find(".option").slideUp();
		});
	};