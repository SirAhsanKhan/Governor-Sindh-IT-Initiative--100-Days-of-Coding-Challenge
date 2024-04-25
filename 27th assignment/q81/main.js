function logObjectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
logObjectProperties({
    make: "rolls royce",
    model: "FX",
    year: 2024,
    color: "black",
});
