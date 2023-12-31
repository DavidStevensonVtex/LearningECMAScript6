let obj = {
    __name__: "Eden"
}; 

Reflect.defineProperty(obj, "name", {
    get: function() {
        return this.__name__ ;
    },
    set: function(newName) {
        this.__name__ = newName;
    },
    configurable: true,
    enumerable: true
});

obj.name = "John" ;
console.log("obj.name: ", obj.name);        // obj.name:  John