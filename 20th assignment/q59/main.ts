function adder(numToAdd : number): (number) => number {
    return function(number: number): number{
    return number + numToAdd
    };
}
let value =adder(10)
console.log(value(20));
//lets explain all this 
//we make a function adder which hasi its own function numToAdd that accepts a number when we gice a number to adder it stotre int in a variable caleed value lets say we give value 10 then we says value which is 10 must + with 20 = 30 result