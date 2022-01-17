function group(level, maxSpread) {
  level.sort((a, b) => a - b);
  //   console.log(level.length);

  let group = 0;

  for (let i = 0; i < level.length; i++) {
    for (let j = 1; j < level.length; j++) {
      if (level[j] - level[i] <= maxSpread) {
        group += 1;
      }
    }
  }
  console.log(group);
}

group([4, 8, 1, 7], 3);
group([1, 2, 3, 4, 5], 0);
