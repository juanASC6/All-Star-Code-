let prime = parseInt(process.argv[2]);
if(prime > 10){ 
    if(prime%2 == 0) { 
    console.log("not a prime");
    }
   else if(prime%3 == 0){
        console.log("not a prime");
    }
    else if(prime%5 ==0){
        console.log("not a prime");
    }    
    else if (prime%7 ==0){
        console.log("not a prime");
    }     
    else {

    console.log(prime);
    }
}    