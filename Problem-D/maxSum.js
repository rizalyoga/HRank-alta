function maxSum(arr) {
  let sort = arr.sort((a, b) => a - b);
  console.log(sort);

  let result = [];
  let max = 0;

  for (let i = 0; i < sort.length; i++) {
    max += sort[i];
    console.log(max);
  }

  console.log(max);
}

console.log(maxSum([4, -1, -2, 1, 3]));
console.log(maxSum([4, 1, 2, 3, 4]));
