//QUESTION 1
let inp = document.createElement("input");
let btn = document.createElement("button");
let body = document.querySelector("body");

body.append(inp);
body.append(btn);
btn.innerText = "Click Me!!";

//QUESTION 2
btn.id = "btn1";
inp.placeholder = "username";

//QUESTION 3
let btn1 = document.querySelector("#btn1");
btn1.style.backgroundColor = "blue";
btn1.style.color = "white";

//QUESTION 4
let h1 = document.createElement("h1");
body.prepend(h1);

h1.innerText = "DOM Practice";
h1.style.color = "purple";
h1.style.textDecoration = "underline";

//QUESTION 5
let p = document.createElement("p");
body.append(p);

p.innerHTML = "Apna College <b>Delta</b> Practice.";