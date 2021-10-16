function showDate() {
	var a=document.getElementById('dt');
	a.innerHTML=Date();
}

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


		default :
		alert("没有此暗号");
		break;			
	}
}

function searchEngine(){
	var engine = document.forms["search"]["engines"].value;
	var keyword = document.forms["search"]["keyword"].value;
	var search = engine+keyword;
	window.location.href=search;
}