function anagram(a, b) {
  let arrayJoin = [];
  let arraySplit = [];
  let hasil = [];

  for (let i = 0; i < a.length; i++) {
    arrayJoin.push(a[[i]]);
    arrayJoin.push(b[[i]]);
  }
  // console.log(arrayJoin); // => [ 'tea', 'tea', 'tea', 'toe', 'act', 'acts' ]

  let cloning = arrayJoin;
  let awal = 0;
  let akhir = 2;

  for (let i = 0; i < arrayJoin.length / 2; i++) {
    let n = cloning.slice(awal, akhir);
    arraySplit.push(n);
    awal += 2;
    akhir += 2;
  }
  // console.log(arraySplit); //=>[ [ 'tea', 'tea' ], [ 'tea', 'toe' ], [ 'act', 'acts' ] ]

  for (let j = 0; j < arraySplit.length; j++) {
    let totalTaksama = 0;

    if (arraySplit[j][0].length !== arraySplit[j][1].length) {
      totalTaksama += 0;
      hasil.push(totalTaksama);
    } else {
      let join = [...arraySplit[j][0], ...arraySplit[j][1]];
      // console.log(join); // => [ 't', 'e', 'a', 't', 'e', 'a' ]

      let objekJoin = {};
      for (let i = 0; i < join.length; i++) {
        objekJoin[join[i]] = (objekJoin[join[i]] || 0) + 1;
      }
      // console.log(objekJoin); // => { t: 2, e: 2, a: 2 }

      for (let i in objekJoin) {
        if (objekJoin[i] === 1) {
          totalTaksama += 1 / 2;
        }
      }
      // console.log(totalTaksama);
      hasil.push(totalTaksama);
    }
  }
  console.log(hasil);
}

anagram(["tea", "tea", "act"], ["tea", "toe", "acts"]);
anagram(["tea", "teab", "act"], ["tea", "toen", "acts"]);
