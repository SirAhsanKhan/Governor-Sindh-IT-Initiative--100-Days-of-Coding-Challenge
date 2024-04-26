function tocheck(Nan:any) :boolean{
    return isNaN(Nan)
    
}
console.log(tocheck("hehe"))//true cause this is not a number
console.log(tocheck(77))//false cause it is a number

console.log(tocheck("tru"))//true cause it is also not a number