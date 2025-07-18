function findUniq(arr) {

    function findIndex(index) {
        arr.forEach((el, i, a) => {
            a[i] = el.split('').sort().join('').toLowerCase();
        });

        for (let i = 0; i < arr.length; i++) {

        }
    }

    arr.forEach((el, i, a) => {
        a[i] = el.split('').sort().join('').toLowerCase();
    });

    return arr;
}

console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb');
// console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
console.log(findUniq(['silvia', 'vasili', 'victor']), 'victor');
// console.log(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');
// console.log(findUniq(['    ', 'a', ' ']), 'a');
