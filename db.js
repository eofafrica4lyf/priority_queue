/* Database for the whole operations
*  [people] contains the records of all the people; junior students, senior students and teachers
*  [books] contains the list of books available and the book count of each of them
*  [booksRequests] contains the list of requests for book loans made by all the users
*/
const db = {
  people: [],
  admin: [],
  books: {
    Book1: 2,
    Book2: 2,
    Book3: 2,
    Book4: 2,
    Book5: 2,
    Book6: 2,
    Book7: 1,
    Book8: 2,
    Book9: 1,
    Book10: 2
  },
  bookRequests: []
};
<<<<<<< HEAD

=======
// console.log(db);
>>>>>>> d410ae530886100a3a06b03ced300925b900b0e0
module.exports = db;
