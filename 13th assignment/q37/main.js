function make_shirt(size, message) {
    if (size === void 0) { size = "extra large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log(" making a ".concat(size, " T-shirt with the ").concat(message, " printed on it"));
}
make_shirt();
make_shirt("small");
make_shirt("medium", "coding is life");
