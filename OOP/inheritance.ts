class Vehicle {
  drive(): void {
    console.log("vrrom.. vroom..");
  }

  honk(): void {
    console.log("beep.. beep..");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("chugga.. chugga..");
  }
}

const car = new Car();

/* 
honk method of Parent class vehicle is accessed, 
outputs "beep.. beep"
*/
car.honk();

/*
parent method is overridden by child class
outputs "chugga.. chugga.."
*/
car.drive();
