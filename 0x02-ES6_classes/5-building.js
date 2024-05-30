// Define a class named Building
class Building {
  // Constructor that accepts a parameter sqft
  constructor(sqft) {
    // Check if the constructor is called directly (not by a subclass)
    if (this.constructor !== Building) {
      // Check if the subclass overrides the evacuationWarningMessage method
      if (typeof this.evacuationWarningMessage !== 'function') {
        // Throw an error if the subclass does not override the method
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    // Set the sqft property
    this.sqft = sqft;
  }

  /**
   * Setter method for sqft
   * @param {Number} sqft
   */
  set sqft(sqft) {
    // Check if sqft is a number, throw error if not
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    // Set the private _sqft variable
    this._sqft = sqft;
  }

  // Getter method for sqft
  get sqft() {
    return this._sqft;
  }
}

// Export the Building class as the default export
export default Building;
