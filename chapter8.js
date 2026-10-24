//Every
let arr = [1,2,3,4,5];

let val = arr.every( (el) => {
    return el%2 == 0;
});
console.log(val);

//Some
let arr1 = [1,2,3,4,5,6];

let val1 = arr.some( (el) => {
    return el%2 != 0;
});
console.log(val1);