class Stark {
  static castle: string = "Winterfell";
  // default value
  starkName: string = "Brandon";
  // cannot be optional
  saying: string;

  constructor() {
    this.saying = "Winterfell";
  }

  hello(person: string) {
    console.log("Hello, " + person);
  }

}

var ned = new Stark();
ned.saying = "Winter is comming";
// get static variable
console.log(Stark.castle);
ned.hello("Robert");