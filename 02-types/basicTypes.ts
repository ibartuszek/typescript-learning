var anyExample : any = 1;
anyExample = "Robb";

var exampleBoolean : boolean = false;

var exampleNumber : number = 5;

var exmpleString : string = "Brian";

var arrayOfStrings : string[] = ["John", "Rickon", "Arya"];

enum Starks {Jon, Bran, Eddard, Catlyn}
console.log(Starks.Bran);

function getName() : string {
  return "Bran";
}

function withoutReturn() : void {
  console.log("Nothing");
}