// The Proxy constructor takes two arguments:

// Target: This is the object that will be wrapped by the proxy. 
// Handler: This is an object that contains the traps for the target object.

var target = { 
    age: 12 
};

var handler = {} ;
var proxy = new Proxy(target, handler);

proxy.name = "Eden" ;

console.log("target.name", target.name);
console.log("proxy.name", proxy.name);
console.log("target.age", target.age);
console.log("proxy.age", proxy.age);

// target.name Eden
// proxy.name Eden
// target.age 12
// proxy.age 12