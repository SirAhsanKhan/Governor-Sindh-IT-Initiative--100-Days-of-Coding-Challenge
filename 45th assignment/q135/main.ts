const person1 = {
  name: "ahsan",
  age: 16,
  city: "karachi",
};

const jsonString = JSON.stringify(person1, null, 2); 

console.log(jsonString);