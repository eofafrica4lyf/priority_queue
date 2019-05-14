const db = require('../db')
const JuniorStudent = require('../Students/JuniorStudent');
const SeniorStudent = require('../Students/SeniorStudent');

//Junior Student
var Ola = new JuniorStudent('Ola','Lagos','ola@gmail.com','qwerty');
var obj1 = {name: 'Ola',address:'Lagos', email: 'ola@gmail.com',password: 'qwerty',borrowedBooks: [],studentId: 1};
//Senior Student
var Olu = new SeniorStudent('Olu','Abuja','olu@gmail.com','qwerty1');
var obj2 = {name: 'Olu',address:'Abuja', email: 'olu@gmail.com',password: 'qwerty1',borrowedBooks: [],studentId: 2};

describe('Student creation',function(){
  it('Test that a junior student is created',function(){
    expect(Ola).toEqual(obj1);
  });
  it('Test that a junior student is created',function(){
    expect(Ola.constructor).toEqual(JuniorStudent);
  });
  it('Test that a senior student is created',function(){
    expect(Olu).toEqual(obj2);
  });
});