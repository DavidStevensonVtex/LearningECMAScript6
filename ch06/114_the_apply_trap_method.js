// The apply ( target, thisValue, arguments ) method

// If the target is a function, then calling the proxy will execute the apply trap.
// The apply trap is also executed for function's apply() and call() methods,
// and the Reflect.apply() method.

// The apply trap takes three parameters. The first parameter is the target object,
// and the third parameter is the array, representing the arguments of the function call.
// The second parameter is same as the value of this of the target function, that is, it's
// the same as the value of this of the target function, if the target function would have
// been invoked without the proxy.

let proxy = new Proxy( function() {}, {
    apply: function ( target, thisValue, arguments ) {
        console.log(thisValue.name);
        return arguments[0] + arguments[1] + arguments[2] ;
    }
});

var obj = { 
    name: "Eden",
    f: proxy
} ;

var sum = obj.f(1,2,3);
console.log("sum", sum);
// Eden
// sum 6