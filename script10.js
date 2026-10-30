let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
let btn = document.querySelector("button");

function useThis() {
    console.dir(this.innerText);
    this.style.backgroundColor = "gray";
};

btn.addEventListener("click", useThis);
h1.addEventListener("click", useThis);
h3.addEventListener("click", useThis);
p.addEventListener("click", useThis);