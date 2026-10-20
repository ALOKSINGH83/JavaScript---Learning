//QUESTION 3
let quarts = 3;
switch(quarts){
    case 1 :
        console.log("Months in Quarter 1 : January, February, March");
        break;
    case 2 :
        console.log("Months in Quarter 2 : April, May, June");
        break;
    case 3 :
        console.log("Months in Quarter 3 : July, August, September");
        break;
    case 4 :
        console.log("Months in Quarter 4 : October, November, December");
        break;
    default :
        console.log("Invalid Quarter");
}

//Question 4
let str = "Amplifier";
if (((str[0]==="A")||(str[0]==="a"))&&(str.length>5)){
    console.log("Good String");
}
else {
    console.log("Bad String");
}