window.onload = bindEventHandlers;
var randomSymbol = '';
var Correct = 0;
var Wrong = 0;
var Missed = 0;

function bindEventHandlers() {
	setInterval(getRain, 1000);
	$(window).on("keypress", bindUsersKeypress);
}

function bindUsersKeypress(event) {
	$(".drops").each(function(index, element) {
		var cocs = String.fromCharCode(event.which);
		if ($(element).text() == cocs) {
			$(".results__body__correct-value").text(Correct += 1);
			$(element).text(cocs).remove();
		} else if ($(element).text() != cocs) {
			$(".results__body__wrong-value").text(Wrong += 1);
		}
		$("#input").val(cocs);
	});
}

function getRain() {
	randomString();
	$("<div>"+randomSymbol+"</div>").prependTo(".content").addClass("drops").css("animation-duration", getRandom(10,30)+"s").css("margin-left", getRandom(65,1200)+"px");
	$(".drops").each(function(index, element){
		if (parseInt($(element).offset().top) > 500) {
			$(".results__body__missed-value").text(Missed += 1);
			$(this).remove();
		}
	});
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
