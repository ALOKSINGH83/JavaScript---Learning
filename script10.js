let box = document.querySelector(".box");
let p = document.querySelector("p");

p.addEventListener("dblclick", function() {
    console.log("You clicked the para.");
});

box.addEventListener("mouseenter", function() {
    console.log("You entered the div");
})