function getDateDayAndYear() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0');
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var year = now.getFullYear();
    return "".concat(month, "-").concat(day, "-").concat(year);
}
console.log(getDateDayAndYear());