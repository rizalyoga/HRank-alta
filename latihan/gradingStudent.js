function gradingStudents(grades) {
  // Write your code here
  let modulus = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] % 5 === 3 && grades[i] > 35) {
      grades[i] += 2;
      modulus.push(grades[i]);
    } else if (grades[i] % 5 === 4 && grades[i] > 35) {
      grades[i] += 1;
      modulus.push(grades[i]);
    } else {
      modulus.push(grades[i]);
    }
  }

  console.log(modulus);
}

gradingStudents([73, 67, 38, 33]);
