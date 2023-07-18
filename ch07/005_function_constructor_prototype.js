// When creating objects using a constructor, the prototype of the new objects 
// always points to a property named prototype of the function object. By default,
// the prototype property is an object with one property named as constructor.
// The constructor property points to the function itself.

function Student()
{
    this.name = "Eden" ;
}

let obj = new Student();

console.log(obj.__proto__.constructor == Student ) ;    // Output "true"
console.log(obj.__proto__ == Student.prototype ) ;      // Output "true"