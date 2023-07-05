// ArrayBuffer

// The ArrayBuffer object is used to represent a generic raw binary data buffer.

// It is an array of bytes, often referred to in other languages as a "byte array". 
// You cannot directly manipulate the contents of an ArrayBuffer; instead, you create 
// one of the typed array objects or a DataView object which represents the buffer in 
// a specific format, and use that to read and write the contents of the buffer.

// The ArrayBuffer() constructor creates a new ArrayBuffer of the given length in 
// bytes. You can also get an array buffer from existing data, for example, from a 
// Base64 string or from a local file.

// ArrayBuffer is a transferable object.

// Resizing ArrayBuffers

// ArrayBuffer objects can be made resizable by including the maxByteLength option when 
// calling the ArrayBuffer() constructor. You can query whether an ArrayBuffer is 
// resizable and what its maximum size is by accessing its resizable and maxByteLength 
// properties, respectively. You can assign a new size to a resizable ArrayBuffer with 
// a resize() call. New bytes are initialized to 0.

// These features make resizing ArrayBuffers more efficient — otherwise, you have to 
// make a copy of the buffer with a new size. It also gives JavaScript parity with 
// WebAssembly in this regard (Wasm linear memory can be resized with 
// WebAssembly.Memory.prototype.grow()).

// Creating an ArrayBuffer

// In this example, we create a 8-byte buffer with a Int32Array view referring to the buffer:

const buffer2 = new ArrayBuffer(8);
const view2 = new Int32Array(buffer2);  // We can use 8, 16, 32 and 64 bits to represent a number.

let buffer = new ArrayBuffer(80);
let view = new DataView(buffer);

view.setInt32(8, 22, false) ;

var number = view.getInt32(8, false);

console.log(number);        // Output "22"
