// function sum() {
//     return arguments.reduce((add, el) => {
//         return add + el;
//     })
// };
// console.log(sum());

function sum(...args) {
    return args.reduce((add, el) => {
        return add + el;
    })
};
console.log(sum(3, 5, 6, 7));

function minVal(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
    if(min>el){
        return el;
    }
    else {
        return min;
    }
    }
)};
console.log(minVal("hello", 1,8,7,6,5));