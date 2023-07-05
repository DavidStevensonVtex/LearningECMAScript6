
console.log("Object.is(0,-0)    ", Object.is(0,-0));
console.log("0 === -0           ", 0 === -0);
console.log("Object.is(NaN, 0/0)", Object.is(NaN, 0/0));
console.log("NaN === 0/0        ", NaN === 0/0);
console.log("Object.is(NaN, NaN)", Object.is(NaN, NaN));
console.log("NaN === NaN        ", NaN === NaN);

// Object.is(0,-0)     false
// 0 === -0            true
// Object.is(NaN, 0/0) true
// NaN === 0/0         false
// Object.is(NaN, NaN) true
// NaN === NaN         false