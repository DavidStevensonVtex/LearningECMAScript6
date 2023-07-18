function Student(name) 
{
    this.name = name ;
}

Student.prototype.printName = function() {
    console.log("Student name: ", this.name);
}

let s1 = new Student("Eden") ;
let s2 = new Student("John") ;

function School(name)
{
    this.name = name ;
    this.printName = function()
    {
        console.log("School name: ", this.name);
    }
}

var s3 = new School("ABC");
var s4 = new School("XYZ") ;

console.log ( "s1.printName == s2.printName", s1.printName == s2.printName ) ;
console.log ( "s3.printName == s4.printName", s3.printName == s4.printName ) ;

// s1.printName == s2.printName true
// s3.printName == s4.printName false