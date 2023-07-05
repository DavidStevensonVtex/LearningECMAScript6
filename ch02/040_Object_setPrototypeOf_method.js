// The Object.setPrototypeOf() method is just another way to 
// assign the [[prototype]] property of an object.

let x = { x: 12 } ;
let y = { y: 13 } ;

Object.setPrototypeOf(y, x);

console.log("y.x", y.x) ;
console.log("y.y", y.y) ;

// y.x 12
// y.y 13