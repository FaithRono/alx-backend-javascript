// Define a class named HolbertonClass
export class HolbertonClass {
  // Constructor that accepts parameters year and location
  constructor(year, location) {
    // Set the year property
    this._year = year;
    // Set the location property
    this._location = location;
  }

  // Getter method for year
  get year() {
    return this._year;
  }

  // Getter method for location
  get location() {
    return this._location;
  }
}

// Define a class named StudentHolberton
export class StudentHolberton {
  // Constructor that accepts parameters firstName, lastName, and holbertonClass
  constructor(firstName, lastName, holbertonClass) {
    // Set the firstName property
    this._firstName = firstName;
    // Set the lastName property
    this._lastName = lastName;
    // Set the holbertonClass property
    this._holbertonClass = holbertonClass;
  }

  // Getter method for fullName
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter method for holbertonClass
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Getter method for fullStudentDescription
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Create instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Create instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Create a list of students
const listOfStudents = [student1, student2, student3, student4, student5];

// Export the list of students as default
export default listOfStudents;
