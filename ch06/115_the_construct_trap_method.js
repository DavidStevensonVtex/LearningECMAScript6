// The construct(target, arguments) method

// If the target is a function, then calling the target as a constructor using the new
// operator or the Reflect.construct() method will execute the construct trap.

// The construct trap takes two parameters. The first parameter is the target object,
// and the second parameter is an array, representing the arguments of the constructor
// call.

// The construct trap must return an object, representing the newly created instance.

let proxy = new Proxy ( function() {}, {
    construct: function ( target, arguments) {
        return { name: arguments[0] };
    }
});

var obj = new proxy ( "Eden" ) ;
console.log("obj.name", obj.name) ;     // Output "obj.name Eden"