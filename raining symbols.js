window.onload = bindEventHandlers;
var randomSymbol = '';

function bindEventHandlers() {
	setInterval(getRain, 100);
}

function getRain() {
	randomString();
	$("<div>"+randomSymbol+"</div>").prependTo(".content").addClass("drops").css("animation-duration", getRandom(5,20)+"s").css("margin-left", getRandom(65,1200)+"px");
}

function randomString() {
	var variants = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	for (var i=0; i<1; i++) {
		var rnum = Math.floor(Math.random() * variants.length);
		randomSymbol = variants.substring(rnum,rnum+1);
	}
	return randomSymbol;
}

function getRandom(min,max){
	return Math.floor(Math.random()*(max+1-min)+min);
}
