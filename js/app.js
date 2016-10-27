require.config({
    baseUrl: 'js/lib',
    paths: {
        bootstrap:'bootstrap.min',
        npm:'npm',
        jquery:'jquery-1.9.0.min'
    }
});
require(['jquery'],function($){
	GetBadList();
})
function GetBadList()
{
	$.ajax({
		type:"get",
		url:"http://cloud.bmob.cn/b042e00844addc94/GetBadInfoList",
		dataType: 'json',
		success:function(data){
			alert("1");
		},
		error:function(){
			console.log("error");
		}
	});
}
function SetHeadImg(num_id)
{
	var id=parseInt(num_id);
	switch(id)
	{
		case 1:return "head.jpg";break;
		case 2:return "head.jpg";break;
		case 3:return "head.jpg";break;
		case 4:return "head.jpg";break;
		case 5:return "head.jpg";break;
		default:return "head.jpg";break;
	}
}






