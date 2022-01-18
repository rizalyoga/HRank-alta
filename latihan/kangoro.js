function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let jumpX1 = 0;
  let valJumpX1 = x1;

  let jumpX2 = 0;
  let valJumpX2 = x2;

  let result = "";

  do {
    valJumpX1 += v1;
    jumpX1++;
    valJumpX2 += v2;
    jumpX2++;

    result = "YES";
    if (jumpX1 && jumpX2 > 100000) {
      result = "NO";
      break;
    }
  } while (valJumpX1 !== valJumpX2);

  console.log(jumpX1);
  console.log(valJumpX1);
  console.log(jumpX2);
  console.log(valJumpX2);
  console.log(result);
}

kangaroo(0, 3, 4, 2);
kangaroo(0, 2, 5, 3);
kangaroo(0, 120, 5, 280);
