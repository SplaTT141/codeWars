function isOpposite(s1, s2) {
    if (s1.length === 0 || s2.length === 0) {
        return false
    }

    if (s1.length !== s2.length) {
        return false
    }

    let count = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i].charCodeAt() <= 90 && s2[i].charCodeAt() >= 97) {
            count++
        }
        if (s1[i].charCodeAt() >= 97 && s2[i].charCodeAt() <= 90) {
            count++
        }
    }

    if (count === s1.length) {
        return true;
    } else {
        return false;
    }
}
//
function isOpposite2(s1, s2) {
    if (s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;

    for (var i = 0; i < s1.length; i++) {
        if (s1.charAt(i) === s2.charAt(i)) return false;
    }

    return true;

}
//
function isOpposite3(s1, s2) {
    return s1.split('')
        .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
        .join('') === s2 && s1 !== '';

}
//
function isOpposite4(s1, s2) {
    return s1 != '' && s1 == s2.replace(/./g, ch => ch['to' + (ch <= 'Z' ? 'Lower' : 'Upper') + 'Case']())
}

console.log(isOpposite("ab", "AB"), true);
console.log(isOpposite("aB", "Ab"), true);
console.log(isOpposite("aBcd", "AbCD"), true);
console.log(isOpposite("aBcde", "AbCD"), false);
console.log(isOpposite("", ""), false);
console.log(isOpposite("AB", "Ab"), false);