function minDif(arr) {
  arr.sort((a, b) => a - b);
  // console.log(arr);
  //   console.log(arr.length);

  let hasil = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= arr.length; j++) {
      hasil += Math.abs(arr[0] - arr[1]);
      console.log(arr);
      arr.shift();
    }
  }

  return hasil;
  //   return hasil.reduce((a, b) => a + b);
}

// console.log(minDif([5, 5, 1, 3, 7, 3]));
// console.log(minDif([5, 1, 3, 7, 3]));
// console.log(minDif([1, 3, 3, 2, 4]));
// console.log(minDif([9, 9, 9, 8, 8]));
console.log(minDif([10, 7, 1, 8, 9, 19, 1, 9, 8, 2, 3, 10]));
// console.log(minDif([2, 3, 2]));
// console.log(minDif([9, 9, 8]));
