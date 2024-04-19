function make_shirt(size:string = "extra large", message :string = "I love Typescript") {
    console.log(` making a ${size} T-shirt with the ${message} printed on it`);
}
make_shirt();
make_shirt("small");
make_shirt("medium","coding is life");