const db = require('../db')
const Teacher = require('../Teachers/Teacher');

const Librarian = function (name,address,email,password){
  Teacher.call(this,name,address,email,password);
  this.cadre = 'Librarian';
}

Librarian.prototype = Object.create(Teacher.prototype);
Librarian.prototype.constructor = Librarian;

// console.log(new Librarian('Admin','Library','admin@gmail.com','jyndiqhxqi'));

module.exports = Librarian;