let img = document.getElementById("first");
img.remove();

let newImg = document.createElement("img");
let mainContainer = document.querySelector(".main-container");

mainContainer.appendChild(newImg);
newImg.src = "assets/cry.png";