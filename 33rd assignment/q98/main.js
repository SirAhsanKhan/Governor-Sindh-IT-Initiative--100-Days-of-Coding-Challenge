function daysUntilNewYear() {
    var today = new Date(); //aaj ki date
    var newYear = new Date(today.getFullYear() + 1, 0, 1); //ye aaj ka full year me +1 karta hai yani 2024 +1 = 2025 phir 0 yani january kionke month ka index 0 se start hota hai phir 1 yani 1st of january
    var difference = newYear.getTime() - today.getTime(); //ye new year ke time mai se aaj ke time ko minus krke answer milisecond mai deta hai
    var days = Math.round(difference / (1000 * 60 * 60 * 24)); //millie second ko multiply kra seconds se phir second ko minutes mai phir minutes ko ghnate and finally ghante to days
    return days;
}
console.log(daysUntilNewYear() + " days until new year");
