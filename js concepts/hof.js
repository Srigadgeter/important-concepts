// ***************************** //
// Higher Order Function (HOF)
// ***************************** //

// Definition
// ----------
// A higher order function is a function that takes a function as an argument and/or returns a function

// Example
// -------
function greetTextFormatter(name) {
  return "Hello " + name + "!";
}

function greet(name) {
  return greetTextFormatter(name);
}

const greet1 = greet("JS");
console.log(greet1);
const greet2 = greet("React");
console.log(greet2);

// References
// ----------
// https://javascript.plainenglish.io/functional-programming-higher-order-function-hof-aaa46bb444bb
