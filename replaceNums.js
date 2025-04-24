function fakeBin(x) {
    return x.replaceAll('1', '0').replaceAll('2', '0').replaceAll('3', '0').replaceAll('4', '0').replaceAll('5', '1')
        .replaceAll('6', '1').replaceAll('7', '1').replaceAll('8', '1').replaceAll('9', '1')
}
//
function fakeBin2(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
//
function fakeBin3(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}
//
function fakeBin4(x) {
    return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1")
}
console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
