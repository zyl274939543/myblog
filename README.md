#Im Joy,front-end development engineer#

* 1.<a href="http://zyl274939543.github.io/myblog/resume/resume.html" title="my resume">[resume]:HR come and take me away.</a>

* 2.saybad:
**Its a web app, the app data from bmob, including the use of the platform provides a API front-end data interaction and web is html+css+jquery for the front page display, ajax+json for data communication.**
###Below I will write a Vue about demo###
##Lets do it.##
<style>
    	/* entire container, keeps perspective */
		.flip-container {
			perspective: 1000;
		}
			/* flip the pane when hovered */
			.flip-container:hover .flipper, .flip-container.hover .flipper {
				transform: rotateY(180deg);
			}
		
		.flip-container, .front, .back {
			width: 370px;
			height: 250px;
		}
		
		/* flip speed goes here */
		.flipper {
			transition: 0.6s;
			transform-style: preserve-3d;
		
			position: relative;
		}
		
		/* hide back of pane during swap */
		.front, .back {
			backface-visibility: hidden;
		
			position: absolute;
			top: 0;
			left: 0;
		}
		
		/* front pane, placed above back */
		.front {
			z-index: 2;
		}
		
		/* back, initially hidden pane */
		.back {
			transform: rotateY(180deg);
		}
		.flip-container:hover .flipper, .flip-container.hover .flipper, .flip-container.flip .flipper {
			transform: rotateY(180deg);
		}
		p{line-height: 10px;}
		.middle{text-indent: 2em;}
		</style>
<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
			<div class="flipper">
				<div class="front" style="background-color: white;">
					<div class="nav"><img src="img/nav1.png"></div>
					<div class="content">
						<p>＜card＞</p>
						<p class="middle">＜name＞周玉亮＜/name＞</p>
						<p class="middle">＜title＞Front-end Engineer＜/title＞</p>
						<p class="middle">＜mobile＞18757550369＜/mobile＞</p>
						<p class="middle">＜email>joycoder@aliyun.com＜/email＞</p>
						<p class="middle">＜link＞github.com/zyl274939543＜/link＞</p>
						<p>＜/card＞</p>
					</div>
				</div>
				<div class="back" style="background-color: gainsboro;">
					<img src="img/back_bg.png" style="width: 500px;height: 250px;" />
				</div>
			</div>
		</div>
