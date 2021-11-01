/* -------------------------------------------------------------------------- */
/*                        HACKER RANK COMPARE TRIPLATES                       */
/* -------------------------------------------------------------------------- */
// Membadingakn 3 di array A dan array B
// Kemudian jika A[0] > B[0] maka point untuk A

function compareTriplets(a, b) {
  //   let points = [0, 0];
  let resultA = 0;
  let resultB = 0;
  let arr = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      resultA++;
      //   points[0]++;
    } else if (a[i] < b[i]) {
      //   points[1]++
      resultB++;
    }
  }
  //   return points;
  console.log(resultA);
  console.log(resultB);
  arr.push(resultA, resultB);
  console.log(arr);
  return arr;
}
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
