type shape = {
  kind: "circle" | "square";
  radius?;
  height?;
  width?;
};

let circle: shape = {
  kind: "circle",
  radius: 10,
};

let square: shape = {
  kind: "square",
  height: 12,
  width: 12,
};
console.log(circle);
console.log(square);
