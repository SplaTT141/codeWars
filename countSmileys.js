// Count the smiley faces!
// :) :D ;-D :~)
// turim suskaiciuoti kiek masyve sypseneles kurios atitinka tam tikrus kriterijus:
// akys turi buti ( : arba ; )
// nosi turi buti ( - arba ~ ) su ta salyga jeigu sypsenele isvis turi nosi
// burna turi buti ( ) arba D )

function countSmileys(arr) {
  const regex = /^[:;][-~]?[)D]$/;
  return arr.filter(face => regex.test(face)).length;
}
//
function countSmileys2(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
//
function countSmileys3(arr) {
  let smileys = [":)", ";)", ":-)", ";-)", ";~)", ":~)", ":D", ";D", ":-D", ":~D", ";-D", ";~D"];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < smileys.length; j++) {
      if (arr[i] === smileys[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(countSmileys([":-)", ";~D", ":-D", ":_D"]), 3);
console.log(countSmileys([";(", ":)", ":oD", ";~(", ";-D", ":-D", ";>"]), 3);
console.log(countSmileys([":->", ";>", ":)", ":(", ";-)", ";oD", ";("]), 2);
console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
console.log(countSmileys([":)", ";(", ";}", ":-D"]), 2);
