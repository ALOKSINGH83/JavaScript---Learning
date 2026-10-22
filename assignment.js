//QUESTION 1
let random = Math.floor( Math.random() * 6 ) + 1;
console.log(random);


//QUESTION 2
const garage = {
    car: {
        name: "Rolls Royce",
        model: "Phantom",
        color: "Black"
    }
}

console.log(garage.car.name);


//QUESTION 3
const person = {
    A: {
        name: "Robert",
        age: "28",
        city: "Paris"
    }
}
person.A.city = "New York";
person.A.country = "United States";

console.log(person.A);