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

// Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

// Inherit Book Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'Kene', '2018', 'Jan');

console.log(mag1);
console.log(mag1 instanceof Book)