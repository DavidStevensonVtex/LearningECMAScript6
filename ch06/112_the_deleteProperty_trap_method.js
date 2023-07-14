// The deleteProperty ( target, property ) method

// The deleteProperty trap is executed when we delete a property either
// via the delete operator or the Reflect.deletePRoperty() method. It takes two
// parameters, that is, the target object and the property name.

// The trap must return a Boolean, indicating whether the property was deleted
// successfully or not.

let proxy = new Proxy ( { age: 12 }, {
    deleteProperty: function ( target, property ) {
        return delete target[property] ;
    }
});

Reflect.deleteProperty( proxy, "age" ) ;

console.log(proxy.age) ;    // Output "undefined"