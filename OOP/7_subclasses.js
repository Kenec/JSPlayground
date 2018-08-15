class Book {
  constructor(title, author, year, month) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.month = month;
  }

  // getSummary
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}

// Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month =  month;
  }
}

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'Kene', '2013', 'Jan');
console.log(mag1);
console.log(mag1.getSummary());