function countMoves(numbers) {
  let count = 0;

  let looping = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
      arr[i] += 1;
    }
    console.log(arr);
  };

  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] != numbers[i + 1]) {
      for (let j = 0; j < numbers.length; j++) {
        looping(numbers);
        count++;
      }
    }
  }
  return count;
}

console.log(countMoves([3, 4, 6, 6, 3]));
