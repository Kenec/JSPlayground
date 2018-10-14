// Stack is the LIFO structure. It has the following methods
// Methods: push, pop, peek, length

let letters = [];
let word = 'racecar';
let rword = '';

// put letters of word into the stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (word === rword) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}

// Implementing Stacks in JavaScript

// Create Stack
let Stack = function() {
  this.count = 0;
  this.storage = {};

  // Add a value unto the end of the stack
  this.push = value => {
    this.storage[this.count] = value;
    this.count++; 
  }

  // Removes and returns the value at the end of the stack
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // Size of the stack
  this.size = () => this.count;

  // Returns the value at the end of the stack
  this.peek = () => this.storage[this.count - 1]
}

let myStack  = new Stack();
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());