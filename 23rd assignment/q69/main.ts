function divideAndReminder(numerator: number, denominator: number): { quotient: number; remainder: number }
 {
    let quotient = Math.floor(numerator / denominator);

    let remainder = numerator % denominator;

    return { quotient, remainder };
}

console.log(divideAndReminder(10, 2));
//a bit hard still manage to do

//This function takes two numbers and gives you the answer when you divide the first number by the second one. For example, when you divide 10 by 3 it tells you that the answer is 5 with a remainder of 0.





