function smallEnough(a, limit) {
    let smallerNumCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            smallerNumCount++;
        }
    }

    return !smallerNumCount ? true : false;
}

function smallEnough2(a, limit) {
    console.log(Math.max(...a));
    return Math.max(...a) <= limit
}

console.log(smallEnough2([66, 101], 200), true);
console.log(smallEnough2([66, 101, 201], 200), false);
console.log(smallEnough2([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough2([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough2([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
