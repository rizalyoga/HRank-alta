function birthdayCakeCandles(candles) {
  // Write your code here
  let candless = candles;
  let max = 0;
  let range = 0;

  max += Math.max(...candless);

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      range++;
    }
  }

  return range;
}

birthdayCakeCandles([4, 4, 1, 3]);
birthdayCakeCandles([3, 2, 1, 3]);
