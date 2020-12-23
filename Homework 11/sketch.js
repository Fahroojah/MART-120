    var x = 50;
    var y = 50;
    var diameter = 25;


    var mousex = 0;
    var mousey = 0;


  var w =87;
  var s =83;
  var a =65;
  var d= 68;

  var rect1X = 400;
  var rect1Y = 100;
  var rect2X = 200;
  var rect2Y = 100;
  
  var movement = 5
  var movementrandom =Math.floor(Math.random() * 10);
  
    function setup() 
    {
      createCanvas(800, 400);
    }

    function draw() 
    {
      
      background(120,150,150);
      // top border
      rect(0,0,width,10);
      //left border
      rect(0,0,10,height);
      //bottom-border
      rect(0,height-10,width,10);
      //right upper border
      rect(width-10,0,10,height-50);
      
      // 1st rectangle "rect1"
        rect(rect1X,rect1Y,20,150);
      if(rect1Y >= 250 || rect1Y <= 0)
        {
       movement *= -1;
    }

     rect1Y += movement;

    
      // 2nd rectangle "rect2"

      rect(rect2X,rect2Y,20,150);
       if(rect2Y >= 250 || rect2Y <= 0)
        {
       movementrandom *= -1;
    }

     rect2Y += movementrandom;
      
      textSize(16);
      text("Run away! ->>", width-120,height-20);
      //'character circle'
      fill(0, 15, 89);
      circle(x, y, diameter);
   
 
// movement
      
      if (keyIsDown(s)) 
      {
        y += 10;
      } 
      else if (keyIsDown(w)) 
      {
        y -= 10;
      }
      else if (keyIsDown(a))
  
        x -= 10;
      
      else if (keyIsDown(d))
        x += 10;
   
      
      if (diameter <= 50) 
      {
        diameter += .25;
      } 
      else if (diameter >= 50) 
      {
        diameter = -50;
      }
      
   if(x >= width && y >= width-80)
     
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
      
    }