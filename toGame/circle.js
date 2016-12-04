var tap1 = game.newCircleObject( { 
	  x : wh.w/3.5, 
	  y : wh.h/3,
	  radius : wh.h/25 + wh.w/25, 
	  fillColor : '#086E88',  
	});
	var tap2 = game.newCircleObject( { 
	  x : wh.w/3.5 + wh.h/2.5, 
	  y : wh.h/3, 
	  radius : wh.h/25 + wh.w/25, 
	  fillColor : '#086E88', 	
	});


	var tiles = [tap1, tap2];

	var drawTiles = function () {
		OOP.forArr(tiles, function (el) {
			el.draw();
	})};
