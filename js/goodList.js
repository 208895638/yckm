$(function(){
	//代理账户点击展开收缩
	toggle($(".index"));
	toggle($(".mjgn"));
	toggle($(".yemx"));
	toggle($(".dlgl"));
	select($(".sp"));  //顶部
	select($(".xts"));  //顶部
	window.onload=window.onresize=function(){
		var h = $(".hint").outerWidth();
		$(".hint").css({"margin-left":-h/2});
	}
})
//代理账户点击展开收缩
function toggle(obj){
	var count = 0;
	obj.on("click","dt",function(e){
		count ++;
		if(count%2 == 1){
			$(this).addClass("dt_on");
			$(this).find("i").addClass("current");
			$(this).siblings().slideUp(200);
		}else{
			$(this).removeClass("dt_on");
			$(this).find("i").removeClass("current");
			$(this).siblings().slideDown(200);
		};
		
	});
};
//下拉框
function select(obj){
		//控制select框的缩放
		
	var status = 0;
	obj.on("click",function(e){
		console.log(obj)
		status ++;
		e.stopPropagation();
		e.cancelBubble=true;
		if(status%2 == 0){
			$(this).removeClass("select_on");
//			$(this).find(".option").slideUp(200);
		}else{
			$(this).addClass("select_on");
		}
		return false;
	});
	//选取点击的值
	obj.find(".option").on("click","li a",function(){
		$(this).parents(".option").removeClass("on");
		var text = $(this).html();
		obj.find("em").html(text);
	});
	$("body").click(function (e) {
		e.stopPropagation();
		e.cancelBubble=true;
		obj.removeClass("select_on");
		status = 0;
    });
};