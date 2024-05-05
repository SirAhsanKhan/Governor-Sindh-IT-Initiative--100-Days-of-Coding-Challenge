const  multiplyParameters = (...numbers: number[]) =>
  numbers.reduce((total, number) => total * number, 1);

console.log(multiplyParameters(2, 12, 104));