// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

function capitals(word) {
    let upperCaseLettersIndex = []

    for (let i = 0; i < word.length; i++) {
        if (word[i].fromCharCode >= 65) {
            upperCaseLettersIndex.push(word[i])
        }
    }
    return upperCaseLettersIndex;
};

//65(a)-90(z)


console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
console.log(capitals('aAbB'), [1, 3]);
console.log(capitals('AAA'), [0, 1, 2]);
console.log(capitals(''), []);
