function RateOfaCar(Price: string): void {
  switch (Price) {
    case "1cr":
      console.log("Expensive");
      break;
    case "50lac":
      console.log("High");
      break;
    case "30lac":
      console.log("good");
      break;
    case "20lac":
      console.log("fair");
      break;
    case "10lac":
      console.log("cheap");
      break;
    default:
      console.log("Invalid Price");
      break;
  }
}
RateOfaCar("1cr")