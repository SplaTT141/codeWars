function arrayMadness(a, b) {
  let sum1 = 0;
  for (const n of a) {
    sum1 += n ** 2;
  }

  let sum2 = 0;
  for (const n of b) {
    sum2 += n ** 3;
  }

  return sum1 > sum2;
}
//
const arrayMadness2 = (a, b) =>
  a.reduce((acc, x) => acc + x ** 2, 0) > b.reduce((acc, x) => acc + x ** 3, 0);
//
function arrayMadness3(a, b) {
  return (
    a.reduce((sum, el) => sum + el ** 2, 0) >
    b.reduce((sum, el) => sum + el ** 3, 0)
  );
}

console.log(arrayMadness2([4, 5, 6], [1, 2, 3]));
console.log(arrayMadness2([5, 6, 7], [4, 5, 6]));
console.log(arrayMadness2([4, 5, 6], [3, 4, 5]));
