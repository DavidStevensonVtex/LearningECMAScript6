// JavaSCript numbers are stored as 64-bit, floating point numbers.
// So the integers in JavaScript are the floating point numbers 
// without a decimal fraction, or a decimal fraction with all 0's.

let a = 17.0 ;
let b = 1.2 ;

console.log("a = ", a, "Is a an integer? ", Number.isInteger(a)) ;
console.log("b = ", b, "Is b an integer? ", Number.isInteger(b)) ;

// a =  17 Is a an integer?  true
// b =  1.2 Is b an integer?  false