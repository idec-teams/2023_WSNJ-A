$(function(){
	var h3 = $(".tree_box").find("h3 span");
	var tree_one = $(".tree_box").find(".tree_one");
	h3.each(function(i){
		$(this).click(function(){
			tree_one.eq(i).slideToggle();
			tree_one.eq(i).parent().siblings().find(".tree_one").slideUp();
		})
	})
})
//menu
$(document).ready(function(){
	$(".menu_down").hover(
	function(){$(this).children("dl").show();},
	function(){$(this).children("dl").hide();}
	);
	$(".menu ul li:last").css({background:"none",borderRight:"none"})
	$(".menu ul li").hover(function(){$(this).find("span a").addClass("menu_hover")},function(){$(this).find("span a").removeClass("menu_hover")})
	
	$(".nav_open").click(function(){
		$(".navbg").slideToggle();
		$(this).toggleClass("active");
	});
	$(".nav_close").click(function(){
		$(".navbg").hide();
		$(".nav_open").removeClass("active");
	});
	$(".search1_open").click(function(){
		$(".search1bg").slideToggle();
		$(this).toggleClass("active");
	});
	$(".search1_close").click(function(){
		$(".search1bg").hide();
		$(".search1_open").removeClass("active");
	});
})




//Add------------------------------------------------------------------------------------------------





