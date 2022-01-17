function dnaComplements(s) {
  let spliting = s.split("");

  console.log(spliting);

  let reverse = [];

  for (let i = 0; i < spliting.length; i++) {
    if (spliting[i] == "A") {
      reverse.push("T");
    } else if (spliting[i] == "T") {
      reverse.push("A");
    } else if (spliting[i] == "G") {
      reverse.push("C");
    } else if (spliting[i] == "C") {
      reverse.push("G");
    }
  }

  let result = reverse.reverse().join("");
  return result;
}

console.log(dnaComplements("ACCGGGTTTT"));
