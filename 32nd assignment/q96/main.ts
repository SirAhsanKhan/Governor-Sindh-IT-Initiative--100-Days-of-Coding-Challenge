function calculateSum(numbers: number[]):number {
    return numbers.reduce((total , current)=> total + current,0)
}
const numbers = [1,5,8,0,4,-2,-9];
console.log(calculateSum(numbers));