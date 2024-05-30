class Currency {
  // Constructor to initialize code and name
  constructor(code, name) {
    this.code = code; // Set the code
    this.name = name; // Set the name
  }

  /**
   * Setter method for code
   * @param {String} code
   */
  set code(code) {
    // Check if code is a string, throw error if not
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a String');
    }
    this._code = code; // Set the private _code variable
  }

  // Getter method for code
  get code() {
    return this._code;
  }

  /**
   * Setter method for name
   * @param {String} name
   */
  set name(name) {
    // Check if name is a string, throw error if not
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a String');
    }
    this._name = name; // Set the private _name variable
  }

  // Getter method for name
  get name() {
    return this._name;
  }

  // Method to display the full currency (name and code)
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

// Export the Currency class as the default export
export default Currency;
