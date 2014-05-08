function drawDots(sketch, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15) {

		if(sketch.frameCount % 2 == 0) {
			p1x = sketch.random(1280);
			p1y = sketch.random(720);
			p2x = sketch.random(1280);
			p2y = sketch.random(720);
			p3x = sketch.random(1280);
			p3y = sketch.random(720);
			p4x = sketch.random(1280);
			p4y = sketch.random(720);
			p5x = sketch.random(1280);
			p5y = sketch.random(720);
			p6x = sketch.random(1280);
			p6y = sketch.random(720);
			p7x = sketch.random(1280);
			p7y = sketch.random(720);
			p8x = sketch.random(1280);
			p8y = sketch.random(720);
			p9x = sketch.random(1280);
			p9y = sketch.random(720);
			p10x = sketch.random(1280);
			p10y = sketch.random(720);
			p11x = sketch.random(1280);
			p11y = sketch.random(720);
			p12x = sketch.random(1280);
			p12y = sketch.random(720);
			p13x = sketch.random(1280);
			p13y = sketch.random(720);
			p14x = sketch.random(1280);
			p14y = sketch.random(720);
			p15x = sketch.random(1280);
			p15y = sketch.random(720);			
		}

		sketch.image(p1, p1x, p1y);
		sketch.image(p2, p2x, p2y);
		sketch.image(p3, p3x, p3y);
		sketch.image(p4, p4x, p4y);
		sketch.image(p5, p5x, p5y);
		sketch.image(p6, p6x, p6y);
		sketch.image(p7, p7x, p7y);
		sketch.image(p8, p8x, p8y);
		sketch.image(p9, p9x, p9y);
		sketch.image(p10, p10x, p10y);
		sketch.image(p11, p11x, p11y);
		sketch.image(p12, p12x, p12y);
		sketch.image(p13, p13x, p13y);
		sketch.image(p14, p14x, p14y);
		sketch.image(p15, p15x, p15y);		
	}
