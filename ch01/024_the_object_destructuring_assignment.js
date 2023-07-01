// If you want to assign different variables, you can do it this way:

let object = { "name": "John", "age" : 23 } ;
let x, y ;

console.log("object = ", object);

({name : x, age : y } = object) ;
console.log("x = ", x, " y = ", y);