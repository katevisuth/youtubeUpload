//To ask people to allow webcam access
// window.alert("Hello! Please allow access from the menu above!");

////////////////////////////////////////////////////////////////////////////

//Create "var mySketch" to avoid conflict of using P5 with other libraries
//Declare global variables

var mySketch = function(sketch) {

  //Image
  var bgnew;
  var introImage;
  var startVDOButton;
  
  //Audio
  var song;
  
  //Webcam & Animation
  var videoInput;
  
  //Headtrackr
  var x,y,w,h;
  var cow;
  
  //VDO
  var pop1;
  var pop2;
  var pop3;
  var pop4;
  var pop5;
  
  //boolean for setTimeout
  var transition;
  var rainbowCircle;
  var fillDots;
  var showCow;

  //drawDots.js variables
  var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15;
  var p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y, p5x, p5y, p6x, p6y, p7x, p7y, p8x, p8y,
  p9x, p9y, p10x, p10y, p11x, p11y, p12x, p12, p13x, p13y, p14x, p14y, p15x, p15y;

  //drawRainbowCircle.js
  var lastTime = 0;

////////////////////////////////////////////////////////////////////////////

sketch.preload = function() {
  background =  sketch.loadImage('media/img/background.png');    
  introImage =  sketch.loadImage('media/img/intro1.jpg');
  startVDOButton =  sketch.loadImage('media/img/startVDObutton.png');
  song = new buzz.sound('media/song/song.wav');
  cow = sketch.loadImage('media/img/cow/cow.png');

    //fillme.js load images
  p1 = sketch.loadImage("media/img/dots/purple1.png");
  p2 = sketch.loadImage("media/img/dots/purple2.png");
  p3 = sketch.loadImage("media/img/dots/purple3.png");
  p4 = sketch.loadImage("media/img/dots/red1.png");
  p5 = sketch.loadImage("media/img/dots/red2.png");
  p6 = sketch.loadImage("media/img/dots/red3.png");
  p7 = sketch.loadImage("media/img/dots/blue1.png");
  p8 = sketch.loadImage("media/img/dots/blue2.png");
  p9 = sketch.loadImage("media/img/dots/blue3.png");
  p10 = sketch.loadImage("media/img/dots/green1.png");
  p11 = sketch.loadImage("media/img/dots/green2.png");
  p12 = sketch.loadImage("media/img/dots/green3.png");
  p13 = sketch.loadImage("media/img/dots/yellow1.png");
  p14 = sketch.loadImage("media/img/dots/yellow2.png");
  p15 = sketch.loadImage("media/img/dots/yellow3.png");
  }

////////////////////////////////////////////////////////////////////////////

    //Global Setup 
    sketch.setup = function() {

      //Create a popcorn instance by calling Popcorn("#id-of-my-video")
      pop1 = Popcorn("#video1");
      pop2 = Popcorn("#video2");
      pop3 = Popcorn("#video3");
      pop4 = Popcorn("#video4");
      pop5 = Popcorn("#video5");

      //Make the VDOs disappear after ended
      pop1.on('play',function(){
        document.getElementById('video1').style.display = 'inline';
      });

      pop2.on('play',function(){
        document.getElementById('video2').style.display = 'inline';
      });

      pop3.on('play',function(){
        document.getElementById('video3').style.display = 'inline';
      });

      pop4.on('play',function(){
        document.getElementById('video4').style.display = 'inline';
      });

      pop5.on('play',function(){
        document.getElementById('video5').style.display = 'inline';
      });      

      //Make the VDOs disappear after ended
      pop1.on('ended',function(){
        document.getElementById('video1').style.display = 'none';
      });

      pop2.on('ended',function(){
        document.getElementById('video2').style.display = 'none';
      });

      pop3.on('ended',function(){
        document.getElementById('video3').style.display = 'none';
      });

      pop4.on('ended',function(){
        document.getElementById('video4').style.display = 'none';
      });

      pop5.on('ended',function(){
        document.getElementById('video5').style.display = 'none';
      });

      var c = sketch.createCanvas(1280, 720);
      c.position(0, 0);
      sketch.noStroke();
      sketch.fill(0);

      //Webcam Setup
      videoInput = document.getElementById('inputVideo');
      var canvasInput = document.getElementById('inputCanvas');

      //Headtrackr Setup
      var htracker = new headtrackr.Tracker({ui: false});
      htracker.init(videoInput, canvasInput);
      htracker.start();

      //Set up for Popcorn
      context = c.elt.getContext('2d');
      // context.scale(-1, 1);

      //drawFace() is a callback for when facetracker finds the face
      document.addEventListener('facetrackingEvent', 
        function (event) {  
          drawFace(event.x, event.y, 300, 300);
        });

      //Set up for circle
      lastTime = sketch.millis(); 

      //Start playing the song when the page loaded with a delay
      setTimeout(function() { song.play(); }, 1000);

      //START ANIMATIONS!
      //countdown
      setTimeout(function() {pop1.play();}, 0);

      //flickering screen
      setTimeout(function() {transition=true;}, 3500);
      setTimeout(function() {transition=false;}, 11000);

      //rainbow circle
      setTimeout(function() {rainbowCircle=true;}, 12000);
      setTimeout(function() {rainbowCircle=false;}, 23000);

      //man (play 3 times)
      setTimeout(function() {pop2.play();}, 16500);

      //This is to re-run the VDO... add .load();
      setTimeout(function() {
        pop2.load();
        pop2.play();
      }, 16900);

      setTimeout(function() {
        pop2.load();
        pop2.play();
        console.log("3");
      }, 17300);

      //lady
      setTimeout(function() {pop3.play();}, 23000);

      //random polka dots
      setTimeout(function() {fillDots = true;}, 25000);
      setTimeout(function() {fillDots = false;}, 38000);

      //corn
      setTimeout(function() {pop4.play();}, 38000);

      setTimeout(function() {
        pop4.load();
        pop4.play();
      }, 39000);      

      //cow animation
      setTimeout(function() {pop5.play();}, 40000);

      setTimeout(function() {
        pop5.load();
        pop5.play();
      }, 41000);  

      //cow facetracker
      setTimeout(function() {showCow = true;}, 41000);
      setTimeout(function() {showCow = false;}, 58000);
      
    };

////////////////////////////////////////////////////////////////////////////

sketch.draw = function() {
  sketch.clear();

      //To create a video object! Without these codes the VDOs are still running... 
      //but will not be recorded as the VDOs are not in p5canvas.
      //change VDOs size and position here
      var vid1 = document.getElementById('video1');
      context.drawImage(vid1, 265, 180, 601, 412); 
      var vid2 = document.getElementById('video2');
      context.drawImage(vid2, 265, 180, 601, 412); 
      var vid3 = document.getElementById('video3');
      context.drawImage(vid3, 265, 180, 601, 412);
      var vid4 = document.getElementById('video4');
      context.drawImage(vid4, 265, 180, 601, 412); 
      var vid5 = document.getElementById('video5');
      context.drawImage(vid5, 265, 180, 601, 412);  

      //change webcam size and position here
      context.drawImage(videoInput, 265, 180, 601, 412); 

      ////////// Start Animations //////////////   

      //(happens after ellipse)
      if(transition) {
        drawTransition(sketch);
      }

      if (rainbowCircle) {
        drawRainbowCircle(sketch);
      } 

      if(showCow) { 
        sketch.fill(255,0,0);
        sketch.image(cow, x+300, y+180, 300, 300);
      }

      if (fillDots) {
        drawDots(sketch, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15);
      }

      sketch.image(background, 0, 0);         
    };

////////////////////////////////////////////////////////////////////////////

    // Taking the face data and copying over to global variables
    // This will only work for one face
    function drawFace(_x, _y, _w, _h) {
      x = _x;
      y = _y;
      w = _w;
      h = _h;
    }
  };

////////////////////////////////////////////////////////////////////////////

var myp5 = new p5(mySketch, "p5canvas");

////////////////////////////////////////////////////////////////////////////
