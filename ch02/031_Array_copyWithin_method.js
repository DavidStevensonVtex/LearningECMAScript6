// Array.prototype.copyWithin()

// The copyWithin() method shallow copies part of an array to another location in 
// the same array and returns it without modifying its length.

// Syntax

// copyWithin(target, start)
// copyWithin(target, start, end)

// Return value

// The modified array.

const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1) ;
console.log();

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
console.log(array1) ;
console.log();
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
console.log(array1) ;
// Expected output: Array ["d", "d", "e", "d", "e"]

