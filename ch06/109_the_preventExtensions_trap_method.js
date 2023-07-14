// The preventExtensions(target) method

// The preventExtensions trap is executed when we prevent the addition of new
// properties using hte object.preventExtensions() method. It takes only one
// parameter, that is the target object.

// It must return a Boolean, indicating whether it has successfully prevented the
// extension of the object or not.

let proxy = new Proxy ( {}, {
    preventExtensions: function(target) {
        Object.preventExtensions(target) ;
        return true;
    }
});

Reflect.preventExtensions(proxy);       // comment this line to allow extensions.

proxy.a = 12 ;
console.log("proxy.a", proxy.a);        // Output "undefined"