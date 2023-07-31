export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validation logic for name
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    // Validation logic for length
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;

    // Validation logic for students
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    // validation logic here
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(value) {
    // validation logic here
    if (typeof (value) !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(value) {
    // validation logic here
    if (!Array.isArray(value)) {
      throw new TypeError('students must be an array');
    }
    this._students = value;
  }
}
