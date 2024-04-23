function swapvariabel() {
    var a = 5, b = 10;
    console.log("before swap : a =", a, " b =", b);
    var temporary = a;
    a = b;
    b = temporary,
        console.log("after swap:a =", a, "b =", b);
}
swapvariabel();
