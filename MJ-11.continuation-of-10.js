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
