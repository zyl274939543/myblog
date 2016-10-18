window.onload=function(){
	$(".list-inline li").hover(function(){
		$(this).addClass("active");
		$(this).css("left",active_left);
	},function(){
		$(this).removeClass("active");
		$(".line").css("left",$(".active").css("left"));
	})
}
