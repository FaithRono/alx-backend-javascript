// Import the Car class from './10-car'
import Car from './10-car';

// Define a class named EVCar that extends the Car class
export default class EVCar extends Car {
  // Constructor that accepts parameters brand, motor, color, and range
  constructor(brand, motor, color, range) {
    // Call the super constructor with brand, motor, and color
    super(brand, motor, color);
    // Set the range property
    this.range = range;
  }

  // Getter method for range
  get range() {
    return this._range;
  }

  // Setter method for range
  set range(value) {
    this._range = value;
  }

  // Method to clone an EVCar instance
  cloneCar() {
    // Get the Species from the super class's constructor's Symbol.species
    const Species = super.constructor[Symbol.species];

    // Return a new instance of the Species
    return new Species();
  }
}
