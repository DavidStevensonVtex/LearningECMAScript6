// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// Some native JavaScript objects have properties called internal slots, which are not 
// accessible from JavaScript code. For example, Map objects have an internal slot called 
// [[MapData]], which stores the key-value pairs of the map. As such, you cannot trivially 
// create a forwarding proxy for a map:

const proxy = new Proxy(new Map(), {});
console.log(proxy.size); // TypeError: get size method called on incompatible Proxy

// You have to use the "this-recovering" proxy illustrated above to work around this.