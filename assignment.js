//QUESTION 1
let arr = [2,3,5,1,4,6,9,7,8,11,14,13,17,10,19];
let num = 5;
function largeElement(arr, num) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        };
    };
};
largeElement(arr, num);