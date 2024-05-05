let person ={
    name:"ahsan",
    age:16
}

let jsonstring = JSON.stringify(person);
console.log(person)
//The purpose of using JSON.stringify() in this code snippet is to convert the person object into a JSON string. This is useful when you want to send the data over the network or store it in a file in a format that can be easily parsed by other systems or languages. 