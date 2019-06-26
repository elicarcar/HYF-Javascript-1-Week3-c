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
