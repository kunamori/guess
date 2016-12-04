function Menu () {
	var toGame = game.newTextObject({
		x : wh.w/2.5,
		y : wh.h/3,
		text : 'START',
		size : wh.h/30 + wh.w/30,
		color : '#086E87'
	});

	this.update = function () {
		game.clear();
		toGame.draw();
		if (mouse.isPeekObject('LEFT', toGame)) {
			game.setLoop('game');
		}

		if (touch.isPeekObject(toGame)) {
			tap2.setPositionS( point(wh.w/3.5 + wh.h/5, wh.h/3) );
			game.setLoop('game');

		}
		
	};
}

game.newLoopFromClassObject('menu', new Menu());