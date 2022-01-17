function getMinDeletions(s) {
  let arrS = [];

  for (let i = 0; i <= s.length - 1; i++) {
    arrS.push(s[i]);
  }
  //   console.log(arrS);
  let sortingArr = arrS.sort().join("");
  console.log(sortingArr);

  let distinct = [...new Set(sortingArr)];
  console.log(distinct);

  let diference = 0;
  if (distinct.length == 1) {
    return 0;
  } else if (distinct.length > 0) {
    diference += sortingArr.length - distinct.length;
    return diference;
  }

  //   let diference = 0;

  //   for (let i = 0; i < sortingArr.length - 1; i++) {
  //     if (sortingArr[i] !== sortingArr[i + 1]) {
  //       diference++;
  //     }
  //   }

  //   console.log(diference);

  //   let objekJoin = {};

  //   for (let i = 0; i < sortingArr.length; i++) {
  //     objekJoin[sortingArr[i]] = (objekJoin[sortingArr[i]] || 0) + 1;
  //   }
  //   console.log(objekJoin);

  //   const arrayObject = Object.values(objekJoin);
  //   console.log(arrayObject);

  //   for (let i = 0; i <= arrayObject.length; i++) {
  //     if (arrayObject[i] % 2 == 0) {
  //       diference += 1;
  //     }
  //   }
  //   console.log(diference);
}

console.log(getMinDeletions("abcabc"));
console.log(getMinDeletions("abcab"));
console.log(getMinDeletions("bbeadcebfb"));
console.log(getMinDeletions("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
