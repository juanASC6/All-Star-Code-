var shipx = 300;
var bullet = false;
var bulletY= 625;
var bulletX= shipx;
var invaders= [];
var rows = 8;
var cols = 8;

for(var i =0; i< rows; i++){
  invaders.push([]);
  for(var j = 0; j< cols; j++){
      invaders[i].push(0);
  }
}

function setup(){
  createCanvas(700,700);
  frameRate(120);
  background(0,0,0);
}

function init(){
  var x = 100;

  for(var i =0; i<rows; i++){
    var y = 30;
    for(var j =0; j<cols; j++){
        if(invaders[j][i]== 0){
          fill(0,255,0);
          rect(x,y,50,50);
          if(bullet== true && y< bulletY && bulletY< y+50 && x<bulletX && bulletX<x+50){
            invaders[j][i]=1;
            bullet= false;
            bulletY= 625;
            bulletX= shipx;
          }
        }
        y+=60;
      }
      x+=70;
    }
}

function keyPressed(){
  if(keyCode=== LEFT_ARROW){
    shipx-=10;
    if(shipx<30){
      shipx=40;
    }
  }
  if(keyCode=== RIGHT_ARROW){
    shipx+=10;
    if(shipx>690){
      shipx=690;
    }
  }
  if(keyCode=== 32){
    bullet= true;
  }   
}

function draw(){
  background(0,0,0);
  // same as boouncing ball
  fill(122,122,122);
  rect(shipx,660,40,20);
  init();

  if(bullet==true){
    
    fill(255,255,255);
    rect(bulletX,bulletY,10,15);
    bulletY-=15;

    if(bulletY<30){
      bullet=false;
      bulletY=625;
      bulletX=shipx;
    }

  }


}

