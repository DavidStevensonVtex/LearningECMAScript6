class Student
{
    constructor ( name )
    {
        this.name = name ;
    }

    static findName ( student ) 
    {
        return student.name ;
    }
}

let s = new Student("Eden") ;
let name = Student.findName(s) ;

console.log("name", name) ;     // name Eden