//creating function of iccream
function icecream() {
    var icecream = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        icecream[_i] = arguments[_i];
    }
    //making that function to print for each icecream
    icecream.forEach(function (icecream) {
        //messaage that prints
        console.log("i really love ".concat(icecream, " icecream"));
    });
}
//for 4 icecreams
icecream("chocalate", "cheese cake", "vanilla", "molten");
icecream();
