window.onload=function(){
	$(".list-inline li").hover(function(){
		$(this).addClass("active");
		$(".line").css("left",$(this).offset().left);
	},function(){
		$(this).removeClass("active");
		$(".line").css("left",$(".active").offset().left);;
	})
}
