function friend(friends) {
    let realFriends = [];

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            realFriends.push(friends[i]);
        }
    }
    return realFriends
}
//
function friend2(friends) {
    return friends.filter(n => n.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])