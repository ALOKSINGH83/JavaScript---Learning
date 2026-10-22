const classInfo = [
    {
        grade: "A+",
        city: "Delhi"
    },
    {
        grade: "A",
        city: "Pune"
    },
    {
        grade: "B",
        city: "Mumbai"
    }
];

console.log(classInfo);
console.log(classInfo[0].city);
console.log(classInfo[1].grade);
console.log(classInfo[2]);
classInfo[2].city = "Agra";
classInfo[2].gender = "Male";
console.log(classInfo[2]);