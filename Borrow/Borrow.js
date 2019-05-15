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
  // return bookObject;
}

Borrow.prototype.addRequest = function (){
  var request = {
    'lenderId': this.lenderId,
    'timeOfLoan': this.timeOfLoan,
    'dateOfLoan': this.dateOfLoan,
    'booksBorrowed': this.booksBorrowed,
    'priority': this.priority,
    'loanId': this.loanId
  }
  // console.log(request);
  if(db.bookRequests.length === 0){
    db.bookRequests.push(request);
  };
  for(index = 0;index < db.bookRequests.length; index++){
    if((request.priority > db.bookRequests[index].priority) && (JSON.stringify( request.booksBorrowed ) === JSON.stringify( db.bookRequests[index].booksBorrowed)) ){
      db.bookRequests.splice(index,0,request);
      break;
    }else if((request.booksBorrowed !== db.bookRequests[index].booksBorrowed && index === db.bookRequests.length-1) ){
      db.bookRequests.push(request);
      break;
    }
  }
  return db.bookRequests;
}

// new Borrow(1,'timeOfLoan','dateOfLoan',['Book2']);
// new Borrow(1,'timeOfLoan','dateOfLoan',['Book2']);
// console.log(db);

module.exports = Borrow;