var sc = 0;
var type = true;
var count;

var score = game.newTextObject({
		x : wh.w/2.5,
		y : wh.h/5,
		text : 'Счет: 0',
		size : wh.h/50 + wh.w/50,
		color : '#086E88'
});

var check = function () {
		if (mouse.isPeekObject('LEFT', tap1) || touch.isPeekObject(tap1)) 
			if (count == tap1) {
				sc++;
				score.setText('Счет: ' + sc);
				log(sc);
				type = true;
			} else {
				score.setText('Счет: 0');
				sc = 0;
			};
		
	

		if (mouse.isPeekObject('LEFT', tap2) || touch.isPeekObject(tap2)) 
			if (count == tap2) {
				sc++;
				score.setText('Счет: ' + sc);
				log(sc);
				type = true;
			} else {
				score.setText('Счет: 0');
				sc = 0;	
		}
};