// to generate helloWorld.js: tsc helloWorld.ts

// console.log("Hello world");

function hello(string : String) {
  console.log("Hello " + string)
}

hello("Jon");

// compile error
// hello(1);