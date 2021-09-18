"use strict";
exports.__esModule = true;
// variables
var a = 10;
console.log(a);
var n = 10;
var s = "rubby";
var b = false;
var nul;
var n = 50;
console.log(n);
var user = {
    name: "Martin",
    age: 29
};
console.log(user);
// Class
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.printName = function () {
        console.log("Robert");
    };
    return App;
}());
var app = new App();
app.printName();
// Function
function add(a, b) {
    return a + b;
}
// console.log(`addition is ${add(1, "3")}`); // magic it still gives o/p in js file but in tsc it will give compilation error.
console.log("addition is " + add(1, 3));
