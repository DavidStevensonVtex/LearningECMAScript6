// In ES5

var x = { x: 12 }
var y = Object.create(x, {y: {value: 13}}) ;


console.log("y.x", y.x, "y.y", y.y);

// In ES6 

let a = { a: 12, __proto__: { b: 13 }} ;
console.log("a.a", a.a, "a.b", a.b);

// y.x 12 y.y 13
// a.a 12 a.b 13