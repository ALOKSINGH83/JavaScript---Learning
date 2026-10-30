let p = document.querySelector("p");
let inp = document.querySelector("#user")

user.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
});