// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

// WeakSet

// A WeakSet is a collection of garbage-collectable values, including objects and non-registered 
// symbols. A value in the WeakSet may only occur once. It is unique in the WeakSet's collection.

// Description

// Values of WeakSets must be garbage-collectable. Most primitive data types can be arbitrarily 
// created and don't have a lifetime, so they cannot be stored. Objects and non-registered symbols 
// can be stored because they are garbage-collectable.

// The main differences to the Set object are:

// WeakSets are collections of objects and symbols only. They cannot contain arbitrary values of 
// any type, as Sets can.

// The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. If no other 
// references to a value stored in the WeakSet exist, those values can be garbage collected.

// A WeakSet is not enumerable, that is, you cannot find its size; it also doesn't implement the
// iterable protocol.

const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // removes foo from the set
ws.has(foo); // false, foo has been removed
ws.has(bar); // true, bar is retained
  