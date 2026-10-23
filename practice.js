let greet = "hello";  //Global Scope

function outerGreet() {
    let greet = "namaste";
    console.log(greet); //Function Scope
    function innerGreet() {
        console.log(greet);  //Lexical Scope
    }
    innerGreet();
}

console.log(greet);
outerGreet();