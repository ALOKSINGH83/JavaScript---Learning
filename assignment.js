//QUESTION 4
let arr = [2,3,5,4,9,6,1,8,7];

const doubleAndReturnArgs = (arr, ...args) => [
...arr,
...args.map((v) => v*2),
];

console.log(doubleAndReturnArgs(arr, 13, 15, 11, 9, 8));