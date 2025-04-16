function noBoringZeros(n) {
  return Number(n.toString().replace(/0+$/, "")); // 0+$ ->
} // 0 - tai ka mes norime pakeisti
//                                                // + - reiskia, kad turim pakeisti daugiau nei viena nuloi
function noBoringZeros2(n) {
  // $ - nurodo, kad 0 ieskosime stringo gale
  while (n % 10 === 0 && n !== 0) {
    n /= 10;
  }
  return n;
}
//
function noBoringZeros3(n) {
  return +`${n}`.replace(/0*$/, ""); // + perdaro is string i number
}

console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(105), 105);
console.log(noBoringZeros(96000), 96);
console.log(noBoringZeros(0), 0);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
