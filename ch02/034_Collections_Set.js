// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// Set

// The Set object lets you store unique values of any type, whether primitive values or object 
// references.

// Description

// Set objects are collections of values. A value in the set may only occur once; it is unique 
// in the set's collection. You can iterate through the elements of a set in insertion order. 
// The insertion order corresponds to the order in which each element was inserted into the 
// set by the add() method


const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);
console.log("mySet1: ", mySet1);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay
console.log("mySet1: ", mySet1);

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

console.log("mySet1.size: ", mySet1.size); // 4, since we just removed one value

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }