function CompareIfLowercase(str:string , str2:string):boolean{
    
    return str.toLowerCase() === str2.toLowerCase()
}
console.log(CompareIfLowercase("HELLO" , "hello") )
console.log(CompareIfLowercase("HELLOA" , "hello") )