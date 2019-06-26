/*Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

Don't cheat! Seriously - try it first. */
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(
  "by declaring a new variable (z) and initializing it with variable y's value, we made them share exactly the same items\n so z == y would return true "
);
console.log(z == y);
console.log(
  "However, y and x are totally two different variables having the same values\n but they are NOT equal"
);
console.log(y == x);
console.log(
  "since var x and var y are NOT equal, they cannot be IDENTICAL as well"
);
console.log(x === y);
console.log(
  "z == y would return TRUE because we initialized z directly with y\n but with var x, they don't actually share the same values\n like i said before different values same items"
);
console.log(z == x);
