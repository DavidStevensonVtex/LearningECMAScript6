// The defineProperty ( target, property, descriptor ) method

// The defineProperty trap is executed when we define a property using the 
// Object.defineProperty() method. It takes three parameters, that is, the target
// object, the property name, and the descriptor object.

// The trap should return a Boolean indicating whether it has successfully defined
// the property or not.

let proxy = new Proxy( {}, {
    defineProperty: function(target, property, descriptor) {
        Object.defineProperty ( target, property, descriptor ) ;
        return true ;
    }
});

Reflect.defineProperty ( proxy, "name", { value: "Eden" } );

console.log(proxy.name) ;   // Output "Eden"