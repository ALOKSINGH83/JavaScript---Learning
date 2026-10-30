let inp = document.querySelector("input");
let btn = document.querySelector("button");

inp.addEventListener("keydown", function(event) {
    console.log("Code =", event.code);
    if(event.code == "ArrowUp") {
        console.log("Character moved forward");
    } else if (event.code == "ArrowDown") {
        console.log("Character moved backward");
    } else if (event.code == "ArrowLeft") {
        console.log("Character moved left");
    } else if (event.code == "ArrowRight") {
        console.log("Character moved right");
    };
});