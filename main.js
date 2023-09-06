"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        console.log("Hello, my name is ".concat(this.name, ", and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
exports.Person = Person;
var person = new Person("Alice", 30);
function greet(person) {
    console.log("Greetings, ".concat(person.name, "!"));
}
greet(person);
if (person.age >= 21) {
    console.log("".concat(person.name, " is of legal drinking age."));
}
else {
    console.log("".concat(person.name, " is not of legal drinking age."));
}
console.log("Counting from 1 to 5:");
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
var mixedArray = ["TypeScript", 2023, true];
console.log("Mixed Array:", mixedArray);
var message = "TypeScript Syntax";
console.log("Message: ".concat(message));
var num1 = 10;
var num2 = 5;
var sum = num1 + num2;
var product = num1 * num2;
console.log("Sum: ".concat(sum, ", Product: ").concat(product));
var myModule_1 = require("./myModule");
(0, myModule_1.sayHello)("Bob");
(0, myModule_1.sayHello)("World!");
