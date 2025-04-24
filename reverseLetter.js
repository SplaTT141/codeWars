const reverseLetter = str => str.split('').reverse().toString().replaceAll(/[^a-z]/ig, '');
//
const reverseLetter2 = (s) => s.replace(/[^a-z]/gi, '').split('').reverse().join('');
//
function reverseLetter2(str) {
    return str.split('')
        .reverse()
        .filter(val => /[a-zA-Z]/.test(val))
        .join('');
}

console.log(reverseLetter("krishan"), "nahsirk")
console.log(reverseLetter("ultr53o?n"), "nortlu")
console.log(reverseLetter("ab23c"), "cba")
console.log(reverseLetter("krish21an"), "nahsirk")