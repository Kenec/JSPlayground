// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}` 
};

// getAge
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// revise
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiate Book Objects
const book1 = new Book('Book One', 'Kene', '2013');
const book2 = new Book('Book Two', 'Sobe', '2016');

console.log(book1);
console.log(book2);

console.log(book1.getSummary());
console.log(book2.getSummary());

// call the revise prototype
book1.revise('2018');
book2.revise('2019');

console.log(book1);
console.log(book2);
