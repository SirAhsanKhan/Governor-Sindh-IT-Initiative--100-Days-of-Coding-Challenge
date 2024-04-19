//task 1
//ahsan, 3/6/2024
//this program print and add two numbers
console.log( 6 + 3);
//this program print a personal message
let Name: string = "ahsan";
console.log(` hello ${Name},keep it up!!`);
//task 2
let names: string[] = ["wasay","sarim","hamza","rafay","hadi"];
for(let i= 0; i < names.length; i ++) {
    console.log(names [i]);
}
//task 3
let names1: string[] = ["wasay", "sarim", "hamza", "rafay", "hadi"];
for(let name of names1){
    console.log(`hello ${name},would you like to learn some typeScript today?`);
}