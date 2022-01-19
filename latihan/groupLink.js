var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

// function grouping(line) {
rl.on("line", function (line) {
  // console.log("Implement your logic here. Input data: " + line);

  let link = line.split(/(\s+)/);

  const url = link.filter((urll) => urll !== " ");

  let domain = [];
  let group = 0;

  for (let i = 0; i <= url.length - 1; i++) {
    domain.push(url[i].split("/")[0]);
  }

  for (let i = 0; i <= domain.length - 1; i++) {
    if (domain[i] !== domain[i + 1]) {
      group++;
    }
  }
  // console.log(group);
  // console.log(typeof line);

  console.log(`Case #i: ${group}`);
});

//COBA SENDIRI
// grouping("www.google.com www.google.com/id www.google.co.id www.google.co.id/account www.ruangguru.com/ruangbelajar roboguru.ruangguru.com roboguru.ruangguru.com/faq ");
// =================================================

//INPUt

// 2
// www.google.com www.google.com/id www.google.co.id www.google.co.id/account www.ruangguru.com/ruangbelajar roboguru.ruangguru.com roboguru.ruangguru.com/faq
// www.google.com www.google.com/id www.google.com/id/account www.google.com/id/account/reset www.google.com/id/account/forget_password

// sample OUTPUT
// Case #1: 4
// Case #2: 1
