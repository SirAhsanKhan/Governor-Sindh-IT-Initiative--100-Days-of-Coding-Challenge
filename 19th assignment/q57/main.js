var marks = [65, 88, 92, 100, 77, 32, 16];
var averageMarks = marks.reduce(function (total, mark) { return total + mark; }, 0) / marks.length; //here we use reduce method and have two values total which is initilize as 0 and grade which comes for an array "grades" total+grade means 0 + each element of an array atlast divided by array.lenght
console.log(averageMarks);
