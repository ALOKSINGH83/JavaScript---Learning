function hello() {
    console.log("Hello!!");
}

function printName() {
    console.log("Alok singh");
    console.log("Apna college");
}

function print1to5() {
    for (let i = 1; i<=5; i++){
        console.log(i);
    }
}

function isAdult() {
    let age = 19;
    if( age >= 18){
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
}

hello();

printName();

print1to5();

isAdult();