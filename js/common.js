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
	mouseEvent(".advBox",2000)
	//公共选择时间
	var data,year,month,day;
	data = new Date();
	year = data.getFullYear();
	month = data.getMonth() + 1;
	day = data.getDate();
	var dateRange1 = new pickerDateRange('data', {
    	aRecent7Days: 'aRecent7Days',	
        isTodayValid: true,
        startDate: year+"-"+(month-1)+"-"+day,
        endDate: year+"-"+month+"-"+day,
        startToday: false,
        stopToday: true,
        needCompare: false,
        defaultText: ' ~ ',
        autoSubmit: false,
        inputTrigger: 'input_trigger1',
        theme: 'ta',
        success: function (obj) {
            $("#dCon2").html('开始时间 : ' + obj.startDate + '<br/>结束时间 : ' + obj.endDate);
        }
    });
	//公共选择时间按钮组
	$(".daysOfBox button").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
	//tab栏切换
	$(".tab ul li").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
});
// 广告轮播
function adv(obj,s){
	var height = $(obj).height();
	var perH = $(obj).find("li").eq(0).height();
	var tops;//记录鼠标移入广告时的margintop值
	timer=setInterval(function(){
		var top = parseInt($(obj).css("margin-top"));
		$(obj).animate({"margin-top":top-perH},function(){
			if(Math.abs(parseInt($(obj).css("margin-top")))>height - perH){
				$(obj).css({"margin-top":0});
			};
		})
	},s);
};
//鼠标进入广告和鼠标移出广告
function mouseEvent(obj,s){
	$(obj).mouseenter(function(){
		clearInterval(timer);
	});
	$(obj).mouseleave(function(){
		adv(".advBox",s);
	});
}
//模拟下拉框
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