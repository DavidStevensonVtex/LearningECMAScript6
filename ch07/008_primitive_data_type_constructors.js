let s1 = "String" ;                 // s1 is a primitive type, and primitive types shouldn't have properties.
let s2 = new String("String") ;     // s2 is an object

console.log("typeof s1", typeof s1) ;
console.log("typeof s2", typeof s2) ;

console.log("s1 == s2", s1 == s2 ) ;        // In reality: s1 == s2.valueOf()
console.log("s1.length", s1.length ) ;      // In reality: (new String(s1)).length

// typeof s1 string
// typeof s2 object
// s1 == s2 true
// s1.length 6