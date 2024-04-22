function multiplyDecimals(num1 :number, num2:number):number{

    return Math.round(num1 * num2)
}
console.log(multiplyDecimals(0.05,0.06));//output was 0.003 but math.round roundoff the answer resulting 0