//lets initialize an array
let array =["moon",5,"shaadi",69,"khaana",true ,"ok"]

//lets say we wwant only string 
let stringArray = array.filter( products => typeof products === "string")// here.filter()is a method thats filter the given condition like strings number xyz and put it into new array

console.log(stringArray);