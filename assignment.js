//QUESTION 5
let start = 31;
let end = 67;

function randomNumber(start, end){
    let diff = end - start;
    let num = Math.floor( Math.random()*diff ) + start;
    return num;
};
console.log(randomNumber(start, end));