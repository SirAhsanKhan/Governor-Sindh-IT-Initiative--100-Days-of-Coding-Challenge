//making an felxible lsit
function createObjectWithDynamicKey(value, key) {
    var dynamicObject = {};
    // Setting up a section in the list 
    dynamicObject[value] = key;
    return dynamicObject;
}
//   setting upflexible list
var userPreference = createObjectWithDynamicKey("power", "telephaty");
//print 
console.log(userPreference);
