// The Sets structure is like an array but with no dublicate items
// And the values are in no particular order

// Implementation of Set
function mySet() {
  let collection = [];

  // Check the presence of an item in the collection
  this.has = element => (collection.indexOf(element) !== -1);

  // Return all the values in the array
  this.values = () => collection;

  // Add an element to the collection
  this.add = element => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // Remove an item from the collection
  this.remove = element => {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // Return the size of the collection
  this.size = () => collection.length;

  // Return the UNION of two sets
  this.union = (newSet) => {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = newSet.values();

    firstSet.forEach(element => {
      unionSet.add(element);
    });

    secondSet.forEach(element => {
      unionSet.add(element);
    });

    return unionSet;
  }

}

let items = new mySet();
console.log(items.has(2));
console.log(items.values());
console.log(items.add(2));
console.log(items.add(1));

console.log(items.remove(1));
console.log(items.values());
console.log(items.size());