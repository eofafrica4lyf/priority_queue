const db = require('../db')
const JuniorStudent = require('../Students/JuniorStudent');
const SeniorStudent = require('../Students/SeniorStudent');
const Teacher = require('../Teachers/Teacher');

//Junior Student
var Ola = new JuniorStudent('Ola','Lagos','ola@gmail.com','qwerty');
var obj1 = {name: 'Ola',address:'Lagos', email: 'ola@gmail.com',password: 'qwerty',borrowedBooks: [],'cadre': 'JuniorStudent',Id: 1};
//Senior Student
var Olu = new SeniorStudent('Olu','Abuja','olu@gmail.com','qwerty1');
var obj2 = {name: 'Olu',address:'Abuja', email: 'olu@gmail.com',password: 'qwerty1',borrowedBooks: [],'cadre': 'SeniorStudent',Id: 2};
//Teacher
var Uncle = new Teacher('Uncle','Lokoja','uncle@gmail.com','qwerty2');
var obj3 = {name: 'Uncle',address:'Lokoja', email: 'uncle@gmail.com',password: 'qwerty2',borrowedBooks: [],'cadre': 'Teacher',Id: 3}

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
  it('Test that a book was borrowed',function(){
    Ola.borrow(['Book2']);
    Uncle.borrow(['Book2']);
    console.log(db);
    expect(db.books.Book2).toEqual(1);
  });
});
