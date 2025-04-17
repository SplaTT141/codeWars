function strCount(str, letter) {
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count
}
//
function strCount2(str, letter) {
    return str.split(letter).length - 1
}
// hello -> [hell, ''] -> 2-1 = 1
// kitoks -> [ki, oks] -> 2-1 = 1
//
function strCount3(str, letter) {
    return str.split('').filter(c => c === letter).length;
}
//
const strCount4 = (str, letter) => --str.split(letter).length;
//
function strCount5(str, letter) {
    let count = 0;

    [...str].forEach(char => char === letter ? count++ : count);
    // [...str] = 'str'.split('')
    return count;
}

console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0)