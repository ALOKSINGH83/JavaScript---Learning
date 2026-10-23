let sum = 20; //Global Scope

function getSum(a,b){
    let sum = a+b;  //Function Scope
    console.log(sum);
}

getSum(2,3);