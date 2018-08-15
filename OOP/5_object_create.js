// Object of Prototypes
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
};

// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'Kene';
book1.year = '2013';

// ########### OR ############

// const book1 = Object.create(bookProtos, {
//   title: { value: 'Book One' },
//   author: { value: 'Kene' },
//   year: { value: '2013' }
// })

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());