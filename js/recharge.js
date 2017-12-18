$(function(){
	//支付渠道点击出现蓝色边框
	$(".rechargeMain li input").on("click",function(){
		if($(this)){
			$(this).parent().addClass("borderColor").siblings().removeClass("borderColor");
		}
	});
	
})
