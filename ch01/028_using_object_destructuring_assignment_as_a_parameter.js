function myFunction ( { name = 'Eden', age = 23, profession = "Designer" } = {} ) 
{
    console.log("name = ", name, " age = ", age, " profession = ", profession ) ;
}

myFunction ( { name: "John", age: 45 } ) ;
// name =  John  age =  45  profession =  Designer