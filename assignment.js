//QUESTION 1
let arr = [2,3,5,1,4,6,9,7,8,11,14,13,17,10,19];
function largeElement(arr) {
    let largest = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        };
    };
    return largest;
};
console.log(largeElement(arr));