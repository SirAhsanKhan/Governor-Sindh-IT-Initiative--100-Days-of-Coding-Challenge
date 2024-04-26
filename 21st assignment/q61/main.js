var direction;
(function (direction) {
    direction[direction["north"] = 0] = "north";
    direction[direction["south"] = 1] = "south";
    direction[direction["west"] = 2] = "west";
    direction[direction["east"] = 3] = "east";
})(direction || (direction = {}));
var myDirection = direction.west;
console.log(myDirection); //output should be 2 cause enum starts form 0 so north=0,south=1,west=2 and so on
//enum is short for enumeration it make esier to work with set of same type of words
