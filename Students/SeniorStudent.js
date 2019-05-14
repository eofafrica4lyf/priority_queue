const JuniorStudent = require('../Students/JuniorStudent');

const SeniorStudent = function (name,address,email,password) {
  JuniorStudent.call(this,name,address,email,password);
  this.cadre = 'SeniorStudent';
}
SeniorStudent.prototype = Object.create(JuniorStudent.prototype);
SeniorStudent.prototype.constructor = SeniorStudent;

module.exports = SeniorStudent;