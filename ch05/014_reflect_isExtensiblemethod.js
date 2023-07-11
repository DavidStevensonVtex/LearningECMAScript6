var obj = {
    name: "Eden"
} ;

console.log("Reflect.isExtensible(obj)", Reflect.isExtensible(obj));     

Object.preventExtensions(obj);

console.log("Reflect.isExtensible(obj)", Reflect.isExtensible(obj));     

// Reflect.isExtensible(obj) true
// Reflect.isExtensible(obj) false