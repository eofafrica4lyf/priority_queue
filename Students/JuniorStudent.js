const db = require("../db");
const Borrow = require("../Borrow/Borrow.js");
// Define a global variable to help with auto-incrementation of student ID
global.counter = 1;

//constructor function for creation of a junior student
const JuniorStudent = function(name, address, email, password) {
  this.name = name;
  this.address = address;
  this.email = email;
  this.password = password;
  this.borrowedBooks = [];
  this.cadre = "JuniorStudent";
  this.Id = global.counter;
  counter++;
  // add new records of new student to database
  db.people.push({
    name: this.name,
    address: this.address,
    email: this.email,
    password: this.password,
    borrowedBooks: this.borrowedBooks,
    cadre: this.cadre,
    id: this.Id
  });
};
/* Initiate the borrowing of a book from the library
* param(s): take an array corresponding to the list of books to be borrowed
*/

JuniorStudent.prototype.borrow = function(booksBorrowed) {
  // initiate the loan
  var loan = new Borrow(this.Id, booksBorrowed);
  // The priority variable determines who gets a book first.
  var priority = 0;
  // allocate priority based on the cadre/status of the person
  if (this.cadre === "JuniorStudent") {
    priority = 1;
  }
  if (this.cadre === "SeniorStudent") {
    priority = 2;
  }
  if (this.cadre === "Teacher") {
    priority = 3;
  }
  // add the record of priority for the loan request; which was formerly not there.
  loan.priority = priority;
  // add records of the book request to the database
  loan.addRequest();
  return loan;
};

/*Get the records of a particular person
 * param(s): take the ID of the person
 */
JuniorStudent.prototype.get = function(ID) {
  // check if the person is a Librarian
  if (this.cadre === "Librarian") {
    for (var index = 0; index < db.people.length; index++) {
      if (db.people[index].id === ID) {
        return db.people[index];
      }
    }
  } else {
    return "You do not have enough privileges";
  }
};

JuniorStudent.prototype.getAll = function() {
  // check if the person is a Librarian
  if (this.cadre === "Librarian") {
    return db.people;
  } else {
    return "You do not have enough privileges";
  }
};

JuniorStudent.prototype.update = function(ID, newRecord) {
  // check if the person is a Librarian
  if (this.cadre === "Librarian") {
    // first, get the records of the person to be updated.
    var record = this.get(ID);
    // then, effect the change(s)
    for (data in newRecord) {
      record[data] = newRecord[data];
    }
  } else {
    return "You do not have enough privileges";
  }
};

JuniorStudent.prototype.delete = function(ID) {
  // check if the person is a Librarian
  if (this.cadre === "Librarian") {
    // get the person's data
    var record = this.get(ID);
    // check the position of the person's data in the database
    var index = db.people.indexOf(record);
    // remove the person's data from the database
    return db.people.splice(index, 1);
  } else {
    return "You do not have enough privileges";
  }
};

JuniorStudent.prototype.deleteAll = function() {
  // check if the person is a Librarian
  if (this.cadre === "Librarian") {
    // delete all user records from the database; set the global auto increment counter to one
    db.people.length = 0;
    global.counter = 1;
  }
};

JuniorStudent.prototype.search = function(searchTerm) {
  // create a regular expression from string parameter
  var regex = new RegExp(searchTerm);
  // initialize the search results container
  var searchResult = [];
  for (index = 0; index < db.people.length; index++) {
    // check for the string in the name, address and email records of each person.
    if (
      regex.test(db.people[index].name) ||
      regex.test(db.people[index].address) ||
      regex.test(db.people[index].email)
    ) {
      // if there's a match, add the record of the person to the database
      searchResult.push(db.people[index]);
    }
  }
  return searchResult;
};
// dummy approve function for every user that is not a librarian
JuniorStudent.prototype.approve = function() {
  return "You do not have enough privileges";
};

module.exports = JuniorStudent;
