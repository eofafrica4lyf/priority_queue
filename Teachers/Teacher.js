const JuniorStudent = require('../Students/JuniorStudent');

const Teacher = function(name, address, email, password) {
  // inherit the constructor of the junior student
  JuniorStudent.call(this, name, address, email, password);
  // identify as a Teacher
  this.cadre = "Teacher";
};
// Inherit the prototype of the Junior Student
Teacher.prototype = Object.create(JuniorStudent.prototype);
Teacher.prototype.constructor = Teacher;

module.exports = Teacher;
