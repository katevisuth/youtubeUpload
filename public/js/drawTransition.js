function drawTransition(sketch) {
  for (var y = 180; y < 585; y += 20) {  
    for (var x = 265; x < 850; x += 20) {
      sketch.fill (180,15,93);
      sketch.noStroke();
      sketch.rect(x, y, 20, 20);

      //Create random colors
      //random "0" and "1" = triangle "left" and "right"   
      var flip = sketch.round(sketch.random(1));   
      var r = sketch.round(sketch.random(0)); 
      var g = sketch.round(sketch.random(169));
      var b = sketch.round(sketch.random(257));

      //Draw left and right triangles then translate them to fit the grid (Now position(0,0))
      sketch.pushMatrix();                       
      sketch.translate(x, y);                    
      sketch.fill(r,g,b);
      sketch.noStroke();        
      //frameRate(20);
      if (flip == 0) { 
        //Draw left triangles                 
        sketch.triangle(10, 0, 0, 10, 10, 20);  
      } else {
        //Draw right triangles
        sketch.triangle(10, 0, 20, 10, 10, 20);   
      }
      sketch.popMatrix();
    }
  }   
}