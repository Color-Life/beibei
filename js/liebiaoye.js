$(function(){
	// nav_top部分
	var $lis = $('#top_nav .sub_nav');
	//鼠标滑过
	$lis.on('mouseenter',function(){
		$(this).children('span').addClass('active');
		$(this).children('div').css('display','block');
	
		//鼠标划出
	}).mouseleave(function(){
		$(this).children('span').removeClass('active');
		$(this).children('div').css('display','none');
	});
	//购物车滑过显示，离开影藏
	$('#sbv_gou').on('mouseenter',function(){
		$('#shop').css('display','block');
	}).mouseleave(function(){
		$('#shop').css('display','none');
	});
	//在售分类滑过显示，离开影藏以及内部小tab标签切换
	$('#sell').on('mouseenter',function(){
		$('#sell_list').css('display','block');
	}).mouseleave(function(){
		$('#sell_list').css('display','none');
	});
	/*tab标签切换部分 start*/
	var $tabs = $('#classify li');
	$tabs.on('mouseenter',function(){
		var index = $(this).index();
		$(this).addClass('active1');
		$('#sell_list .show').eq(index).addClass('active2')
	}).mouseleave(function(){
		var index = $(this).index();
		$(this).removeClass('active1');
		$('#sell_list .show').eq(index).removeClass('active2');
	});
	/*tab标签切换部分 end*/
//在性别年龄滑过显示，离开影藏
	$('#age').on('mouseenter',function(){
		$(this).children('div').show();
	}).mouseleave(function(){
		$(this).children('div').hide();
	});
})
