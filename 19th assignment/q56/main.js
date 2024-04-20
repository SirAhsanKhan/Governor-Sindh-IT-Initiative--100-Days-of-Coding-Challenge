//lets initialize an array
var array = ["moon", 5, "shaadi", 69, "khaana", true, "ok"];
//lets say we wwant only string 
var stringArray = array.filter(function (products) { return typeof products === "string"; }); // here.filter()is a method thats filter the given condition like strings number xyz and put it into new array
console.log(stringArray);
