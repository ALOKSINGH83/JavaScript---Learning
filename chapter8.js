//Every
let arr = [1,2,3,7,8,12,45,67,91,47,54,61];

let maxVal = arr.reduce( (max, el) => {
    if (el>max){
        return el;
    }
    else {
        return max;
    }
});

console.log(maxVal);