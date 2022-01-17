function updateTimes(signalOne, signalTwo) {
  //   let sortOne = signalOne.sort((a, b) => {
  //     return a - b;
  //   });

  //   let sortTwo = signalTwo.sort((a, b) => {
  //     return a - b;
  //   });

  //   console.log(sortOne);
  //   console.log(sortTwo);

  let signalEqual = [];
  for (let i = 0; i < signalOne.length; i++) {
    if (signalOne[i] === signalTwo[i]) {
      signalEqual.push(signalOne[i]);
    }
  }

  let arr = [1, 2, 3, 1, 2, 10, 3, 1, 10, 3, 2, 1];

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] <= arr[i - 1]) {
      arr.splice(i, 1);
    }
  }

  //   for (let i = signalEqual.length; i >= 0; i--) {
  //     if (signalEqual[i] < signalEqual[i - 1]) {
  //       signalEqual.splice(i, 1);
  //     }
  //   }
  console.log(arr);
  //
  //   console.log(signalEqual);
  //   return signalEqual.length;
}

console.log(updateTimes([1, 2, 3, 3, 3, 5, 4, 1], [1, 2, 3, 4, 3, 5, 4, 1]));
console.log(updateTimes([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));
console.log(updateTimes([5, 1, 2, 3, 4, 5], [5, 5, 4, 3, 2, 1]));
console.log(updateTimes([1, 2, 3, 4, 1], [5, 4, 3, 4, 1]));

// [1, 2, 3, 5, 3, 1, 5, 10, 1, 2, 3, 4][(1, 2, 3, 5, 3, 1, 5, 10)];
