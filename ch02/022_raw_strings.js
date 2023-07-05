// A raw string is a normal string in which escaped characters aren't interpreted.

// We can create a raw string using a template string.

let s = String.raw `xy\n${ 1 + 1 }z` ;
console.log(s);     // xy\n2z
