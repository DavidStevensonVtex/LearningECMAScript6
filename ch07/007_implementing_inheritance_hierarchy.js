function School ( schoolName )
{
    this.schoolName = schoolName ;
}

School.prototype.printSchoolName = function() {
    console.log("School name: ", this.schoolName ) ;
}

function Student ( studentName, schoolName ) 
{
    this.studentName = studentName ;

    School.call(this, schoolName ) ;
}

Student.prototype = new School() ;
Student.prototype.printStudentName = function() {
    console.log("Student name: ", this.studentName);
}

let s = new Student ( "Eden", "ABC School" ) ;
s.printStudentName();
s.printSchoolName() ;

console.log("s.studentName: ", s.studentName);
console.log("s.schoolName:  ", s.schoolName);

// Student name:  Eden
// School name:  ABC School
// s.studentName:  Eden
// s.schoolName:   ABC School

