//QUESTION 1
let arr = [4,5,6,1,3,2,9,8,7];
function arrayAverage(arr) {
    let sum = 0;
    let arrLen = arr.length;
    for(let i=0;i<arr.length;i++) {
        sum += arr[i];
    };
    //return sum;
    let avg = (sum / arrLen);
    return avg;
};
console.log(arrayAverage(arr));