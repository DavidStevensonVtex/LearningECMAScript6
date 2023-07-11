let obj1 = {
    __name__: "Eden"
} ;

Reflect.defineProperty(obj1, "name", {
    set: function(newName) {
        this.__name__ = newName ;
    },
    get: function() {
        return this.__name__ ;
    }
}) ;

let obj2 = {
    __name__: "John"
} ;

console.log("obj1.name", obj1.name);
Reflect.set(obj1, "name", "David" ) ;
console.log("obj1.name", obj1.name);
console.log();

console.log("obj2.__name__", obj2.__name__);
Reflect.set(obj1, "name", "Eden", obj2 ) ;
console.log("obj1.name", obj1.name);
console.log("obj2.name", obj2.__name__);

// obj1.name Eden
// obj1.name David

// obj2.__name__ John
// obj1.name David
// obj2.name Eden