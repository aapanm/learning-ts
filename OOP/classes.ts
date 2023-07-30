class Vehicle {
  drive(): void {
    console.log("vrrom.. vroom..");
  }

  honk(): void {
    console.log("beep.. beep..");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
