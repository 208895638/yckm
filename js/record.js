$(function(){
	//模拟下拉框
	$(".select").on("click",function(){
//		$(".select h4 span").addClass("on");
		$(".option").slideToggle();
	});
	//获取点击的文字
	$(".option").on("click","li",function(){
		var text = $(this).html();
		$(".select em").html(text);
	});
	//鼠标移出时下拉框收回
	$(".select").mouseleave(function(){
		$(".select h4 span").removeClass("on");
		$(".option").slideUp();
	});
})
