let sales1  = [40000, 55000,118000];
let sales2= [35000,65000 , 200000];

let bothsales = [...sales1 ,...sales2].sort((a , b) => a - b);
console.log(bothsales);