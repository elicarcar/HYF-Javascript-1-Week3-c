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
