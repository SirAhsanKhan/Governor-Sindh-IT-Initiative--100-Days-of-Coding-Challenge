//task 1
//printing message for each icecream
let icecreams: string[] = ["chocalate swirl","snickers twister","molten lava cake",];
icecreams.forEach(icecream => {
    console.log( `I really like ${icecream} icecream `)
})
console.log("i love to eat icecream!")

//task 2
//personilizing message for each animal
let animals:string[] = ["cat","parrot","dog","lion","elephant"]
animals.forEach(animal=> {
    if( animal=='lion') {
        console.log("lion is a wild animal");
    } else if(animal=='elephant') {
        console.log("elephant is a wild animal");
    } else {
        console.log(`${animal} is a pet animal`);
    }
})
//task 3
//printing message on shirt
function make_shirt(size:string , message:string) {
    console.log(`making a ${size} shirt with a "${message}" printed on it. `)
}
make_shirt("small","No.1 student of IT classes")
