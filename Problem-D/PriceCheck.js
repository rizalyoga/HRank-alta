function priceCheck(product, productPrice, productSold, soldPrices) {
  /* --------------------------------- PRODUCT -------------------------------- */
  // let arrayJoinProduct = [];
  // let arraySplitProduct = [];

  // for (let i = 0; i < product.length; i++) {
  //   arrayJoinProduct.push(product[[i]]);
  //   arrayJoinProduct.push(productPrice[[i]]);
  // }
  // //   console.log(arrayJoinProduct);

  // let cloneProduct = arrayJoinProduct;
  // let awal = 0;
  // let akhir = 2;

  // for (let i = 0; i < arrayJoinProduct.length / 2; i++) {
  //   let n = cloneProduct.slice(awal, akhir);
  //   arraySplitProduct.push(n);
  //   awal += 2;
  //   akhir += 2;
  // }
  // //   console.log(arraySplitProduct); //[ [ 'rice', 10 ], [ 'sugar', 11 ], [ 'wheat', 12 ], [ 'keju', 13 ] ]

  // /* ---------------------------------- SOLD ---------------------------------- */
  // let arrayJoinSold = [];
  // let arraySplitSold = [];

  // for (let i = 0; i < productSold.length; i++) {
  //   arrayJoinSold.push(productSold[[i]]);
  //   arrayJoinSold.push(soldPrices[[i]]);
  // }
  // //   console.log(arrayJoinSold); //[ 'rice', 10, 'sugar', 12 ]

  // let cloneSold = arrayJoinSold;
  // let start = 0;
  // let end = 2;

  // for (let i = 0; i < arrayJoinSold.length / 2; i++) {
  //   let n = cloneSold.slice(start, end);
  //   arraySplitSold.push(n);
  //   start += 2;
  //   end += 2;
  // }
  // //   console.log(arraySplitSold); //[ [ 'rice', 10 ], [ 'sugar', 12 ] ]

  // //   arraySplitSold     [(["rice", 10], ["sugar", 12])];
  // //   arrayJoinProduct   [(["rice", 10], ["sugar", 11], ["wheat", 12], ["keju", 13])];
  // let hasil = 0;
  // for (let i = 0; i < arraySplitSold.length; i++) {
  //   for (let j = 0; j < arraySplitProduct.length; j++) {
  //     if (arraySplitSold[i][0] === arraySplitProduct[j][0] && arraySplitSold[i][1] === arraySplitProduct[j][1]) {
  //       hasil += 1;
  //     }
  //   }
  // }

  // let result = arraySplitSold.length - hasil;
  // return result;

  let objProducts = {};
  let error = 0;

  product.forEach((el, i) => {
    objProducts[el] = productPrice[i];
  });

  // console.log(objProducts);

  productSold.forEach((el, i) => {
    // console.log(objProducts[el], soldPrices[i]);
    console.log(objProducts[el]);
    // if (objProducts[el] !== soldPrices[i]) error++;
  });
  console.log(error);

  return "";
}

console.log(priceCheck(["rice", "sugar", "wheat", "keju"], [10, 11, 12, 13], ["rice", "sugar"], [10, 12]));
console.log(priceCheck(["rice", "sugar", "wheat", "keju"], [10, 11, 12, 13], ["rice", "sugar", "keju"], [10, 12, 14]));
