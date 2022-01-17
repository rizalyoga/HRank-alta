function closestNumbers(numbers) {
  //   Write your code here
  //   console.log(numbers[0]);

  let len = numbers[0];
  let sorted = numbers.sort(function (a, b) {
    return a - b;
  });

  let mindiff = Infinity;
  let newnumbers = [];

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const diff = Math.abs(sorted[i] - sorted[j]);
      if (diff == mindiff) {
        mindiff = diff;
        newnumbers.push(sorted[i], sorted[j]);
        // console.log(sorted[i], sorted[j]);
      } else if (diff < mindiff) {
        newnumbers = [];
        mindiff = diff;
        newnumbers.push(sorted[i], sorted[j]);
        // console.log(sorted[i], sorted[j]);
      } else {
        break;
      }
    }
  }

  let cloneNumbers = newnumbers;
  let awal = 0;
  let akhir = 2;

  for (let i = 0; i < cloneNumbers.length / 2; i++) {
    let n = cloneNumbers.slice(awal, akhir);
    awal += 2;
    akhir += 2;
    console.log(...n);
  }

  // ==========================================================
  //   return numbers
  //     .sort((a, b) => a - b)
  //     .reduce(
  //       ([min, resultnumbers], numbers_i, i) => {
  //         const curr = numbers_i - numbers[i - 1];
  //         if (curr >= min || !i) {
  //           return [min, curr === min ? resultnumbers.concat([numbers[i - 1], numbers_i]) : resultnumbers];
  //         }
  //         return [curr, [numbers[i - 1], numbers_i]];
  //       },
  //       [Infinity, []]
  //     )[1];
}
// console.log(closestNumbers([4, 2, 1, 3]));
// console.log(closestNumbers([4, -2, -1, 3]));
closestNumbers([6, 2, 4, 10]);
// closestNumbers([4, 4, 2, 1, 3]);
// console.log(closestNumbers([4, 4, -2, -1, 3]));
closestNumbers([5, -9, -5, 9, 10, 12]);
