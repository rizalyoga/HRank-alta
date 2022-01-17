function sortStr(str) {
  return str.split("").sort().join("");
}

function anagram(text) {
  //   console.log(text[1 + 1].length);

  for (let i = 0; i < text.length - 1; i++) {
    for (let j = text.length - 1; i < j; j--) {
      if (sortStr(text[i]) === sortStr(text[j])) {
        text.splice(j, 1);
      }
    }
  }

  return text.sort();
}

console.log(anagram(["code", "edoc", "fauck"]));
console.log(anagram(["code", "edoc", "doce", "fauck", "faucks", "kcuaf"]));

let arr = ["code", "edoc", "fauck"];
// console.log(arr[1+1].length);
