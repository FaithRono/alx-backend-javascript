// Define a class named Car
export default class Car {
  // Constructor that accepts parameters brand, motor, and color
  constructor(brand, motor, color) {
    // Set the brand property
    this.brand = brand;
    // Set the motor property
    this.motor = motor;
    // Set the color property
    this.color = color;
  }

  // Getter method for brand
  get brand() {
    return this._brand;
  }

  // Setter method for brand
  set brand(value) {
    this._brand = value;
  }

  // Getter method for motor
  get motor() {
    return this._motor;
  }

  // Setter method for motor
  set motor(value) {
    this._motor = value;
  }

  // Getter method for color
  get color() {
    return this._color;
  }

  // Setter method for color
  set color(value) {
    this._color = value;
  }

  // Static getter method for Symbol.species
  static get [Symbol.species]() {
    // Return the class itself
    return this;
  }

  // Method to clone a car instance
  cloneCar() {
    // Get the Species from the constructor's Symbol.species
    const Species = this.constructor[Symbol.species];

    // Return a new instance of the Species
    return new Species();
  }
}
