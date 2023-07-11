let obj = {
    name: "Eden"
} ;

let descriptor = Reflect.getOwnPropertyDescriptor(obj, "name" ) ;

console.log(descriptor);
// { value: 'Eden', writable: true, enumerable: true, configurable: true }