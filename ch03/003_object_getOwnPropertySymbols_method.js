// The Object.getOwnPropertyNames() method cannot retrieve the symbol properties.
// Therefore, ES6 introduced Object.getOwnPropertySymbols() to retrieve an array
// of symbol properties of an object.

let obj = { a : 12 } ;
let s1 = Symbol("mySymbol") ;
let s2 = Symbol("mySymbol") ;
let s3 = Symbol("mySymbol") ;

Object.defineProperty(obj, s1, { 
    enumerable: false
}) ;

obj[s1] = "abcdef" ;
obj[s2] = "defghi" ;
obj[s3] = "xyz" ;

console.log(Object.getOwnPropertySymbols(obj));

for ( let prop of Object.getOwnPropertySymbols(obj)) {
    console.log("key", prop, "value", obj[prop] ) ;
}

// [ Symbol(mySymbol), Symbol(mySymbol), Symbol(mySymbol) ]
// key Symbol(mySymbol) value undefined
// key Symbol(mySymbol) value defghi
// key Symbol(mySymbol) value xyz