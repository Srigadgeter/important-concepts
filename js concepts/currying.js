// ********************** //
// Currying
// ********************** //

// Definition
// ----------
// Currying is a transformation of function callable from f(arg1, arg2, arg3) to f(arg1)(arg2)(arg3)

// Example
// -------
// From
function sum(a, b) {
  console.log("sum >>", a + b);
}
sum(1, 2);

// To
function currySum(a) {
  return function (b) {
    console.log("sum >>", a + b);
  };
}
currySum(1)(2);

// References
// ----------
// https://javascript.info/currying-partials
// https://learn.devkode.io/#/javascript/currying/guides
