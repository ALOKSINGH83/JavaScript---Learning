let btns = document.querySelectorAll('button');
console.dir(btns);

for(btn of btns) {
   btn.onclick = sayHello;
   btn.onmouseenter = function () {
    console.log("You entered the button");
   };
};

function sayHello() {
    console.log("Hello!!");
};