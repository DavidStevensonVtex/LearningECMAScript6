// The set ( target, property, value, receiver ) method

// The set trap must return true if the assignment was successful. 
// Otherwise, it will return false.

var proxy = new Proxy( { }, 
    {
        set: function(target, property, value, receiver ) 
        {
            target[property] = value ;
            return true ;
        }
    }) ;

Reflect.set ( proxy, "name", "Eden" ) ;
console.log ( "proxy.name", proxy.name ) ;      // Output: proxy.name Eden
proxy.name = "John";
console.log ( "proxy.name", proxy.name ) ;      // Output: proxy.name John
