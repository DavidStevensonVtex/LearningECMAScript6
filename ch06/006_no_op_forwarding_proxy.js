// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// No-op forwarding proxy

// In this example, we are using a native JavaScript object to which our proxy will forward 
// all operations that are applied to it

const target = {};
console.log("target.a", target.a); 
// target.a undefined

const p = new Proxy(target, {});
console.log("p === target", p === target);
// p === target false

p.a = 37; // Operation forwarded to the target

console.log("target.a", target.a); // 37 (The operation has been properly forwarded!)
// target.a 37

// Note that while this "no-op" works for plain JavaScript objects, it does not work for 
// native objects, such as DOM elements, Map objects, or anything that has internal slots. 
// See no private property forwarding for more information.
