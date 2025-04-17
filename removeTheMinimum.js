function removeSmallest(numbers) {
    const minIndex = numbers.indexOf(Math.min(...numbers))
    numbers.splice(minIndex, 1)

    return numbers;
}

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
console.log(removeSmallest([2, 2, 1, 2, 1, 2]), [2, 2, 2, 1, 2]);
console.log(removeSmallest([]), []);

