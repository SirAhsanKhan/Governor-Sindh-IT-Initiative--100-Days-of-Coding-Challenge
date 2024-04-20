function adder(numToAdd) {
    return function (number) {
        return number + numToAdd;
    };
}
var value = adder(10);
console.log(value(20));
