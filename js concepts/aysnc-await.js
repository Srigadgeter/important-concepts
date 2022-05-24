// ********************** //
// Async await
// ********************** //

// Definition
// ----------
// The async keyword is used to define an asynchronous function.
// The await keyword is used to pause async function execution until a Promise is fulfilled,
// that is resolved or rejected, and resumes execution of the async function

// Example
// -------
// resolve/reject example
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isResolve = Math.floor(Math.random() * 2);
    if (isResolve) resolve("I'm resolved");
    else reject("I'm rejected");
  }, 3000);
});

async function fn() {
  try {
    const result = await promise; // wait until the promise resolves/rejects
    console.log("result >>", result);
  } catch (err) {
    console.log("err >>", err);
  }
}

fn();

// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// https://javascript.info/async-await
