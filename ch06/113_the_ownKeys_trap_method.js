// The ownKeys(target) method

// The ownKEys trap is executed when we retrieve the own property keys
// using the Reflect.ownKeys(), Object.getOwnPropertyNames(), 
// Object.getOwnPropertySymbols(), and the Object.keys() methods. It takes only
// one parameter, that is, the target method.

// The Reflect.ownKeys() method is similar to the Object.getOwnPropertyNames()
// method, that is, they return the enumerable and non-enumerable property keys
// of a object. They ignore the inherited properties. The only difference is that the 
// Reflect.ownKeys() method returns both, the symbol and string keys, whereas the 
// Object.getOwnPropertyNames() method returns only the string keys.

// The Object.getOwnPropertySymbols() method returns the enumerable and
// non-enumerable properties whose keys are symbols. It igores the inherited properties.

// The ownKeys trap must return an array, representing the own property keys.

let s = Symbol();

let object = { age: 12, __proto__ : { name: "Eden" }, [s]: "Symbol" } ;

Object.defineProperty(object, "profession", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: "Developer"
}) ;

let proxy = new Proxy( object, {
    ownKeys: function(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    }
});

console.log("Reflect.ownKeys(proxy)              ", Reflect.ownKeys(proxy));
console.log("Object.getOwnPropertyNames(proxy)   ", Object.getOwnPropertyNames(proxy));
console.log("Object.keys(proxy))                 ", Object.keys(proxy));
console.log("Object.getOwnPropertySymbols(proxy))", Object.getOwnPropertySymbols(proxy));

// Reflect.ownKeys(proxy)               [ 'age', 'profession', Symbol() ]
// Object.getOwnPropertyNames(proxy)    [ 'age', 'profession' ]
// Object.keys(proxy))                  [ 'age' ]
// Object.getOwnPropertySymbols(proxy)) [ Symbol() ]