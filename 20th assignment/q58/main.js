function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var result = scores.reduce(function (total, score) { return total + score; }, 0);
    return result / scores.length;
}
console.log(averageScore(100, 34, 556, 78, 1));
