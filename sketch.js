function setup() { 
  createCanvas(windowWidth, windowHeight); 
}
 function draw() {
   rectMode(CENTER) 
   background(0)
    noFill() 
    var w= mouseX/10
    for(var j=0;j<height/50;j++) 
    { 
      for(var i=0;i<width/50;i++)
       {
      stroke("#457b9d")
       ellipse(25+50*i,25+50*j,mouseX/10) 
       stroke("#f1faee")
       rect(25+50*i,25+50*j,mouseY/9) 
       stroke("#e63946")
       ellipse(50+50*i,50+50*j,mouseY/6)
 }
 }
 }