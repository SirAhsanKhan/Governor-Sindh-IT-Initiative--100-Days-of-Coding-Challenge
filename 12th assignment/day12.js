//task 1
//printing message for each icecream
var icecreams = ["chocalate swirl", "snickers twister", "molten lava cake",];
icecreams.forEach(function (icecream) {
    console.log("I really like ".concat(icecream, " icecream "));
});
console.log("i love to eat icecream!");
//task 2
//personilizing message for each animal
var animals = ["cat", "parrot", "dog", "lion", "elephant"];
animals.forEach(function (animal) {
    if (animal == 'lion') {
        console.log("lion is a wild animal");
    }
    else if (animal == 'elephant') {
        console.log("elephant is a wild animal");
    }
    else {
        console.log("".concat(animal, " is a pet animal"));
    }
});
//task 3
//printing message on shirt
function make_shirt(size, message) {
    console.log("making a ".concat(size, " shirt with a \"").concat(message, "\" printed on it. "));
}
make_shirt("small", "No.1 student of IT classes");
