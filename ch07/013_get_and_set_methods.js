// The get and set methods

class Person
{
    constructor ( name ) 
    {
        this._name_ = name ;
    }

    get name()
    {
        return this._name_ ;
    }

    set name(name)
    {
        this._name_ = name ;
    }
}

let p = new Person("Eden") ;
console.log("p.name", p.name);
p.name = "John" ;
console.log("p.name", p.name);

console.log("name" in p.__proto__) ;
console.log("name" in Person.prototype) ;
console.log(Object.getOwnPropertyDescriptor(p.__proto__, "name").set);
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "name").get ) ;
console.log(Object.getOwnPropertyDescriptor(p, "_name_").value);

// p.name Eden
// p.name John
// true
// true
// [Function: set name]
// [Function: get name]
// John