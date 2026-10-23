let age = 20; //Global Scope

for (i=1; i<=5; i++){
    console.log(i); //Block Scope
}

if (age>=18){
    console.log("Adult");
}
else {
    console.log("Not Adult");
}