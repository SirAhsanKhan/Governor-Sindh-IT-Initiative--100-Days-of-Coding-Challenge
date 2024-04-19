//task 1
let guestList: string[] = ["father","mother","brother","sister","aunt"];
console.log(`${guestList} great news i found a bigger table`)//this print a message to guest

//adding new guest
guestList.unshift("grandfather");//add new guest at start of array
guestList.splice(guestList.length / 3, 0, "grandfather");//add new guest in middle of array acc at specified index
guestList.push("greatGrandFather");//add new guest at end  of array

guestList.forEach(guestList=> {
    console.log(`dear ${guestList} i would like you to join me for dinner tonight`)
})
//task 2
//removing guest
console.log("unfortunately table doesnot arrived i can only add 1 more people")
while (guestList.length > 6) {
    let removedGuestList = guestList.pop()
    console.log(`sorry ${removedGuestList} i cant invite you to dinner `)
}
guestList.forEach(guestList=>{
    console.log(`dear ${guestList} you are still invited `)
})
guestList.splice(0 , guestList.length)
console.log(guestList);
//task 3
let places:string[] =["hunza","sawat","skardu","gilgit","chitral"];
console.log( "origanal order:",places);//orignal order

console.log("alphabetic order:",[...places].sort())//alphabetical order but orignal order remains same
console.log("orignal order:",places);

console.log("reversed alphabetical order:", [...places].sort().reverse())//reversed alphabetical order  but orignal order remains same
console.log("orignal order:", places);

places.reverse();
console.log("reversed order", places);// Reversing the original array in place

places.reverse();
console.log("original order", places);// Reversing back to the original order

places.sort();
console.log("alphabetical oreder:", places)// Sorting in alphabetical order (in place)


places.reverse();
console.log("reversed alphabetical order", places)// Reversing in reverse alphabetical order
