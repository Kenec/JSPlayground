// Book Class
class Book {
  // Constructor
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // getSummary
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }

  // getAge
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  // revise
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  // static method
  static topBookStore() {
    return 'There was a country';
  }
}

// Instantiate Book
const book1 = new Book('Book One', 'Kene', '2018');

console.log(book1);
book1.revise(2019);
console.log(book1)

console.log(Book.topBookStore());
