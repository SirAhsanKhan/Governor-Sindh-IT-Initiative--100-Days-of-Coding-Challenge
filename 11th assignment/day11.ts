//task 1 
//ensuring user list is empty
let user: string[] = [];
if( user.length === 0) {
    console.log("we should get some users");
}else {
//message will be "we should get some user" cause there are no users store in an array
}
//task 2 
//"Username Availability Check in TypeScript Arrays

let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === 
    newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter their user names`)
    }else {
        console.log(`${newUser} is available`)
    }
})
//task 3 
let numbers: number[] =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(number => {
    let suffix ="th";
    if (number === 1) {
        suffix ="st";
    }else if(number === 2) {
        suffix ="nd";
    }else if(number=== 3){
        suffix ="rd"
    }
    console.log(`${number}${suffix}`);
});