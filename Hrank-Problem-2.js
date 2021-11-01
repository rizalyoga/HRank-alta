function Pairing(arr) {
  let arrSort = arr.sort((a, b) => a - b);
  //   console.log(arrSort); [ 1, 4, 5, 7, 8, 9 ]

  let total = [];

  let kelipatan = 1;
  for (let i = 0; i < arr.length; i++) {
    total.push(arr[kelipatan] - arr[i]);
    kelipatan += 2;
    i++;
  }
  total = total.reduce((a, b) => a + b);
  return total;
}

console.log(Pairing([9, 4, 5, 7, 1, 8]));
console.log(Pairing([2, 5, 6, 7]));
console.log(Pairing([1, 3, 6, 6]));
