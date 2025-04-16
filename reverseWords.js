function reverseWords(str) {
  let str1 = str.split("");
  let str2 = str1.reverse().join("");
  return str2.split(" ").reverse().toString().replaceAll(",", " ");
}
//
function reverseWords2(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
//
function reverseWords(str) {
  let reversedWord = "";
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + " ";
      reversedWord = "";
    }
  }
  return reversedStr + reversedWord;
}
console.log(reverseWords("apple"), "elppa");
console.log(reverseWords("double  spaces"), "---", "elbuod  secaps");
console.log(reverseWords("  double  spaced  words  "), "  elbuod decaps  sdrow  ");
