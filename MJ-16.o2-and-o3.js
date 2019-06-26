/* Take a look at the following code:
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
Does the order that you assign (o3 = o2 or o2 = o3) matter? */
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(
  "When an object variable is copied – the reference is copied, the object is not duplicated.\n We can say that they store the same value\n just ONE value"
);
console.log(o2);
o2.foo = "mix";
console.log(o3);
console.log(
  "As you can see above, we changed the the key value of o2 and it affected o3 too"
);
console.log(
  "on the other hand, changing o1 wouldn't affect o3 because they are two separate variables"
);
console.log(o1);
o1.foo = "sum";
console.log(o1);
console.log(o3);
console.log("o3's value is still the same and o1 only affected itself");
console.log(
  "The assigning order always matters, so (o3 = o2) or (o2 = o3) would give us different results."
);
o3 = {};
o2 = o3;
console.log(o2);
console.log(
  "They still store the same key, but we just changed it by assigning o2 to o3"
);
