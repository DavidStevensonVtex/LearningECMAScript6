var obj = {
    name: "Eden"
} ;

console.log("Reflect.isExtensible(obj)", Reflect.isExtensible(obj));     

console.log("Reflect.preventExtensions(obj)", Reflect.preventExtensions(obj));

console.log("Reflect.isExtensible(obj)", Reflect.isExtensible(obj));     

// Reflect.isExtensible(obj) true
// Reflect.preventExtensions(obj) true
// Reflect.isExtensible(obj) false