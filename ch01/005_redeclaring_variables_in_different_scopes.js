// When you declare a variable with a name that's already accessible in a function (or
// inner function), or is a sub-block using var or the let keyword respectively, then it's 
// a different variable.

var a = 1 ;
let b = 2 ;

console.log("global scope:  ", "a = ", a, " b = ", b);

function myFunction()
{
    var a = 3;      // different variable
    let b = 4 ;     // different variable

    console.log("in myFunction: ", "a = ", a, " b = ", b);

    if (true)
    {
        var a = 5 ;     // overwritten
        let b = 6 ;     // different variable
        console.log("in myFunction: inside if block: ", "a = ", a, " b = ", b);
    }

    console.log("in myFunction: ", "a = ", a, " b = ", b);
}
myFunction();

console.log("global scope:  ", "a = ", a, " b = ", b);

// global scope:   a =  1  b =  2
// in myFunction:  a =  3  b =  4
// in myFunction: inside if block:  a =  5  b =  6
// in myFunction:  a =  5  b =  4
// global scope:   a =  1  b =  2