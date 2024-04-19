//task 1 
var transport = ["rolls royce", "BMW", "mehran car"]; //this save an array
transport.forEach(function (transport) {
    console.log("i would like to own a ".concat(transport)); //this  will print message for each transport
});
//task 2
var guestList = ["father", "mother", "brother", "uncle", "aunt"];
guestList.forEach(function (guestList) {
    console.log("dear ".concat(guestList, "; i would like to invite you for dinner tonight"));
});
//task 3 removing guest
var unableToAttend = "uncle"; //removing guest
console.log("sorry ".concat(unableToAttend, " will not be there to join us"));
//replace the guest
var newGuest = "sister";
guestList[guestList.indexOf(unableToAttend)] = newGuest; //adding newguest
//new invitation
guestList.forEach(function (guestList) {
    console.log("dear ".concat(guestList, "; i would like to invite you for dinner tonight")); /*this will print personal message to guest */
});
