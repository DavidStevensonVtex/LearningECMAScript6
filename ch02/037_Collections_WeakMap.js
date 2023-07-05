// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

// WeakMap
// A WeakMap is a collection of key/value pairs whose keys must be objects or non-registered 
// symbols, with values of any arbitrary JavaScript type, and which does not create strong 
// references to its keys. That is, an object's presence as a key in a WeakMap does not prevent 
// the object from being garbage collected. Once an object used as a key has been collected, its 
// corresponding values in any WeakMap become candidates for garbage collection as well — as 
// long as they aren't strongly referred to elsewhere. The only primitive type that can be used 
// as a WeakMap key is symbol — more specifically, non-registered symbols — because non-registered 
// symbols are guaranteed to be unique and cannot be re-created.

// WeakMap allows associating data to objects in a way that doesn't prevent the key objects from 
// being collected, even if the values reference the keys. However, a WeakMap doesn't allow observing 
// the liveness of its keys, which is why it doesn't allow enumeration; if a WeakMap exposed any 
// method to obtain a list of its keys, the list would depend on the state of garbage collection, 
// introducing non-determinism. If you want to have a list of keys, you should use a Map rather 
// than a WeakMap.

// You can learn more about WeakMap in the WeakMap object section of the Keyed collections guide.

// Description

// Keys of WeakMaps must be garbage-collectable. Most primitive data types can be arbitrarily created 
// and don't have a lifetime, so they cannot be used as keys. Objects and non-registered symbols can 
// be used as keys because they are garbage-collectable.

const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = global;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!
console.log("wm1", wm1);
console.log("wm2", wm2);

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because there is no key for o2 on wm2
wm2.get(o3); // undefined, because that is the set value


wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (even if the value itself is 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37
console.log("wm3", wm3) ;

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
console.log("wm1", wm1);

// wm1 WeakMap { <items unknown> }
// wm2 WeakMap { <items unknown> }
// wm3 WeakMap { <items unknown> }
// wm1 WeakMap { <items unknown> }
