// ********************** //
// Pure Function
// ********************** //

// Definition
// ----------
// Pure function is a function that always return same result if same arguments are passed.
// It doesn't have any state. It only depends on arguments

// Example
// -------
function printName(name) {
  return "Hello " + name + "!";
}

console.log(printName("JS"));
console.log(printName("JS"));
console.log(printName("React"));
console.log(printName("Redux"));

// References
// ----------
// https://www.geeksforgeeks.org/pure-functions-in-javascript
