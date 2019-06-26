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
