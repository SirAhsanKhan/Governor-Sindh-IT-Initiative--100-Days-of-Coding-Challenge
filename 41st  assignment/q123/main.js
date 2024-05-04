function breakWhenVowelFound(str) {
    var vowels = "aeiouAEIOU";
    i = 1;
    var suffix = "th";
    if (i === 1) {
        suffix = "th";
    }
    else if (i === 2) {
        suffix = "nd";
    }
    else if (i === 3) {
        suffix = "rd";
    }
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("".concat(i).concat(suffix, " vowel has been found ").concat(char));
            i++;
            continue;
        }
        console.log(char);
    }
}
breakWhenVowelFound("let s go and buy phones");
