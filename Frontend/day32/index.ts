// export
export {};

// variables
var a = 10;
console.log(a);

var n: number = 10;
var s: string = "rubby";
var b: boolean = false;
var nul: null;

var n = 50;
console.log(n);

// Object

interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "Martin",
  age: 29,
};

console.log(user);

// Class

class App {
  printName() {
    console.log("Robert");
  }
}

const app = new App();
app.printName();

// Function

function add(a: number, b: number) {
  return a + b;
}

// console.log(`addition is ${add(1, "3")}`); // magic it still gives o/p in js file but in tsc it will give compilation error.
console.log(`addition is ${add(1, 3)}`);

