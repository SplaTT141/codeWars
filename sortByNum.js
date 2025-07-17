//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words) {
    return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}
//
function order2(words) {
    return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "", "empty input should return empty string")

