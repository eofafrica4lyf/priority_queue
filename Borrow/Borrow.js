const db = require('../db');
// Define a global variable to help with auto-incrementation of ID of loan records
global.bookId = 1;
// Constructor function that initializes the process of borrowing a book by a user
const Borrow = function(lenderId, booksBorrowed) {
  this.lenderId = lenderId;
  this.timeOfLoan = new Date().toLocaleTimeString();
  this.dateOfLoan = new Date().toLocaleDateString();
  this.booksBorrowed = booksBorrowed;
  this.loanId = global.bookId;
  bookId++;
};
/**
 * prototype function that determines how book request by users are added to the 
 * database in a first-come-first-serve manner, but when a teacher is requesting 
 * for the same book a student is requesting for, the teacher comes first and 
 * when a junior student is asking for the same book a senior student is asking for, 
 * the senior student comes first.
 */
Borrow.prototype.addRequest = function() {
  // aggregate all information about the request into a variable
  var request = {
    lenderId: this.lenderId,
    timeOfLoan: this.timeOfLoan,
    dateOfLoan: this.dateOfLoan,
    booksBorrowed: this.booksBorrowed,
    priority: this.priority,
    loanId: this.loanId
  };
  // if the database is empty, just add the request, else it means the database is not empty.
  // Hence, proceed to the next step
  if (db.bookRequests.length === 0) {
    db.bookRequests.push(request);
  }
  // check the priority of the request: which is determined by the cadre/status of the person making
  // the request and insert the request in the appropriate place.
  for (index = 0; index < db.bookRequests.length; index++) {
    if (
      request.priority > db.bookRequests[index].priority &&
      JSON.stringify(request.booksBorrowed) ===
        JSON.stringify(db.bookRequests[index].booksBorrowed)
    ) {
      db.bookRequests.splice(index, 0, request);
      break;
    } else if (
      request.booksBorrowed !== db.bookRequests[index].booksBorrowed &&
      index === db.bookRequests.length - 1
    ) {
      db.bookRequests.push(request);
      break;
    }
  }
  return db.bookRequests;
};

module.exports = Borrow;
