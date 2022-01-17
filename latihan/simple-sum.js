function simpleArraySum(ar) {
  // Write your code here

  let newAr = ar;

  let result = 0;
  result += newAr.reduce((prev, now) => prev + now);

  //result = ar.reduce(reducer);

  return result;
}

simpleArraySum([1, 2, 3, 4, 10, 11]);
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
