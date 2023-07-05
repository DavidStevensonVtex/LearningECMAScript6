// The Object.assign() method is used to copy the values of all enumerable
// own properties from one or more source objects to a target object.

let x = { x: 12 } ;
let y = { y: 13, __proto__: x } ;
let z = { z: 14, get b() { return 2 ; }, q: {} } ;
console.log("x", x, "y", y, "z", z);

Object.defineProperty(z, "z", { enumberable: false } ) ;

let m = {} ;

Object.assign(m, y, z); // m is the target

console.log("m", m);

// x { x: 12 } y { y: 13 } z { z: 14, b: [Getter], q: {} }
// m { y: 13, z: 14, b: 2, q: {} }