const db = require('../db')
const JuniorStudent = require('../Students/JuniorStudent');
const SeniorStudent = require('../Students/SeniorStudent');
const Teacher = require('../Teachers/Teacher');
const Librarian = require('../Librarian/Librarian');

//Junior Student
var Ola = new JuniorStudent('Ola','Lagos','ola@gmail.com','qwerty');
var obj1 = {name: 'Ola',address:'Lagos', email: 'ola@gmail.com',password: 'qwerty',borrowedBooks: [],'cadre': 'JuniorStudent',Id: 1};
//Senior Student
var Olu = new SeniorStudent('Olu','Abuja','olu@gmail.com','qwerty1');
var obj2 = {name: 'Olu',address:'Abuja', email: 'olu@gmail.com',password: 'qwerty1',borrowedBooks: [],'cadre': 'SeniorStudent',Id: 2};
//Teacher
var Uncle = new Teacher('Uncle','Lokoja','uncle@gmail.com','qwerty2');
var obj3 = {name: 'Uncle',address:'Lokoja', email: 'uncle@gmail.com',password: 'qwerty2',borrowedBooks: [],'cadre': 'Teacher',Id: 3};
//Admin
var Admin = new Librarian('Admin','Library','admin@gmail.com','jyndiqhxqi');
var obj4 = {name: 'Admin',address:'Library', email: 'admin@gmail.com',password: 'jyndiqhxqi',borrowedBooks: [],'cadre': 'Librarian',Id: 4};


describe('Student/Teacher creation',function(){
  it('Test that a junior student is created',function(){
    expect(Ola).toEqual(obj1);
  });
  it('Test that a junior student is created',function(){
    expect(Ola.constructor).toEqual(JuniorStudent);
  });
  it('Test that a senior student is created',function(){
    expect(Olu).toEqual(obj2);
  });
  it('Test that a senior student is created',function(){
    expect(Olu.constructor).toEqual(SeniorStudent); 
  });
  it('Test that a teacher is created',function(){
    expect(Uncle).toEqual(obj3);
  });
  it('Test that a teacher is created',function(){
    expect(Uncle.constructor).toEqual(Teacher); 
  });
});

describe('Borrowing a Book',function(){
  it('Test that a book was borrowed but Admin has not yet approved',function(){
    Ola.borrow(['Book2']);
    Uncle.borrow(['Book1']);
    // console.log(db);
    // Admin has not yet approved
    expect(db.books.Book2).toEqual(2);
    expect(Ola.borrowedBooks).not.toEqual(['Book2']);  
  });
  it('Test that a teacher has greater priority than a student',function (){
    Ola.borrow(['Book4']);
    // console.log(db.bookRequests[db.bookRequests.length-1].priority);
    expect(db.bookRequests[db.bookRequests.length-1].priority).toBe(1); 
    Uncle.borrow(['Book4']);
    
    expect(db.bookRequests[db.bookRequests.length-1].priority).toBe(1); 
  })
});

describe('Admin Creation', function () {
  it('Test that we have a librarian', function () {
    expect(Admin).toEqual(obj4);
  });
  it('Test that a Librarian is created',function(){
    expect(Admin.constructor).toEqual(Librarian); 
  });
});

describe('Admin Approval', function () {
  it('Admin approves loan requests', function (){
    Ola.borrow(['Book7']);
    Uncle.borrow(['Book7']);
    // console.log(db);
    Admin.approve();
    expect(Uncle.borrowedBooks).toContain('Book7');
    expect(Ola.borrowedBooks).not.toContain('Book7');
  });
});

describe('Reading the database for records of people',function (){
  it('Librarian can read the records of a person', function () {
    expect(Admin.get(2).name).toContain('Olu');  
  });
  it('others cannot read the records of a person', function () {
    expect(Ola.get(2)).toContain('You do not have enough privileges'); 
    expect(Olu.get(2)).toContain('You do not have enough privileges'); 
    expect(Uncle.get(2)).toContain('You do not have enough privileges'); 
  });
  it('Librarian can read the records of all people', function () {
    expect(Admin.getAll().length).toBe(4);
  });
  it('others cannot read the records of all people', function () {
    expect(Ola.getAll()).toContain('You do not have enough privileges'); 
    expect(Olu.getAll()).toContain('You do not have enough privileges'); 
    expect(Uncle.getAll()).toContain('You do not have enough privileges'); 
  });
});

describe('Updating records of people', function (){
  it('Librarian updates the records of people; updates name and address of "Ola"', function(){
    // The Librarian updates the name and address of one of the people.
    Admin.update(1, {name: 'Olar',address:'Maiduguri'});
    // console.log(db);
    expect(Admin.get(1).name).toBe('Olar');
    expect(Admin.get(1).address).toBe('Maiduguri');
  });
  it('other users cannot update the records of people', function(){
    // The Librarian updates the name and address of one of the people.
    expect(Uncle.update(2, {name: 'Olar',address:'Maiduguri'})).toEqual('You do not have enough privileges');
    // console.log(db);
    expect(Admin.get(2).name).toBe('Olu');
    expect(Admin.get(2).address).toBe('Abuja');
  });
});

describe('Deleting records of people', function (){
  it('Librarian deletes the record of Olar, but Teacher Uncle cannot delete any record', function(){
    Admin.delete(1); 
    // console.log(db);
    expect(Admin.get(1)).toBe(undefined);
    Uncle.delete(2); 
    // console.log(db);
    expect(Admin.get(2).name).toBe('Olu'); 
  });
  it('Librarian deletes all the records of people, but other users cannot ', function (){
    // console.log(db);
    Admin.deleteAll();
    expect(db.people.length).toBe(0);
  });
  it('Librarian deletes all the records of people, but other users cannot ', function (){
    //Junior Student
    var Ola = new JuniorStudent('Ola','Lagos','ola@gmail.com','qwerty');
    var obj1 = {name: 'Ola',address:'Lagos', email: 'ola@gmail.com',password: 'qwerty',borrowedBooks: [],'cadre': 'JuniorStudent',Id: 1};
    //Senior Student
    var Olu = new SeniorStudent('Olu','Abuja','olu@gmail.com','qwerty1');
    var obj2 = {name: 'Olu',address:'Abuja', email: 'olu@gmail.com',password: 'qwerty1',borrowedBooks: [],'cadre': 'SeniorStudent',Id: 2};
    //Teacher
    var Uncle = new Teacher('Uncle','Lokoja','uncle@gmail.com','qwerty2');
    var obj3 = {name: 'Uncle',address:'Lokoja', email: 'uncle@gmail.com',password: 'qwerty2',borrowedBooks: [],'cadre': 'Teacher',Id: 3};
    //Admin
    var Admin = new Librarian('Admin','Library','admin@gmail.com','jyndiqhxqi');
    var obj4 = {name: 'Admin',address:'Library', email: 'admin@gmail.com',password: 'jyndiqhxqi',borrowedBooks: [],'cadre': 'Librarian',Id: 4};
    console.log(db);
    Uncle.deleteAll();
    console.log(db);
    expect(db.people.length).toBe(4);
  });
});