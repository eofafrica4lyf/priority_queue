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
    'id': this.Id
  });
}
/* Initiate the borrowing of a book from the library
* params: take an array corresponding to the list of books to be borrowed
*/ 
JuniorStudent.prototype.borrow = function (booksBorrowed) {
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
  // add records of the book request to the database
    loan.addRequest();
   return loan;   
 }

 JuniorStudent.prototype.get = function (ID) {
  if(this.cadre === 'Librarian'){
    for(var index = 0;index < db.people.length;index++){
        if(db.people[index].id === ID){
            return db.people[index];
        }
      }
  }else {
    return 'You do not have enough privileges';
  }
 }

 JuniorStudent.prototype.getAll = function (){
  return db.people;
 }
// console.log(JuniorStudent.getPrototypeOf());
// console.log(new JuniorStudent('Ola','Lagos','ola@gmail.com','qwerty','J'));
module.exports = JuniorStudent;
