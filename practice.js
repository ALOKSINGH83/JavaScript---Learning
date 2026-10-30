//(i)
let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";

document.querySelector("body").append(para1);

//(ii)
let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
h3.style.color = "blue";

document.querySelector("body").append(h3);

//(iii)
let div = document.createElement('div');
div.style.backgroundColor = "pink";
div.style.borderColor = "black";
document.querySelector("body").append(div);

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
let para2 = document.createElement('p');
para2.innerText = "ME TOO!";

div.appendChild(h1);
div.appendChild(para2);
