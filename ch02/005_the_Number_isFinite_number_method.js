let a = "NaN" ;
let b = NaN ;
let c = "hello" ;
let d = 12 ;
let e = 1.0 / 0.0 ;

console.log("a = ", a, "Is a is a finite number? ", Number.isFinite(a));
console.log("b = ", b, "Is b is a finite number? ", Number.isFinite(b));
console.log("c = ", c, "Is c is a finite number? ", Number.isFinite(c));
console.log("d = ", d, "Is d is a finite number? ", Number.isFinite(d));
console.log("e = ", e, "Is e is a finite number? ", Number.isFinite(e));

// a =  NaN Is a is a finite number?  false
// b =  NaN Is b is a finite number?  false
// c =  hello Is c is a finite number?  false
// d =  12 Is d is a finite number?  true
// e =  Infinity Is e is a finite number?  false