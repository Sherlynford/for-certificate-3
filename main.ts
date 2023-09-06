class Person {
    constructor(public name: string, public age: number) {}
    introduce(): void {
      console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    }
  }
  export { Person };
  const person = new Person("Alice", 30);
  function greet(person: Person): void {
    console.log(`Greetings, ${person.name}!`);
  }
  greet(person);
  if (person.age >= 21) {
    console.log(`${person.name} is of legal drinking age.`);
  } else {
    console.log(`${person.name} is not of legal drinking age.`);
  }
  console.log("Counting from 1 to 5:");
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  const mixedArray: (string | number | boolean)[] = ["TypeScript", 2023, true];
  console.log("Mixed Array:", mixedArray);
  const message: string = "TypeScript Syntax";
  console.log(`Message: ${message}`);
  const num1: number = 10;
  const num2: number = 5;
  const sum: number = num1 + num2;
  const product: number = num1 * num2;
  console.log(`Sum: ${sum}, Product: ${product}`);
  import { sayHello } from "./myModule";
  sayHello("Bob");
  sayHello("World!");
  