/* Database for the whole operations
*  [people] contains the records of all the people; junior students, senior students and teachers
*  [books] contains the list of books available and the book count of each of them
*  [booksRequests] contains the list of requests for book loans made by all the users
*/
const db = {
  'people': [],
  'books' : {'Book1': 2, 'Book2': 2, 'Book3': 2, 'Book4': 1, 'Book5': 2, 'Book6': 2, 'Book7': 2, 'Book8': 2, 'Book9': 2, 'Book10': 2},
  'bookRequests': []
}
// console.log(db);
module.exports = db;
