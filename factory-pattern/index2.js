/*
The Factory pattern provides an interface for creating objects, 
but allows subclasses or a central "factory" function 
to alter the type of objects that will be created. 
It hides the complex logic of instantiation.

Use Case: When you need to generate different objects 
that share the same structure but have different properties 
  (e.g., creating different types of UI components or game enemies).
*/
  
class Car {
  constructor() { this.type = "Car"; this.wheels = 4; }
}

class Truck {
  constructor() { this.type = "Truck"; this.wheels = 6; }
}

class VehicleFactory {
  createVehicle(type) {
    switch(type) {
      case 'car': return new Car();
      case 'truck': return new Truck();
      default: return null;
    }
  }
}

const factory = new VehicleFactory();
const myRide = factory.createVehicle('truck');
