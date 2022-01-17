function countDuplicate(numbers) {
  let sortNumber = numbers.sort();
  //   console.log(sortNumber);

  let equal = 0;
  let objekJoin = {};

  for (let i = 0; i < sortNumber.length; i++) {
    objekJoin[sortNumber[i]] = (objekJoin[sortNumber[i]] || 0) + 1;
  }
  console.log(objekJoin);

  for (const property in objekJoin) {
    if (`${objekJoin[property]}` > 1) {
      equal += 1;
    }
  }
  return equal;
}

console.log(countDuplicate([1, 3, 1, 4, 5, 6, 3, 2]));
console.log(countDuplicate([1, 3, 3, 4, 4, 4]));
