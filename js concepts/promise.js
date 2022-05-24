// ********************** //
// Promise
// ********************** //

// Definition
// ----------
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// Example
// -------
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise.then(
  (res) => console.log("res >>", res),
  (err) => console.log("err >>", err)
);

myPromise
  .then((res) => console.log("res >>", res))
  .catch((err) => console.log("err >>", err)); // catch block works at any rejections

/* 
myPromise
  .then(handleResolvedA)
  .then(handleResolvedB)
  .then(handleResolvedC)
  .catch(handleRejectedAny);
*/

// Methods
// -------
// 1. all(iterable) - Wait for all promises to be resolved, or for any to be rejected
// 2. allSettled(iterable) - Wait until all promises have settled (each may resolve or reject)
// 3. any(iterable) - Wait until any of the promises is resolved
// 4. race(iterable) - Wait until any of the promises is fulfilled or rejected

// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://javascript.info/promise-basics
