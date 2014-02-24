window.onload = bindEventHandlers;
var RandomSymbols = [];
var Correct = 0;
var Wrong = 0;
var Missed = 0;
var Width = 1265;
var Height = 500;
var CurrentSpeed = 0.01;

function bindEventHandlers() {
	$(window).on("keypress", bindUsersKeypress);
	window.canvas = document.getElementById("content");
	window.ctx = canvas.getContext("2d");
	canvas.width = Width;
	canvas.height = Height;
	ctx.font = "26pt Verdana";
	ctx.fillStyle = "#333";
	start = setInterval(drawDrops, 3000);
	
}

function animateDrops() {
	ctx.clearRect(0, 0, Width, Height);
	$.each(RandomSymbols, function(index, element){
		ctx.fillText(element.letter, element.x, element.y);
		element.y += element.speed;
		if(element.y+element.speed > Height + 30) {
			RandomSymbols[index] = new Charachter(); 
			$(".results__body__missed-value").text(Missed += 1);
			if (Missed == 20) {
				var results = (100*Correct)/(Correct+Wrong+Missed);
				$(".game-over__content__result").text(results.toFixed(2)+"%");
				$(".game-over__content__stat").text("You got "+Correct+" right with "+Wrong+" errors.");
				$(".game-over").css("display", "block");
				clearInterval(start);
			}
		}
		setTimeout(animateDrops, 100);
	});
}

function drawDrops() {
		for (var i = 0; i < 10; i++) {
			RandomSymbols.push(new Charachter());
			increaseSpeed();
		}
		animateDrops();
}

function bindUsersKeypress(event) {
	var keypress = String.fromCharCode(event.which);
	var isWrongKeyPressed = true;
	$.each(RandomSymbols, function(index,element){
		if (keypress == element.letter) {
			RandomSymbols[index] = new Charachter();
			$(".results__body__correct-value").text(Correct += 1);
			isWrongKeyPressed = false;
		}
	});
	if (isWrongKeyPressed) {
		$(".results__body__wrong-value").text(Wrong += 1);
	}
}

function getRandom(min,max) {
	return Math.floor(Math.random()*(max+1-min)+min);
}

function Charachter() {
	this.y = 0;
	this.x = getRandom(200,1000) + 100;
	this.letter = String.fromCharCode(getRandom(33,127));
	this.speed = Math.random() * CurrentSpeed;
}

function increaseSpeed() {
	CurrentSpeed += 0.01;
}