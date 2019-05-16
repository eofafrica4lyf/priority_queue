const JuniorStudent = require("../Students/JuniorStudent");

const SeniorStudent = function(name, address, email, password) {
  // inherit the constructor of the junior student
  JuniorStudent.call(this, name, address, email, password);
  // identify as a Senior Student
  this.cadre = "SeniorStudent";
};
// Inherit the prototype of the Junior Student class
SeniorStudent.prototype = Object.create(JuniorStudent.prototype);
SeniorStudent.prototype.constructor = SeniorStudent;

module.exports = SeniorStudent;
