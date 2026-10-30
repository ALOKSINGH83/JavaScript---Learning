let form = document.querySelector("form");

form.addEventListener( "submit", function(event) {
    event.preventDefault();
});

let user = document.querySelector("input")

user.addEventListener("input", function() {
    console.log("input changed");
    console.log("final value: ",this.value);
});

user.addEventListener("change", function() {
    console.log("change event");
    console.log("final value: ",this.value);
});