function evenOrOdd(number){
    if(number%2 == 0){
    let string = "This number is even";
    return string; 
    }
else{
    let string = "This number is NOT even";
    return string;
    }
}
let array =[2,4,6,7,2,45,8,23,6];

for(let i = 0; i<6; i++){
    let result = evenOrOdd(i);
    console.log(array[i],result)
}




// let user_arg = parseInt(process.arg[2]);
// let result = evenOrOdd(user_arg);

// console.log(result);