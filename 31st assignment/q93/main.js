function index(fruit) {
    var index = fruit.indexOf("banana");
    if (index == 1)
        fruit[index] = "kiwi";
}
var fruit = ["apple", "banana", "orange"];
console.log(index(fruit));
console.log(fruit);
