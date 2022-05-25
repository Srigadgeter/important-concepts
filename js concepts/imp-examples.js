// example 1
var arr = [10, 20, 30];
var tempArr = arr;

tempArr[1] = 200;
console.log("arr >>", arr); // [10, 200, 30]

arr = [1, 2, 3]; // assignment operator would change the reference
console.log("arr >>", arr); // [1, 2, 3]
console.log("tempArr >>", tempArr); // [10, 200, 30]

// --------------------------------------------------
