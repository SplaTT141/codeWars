function findUniq(arr) {

    if (arr[0] !== arr[1] && arr[1] === arr[2]) {
        return arr[0];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            return arr[i + 1];
        }
    }
}
//

function findUniq2(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}
//

function findUniq3(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}


console.log(findUniq2([1, 0, 0]), 1);
console.log(findUniq2([0, 1, 0]), 1);
console.log(findUniq2([0, 0, 1]), 1);
console.log(findUniq2([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq2([1, 1, 2, 1, 1]), 2);
console.log(findUniq2([3, 10, 3, 3, 3]), 10);