// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}

// Instantiate Book Objects
const book1 = new Book('Book One', 'Kene', '2013');
const book2 = new Book('Book Two', 'Sobe', '2016');

console.log(book1);
console.log(book2);

