let blue;
let red;

function setup(){
    createCanvas(600,600);
    blue = color(31,141,142);
    red = color(188,65,43);
    fill(blue);
}

function draw(){
    rect(0,0, width/2, height);
    rect(301,0,width/2,height);
}
function mouseClicked(){
    let check = get(110,110);
    if(check[0] == 31 && check[1] == 141 && check[2] == 142){
        fill(red);
    }
else { fill(blue);
    }
}