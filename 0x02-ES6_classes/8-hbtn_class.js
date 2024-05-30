// Define a class named HolbertonClass
export default class HolbertonClass {
  // Constructor that accepts parameters size and location
  constructor(size, location) {
    // Set the size property
    this.size = size;
    // Set the location property
    this.location = location;
  }

  // Getter method for size
  get size() {
    return this._size;
  }

  // Setter method for size
  set size(value) {
    this._size = value;
  }

  // Getter method for location
  get location() {
    return this._location;
  }

  // Setter method for location
  set location(value) {
    this._location = value;
  }

  // Method that defines how the object is converted to a primitive value
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size; // Return the size when hint is 'number'
    }
    if (hint === 'string') {
      return this.location; // Return the location when hint is 'string'
    }
    return this; // Return the object itself for other hints
  }
}
