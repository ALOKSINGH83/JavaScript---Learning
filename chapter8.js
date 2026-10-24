// let arr = [1, 2, 3, 4, 5];

// let triple = arr.map ( (el) => {
//     return el*3;
// }
// );

// console.log(triple);

let num = [1,2,4,1,5,6,2,7,8,9,11,14,13,16];

let even = num.filter( (el) => {
    return el % 2 == 0;
});

console.log(even);