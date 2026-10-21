const favMovie = "Doomsday";
let guess = prompt("Enter your favorite movie");

while ((guess != favMovie)){
    if(guess != "quit"){
        console.log("You Quit");
        break;
    }
    guess = prompt("wrong guess!! Try Again!!");
}

if (guess == favMovie){
    console.log("Congratulations!!");
}