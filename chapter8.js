//Every
let arr = [1,2,3,7,8,12,45,67,91,47,54,61];

let reduced = arr.reduce( (res, el) => {
    return res+el;
});
console.log(reduced);