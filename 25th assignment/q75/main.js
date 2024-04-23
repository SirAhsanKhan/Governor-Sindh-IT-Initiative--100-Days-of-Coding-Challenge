function useCompoundOperations() {
    var a = 4;
    console.log("initial value is ", a);
    a += 4;
    console.log("after addition of 4:", a);
    a -= 7;
    console.log("after subtraction of 7:", a);
    a *= 10;
    console.log("after mutiplication of 10 ", a);
    a /= 2;
    console.log("after division of 2:", a);
}
useCompoundOperations();
