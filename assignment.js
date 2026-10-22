//QUESTION 4
let n = prompt("Enter the number to get factorial");
let fact = 1;

for ( let i=1; i<=n; i++ ){
    fact = fact * i;
}
console.log(`Factorial of ${n} is : ${fact}`);