const db = require('../db')
const Teacher = require('../Teachers/Teacher');

const Librarian = function (name,address,email,password){
  Teacher.call(this,name,address,email,password);
  this.cadre = 'Librarian';
}

Librarian.prototype = Object.create(Teacher.prototype);
Librarian.prototype.constructor = Librarian;

Librarian.prototype.approve = function (){
  var request;
  for (index = 0; index < db.bookRequests.length; index++){
    request = db.bookRequests[index];
    // console.log();
    // console.log(db.books[request.booksBorrowed[0]]);
    if(db.books[request.booksBorrowed[0]] >= 1){
      db.books[request.booksBorrowed[0]]= db.books[request.booksBorrowed[0]] - 1;
      // console.log(db.people[request.lenderId-1]);
      // console.log(typeof(request.lenderId));
      db.people[request.lenderId - 1].borrowedBooks.push(request.booksBorrowed[0]);
    }
  }
}
// console.log(new Librarian('Admin','Library','admin@gmail.com','jyndiqhxqi'));

module.exports = Librarian;