// ********************** //
// Function Composition
// ********************** //

// Definition
// ----------
// Function composition is an approach where the result of one function is passed on to the next function,
// which is passed to another until the final function is executed for the final result.
// Function compositions can be composed of any number of functions

// Examples
// --------
const double = (x) => x * 2;
const square = (x) => x * x;

// Example 1 - Tradition approach
var output1 = square(double(2));
console.log(output1);

// Example 2 - compose fns
const compose =
  (...fns) =>
  (initialVal) =>
    fns.reduceRight((prevVal, fn) => fn(prevVal), initialVal);
var output2 = compose(square, double)(2);
console.log(output2);

// Example 3 - pipe fns
const pipe =
  (...fns) =>
  (initialVal) =>
    fns.reduce((prevVal, fn) => fn(prevVal), initialVal);
var output3 = compose(square, double)(2);
console.log(output3);

// References
// ----------
// https://www.educative.io/edpresso/function-composition-in-javascript
