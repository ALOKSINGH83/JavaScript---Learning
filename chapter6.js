function multipleGreet(func, count) {  //Higher order function
    for (let i=1; i<=count; i++){
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(greet, 45);