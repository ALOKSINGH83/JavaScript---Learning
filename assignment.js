//QUESTION 3
let country = ["Australia", "Germany", "United States of America"];

function largeCountry(country){
    let ansIdx = 0;
    for(let i=0;i<country.length;i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        };
    };
    return country[ansIdx];
};
console.log(largeCountry(country));