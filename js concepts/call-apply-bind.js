// ****************************** //
// call / apply / bind methods
// ****************************** //

// Definition
// ----------
// 1. Call invokes the function and allows you to pass in arguments one by one
// 2. Apply invokes the function and allows you to pass in arguments as an array
// 3. Bind returns a new function, allowing you to pass in a this array and any number of arguments
// (ie,. bind method would return the function expression)

// Examples
// --------

var person1 = { firstName: "js", lastName: "world" };
var person2 = { firstName: "react", lastName: "followers" };

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

// passing person1 & person2 as the instance/reference, so it would be called in the place of keyword 'this'

// 1. Call
say.call(person1, "Hello"); // Hello js world
say.call(person2, "Hello"); // Hello react followers

// 2. Apply
say.apply(person1, ["Hello"]); // Hello js world
say.apply(person2, ["Hello"]); // Hello react followers

// 3. Bind

var sayHelloJS = say.bind(person1);
var sayHelloReact = say.bind(person2);

var sayHello = say.bind(); // passing no instance means keyword 'this' would act itself as a window's instance

sayHelloJS(); // Hello js world
sayHelloReact(); // Hello react followers

sayHello(); // Hello undefined undefined
// This above statement returns undefined because window object doesn't not have firstName & lastName variables
// (ie,. file doesn't have global variables firstName & lastName)

// ***********
// When we have to use Apply/Call/Bind?

// Call and apply are pretty interchangeable. Just decide whether it's easier to send in an array
// or a comma separated list of arguments
// Call is for comma (separated list) and Apply is for Array
// Call and Apply execute the current function immediately

// Bind is a bit different. It returns a new function.
// Bind is great for a lot of things. We can use it to curry functions like in the above example.
// We can take a simple hello function and turn it into a helloJS or helloReact.
// We can also use it for events (ie,. onClick, onChange, etc) where we don't know when they'll be fired
// but we know what context we want them to have.
// ***********

// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#instance_methods
// https://learn.devkode.io/#/javascript/call-bind-apply/guides
