let btn = document.querySelector('button');
console.dir(btn);

//btn.onclick = function() {
//    console.log("Button is clicked");
//};

function sayHello() {
    console.log("Hello!!");
};

btn.onclick = sayHello;