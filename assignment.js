//QUESTION 2
let n = prompt("Enter your number:");
let isEven = (n) => {
    if(n%2 == 0){
        console.log(`${n} is even`);
    }
    else {
        console.log(`${n} is not even`);
    }
};

isEven(n);