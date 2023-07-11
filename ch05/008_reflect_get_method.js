let obj = { 
    __name__: "Eden"
} ;

Reflect.defineProperty(obj, "name", {
    get: function() {
        return this.__name__ ;
    }
}) ;

console.log("obj.name", obj.name) ;

let name = Reflect.get(obj, "name");

console.log("name", name);

name = Reflect.get(obj, "name", { __name__: "John" } );

console.log("name", name);

// obj.name Eden
// name Eden
// name John