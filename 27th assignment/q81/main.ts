function logObjectProperties(obj: object) {
  for (let property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
}

logObjectProperties({
  make: "rolls royce",
  model: "FX",
  year: 2024,
  color: "black",
});
