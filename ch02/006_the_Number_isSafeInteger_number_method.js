// In JavaScript, safe integers are those numbers that are not need to be rounded
// to some other integer to fit in the IEEE 754 representation. Mathematically the
// numbers from -(2^53-1) to (2^53-1) are considered as safe integers.

let a = 156 ;
let b = '1212' ;
let c = Number.MAX_SAFE_INTEGER ;
let d = Number.MAX_SAFE_INTEGER + 1 ;
let e = Number.MIN_SAFE_INTEGER ;
let f = Number.MIN_SAFE_INTEGER - 1 ;


console.log("a = ", a, "Is a is a safe integer? ", Number.isSafeInteger(a));
console.log("b = ", b, "Is b is a safe integer? ", Number.isSafeInteger(b));
console.log("c = ", c, "Is c is a safe integer? ", Number.isSafeInteger(c));
console.log("d = ", d, "Is d is a safe integer? ", Number.isSafeInteger(d));
console.log("e = ", e, "Is e is a safe integer? ", Number.isSafeInteger(e));
console.log("f = ", f, "Is f is a safe integer? ", Number.isSafeInteger(f));

// a =  156 Is a is a safe integer?  true
// b =  1212 Is b is a safe integer?  false
// c =  9007199254740991 Is c is a safe integer?  true
// d =  9007199254740992 Is d is a safe integer?  false
// e =  -9007199254740991 Is e is a safe integer?  true
// f =  -9007199254740992 Is f is a safe integer?  false