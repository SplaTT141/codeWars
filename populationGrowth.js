//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
// p0 - population
// percent - % population growth
// aug - population income 
// p - expected population

function nbYear(p0, percent, aug, p) {

    for (let years = 0; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}
//
function nbYear2(p0, percent, aug, p) {
    let count = 0;
    while (p0 < p) {
        p0 = Math.floor((1 + percent / 100) * p0 + aug);
        count++
    }
    return count;
}
console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
console.log(nbYear(1000, 2.0, 50, 1214), 4, "Did you maybe forgot to round down population at the end of each year?");