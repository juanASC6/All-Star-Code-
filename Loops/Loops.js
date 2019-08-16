//let foods = ["Burgers", "Fries", "Arepas", "burritos", "chicken", "pizza"];
//console.log();

// for (let i=0; i<foods.length; i++){
//     console.log(foods[i]);
// }


// for every i in foods
//for ( const i of foods ){ 
    //execute code 
    //console.log(i);
// }

// let line = ""
// for(let i=0; i<=8; i++){
//     line+="*";
// }

let line = ""
for(let i=0; i<=8; i++){
    for(let j = i; j<=8; j++){
        line+="*";
    }
    console.log(line);
    line = "";
}