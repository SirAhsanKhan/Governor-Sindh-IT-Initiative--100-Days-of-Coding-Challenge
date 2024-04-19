var laptop = {
    make: "Dell",
    model: "Latitude E5450",
    year: "2020",
    describe: function () {
        console.log("this is ".concat(this.model, " made by ").concat(this.make, " in ").concat(this.year));
    }
};
laptop.describe();
