let names = ["tony", "steve", "bruce", "clint", "xyz", "abc", "pqr", "mno"];
let [winner, runnerUp, secondRunnerUp, ...others] = names;

console.log(winner);
console.log(runnerUp);
console.log(secondRunnerUp);
console.log(others);