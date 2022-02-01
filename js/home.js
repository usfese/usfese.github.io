// home.js


// 显示日期
function showDate() {
	var a=document.getElementById('dt');
	a.innerHTML=Date();
}

//站内搜索(百度)  废置
// function search(){
// 	var e = document.getElementById("search_in_site");
// 	var x = document.forms["s"]["kwd"].value;
// 	// window.location.href="http://www.baidu.com/s?wd=site:"+
// }

// 对暗号
function showSecret() {
	var y = document.getElementById("secret");
	var x = document.forms["password"]["pwd"].value;
	switch (x)
	{
		case "ph":
		window.location.href="test/ph/index.html";
		break;

		case "yhdm":
		window.location.href="www.imomoe.la/index.html";
		break;

		case "pvz":
		window.location.href="http://pvz2.jspvz.com/download.htm";
		break;

		case "music":
		window.location.href="music/index.html";
		break;

		case "?" :
		y.innerHTML="???????????????";
		break;

		case "jm" :
		window.location.href="https://jmcomic.bet";
		break;

		case "zd" :
		window.location.href="https://jmcomic4.cc";
		break;


		default :
		alert("没有此暗号");
		break;			
	}
}

// 搜索
function searchEngine(){
	var engine = document.forms["search"]["engines"].value;
	var keyword = document.forms["search"]["keyword"].value;
	var search = engine+keyword;
	switch(engine){
		case "https://thwiki.cc/%E7%89%B9%E6%AE%8A:%E6%90%9C%E7%B4%A2?search=":
		search = search + "&go=前往";
	}
	window.location.href=search;
}

// 显示时间
var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("clock").innerHTML=t;
}