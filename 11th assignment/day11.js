//task 1 
//ensuring user list is empty
var user = [];
if (user.length === 0) {
    console.log("we should get some users");
}
else {
    //message will be "we should get some user" cause there are no users store in an array
}
//task 2 
//"Username Availability Check in TypeScript Arrays
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() ===
        newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter their user names"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
//task 3 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
