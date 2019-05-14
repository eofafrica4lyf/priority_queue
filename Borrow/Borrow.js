const db = require('../db');
// Define a global variable to help with auto-incrementation of ID of loan records
global.bookId = 1;
// Constructor function that initializes the process of borrowing a book by a user
const Borrow = function (lenderId, booksBorrowed){
  this.lenderId = lenderId;
  this.timeOfLoan = new Date().toLocaleTimeString();
  this.dateOfLoan = new Date().toLocaleDateString();
  this.booksBorrowed = booksBorrowed;
  this.loanId = global.bookId;
  bookId++;
  var bookObject = {
    'lenderId': this.lenderId,
    'timeOfLoan': this.timeOfLoan,
    'dateOfLoan': this.dateOfLoan,
    'booksBorrowed': this.booksBorrowed,
    'loanId': this.loanId
  };
  // db.bookRequests.push(bookObject);
  return bookObject;
}

// Borrow.prototype.borrow = function(borrowedBooks){
//   return borrowedBooks;
// }

// new Borrow(1,'timeOfLoan','dateOfLoan',['Book2']);
// new Borrow(1,'timeOfLoan','dateOfLoan',['Book2']);
// console.log(db);

module.exports = Borrow;