// The has trap is executed when we check if a property exists or not, using the in
// operator. It takes two parameters, that is, the target object and the property name.

var proxy = new Proxy ( { age: 12 }, {
    has: function ( target, property ) {
        if ( property in target ) 
        {
            return true ;
        }
        else
        {
            return false ;
        }
    }
}) ;

console.log('Reflect.has(proxy, "name")', Reflect.has(proxy, "name")) ;
console.log('Reflect.has(proxy, "age")',  Reflect.has(proxy, "age" )) ;

console.log( '"name" in proxy: ' + ( "name" in proxy ? "true" : "false" ) ) ;
console.log( '"age" in proxy: '  + ( "age"  in proxy ? "true" : "false" ) ) ;

// Reflect.has(proxy, "name") false
// Reflect.has(proxy, "age") true
// "name" in proxy: false
// "age" in proxy: true