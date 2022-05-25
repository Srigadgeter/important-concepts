// ********************** //
// Garbage Collection
// ********************** //

// Definition
// ----------
// JavaScript, utilize a form of automatic memory management known as garbage collection (GC).
// The purpose of a garbage collector is to monitor memory allocation and
// determine when a block of allocated memory is no longer needed and reclaim it
// It would release when the memory is not needed anymore

// Example
// -------
// example 1
const add = (a) => (b) => a + b;
const sum = add(10);
console.log("sum >>", sum(20)); // 30

// Garbage collector doesn't release memory of argument 'a' for later use
// because still the sum function is not invoked

// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
