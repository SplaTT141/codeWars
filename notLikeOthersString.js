const findUniq = arr => {
    const sample1 = arrSorter(arr[0]);
    const sample2 = arrSorter(arr[1]);
    const sample3 = arrSorter(arr[2]);
    if (sample1 === sample2) {
        return arr.find(word => arrSorter(word) !== sample1)
    };
    if (sample1 === sample3) {
        return arr[1];
    };
    return arr[0];
};
const arrSorter = x => [...new Set([...x.toLowerCase()].sort())].join('');

console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb');
console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
console.log(findUniq(['silvia', 'vasili', 'victor']), 'victor');
console.log(findUniq(['    ', 'a', ' ']), 'a');
console.log(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');
