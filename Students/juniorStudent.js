const db = require('../db')

global.counter = 1;

const juniorStudent = function (name,address,email,password){
  this.name = name;
  this.address = address;
  this.email = email;
  this.password = password;
  this.borrowedBooks = [];
  this.studentId = counter;
  counter++;
  db.people.push({
    'name': this.name,
    'address': this.address,
    'email': this.email,
    'password': this.password,
    'borrowedBooks': this.borrowedBooks,
    'studentId': this.studentId
  });

}
// console.log(juniorStudent.getPrototypeOf());
// console.log(new juniorStudent('Ola','Lagos','ola@gmail.com','qwerty','J'));
module.exports = juniorStudent;