const db = require('../db')
const Borrow = require('../Borrow/Borrow.js');

global.counter = 1;

const JuniorStudent = function (name,address,email,password){
  this.name = name;
  this.address = address;
  this.email = email;
  this.password = password;
  this.borrowedBooks = [];
  this.cadre = 'JuniorStudent';
  this.Id = global.counter;
  counter++;
  db.people.push({
    'name': this.name,
    'address': this.address,
    'email': this.email,
    'password': this.password,
    'borrowedBooks': this.borrowedBooks,
    'studentId': this.Id
  });
}
 JuniorStudent.prototype.borrow = function (booksBorrowed) {
  if(db.books[booksBorrowed[0]] >= 1){
    var loan = new Borrow(this.Id, booksBorrowed);
  var priority = 0;
   if(this.cadre === 'JuniorStudent'){
     priority = 1;
   }else if(this.cadre === 'SeniorStudent'){
    priority = 2;
  }if(this.cadre === 'Teacher'){
    priority = 3;
  }
   loan.priority = priority;
   console.log(loan);
   db.bookRequests.push({
     'lenderId': loan.lenderId,
     'timeOfLoan': loan.timeOfLoan,
     'dateOfLoan': loan.dateOfLoan,
     'booksBorrowed': loan.booksBorrowed,
     'priority': priority,
     'loanId': loan.loanId
   });
   // Remove the book from the database
   db.books[booksBorrowed[0]]--;
   // Add the book to the object of the student
   this.borrowedBooks.push(booksBorrowed[0]);

   console.log(db);

   return loan;
  }else {
    return 'book taken';
  } 
  
   
 }
// console.log(JuniorStudent.getPrototypeOf());
// console.log(new JuniorStudent('Ola','Lagos','ola@gmail.com','qwerty','J'));
module.exports = JuniorStudent;
