let arr = [1, 2, 3, 4, 5];

arr.forEach ( (el) => {
    console.log(el);
});

// let print = arr.forEach ( function(el) {
//     console.log(el)
// });

// console.log(print);

let arr1 = [
    {
        name: "aman",
        marks: 97
    },
    {
        name: "shradha",
        marks: 94
    },
    {
        name: "rajat",
        marks: 91
    }
]

arr1.forEach( (student) => {
    console.log(student.marks);
})