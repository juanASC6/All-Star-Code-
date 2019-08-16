function mash(){
   return "You will live in a " + getHome() + " and you will have " + getChildrenCount() + " kids! You drive a " + getcar();
}
console.log(mash());

function getHome(){
   let homes = ["Mansion","Apartment","Shack","House", process.argv[2]];
    let randomHome = Math.random() * (homes.length - 0) + 0;
    floor = Math.floor(randomHome); 
    return(homes[floor]);
}
//console.log(getHome()); // getHome() = return 


function getChildrenCount(){
    let approxNumberOfChildren = Math.random() * (100 - 0) + 0;
    let roundedNumberOfChildren = Math.floor(approxNumberOfChildren);
    let kids = [roundedNumberOfChildren, process.argv[3]]
    return (roundedNumberOfChildren)
}

function getcar(){
    let car = ["Toyota","Ford","Tesla","Chevy", process.argv[4]];
     let randomcar = Math.random() * (car.length - 0) + 0;
     floor = Math.floor(randomcar); 
     return(car[floor]);
 }