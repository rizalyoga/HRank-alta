function plusMinus(arr) {
  // Write your code here
  const range = arr.length;

  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] > 0 ? positive++ : arr[i] < 0 ? negative++ : zero++;
  }

  positive = positive / range;
  negative = negative / range;
  zero = zero / range;

  console.log(positive);
  console.log(negative);
  console.log(zero);
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
