// The setPrototypeOf ( target, prototype ) method

// The setPrototypeOf trap is executed when we set the value of the internal
// [[prototype]] property, using either the Object.setPrototypeOf() method
// or the __proto__ property. It takes two parameters, that is, the target object
// and value of the property to be assigned.

let proxy = new Proxy( {}, {
    setPrototypeOf: function ( target, value ) {
        Reflect.setPrototypeOf(target, value) ;
        return true ;
    }
}) ;

Reflect.setPrototypeOf(proxy, { name: "Eden" } ) ;
console.log(Reflect.getPrototypeOf(proxy).name ) ;