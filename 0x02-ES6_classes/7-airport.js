// Define a class named Airport
export default class Airport {
  // Constructor that accepts parameters name and code
  constructor(name, code) {
    // Set the name property
    this.name = name;
    // Set the code property
    this.code = code;
  }

  // Getter method for name
  get name() {
    return this._name;
  }

  // Setter method for name
  set name(value) {
    this._name = value;
  }

  // Getter method for code
  get code() {
    return this._code;
  }

  // Setter method for code
  set code(value) {
    this._code = value;
  }

  // Method that returns a string representation of the object
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
