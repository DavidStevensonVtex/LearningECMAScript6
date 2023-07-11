let obj = { } ;

Reflect.defineProperty(obj, "name", {
    value: "Eden",
    writable: true,
    configurable: true,
    enumerable: true
}) ;

console.log("obj.name: ", obj.name);        // obj.name:  Eden