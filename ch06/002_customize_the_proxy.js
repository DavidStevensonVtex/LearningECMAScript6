// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// To customize the proxy, we define functions on the handler object:

const target = {
    message1: "hello",
    message2: "everyone",
};

const handler2 = {
    get(target, prop, receiver) {
        return "world";
    },
};

const proxy2 = new Proxy(target, handler2);

console.log(proxy2.message1);   // world
console.log(proxy2.message2);   // world

// Here we've provided an implementation of the get() handler, which intercepts attempts 
// to access properties in the target.

// Handler functions are sometimes called traps, presumably because they trap calls to the 
// target object. The very simple trap in handler2 above redefines all property accessors.