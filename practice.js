let str = ["Hi", "Its", "nice", "to", "be", "alone", "sometimes"];
function concat( str ){
    let result = "";
    for (let i=0; i < str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(concat(str));