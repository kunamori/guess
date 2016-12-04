function Game() {
	var random = function () {
		count = OOP.randArrElement(tiles)
		type = false;	
	};

	var answer = game.newTextObject({
		x : wh.w/2.5,
		y : wh.h/8,
		text : 'Угадай где!',
		size : wh.h/50 + wh.w/50,
		color : '#086E88'
	});

	this.update = function () {
		game.clear();
		answer.draw();
		score.draw();
		drawTiles();
		if (type) random();
		check();
	}
}
game.newLoopFromClassObject('game', new Game());
