//making an felxible lsit
function createObjectWithDynamicKey(value: string, key: string) {
    let dynamicObject = {};
// Setting up a section in the list 
    dynamicObject[value] = key;
    return dynamicObject;
}

//   setting upflexible list
let userPreference = createObjectWithDynamicKey("power", "telephaty");
//print 
console.log(userPreference);