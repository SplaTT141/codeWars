// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {

    let otherCount = 0

    if (names.length === 0) {
        return 'no one likes this';
    }
    if (names.length === 1) {
        return `${names[0]} likes this`
    }
    if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    }
    if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    for (let i = 0; i < names.length; i++) {
        otherCount++
    }
    if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${otherCount - 2} others like this`
    }
}
//
function likes2(names) {
    names = names || [];
    switch (names.length) {
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}
//
function likes(names) {
    var templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);

    return templates[idx].replace(/{name}|{n}/g, function (val) {
        return val === '{name}' ? names.shift() : names.length;
    });
}

console.log(likes([]), '--- no one likes this');
console.log(likes(['Peter']), '--- Peter likes this');
console.log(likes(['Jacob', 'Alex']), '--- Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), '--- Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), '--- Alex, Jacob and 2 others like this');
