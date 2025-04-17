function tripleTrouble(one, two, three) {
    let result = '';

    for (let i = 0; i < one.length; i++) {
        result += one[i] + two[i] + three[i]
    }
    return result;
}
//
const tripleTrouble2 = (a, b, c) => a.split("").map((letter, i) =>
    letter + b[i] + c[i]).join("");


console.log(tripleTrouble2("aaa", "bbb", "ccc"), "abcabcabc");
console.log(tripleTrouble2("aaaaaa", "bbbbbb", "cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble2("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble2("Sea", "urn", "pms"), "Supermans");
console.log(tripleTrouble2("LLh", "euo", "xtr"), "LexLuthor");

console.clear();

const marks = [10, 2, 8, 4, 6];

let sum = [];

for (let i = 0; i < marks.length; i++) {
    sum.push(marks[i] * i * marks.length);
}

console.log(sum);

const sum2 = marks.map((item, index, arr) => item * index * arr.length);
console.log(sum2)


