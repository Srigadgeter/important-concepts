// ********************** //
// Closure
// ********************** //

// Definition
// ----------
// A closure is an inner function that has access to the outer (enclosing) function’s variables

// The closure has three scope chains:
// 1. It has access to its own scope (variables defined between its curly brackets)
// 2. It has access to the outer function’s variables
// 3. It has access to the global variables

// Examples
// --------
// Example 1
function outerFn() {
  var outer = "outer";
  return function innerFn() {
    var inner = "inner";
    console.log("concat >>", outer, inner);
  };
}

outerFn()();

// Example 2 (Closure and IIFE)
var counter = (function () {
  var count = 0;
  return function () {
    count++;
    console.log(count);
  };
})();

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

// The self-invoking function only runs once. It sets the variable 'count' to zero (0), and returns a function expression
// The variable 'count' became private variable now
// The variable 'count' is protected by the scope of the anonymous function, and can only be changed using the counter function

// A closure is a function having access to the parent scope, even after the parent function has closed

// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// https://learn.devkode.io/#/javascript/closure/guides
// https://www.w3schools.com/js/js_function_closures.asp
