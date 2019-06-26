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
