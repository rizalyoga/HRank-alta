function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    // console.log("#".repeat(i).padStart(n));
    console.log("#".repeat(i).padStart(n));
  }
}

console.log(staircase(6));
