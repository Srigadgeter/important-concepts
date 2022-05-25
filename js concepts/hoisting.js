// ********************** //
// Hoisting
// ********************** //

// Definition
// ----------
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
// variables or classes to the top of their scope, prior to execution of the code

// Other important points
// ----------------------
// 1. JavaScript only hoists declarations, not initializations
// 2. Classes defined using a class declaration are hoisted,
// which means that JavaScript has a reference to the class.
// However the class is not initialized by default, so any code
// that uses it before the line in which it is initialized is executed will throw a ReferenceError

// Examples
// --------
// Variable hoisting
// -----------------
// Example 1
console.log(num1); // Returns 'undefined' from hoisted var declaration (not 1)
var num1; // Declaration
num1 = 1; // Initialization
console.log(num1); // Returns 6 after the line with initialization is executed

// Example 2
console.log(num2); // Returns 'undefined' from hoisted var declaration (not 2)
var num2 = 2; // Initialization and declaration.
console.log(num2); // Returns 6 after the line with initialization is executed

// Example 3
console.log(num3); // Throws ReferenceError exception - the interpreter doesn't know about `num3`.
num3 = 3; // Initialization

// ex 4
console.log(a); // undefined
{
  var a = 10;
}

// ex 5
console.log(a); // error: TDZ (Temporal Dead Zone)
{
  let a = 10;
}

// ex 6
console.log(a); // error: TDZ
let a = 10;

// Function hoisting
// -----------------
// One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

// Example 1
catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}
// The result of the code above is: "My cat's name is Tiger"

// References
// ----------
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// https://learn.devkode.io/#/javascript/hoisting/guides
