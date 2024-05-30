// Import the Building class from './5-building'
import Building from './5-building';

// Define a class named SkyHighBuilding that extends Building
export default class SkyHighBuilding extends Building {
  // Constructor that accepts parameters sqft and floors
  constructor(sqft, floors) {
    // Call the superclass constructor with the sqft parameter
    super(sqft);
    // Set the floors property
    this.floors = floors;
  }

  // Getter method for floors
  get floors() {
    return this._floors;
  }

  // Setter method for floors
  set floors(value) {
    this._floors = value;
  }

  // Method that returns an evacuation warning message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
