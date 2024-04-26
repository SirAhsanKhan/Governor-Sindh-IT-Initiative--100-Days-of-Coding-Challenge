function index<T>(fruit: string[]): void {
  const index = fruit.indexOf("banana");
  if (index == 1) fruit[index] = "kiwi";
}

const fruit: string[] = ["apple", "banana", "orange"];
console.log(index(fruit));
console.log(fruit);
