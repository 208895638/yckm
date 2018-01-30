$(function(){
	//代理账户点击展开收缩
	toggle($(".index"));
	toggle($(".mjgn"));
	toggle($(".yemx"));
	toggle($(".dlgl"));
	//下拉框
	select($(".sp"));  //顶部
	select($(".xts"));  //顶部
	select($(".khjb"));  //我的下级客户级别
	select($(".syztss"));  //充值记录
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
//
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
}
