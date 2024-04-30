function Age(age: number): string {
  if (age < 13) {
    return "child";
  } else if (age <= 19) {
    return "teenager";
  } else {
    return "adult";
  }
}
console.log(Age(16));
