let countries = new Map<string, string>(); ///code from q 112

countries.set("Pakistan", "Islamabad"); ///code from q 112
countries.set("USA", "NewYork"); ///code from q 112
countries.set("India", "NewDehli"); ///code from q 112
countries.set("canada", "ottawa"); ///code from q 112

console.log(countries);
//q113 start
function toCheckIfCountryExist(countries: Map<string, string>): void {
  if (countries.has("canada")) {
    console.log(`The capital of Canada is ${countries.get("canada")}`);
  } else console.log("canada does not exist on Map");
}
toCheckIfCountryExist(countries);
