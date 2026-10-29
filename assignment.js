//QUESTION 5

const mergeObjects = (obj1, obj2) => (
    {...obj1, ...obj2}
);
console.log(mergeObjects({a: 1, b: 5}, {c: 6, d: 7, e: 9}));