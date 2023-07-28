export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name; // string
    this._length = length; // number
    this._students = students; // array
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    // validation logic here if needed
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
    // validation logic here if needed
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
    // validation logic here if needed
    if (!Array.isArray(value)) {
      throw new TypeError('students must be an array');
    }
    this._students = value;
  }
}
