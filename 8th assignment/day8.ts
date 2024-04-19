//task 1
let transport: string[] = ["rolls royce", "BMW", "ferrari"]
console.log(transport[3]);//arrays index start from 0 so 3 is not valid 
//correcting an error
console.log(transport[2]);
//task 2 conditionanl test
//true
let car = 'BMW'
console.log("is car == 'BMW'?  i predict True.");
console.log(car == 'BMW');//true

let movie ='avengers'
console.log("is movie ==  'avengers'?  i predict True.")
console.log(movie == 'avengers');//true

let myFavAnime = 'dragonBall';
console.log("is myfavAnime == 'dragonBall'?  i pridect True.")
console.log(myFavAnime == 'dragonBall');//true

let food = 'biryani';
console.log("is food == 'biryani'?  i predicted true.");
console.log(food == 'biryani');//true

let myName ='ahsan'
console.log(" is myName == 'ahsan'?  i predict True.");
console.log(myName == 'ahsan');//true


//false
console.log("is car == 'ferrari'?  i predict False.");
console.log(car == 'ferrari'); //False

console.log("is movie ==  'justiceleague'?  i predict False.")
console.log(movie == 'justiceLeague');//False

console.log("is myfavAnime == 'onepiece'?  i pridect False.")
console.log(myFavAnime == 'onepiece');//False

console.log("is food == 'haleem'?  i predicted False.");
console.log(food == 'haleem');//False

console.log(" is myName == 'anas'?  i predict False.");
console.log(myName == 'anas');//false

//task 3
// Equality with strings
console.log("Testing equality with strings:");
console.log("orange" == "orange"); // True
console.log("orange" == "Orange"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Orange".toLowerCase() == "orange"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(8 > 3); // True
console.log(4 < 2); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(false && true); // False
console.log(false || true); // True

// Test whether an item is in an array
let vegetables: string[]= ["carrot", "broccoli", "spinach"];
console.log("Is 'carrot' in vegetables?");
console.log(vegetables.includes("carrot")); // True

// Test whether an item is not in an array
console.log("Is 'potato' not in vegetables?");
console.log(!vegetables.includes("potato")); // True