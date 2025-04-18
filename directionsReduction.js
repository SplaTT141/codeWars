function dirReduc(arr) {
    let positionX = 0;
    let positionY = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'NORTH') {
            positionY++
        }
        if (arr[i] === 'SOUTH') {
            positionY--
        }
        if (arr[i] === 'EAST') {
            positionX++
        }
        if (arr[i] === 'WEST') {
            positionX--
        }
    }
    return 'donno'
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), '---', ['WEST'])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), '---', ['NORTH', 'WEST', 'SOUTH', 'EAST'])
console.log(dirReduc(["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"]), '---', ['EAST', 'NORTH'])
console.log(dirReduc(["NORTH", "EAST", "NORTH", "EAST", "WEST", "WEST", "EAST", "EAST", "WEST", "SOUTH"]), '---', ['NORTH', 'EAST'])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), '---', [])

//            N
//          W + E
//            S