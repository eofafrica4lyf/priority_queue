const Student = require('../Students/Student');

var Ola = new Student('Ola','Lagos','ola@gmail.com','qwerty');
var obj1 = {name: 'Ola',address:'Lagos', email: 'ola@gmail.com',password: 'qwerty',borrowedBooks: [],studentId: 1};

describe('Student creation',function(){
  it('Test that a student is created',function(){
    expect(Ola).toEqual(obj1);
  });
});