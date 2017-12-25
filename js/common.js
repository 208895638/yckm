$(function(){
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
	//td里面下拉框这部分是单独写的
	$(".subordinateInfo td .select").on("click",function(){
		$(this).find(".option").slideToggle();
	});
	$(".subordinateInfo td .select").find(".option").on("click","li",function(){
		var text = $(this).html();
		$(this).parent().siblings().find("em").html(text);
	});
	//移出时box缩进
	$(".subordinateInfo td .select").mouseleave(function(){
		$(this).find(".option").slideUp();
	});
	//轮播广告
	var timer;
	adv(".advBox",2000);
});

function adv(obj,s){
	var height = $(obj).height();
	var perH = $(obj).find("li").eq(0).height();
	timer=setInterval(function(){
		var top = parseInt($(obj).css("margin-top"));
		$(obj).animate({"margin-top":top-perH},function(){
			if(Math.abs(parseInt($(obj).css("margin-top")))>height - perH){
				$(obj).css({"margin-top":0});
			};
		})
	},s);
};

function select(obj){
		//控制select框的缩放
		console.log(obj)
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