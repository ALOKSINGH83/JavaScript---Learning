//QUESTION 3
let h2 = document.querySelector("h2");
let user = document.querySelector("#user");

user.addEventListener("input", function() {
    console.log(user.value)
    h2.innerText = user.value;
});