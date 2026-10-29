//QUESTION 1
let arr = [1,2,3,4,5,6,7,8,9];

let square = arr.map((el) => el*el);

let sum = arr.reduce( (res, el) => {return res+=el});

let average = sum / arr.length;

console.log(arr);
console.log(square);
console.log(sum);
console.log(average);