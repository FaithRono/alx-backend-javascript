class HolbertonCourse {
  // Constructor with parameters name, length, and students
  constructor(name, length, students) {
    // Initialize instance variables
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Setter method for name
   * @param {String} name
   */
  set name(name) {
    // Check if name is a string, throw error if not
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // Set the private _name variable
    this._name = name;
  }

  // Getter method for name
  get name() {
    return this._name;
  }

  /**
   * Setter method for length
   * @param {Number} length
   */
  set length(length) {
    // Check if length is a number, throw error if not
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    // Set the private _length variable
    this._length = length;
  }

  // Getter method for length
  get length() {
    return this._length;
  }

  /**
   * Setter method for students
   * @param {Array} students
   */
  set students(students) {
    // Check if students is an Array, throw error if not
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }

  // Getter method for students
  get students() {
    return this._students;
  }
}

// Export the HolbertonCourse class as the default export
export default HolbertonCourse;
