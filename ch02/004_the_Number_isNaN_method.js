let a = "NaN" ;
let b = NaN ;
let c = "hello" ;
let d = 12 ;
let e = 1.0 / 0.0 ;

console.log("a = ", a, "Is a Not a Number (NaN)? ", Number.isNaN(a));
console.log("b = ", b, "Is b Not a Number (NaN)? ", Number.isNaN(b));
console.log("c = ", c, "Is c Not a Number (NaN)? ", Number.isNaN(c));
console.log("d = ", d, "Is d Not a Number (NaN)? ", Number.isNaN(d));
console.log("e = ", e, "Is e Not a Number (NaN)? ", Number.isNaN(e));

// a =  NaN Is a Not a Number (NaN)?  false
// b =  NaN Is b Not a Number (NaN)?  true
// c =  hello Is c Not a Number (NaN)?  false
// d =  12 Is d Not a Number (NaN)?  false
// e =  Infinity Is e Not a Number (NaN)?  false