// The isExtensible ( target ) method

var proxy = new Proxy ( { age: 12 }, 
    {
        isExtensible: function(target) {
            return Object.isExtensible(target) ;
        }
    }) ;

console.log("Reflect.isExtensible(proxy)", Reflect.isExtensible(proxy)) ;    
// Reflect.isExtensible(proxy) true