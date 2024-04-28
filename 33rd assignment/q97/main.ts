function getDateDayAndYear(): string {
    const now =  new Date();
    let day = String(now.getDate()).padStart(2,'0')//here if the day is single character like 1-9 padstart wil add 0 before to make its double digit like 01-09

    let month = String(now.getMonth() + 1).padStart(2,'0') //here the month start with index 0 like january =0  feb = 1 and dec= 11 but we need to start from 1 so we add 1 to whatever the month is so if it was dec original will say 11 and we ad 1 so it eaquals 12 

    let year = now.getFullYear();

    return `${month}-${day}-${year}`
}
console.log(getDateDayAndYear())