//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

const squareDigits = num => +num.toString().split('').map(Number).map(x => x * x).join('');
//
function squareDigits2(num) {
    return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
}


console.log(squareDigits(2112), 4114);
console.log(squareDigits(3212), 9414);
console.log(squareDigits(0), 0);