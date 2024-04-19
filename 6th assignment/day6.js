var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//task 1
var guestList = ["father", "mother", "brother", "sister", "aunt"];
console.log("".concat(guestList, " great news i found a bigger table")); //this print a message to guest
//adding new guest
guestList.unshift("grandfather"); //add new guest at start of array
guestList.splice(guestList.length / 3, 0, "grandfather"); //add new guest in middle of array acc at specified index
guestList.push("greatGrandFather"); //add new guest at end  of array
guestList.forEach(function (guestList) {
    console.log("dear ".concat(guestList, " i would like you to join me for dinner tonight"));
});
//task 2
//removing guest
console.log("unfortunately table doesnot arrived i can only add 1 more people");
while (guestList.length > 6) {
    var removedGuestList = guestList.pop();
    console.log("sorry ".concat(removedGuestList, " i cant invite you to dinner "));
}
guestList.forEach(function (guestList) {
    console.log("dear ".concat(guestList, " you are still invited "));
});
guestList.splice(0, guestList.length);
console.log(guestList);
//task 3
var places = ["hunza", "sawat", "skardu", "gilgit", "chitral"];
console.log("origanal order:", places); //orignal order
console.log("alphabetic order:", __spreadArray([], places, true).sort()); //alphabetical order but orignal order remains same
console.log("orignal order:", places);
console.log("reversed alphabetical order:", __spreadArray([], places, true).sort().reverse()); //reversed alphabetical order  but orignal order remains same
console.log("orignal order:", places);
places.reverse();
console.log("reversed order", places); // Reversing the original array in place
places.reverse();
console.log("original order", places); // Reversing back to the original order
places.sort();
console.log("alphabetical oreder:", places); // Sorting in alphabetical order (in place)
places.reverse();
console.log("reversed alphabetical order", places); // Reversing in reverse alphabetical order
