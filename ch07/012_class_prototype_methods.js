// The Prototype Methods

// All the methods in the body of the class are added to the prototype property of the class.

class Person
{
    constructor ( name, age ) 
    {
        this.name = name ;
        this.age = age ;
    }

    printProfile() 
    {
        console.log("Name is: " + this.name + " and Age is: " + this.age ) ;
    }
}

let p = new Person("Eden", 12 );
p.printProfile() ;

console.log("printProfile" in p.__proto__) ;
console.log("printProfile" in Person.prototype ) ;

// Name is: Eden and Age is: 12
// true
// true