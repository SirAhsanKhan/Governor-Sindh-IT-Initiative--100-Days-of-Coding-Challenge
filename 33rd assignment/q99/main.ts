function getNextBirthday(month : number , day : number ): Date{ 

    let today = new Date()
    let year = today.getFullYear();
    let birthday = new Date(year , month - 1 , day);

    if( birthday < today) {
        birthday.setFullYear( year + 1 )
    }
return birthday
}
let nextbirthday = getNextBirthday(12 ,29)
console.log("your next birthday is on " + nextbirthday.toLocaleDateString());