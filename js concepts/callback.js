// ********************** //
// Callback
// ********************** //

// Definition
// ----------
// A function that is passed into another function is called a callback
// A callback function also known as a higher-order function

// Example
// -------
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name");
  callback(name);
}

processUserInput(greeting);

// References
// ----------
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
// https://learn.devkode.io/#/javascript/callback/guides
