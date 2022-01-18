function breakingRecords(scores) {
  // Write your code here
  let minimum = 0;
  let maximum = 0;

  let min = 0;
  let max = 0;

  for (let i = 0; i < scores.length; i++) {
    if (maximum === 0 && minimum === 0) {
      maximum += scores[i];
      minimum += scores[i];
    } else if (maximum !== 0 && minimum !== 0 && maximum < scores[i]) {
      maximum = scores[i];
      max++;
    } else if (maximum !== 0 && minimum !== 0 && minimum > scores[i]) {
      minimum = scores[i];
      min++;
    }
  }

  console.log(maximum);
  console.log(max);
  console.log(minimum);
  console.log(min);

  return `${max} ${min}`;
}

// console.log(breakingRecords([12, 24, 10, 24]));
// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
// console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
console.log(breakingRecords([0, 9, 3, 10, 2, 20])); // 3 0
