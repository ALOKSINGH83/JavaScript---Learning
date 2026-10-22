//QUESTION 3
let num = prompt("Enter your number : ");
let sum = 0;
let copy = num;

while( copy > 0){
    digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy/10);
}

console.log(sum);