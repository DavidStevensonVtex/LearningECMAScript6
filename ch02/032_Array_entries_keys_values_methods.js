// Array.prototype.entries()

// The entries() method returns a new array iterator object that contains 
// the key/value pairs for each index in the array.

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]

for ( const entry of array1.entries()) {
    console.log("entry", entry) ;
}

console.log("\n");


// Array.prototype.keys()

// The keys() method returns a new array iterator object that contains the 
// keys for each index in the array.

const array2 = ['a', 'b', 'c'];

for (const key of array2.keys()) {
  console.log("key", key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2

console.log("\n");

// Array.prototype.values()
// The values() method returns a new array iterator object that iterates the value of each item in the array.

const array3 = ['a', 'b', 'c'];


for (const value of array3.values()) {
  console.log("value", value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


// [ 0, 'a' ]
// [ 1, 'b' ]
// entry [ 0, 'a' ]
// entry [ 1, 'b' ]
// entry [ 2, 'c' ]


// key 0
// key 1
// key 2


// value a
// value b
// value c