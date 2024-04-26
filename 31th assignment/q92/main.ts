function toRemoveAnElement<T>(arr :T[]): T| undefined {
return arr.pop()
}
let fruits = ["cherry","apple","banana"]
console.log(toRemoveAnElement(fruits))
console.log(fruits)