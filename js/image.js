
alert("j");
// var changeImg=function (img){
// 	document.getElementsById("all").style.backgroundImage="url('../images/93406825mifeng.jpg')";
// 	alert("hello");
// }
// var i=2
// while(i--){
// 	setTimeout("changeImg('../images/yukari1.jpg')",1000);
// 	setTimeout("changeImg('../images/93406825mifeng.jpg')",1000);
// 	setTimeout("changeImg('../images/93419701koishi1.jpg')",1000);
// }

window.onload=function(){
	/*循环播放哪些图片*/
	var imgs=["../images/yukari1.jpg",
				"../images/93406825mifeng.jpg",
				"../images/93419701koishi1.jpg",
			];
	var i=0;
	var head=document.getElementById('all');
	head.style.background="url(../images/yukari1.jpg)";
	function time(){
		/*当循环超过图片总数时，又重新开始*/
		if(i>=2){
			i=0;
			/*建立图片对象，方便控制图片什么时候加载。
			这个是为了用来消除切换图片时的白色闪屏问题*/
			var img=new Image();
			img.src=imgs[i];
			img.onload=function(){
				head.style.background="url("+img.src+")";
			}
		}else{
			i++;
			var img=new Image();
			img.src=imgs[i];
			img.onload=function(){
				head.style.background="url("+img.src+")";
			}
		}
	}
	/*设置循环函数time(),每5秒切换一次*/
	setInterval(time,5000);
}