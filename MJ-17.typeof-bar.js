/*What does the following code return? (And why?)
let bar = 42;
typeof typeof bar; */

let bar = 42;
console.log(typeof bar);
console.log(
  "variable bar's value is a number\n so the typeof bar's output would be a number \nbut typeof typeof always returns a string"
);
console.log(typeof typeof bar);
