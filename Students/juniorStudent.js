global.counter = 1;
const Student = function (name,address,email,password){
  this.name = name;
  this.address = address;
  this.email = email;
  this.password = password;
  this.borrowedBooks = [];
  this.studentId = counter;
  counter++;

}

module.exports = Student;