$(function(){
	//代理账户点击展开收缩
	toggle($(".index"));
	toggle($(".mjgn"));
	toggle($(".yemx"));
	toggle($(".dlgl"));
	select($(".sp"));  //顶部
	select($(".xts"));  //顶部
	select($(".ddzt"));  //订单状态
	select($(".jqcx"));  //精确查询
		//日期组件 公共选择时间按钮组
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
	
	//时间切换 
	$(".commonSearch .link").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
	//精确查询 
	 $(".commonSearch .searchBtn li").on("click",function(){
	 	var i = $(this).index();
	 	if(i == 1){
	 		$(this).hide(200).siblings().show(200).parent().siblings().hide(200);
	 	}else{
	 		$(this).hide(200).siblings().show(200).parent().siblings().show(200);
	 	}
	 });
	 //tab栏切换
	 $('.tab').on("click","li",function(){
	 	$(this).addClass("on").siblings().removeClass("on");
	 });
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