

document.getElementById("item_img").addEventListener("click", display);

function display(){
    let name = document.querySelector('h1');

    name.innerHTML = "FrostFang"; 
    
    let img = document.getElementById("item_img");
    
    img.src= "assets/Frostfang_item.png";
}