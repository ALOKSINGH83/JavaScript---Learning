let btns = document.querySelectorAll('button');
console.dir(btns);

for(btn of btns) {
   btn.onclick = sayHello;
};

function sayHello() {
    console.log("Hello!!");
};