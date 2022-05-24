// *********************************************** //
// Immediately Invoked Function Expression (IIFE)
// *********************************************** //

// Definition
// ----------
// IIFE stands for Immediately Invoked Function Expressions
// IIFE is a function that executes immediately after it’s created

// Usage
// -----
// The primary reason to use an IIFE is to obtain data privacy. Because
// JavaScript's var scopes variables to their containing function,
// any variables declared within the IIFE cannot be accessed by the outside world

// Syntax (6 types)
// ------
(function () {
  /* logic here */
})();
(function () {
  /* logic here */
})();
!(function () {
  /* logic here */
})();
~(function () {
  /* logic here */
})();
+(function () {
  /* logic here */
})();
-(function () {
  /* logic here */
})();

// Examples
// --------
(function () {
  console.log("a");
})();
(function () {
  console.log("b");
})();
!(function () {
  console.log("c");
})();
~(function () {
  console.log("d");
})();
+(function () {
  console.log("e");
})();
-(function () {
  console.log("f");
})();

// References
// ----------
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// https://learn.devkode.io/#/javascript/iife/guides
