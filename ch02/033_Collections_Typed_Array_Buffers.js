var buffer = new ArrayBuffer(80);
var typed_array = new Float64Array(buffer);
typed_array[4] = 11;

console.log("typed_array.length", typed_array.length);  // 
console.log("typed_array[4] ", typed_array[4] );

// typed_array.length 10
// typed_array[4]  11