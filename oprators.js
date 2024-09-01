// Arithmetic Operators
let x = 10;
let y = 4;
console.log("x + y = ", x + y);
console.log("x - y = ", x - y);
console.log("x * y = ", x * y);
console.log("x / y = ", x / y);
console.log("x ** y = ", x ** y);
console.log("x % y = ", x % y);
console.log("++x = ", ++x);
console.log("x++ = ", x++);
console.log("--x = ", --x);
console.log("x-- = ", x--);
console.log("x = ", x);

// Assignment Operators
let assignment = 1;
console.log("assignment+= 5", (assignment += 5));
console.log("assignment-= 5", (assignment -= 5));
console.log("assignment*= 5", (assignment *= 5));
console.log("assignment/= 5", (assignment /= 5));
console.log("assignment**= 5", (assignment **= 5));
console.log("assignment%= 5", (assignment %= 5));

// Comparison Operators
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);
console.log("comp1 > comp2 is ", comp1 > comp2);
console.log("comp1 < comp2 is ", comp1 < comp2);
console.log("comp1 >= comp2 is ", comp1 >= comp2);
console.log("comp1 <= comp2 is ", comp1 <= comp2);

// Logical Operators
let log1 = 5;
let log2 = 6;
console.log(log1 < log2 && log1 == 5);
console.log(log1 > log2 || log1 == 5);
console.log(!false);
console.log(!true);

// Ternary Operator
const prompt = require("prompt-sync")();
let marks = prompt("Enter your Marks : ");
console.log(marks > 33 ? "You are Pass" : "You are Fail");
