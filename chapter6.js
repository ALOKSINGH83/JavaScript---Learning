function sum(a,b){
    return a+b;
}

let s = sum(18, 45);
console.log(s);

function isAdult(age) {
    if(age>=18){
        return "Adult";
    }
    else {
        return "Not Adult";
    }
}

console.log(isAdult(23));