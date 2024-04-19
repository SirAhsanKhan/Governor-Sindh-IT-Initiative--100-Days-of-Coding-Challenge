var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var sales1 = [40000, 55000, 118000];
var sales2 = [35000, 65000, 200000];
var bothsales = __spreadArray(__spreadArray([], sales1, true), sales2, true).sort(function (a, b) { return a - b; });
console.log(bothsales);
