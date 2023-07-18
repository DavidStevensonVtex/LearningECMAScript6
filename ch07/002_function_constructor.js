function Student ( name )
{
    this.name = name ;
}

Student.prototype.printName = function()
{
    console.log("this.name: ", this.name);
}

let student1 = new Student("Eden");
let student2 = new Student("John");

student1.printName();
student2.printName() ;

// this.name:  Eden
// this.name:  John