//QUESTION 1
const sqr = (n) => (n*n);
console.log(sqr(6));

//QUESTION 2
let id = setInterval( function() {
    console.log("Hello");
}, 2000);

setTimeout ( () => {
    clearInterval(id);
    console.log("Clear Interval ran");
}, 10000);