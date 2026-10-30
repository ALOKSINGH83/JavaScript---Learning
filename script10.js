let btns = document.querySelectorAll('button');
console.dir(btns);

for(btn of btns) {
   btn.addEventListener("click", sayHello);
   btn.addEventListener("click", sayName);
//    btn.addEventListener("dblclick", function() {
//     console.log("You double clicked me!!");
//    });
};

function sayHello() {
    alert("Hello!!");
};

function sayName() {
    console.log("Apna College");
};