class Vehicle {
  /*
	protected methods can only be accessed by
	child classes
	*/
  protected drive(): void {
    console.log("vrrom.. vroom..");
  }
}

class Car extends Vehicle {
  /*
	private methods can be only accessed 
	inside the class
	*/
  private honk(): void {
    console.log("beep.. beep..");
  }

  public startDriving(): void {
    /*
	drive class is implemented in the parent class
	but as protected, so can be accessed here
	*/
    this.drive();

    /*
	honk class is private, so can only be accessed inside
	the class
	*/
    this.honk();
  }
}

const car = new Car();
/*
all public classes can be accessed
from anywhere
*/
car.startDriving();
