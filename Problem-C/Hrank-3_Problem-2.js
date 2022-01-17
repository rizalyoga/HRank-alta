function simpleMaxDiff(px) {
  let result = [];

  for (let i = 0; i < px.length; i++) {
    if (px[i + 1] > px[i]) {
      for (let j = 0; j < px.length; j++) {
        result.push(px[i + 1] - px[j]);
      }
    }
  }
  let filterMin = result.filter((positif) => positif > 0);

  //   console.log(filterMin);
  let max = Math.max(...filterMin);
  console.log(max);
}

simpleMaxDiff([7, 1, 2, 5]);
simpleMaxDiff([2, 3, 10, 2, 4, 8, 1]);
