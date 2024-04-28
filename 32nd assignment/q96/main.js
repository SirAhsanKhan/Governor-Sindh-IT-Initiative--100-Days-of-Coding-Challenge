function calculateSum(numbers) {
    return numbers.reduce(function (total, current) { return total + current; }, 0);
}
var numbers = [1, 5, 8, 0, 4, -2, -9];
console.log(calculateSum(numbers));
