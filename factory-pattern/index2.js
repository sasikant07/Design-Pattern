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
