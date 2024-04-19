//task 1 
let age = 25;
if (age < 2) {
    console.log("person is a baby");
} else if (age < 4) {
    console.log("person is a toddler");
} else if (age < 13) {
    console.log("person is a kid");
} else if (age < 20) {
    console.log("person is a teenager");
} else if (age < 65) {
    console.log("person is an adult");
} else {
    console.log("person is an elder ");
}
//Task 2  
let favoriteFruit: string[] = ["banana", "mango", "apple", "guava"];
if (favoriteFruit.includes("apple")) {
    console.log("You really like apples!");
}
if (favoriteFruit.includes("banana")) {
    console.log("You really like bananas!");
}
if (favoriteFruit.includes("guava")) {
    console.log("You really like guava!");
}
if (favoriteFruit.includes("mango")) {
    console.log("You really like mangoes!");
}
//task 3 
let userNames: string[] = ["admin", "User1", "User2", "User3","User4"]
userNames.forEach(userNames=>{
if (userNames === "admin"){
    console.log("Hello admin, would you like to see status report?")
}else {
    console.log(`Hello ${userNames} thanks for logging in again`) 
}
})