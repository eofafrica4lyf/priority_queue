const db = require('../db')
const juniorStudent = require('../Students/juniorStudent');

var Ola = new juniorStudent('Ola','Lagos','ola@gmail.com','qwerty');
var obj1 = {name: 'Ola',address:'Lagos', email: 'ola@gmail.com',password: 'qwerty',borrowedBooks: [],studentId: 1};

describe('Student creation',function(){
  it('Test that a junior student is created',function(){
    expect(Ola).toEqual(obj1);
  });
  it('Test that a junior student is created',function(){
    expect(Ola.constructor).toEqual(juniorStudent);
  });
});