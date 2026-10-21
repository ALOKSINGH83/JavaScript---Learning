const favMovie = "Doomsday";
let guess = prompt("Enter your favorite movie");

while ((guess != favMovie) && (guess != "quit")){
    guess = prompt("wrong guess!! Try Again!!");
}

if (guess == favMovie){
    console.log("Congratulations!!");
}
else {
    console.log("You Quit!!");
}