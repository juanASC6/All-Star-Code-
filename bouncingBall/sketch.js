let x = 0; 
let y = 0;
let Xvelocity = 10
let Yvelocity = 5

function setup() {
    createCanvas(600,600);
    fill(255,255,255);
}

function draw(){
    x += Xvelocity
    y += Yvelocity
    background(17, 49, 99);
    ellipse(x,y,10,10)
    if(x<0 || x>600){
        Xvelocity = -Xvelocity;
    }
    if(y<0 || y>600){
        Yvelocity = -Yvelocity;
    }
}

if(x >= 600){
    console.log(x);
}