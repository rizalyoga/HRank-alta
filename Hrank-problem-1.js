function closePathNumber(number) {
  let numbString = number.toString();
  // console.log(typeof numbString);
  let numberArray = [];
  let total = 0;

  for (let i = 0; i < numbString.length; i++) {
    numberArray.push(numbString[i]);
  }

  for (let i = 0; i < numbString.length; i++) {
    if (numberArray[i] === "8") {
      total += 2;
    } else if (numberArray[i] === "0") {
      total += 1;
    } else if (numberArray[i] === "4") {
      total += 1;
    } else if (numberArray[i] === "6") {
      total += 1;
    } else if (numberArray[i] === "9") {
      total += 1;
    }
  }
  return total;
}

console.log(closePathNumber(100));
console.log(closePathNumber(630));
