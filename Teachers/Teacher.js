const JuniorStudent = require('../Students/JuniorStudent');

const Teacher = function (name,address,email,password) {
  JuniorStudent.call(this,name,address,email,password);
  this.cadre = 'Teacher';
}
Teacher.prototype = Object.create(JuniorStudent.prototype);
Teacher.prototype.constructor = Teacher;

module.exports = Teacher;
