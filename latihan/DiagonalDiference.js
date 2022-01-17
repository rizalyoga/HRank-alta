function diagonalDiference(arr) {
  let leftdiagonal = 0,
    rightdiagonal = 0;

  for (let i = 0, j = arr[0].length - 1; i < arr[0].length; i++, j--) {
    leftdiagonal = leftdiagonal + arr[i][i];
    rightdiagonal = rightdiagonal + arr[i][j];
  }
  return Math.abs(leftdiagonal - rightdiagonal);
}

console.log(
  diagonalDiference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

console.log(
  diagonalDiference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);

// input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12

//output => 15

//Explanation =
// Sum across the primary diagonal: 11 + 5 - 12 = 4
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
