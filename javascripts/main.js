window.onload=function(){
	$(".list-inline li").hover(function(){
		$(this).addClass("active");
		alert(getAbsLeft($(this)));
		$(".line").css("left",getAbsLeft($(this)));
	},function(){
		$(this).removeClass("active");
		alert(getAbsLeft($(".active")));
		$(".line").css("left",getAbsLeft($(".active")));;
	})
}
function   getAbsLeft(obj){
	var   l=obj.offsetLeft; 
	while(obj.offsetParent != null){
				obj = obj.offsetParent;   
	l += obj.offsetLeft;   
		  }
	return l;
} 