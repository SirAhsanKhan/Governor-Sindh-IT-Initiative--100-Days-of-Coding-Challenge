function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextbirthday = getNextBirthday(12, 29);
console.log("your next birthday is on " + nextbirthday.toLocaleDateString());
