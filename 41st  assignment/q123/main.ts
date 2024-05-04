
function breakWhenVowelFound(str : string):void{
    const vowels = "aeiouAEIOU"
    i = 1
    let suffix = "th"
    if(i === 1){
        suffix="th"
    }
    else if(i === 2){
        suffix="nd"
    }
    else if(i === 3){
        suffix="rd"
    }
    for (const char of str){
       if (vowels.includes(char)){
    console.log(`${i}${suffix} vowel has been found ${char}`)
    i++
    continue;
}
console.log(char)
}
}
breakWhenVowelFound("let s go and buy phones")