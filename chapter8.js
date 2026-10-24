//Spread
let arr = [1,2,3,7,8,10,12,45,30,67,70,91,47,90,54,61];
console.log(...arr);
console.log(Math.min(...arr));

//Spread with array literals
let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8];
let newArr = [...odd];

let finalArr = [...even, ...odd];

console.log(newArr);
console.log(finalArr);