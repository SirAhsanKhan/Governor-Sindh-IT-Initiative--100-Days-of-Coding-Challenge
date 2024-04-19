//task 1 
let transport: string[] = ["rolls royce", "BMW", "mehran car"];//this save an array
transport.forEach(transport =>{//this is the callback function to call each transport
    console.log(`i would like to own a ${transport}`)//this  will print message for each transport
})
//task 2
let guestList: string[] = ["father","mother","brother","uncle","aunt"];
guestList.forEach(guestList => {
    console.log(`dear ${guestList}; i would like to invite you for dinner tonight`)
}) 

//task 3 removing guest
let unableToAttend = "uncle";//removing guest
console.log(`sorry ${unableToAttend} will not be there to join us`);

//replace the guest
let newGuest = "sister";
guestList[guestList.indexOf(unableToAttend)] = newGuest//adding newguest
//new invitation

guestList.forEach(guestList=> {
console.log(`dear ${guestList}; i would like to invite you for dinner tonight`)/*this will print personal message to guest */
})
