const db = require("../db");
const Teacher = require("../Teachers/Teacher");

const Librarian = function(name, address, email, password) {
  // inherit the constructor of the Teacher
  Teacher.call(this, name, address, email, password);
  // identify as the Librarian
  this.cadre = "Librarian";
  // add the records of the Librarian to the database in a different record
  db.admin.push({
    name: this.name,
    address: this.address,
    email: this.email,
    password: this.password,
    borrowedBooks: this.borrowedBooks,
    cadre: this.cadre,
    id: this.Id
  });
};
// Inherit the prototype of the Teacher
Librarian.prototype = Object.create(Teacher.prototype);
Librarian.prototype.constructor = Librarian;

Librarian.prototype.approve = function() {
  var request;
  for (index = 0; index < db.bookRequests.length; index++) {
    request = db.bookRequests[index];
    if (db.books[request.booksBorrowed[0]] >= 1) {
      db.books[request.booksBorrowed[0]] =
        db.books[request.booksBorrowed[0]] - 1;
      db.people[request.lenderId - 1].borrowedBooks.push(
        request.booksBorrowed[0]
      );
    }
  }
  db.bookRequests.length = 0;
};

module.exports = Librarian;
