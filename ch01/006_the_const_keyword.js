// The ECMAScript 6 const keyword is used to declare read-only variables, that is, 
// the variables whose value cannot be reassigned. Before ES6, programmers usually 
// used to prefix the variables that were supposed to be constant.

const pi = 3.141 ;
let r = 2 ;

console.log("pi: ", pi, " r: ", r, " pi r squared = ", pi * r * r );

pi = 12 ;

// pi:  3.141  r:  2  pi r squared =  12.564

// pi = 12 ;
//    ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (D:\drs\EcmaScript\LearningECMAScript6\ch01\006_the_const_keyword.js:10:4)