Bmob.initialize("c3c5a46889b3dac164496ec0775daf12", "d50540b31eb45221eab3387134378f39");
var vm = new Vue({
	el:"#app",
	data:{
		ok:false,
		datalist:"",
		keyword:"",
		number:"",
		password:""
	},
	mounted:function(){
		//this.checkData();
	},
	methods:{
		toggle:function(){
			this.ok=!this.ok;
			var id_str=$(".active").attr("id");
			if(id_str!="search")
			{
				$("#search").addClass("active");
				$("#update").removeClass("active");
			}else
			{
				$("#update").addClass("active");
				$("#search").removeClass("active");
			}
		},
		checkData:function(){
			var GameScore = Bmob.Object.extend("ofoinfo");
			var query = new Bmob.Query(GameScore);
			// 查询所有数据
			query.equalTo("ofonumber", parseInt(this.keyword));
			//query.limit(10);
			query.find({
			  	success: function(results) {
			  		//console.log(results);return 0;
			  		var html_str="";
			  		html_str+="<ul>";
			  		for(var i=0;i<results.length;i++)
			  		{
			  			html_str+="<li>";
			  			html_str+="<h4>车牌号："+results[i].get("ofonumber")+"</h4>";
			  			html_str+="<h4>密码："+results[i].get("ofopassword")+"</h4>";
			  			html_str+="</li>";
			  		}
			    	$(".ofolist").html(html_str+"</ul>");
			  	},
			  	error: function(error) {
			    	alert("查询失败: " + error.code + " " + error.message);
			  	}
			});
		},
		updateData:function(){
			var _this=this;
			if(this.number==""||this.password=="")
			{
				return 0;
			}
			var GameScore = Bmob.Object.extend("ofoinfo");
		    var gameScore = new GameScore();
		    gameScore.set("ofonumber", parseInt(this.number));
		    gameScore.set("ofopassword", parseInt(this.password));
		    gameScore.save(null, {
		      	success: function(object) {
		      		$(".alert").hide();
		      		$(".alert-success").show();
		      		setTimeout(function(){
						$(".alert-success").fadeOut();
		      		},2000)
		      		
		        	//alert("create object success, object id:"+object.id);
		        	_this.number="";
					_this.password="";
		      	},
		     	error: function(model, error) {
		     		$(".alert").hide();
		     		$(".alert-danger").show();
		     		setTimeout(function(){
						$(".alert-danger").fadeOut();
		      		},2000)
		       	 	//alert("create object fail");
		      	}
		    });
		},
		reset:function(){
			this.number="";
			this.password="";
		}
	}
});
