const student = {
    name: "alok",
    age: 21,
    marks: 92,
    username: "@alok123",
    password: 123,
};

let {username: user, password, city = "Mumbai"} = student;
console.log(user);
console.log(password);
console.log(city);