function multiplyDecimals(num1, num2) {
    return Math.round(num1 * num2) * 100 / 100;
}
console.log(multiplyDecimals(0.05, 0.06)); //output was 0.003 but math.round roundoff the answer resulting 0
