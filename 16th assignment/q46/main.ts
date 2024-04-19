let laptop  = {
    make: "Dell",
    model :"Latitude E5450",
    year  :"2020",
    //here "this" will diectly print the value assigned in object laptop so dont need to write laptop.make etc
    describe : function() {
        console.log(`this is ${this.model} made by ${this.make} in ${this.year}`)
    }
};
//using function to print a message
laptop.describe();
