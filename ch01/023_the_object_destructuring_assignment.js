let object = { "name": "John", "age" : 23 } ;
let name, age ;

console.log("object = ", object);

({name, age} = object) ;
console.log("name = ", name, " age = ", age);

// object =  { name: 'John', age: 23 }
// name =  John  age =  23