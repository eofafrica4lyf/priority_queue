const db = require('../db')
const Borrow = require('../Borrow/Borrow.js');
// Define a global variable to help with auto-incrementation of student ID
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
  // add new records of new student to database 
  db.people.push({
    'name': this.name,
    'address': this.address,
    'email': this.email,
    'password': this.password,
    'borrowedBooks': this.borrowedBooks,
    'studentId': this.Id
  });
}
/* Initiate the borrowing of a book from the library
* params: take an array corresponding to the list of books to be borrowed
*/ 
JuniorStudent.prototype.borrow = function (booksBorrowed) {
  // First, check if the book is available
  if(db.books[booksBorrowed[0]] >= 1){
    // initiate the loan
    var loan = new Borrow(this.Id, booksBorrowed);
    // The priority variable determines who gets a book first.
    var priority = 0;
    if(this.cadre === 'JuniorStudent'){
     priority = 1;
    }else if(this.cadre === 'SeniorStudent'){
    priority = 2;
    }else if(this.cadre === 'Teacher'){
    priority = 3;
    }
    // add the record of priority for the loan request; which was formerly not there.
   loan.priority = priority;
  //  console.log(loan);
  // add records of the book request to the database
   db.bookRequests.push({
     'lenderId': loan.lenderId,
     'timeOfLoan': loan.timeOfLoan,
     'dateOfLoan': loan.dateOfLoan,
     'booksBorrowed': loan.booksBorrowed,
     'priority': priority,
     'loanId': loan.loanId
   });
   // Loan request is granted and records are updated
   db.books[booksBorrowed[0]]--;
   // The newly borrowed book is added to the records of the person.
   this.borrowedBooks.push(booksBorrowed[0]);
   // The records of the book request are removed since they have been evaluated
  //  console.log(db);

   return loan;
  }else {
    // if the book count of the particular book is zero then return 'book taken'
    return 'book taken';
  } 
  
   
 }
// console.log(JuniorStudent.getPrototypeOf());
// console.log(new JuniorStudent('Ola','Lagos','ola@gmail.com','qwerty','J'));
module.exports = JuniorStudent;
