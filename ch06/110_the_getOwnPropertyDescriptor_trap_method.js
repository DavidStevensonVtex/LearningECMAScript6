// The getOwnPropertyDescriptor(target, property) method

// The getOwnPropertyDescriptor trap is executed when we retrieve the descriptor
// of a property using the Object.getOwnPropertyDescriptor() method. It takes
// two parameters, that is, the target object and the name of the property.

// Thsi trap must return a descriptor object or undefined. The undefined value is
// returned if the property doesn't exist.

let proxy = new Proxy ( { age: 12 },  {
    getOwnPropertyDescriptor: function ( target, property ) {
        return Object.getOwnPropertyDescriptor(target, property ) ;
    }
});

let descriptor = Reflect.getOwnPropertyDescriptor(proxy, "age");
console.log(descriptor);
// { value: 12, writable: true, enumerable: true, configurable: true }