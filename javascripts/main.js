window.onload=function(){
	$(".list-inline li").hover(function(){
		$(this).addClass("active");
		$(".line").css("left",$(this).css("left")).css("display": "inline").css("width": "54px");
	},function(){
		$(this).removeClass("active");
		$(".line").css("left",$(".active").css("left")).css("display": "inline").css("width": "54px");;
	})
}
