function numDuplicate(name, price, weight) {
  let arrayJoin = [];
  let arraySplit = [];

  for (let i = 0; i < name.length; i++) {
    arrayJoin.push(name[[i]]);
    arrayJoin.push(price[[i]]);
    arrayJoin.push(weight[[i]]);
  }

  let cloning = arrayJoin;
  // console.log(cloning);

  let awal = 0;
  let akhir = 3;

  for (let i = 0; i < arrayJoin.length / 3; i++) {
    let n = cloning.slice(awal, akhir);
    arraySplit.push(n);
    awal += 3;
    akhir += 3;
  }

  let totalSama = 0;
  let objekJoin = {};

  for (let i = 0; i < arraySplit.length; i++) {
    objekJoin[arraySplit[i]] = (objekJoin[arraySplit[i]] || 0) + 1;
  }

  // console.log(objekJoin);

  for (let i in objekJoin) {
    if (objekJoin[i] > 1) {
      totalSama += 1;
    }
  }
  return totalSama;
}

console.log(numDuplicate(["Ball", "Box", "Ball", "Ball", "Box"], [2, 2, 2, 2, 2], [1, 2, 1, 1, 3]));
console.log(numDuplicate(["Ball", "Box", "Lamp", "Brink", "Pump"], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]));
console.log(numDuplicate(["Ball", "Box", "Lamp", "Brink", "Pump", "Box"], [2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2]));
console.log(numDuplicate(["Ball", "Box", "Ball", "Pump", "Jet", "Box"], [2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2]));
