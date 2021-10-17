

function changeImg(img){
	let div1=document.getElementsByTagName("div");
	let bg=div1.getElementsByClassName("all");
	bg.style.background-image=img;
}

while(true){
	setInterval(changeImg("../images/yukari1.jpg"),1000);
	setInterval(changeImg("../images/93406825mifeng.jpg"),1000);
	setInterval(changeImg("../images/93419701koishi1.jpg"),1000);
}