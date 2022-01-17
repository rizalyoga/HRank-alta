function doubleSize(arr, b) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === b) {
      b = b * 2;
    }
  }

  return b;
}

console.log(doubleSize([1, 1, 2, 2, 3], 1));
console.log(doubleSize([1, 2, 4, 11, 12, 8], 2));
console.log(doubleSize([1, 1, 1], 1));
