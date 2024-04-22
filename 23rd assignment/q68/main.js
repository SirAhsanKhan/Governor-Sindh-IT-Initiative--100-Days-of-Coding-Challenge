function divideAndReminder(numerator, denominator) {
    var quotient = Math.floor(numerator / denominator);
    var remainder = numerator % denominator;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndReminder(10, 2));
