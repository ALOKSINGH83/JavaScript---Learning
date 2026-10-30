let inp = document.querySelector("input");
let btn = document.querySelector("button");

inp.addEventListener("keydown", function(event) {
    console.log("Key =", event.key);
    console.log("Code =", event.code);
    console.log("You pressed the key");
})