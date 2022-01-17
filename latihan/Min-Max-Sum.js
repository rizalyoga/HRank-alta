function findMinMaxSum(arr) {
  let sort = arr.sort((a, b) => a - b);
  //   console.log(sort);

  let result = [];
  let min = 0;
  let max = 0;

  for (let i = 0; i < sort.length - 1; i++) {
    // console.log(min, " + ", sort[i]);
    min += sort[i];
    // console.log("hasil = ", min);
  }

  for (let i = 1; i < sort.length; i++) {
    // console.log(max, " + ", sort[i]);
    max += sort[i];
    // console.log("hasil = ", max);
  }

  result.push(min, max);
  //   console.log(...result);
  //   minMax =

  return console.log(...result);
}

console.log(findMinMaxSum([1, 2, 3, 4, 5])); //10 14
console.log(findMinMaxSum([7, 69, 2, 221, 8974])); //299 9271

let str = "aku";
console.log(str.length);
