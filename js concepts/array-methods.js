// ********************** //
// Array Methods
// ********************** //

// Definition
// ----------
// map() - Creates a new array with the result of calling a function for each array element
// forEach() - Calls a function for each array element
// reduce() - Reduce the values of an array to a single value (going left-to-right)
// filter() - Creates a new array with every element in an array that pass a test
// etc,.

// Examples
// --------
const numbers = [3, 20, 65, 44, 4, 12];

// map
const newArr = numbers.map((item) => item * 10);
console.log("numbers >>", numbers, "newArr >>", newArr);

// forEach
numbers.forEach((item) => console.log(item * 2));

// reduce - example1
const sum = numbers.reduce((prevValue, currValue) => prevValue + currValue); // sum of all numbers
console.log("sum >>", sum);

// reduce - example2
const initialValue = numbers[0];
const max = numbers.reduce(
  (prevValue, currValue) => (prevValue > currValue ? prevValue : currValue),
  initialValue
); // max out of all numbers
console.log("max >>", max);

// filter
const filteredValues = numbers.filter((item) => item > 50);
console.log("filtered values >>", filteredValues);

// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#static_methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
// https://www.w3schools.com/jsref/jsref_obj_array.asp
