//String Replacement
console.log('Strings!');
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let comma = /,/gi;
console.log(myString.replace(comma, ' '));

//Array Manipulation
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0,'meerkat');
console.log('The new value of my array is 4.')
console.log(favoriteAnimals);
console.log('The Array has a length of ' + favoriteAnimals.length + '.');
favoriteAnimals.splice(-2, 1);
console.log(favoriteAnimals);
favoriteAnimals.indexOf('meerkat');
console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat'));
© 2019 GitHub, Inc.


//MJ-1.three-arguments
const threeArguments = (x, y, z) => {
  let totalSum = x + y - z;
  return totalSum;
};
console.log(threeArguments(5, 2, 9));

//MJ-2.colorCar
const colorCar = (str) => {
let color = str;
console.log('This car is ' + color + ' color.');
}
colorCar('black');

//MJ-3.Object-as-Parameter
const user01 = {
  name: "Eli",
  surname: "Carcar",
  job: "student"
};

const user02 = {
  name: "Hasan",
  surname: "Karadirek",
  job: "CEO"
};

const parameterObj = Object => {
  console.log(Object);
};

parameterObj(user02);

//MJ-4.vehicleType
/*Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. 
And prints 'a blue motorbike' for example when called as vehicleType("blue", 2) */

const vehicleType = (color, vehicle) => {
  if (vehicle == 1) {
    vehicle = " car";
    console.log("a " + color + vehicle);
  }
  if (vehicle == 2) {
    vehicle = " motorbike";
    console.log("a " + color + vehicle);
  }
  if (vehicle == 3) {
    vehicle = " bus";
    console.log("a " + color + vehicle);
  }
};
vehicleType("blue", 2);

//MJ-5.without-if-statement
/*Can you write the following without the if statement, but with just as a single line with console.log(...);?*/

console.log(3 === 3 ? "Yes" : "no");

//MJ-6.vehicleType-vers-2
/*Create a function called vehicle, like before, 
but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'*/

const vehicleType = (color, age, vehicle) => {
  if (age == 1) {
    age = " used ";
  }
  if (vehicle == 5) {
    vehicle = "car";
  }
  return "a " + color + age + vehicle;
};
console.log(vehicleType("blue ", 1, 5));

//MJ-7&8 List-of-vehicles
const vehicles = ["motorbike", "car", "bus", "plane", "caravan"];
const thirdElement = vehicles[2];
console.log(thirdElement);


//MJ-9.change-func-of-vehicle
/* Change the function vehicle to use the list of question 7. 
So that vehicle("green", 3, 1) prints "a green new bike". */
const vehicleType = (color, age, vehicle) => {
  if (vehicle == 1) {
    vehicle = " bike";
  } else if (vehicle == 2) {
    vehicle = " car";
  } else if (vehicle == 3) {
    vehicle = " motorbike";
  } else if (vehicle == 4) {
    vehicle = " plane";
  }
  if (age == 3) {
    age = "new";
  }
  if (age == 1) {
    age = "used";
  }

  return "a " + color + age + vehicle;
};
console.log(vehicleType("green ", 3, 1));

//MJ-10.advertisement
/*Use the list of vehicles to write an advertisement. 
So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". 
(Hint: use a for loop.)*/

const myVehicles = ["car", "motorbike", "caravan", "bike"];

for (let i = 0; i < myVehicles.length; i++) {
  console.log(
    "Amazing Joe's Garage, we service " +
      myVehicles[i++] +
      "s" +
      ", " +
      myVehicles[i++] +
      "s" +
      ", " +
      myVehicles[i++] +
      "s " +
      "and " +
      myVehicles[i++] +
      "s" +
      "."
  );
}

//MJ-11.continuation-of-10
/* What if you add one more vehicle to the list, 
can you have that added to the advertisement without changing the code for question 10? */
console.log(
  "Not the code but i still have to add something to console.log part"
);
const myVehicles = ["car", "motorbike", "caravan", "bike", "scooter"];

for (let i = 0; i < myVehicles.length; i++) {
  console.log(
    "Amazing Joe's Garage, we service " +
      myVehicles[i++] +
      "s" +
      ", " +
      myVehicles[i++] +
      "s" +
      ", " +
      myVehicles[i++] +
      "s" +
      ", " +
      myVehicles[i++] +
      "s " +
      "and " +
      myVehicles[i++] +
      "s" +
      "."
  );
}

//MJ-12.an-empty-onj
const newObj = {};
console.log("Or..");
const myNewObject = new Object();


//MJ-13.teacher-obj
const myHyfTeachers = {
  html_Css_Cli: ["Phillip", "Rob", "Igor"],
  javascript1: ["Nick"]
};

//MJ-14.obj-assign
/* Add a property to the object you just created that contains the languages that they have taught you*/
const myHyfTeachers = {
  html_Css_Cli: ["Phillip", "Rob", "Igor"],
  javascript1: "Nick"
};
console.log(myHyfTeachers);

const languages = {
  markupLanguage: "Hyper-Text-Markup-Language",
  programmingLanguage: "JavaScript"
};
Object.assign(myHyfTeachers, languages);
console.log(myHyfTeachers);

//MJ-15.equality-of-two-arrays
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

//MJ-16.o2-and-o3
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

//MJ-17.typeof-bar
/*What does the following code return? (And why?)
let bar = 42;
typeof typeof bar; */

let bar = 42;
console.log(typeof bar);
console.log(
  "variable bar's value is a number\n so the typeof bar's output would be a number \nbut typeof typeof always returns a string"
);
console.log(typeof typeof bar);


