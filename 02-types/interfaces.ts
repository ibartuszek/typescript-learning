interface StarkInterface {
  name: String;
  // optional property
  age?: number;
}

function printName(stark : StarkInterface) {
  console.log(stark.name);
}


printName({name: "Eddard"});
printName({name: "Joe"});