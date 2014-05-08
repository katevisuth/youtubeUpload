function drawRainbowCircle(sketch) {

	sketch.stroke (255,255,102);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,600,600);

	sketch.stroke (255,128,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,550,550);

	sketch.stroke (255,0,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,500,500);

	sketch.stroke (127,0,255);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,450,450);

	sketch.stroke (0,0,153);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,400,400);

	sketch.stroke (0,140,140);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,350,350);

	sketch.stroke (255);
	sketch.strokeWeight(25);
	sketch.noFill();
	sketch.ellipse(570,385,300,300); 

	if ( Math.floor(sketch.millis() * 0.01) % 4 == 0) {

		sketch.stroke (255,128,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,600,600);

		sketch.stroke (255,0,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,550,550);

		sketch.stroke (127,0,255);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,500,500);

		sketch.stroke (0,0,153);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,450,450);

		sketch.stroke (0,140,140);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,400,400);

		sketch.stroke(255,255,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,350,350);

		sketch.stroke (255);
	sketch.strokeWeight(25);
	sketch.noFill();
	sketch.ellipse(570,385,300,300); 
	}

	if ( Math.floor(sketch.millis() * 0.005) % 4 == 1) {
		sketch.stroke (255,0,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,600,600);

		sketch.stroke (127,0,255);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,550,550);

		sketch.stroke (0,0,153);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,500,500);

		sketch.stroke (0,140,140);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,400,400);

		sketch.stroke(255,255,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,400,400);

		sketch.stroke (255,128,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,350,350);

		sketch.stroke (255);
	sketch.strokeWeight(25);
	sketch.noFill();
	sketch.ellipse(570,385,300,300);
	}

	if ( Math.floor(sketch.millis() * 0.005) % 4 == 2) {

		sketch.stroke (255,255,102);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,600,600);

		sketch.stroke (255,128,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,550,550);

		sketch.stroke (255,0,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,500,500);

		sketch.stroke (127,0,255);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,400,400);

		sketch.stroke (0,0,153);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,400,400);

		sketch.stroke (0,140,140);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,350,350);

		sketch.stroke (255);
	sketch.strokeWeight(25);
	sketch.noFill();
	sketch.ellipse(570,385,300,300);
	}

	if ( Math.floor(sketch.millis() * 0.005) % 4 == 3) {

		sketch.stroke (255,128,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,600,600);

		sketch.stroke (255,0,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,550,550);

		sketch.stroke (127,0,255);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,500,500);

		sketch.stroke (0,0,153);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,400,400);

		sketch.stroke (0,140,140);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,400,400);

		sketch.stroke (255,255,0);
	sketch.strokeWeight(50);
	sketch.noFill();
	sketch.ellipse(570,385,350,350);

		sketch.stroke (255);
	sketch.strokeWeight(25);
	sketch.noFill();
	sketch.ellipse(570,385,300,300);
	}
}