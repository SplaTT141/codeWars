//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(s) {
    let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}
//
function high2(s) {
    let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}
//
function high3(x) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const words = x.split(' ')
    const scores = words.map(x => [...x].map(y => alpha.indexOf(y) + 1)).map(x => x.reduce((a, b) => a + b, 0))

    return words[scores.indexOf(Math.max(...scores))]
}



console.log(high('man i need a taxi up to ubud'), '-- taxi');
console.log(high('what time are we climbing up the volcano'), '-- volcano');
console.log(high('take me to semynak'), '-- semynak');
console.log(high('aa b'), '-- aa');
console.log(high('b aa'), '-- b');
console.log(high('bb d'), '-- bb');
console.log(high('d bb'), '-- d');
console.log(high('aaa b'), '-- aaa');
