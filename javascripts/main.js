window.onload=function(){
	$(".list-inline li").hover(function(){
		$(this).addClass("active");
		$(".line").css("left",getAbsLeft(this));
	},function(){
		var o=$(".active");
		$(this).removeClass("active");
		$(".line").css("left",getAbsLeft(o));;
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