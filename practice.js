//QUESTION 1
let arr = [1,2,3,7,8,10,12,45,30,67,70,91,47,90,54,61];

let factor = arr.every( (el) => {
    return el%10 == 0;
});
console.log(factor);

//QUESTION 2
let arr1 = [1,2,3,7,8,10,12,44,54,61];

let minVal = arr1.reduce( (min, el) => {
    if(el < min) {
        return el;
    }
    else {
        return min;
    }
});
console.log(minVal);