const max = prompt("Enter your range");
const random = Math.floor( Math.random() * max ) + 1;
let guess = prompt("Guess the random number");

while ( true ){
    if (guess == "quit"){
        console.log("User quit the game");
        break;
    }

    if ( guess == random ){
        console.log("Congrats!! You guessed the random number : ", random);
        break;
    }
    else if ( guess < random){
        guess = prompt("Hint: Your guessed number was to small. Try larger number!!");
    }
    else if ( guess > random){
        guess = prompt("Hint: Your guessed number was to large. Try smaller number!!")
    }
}