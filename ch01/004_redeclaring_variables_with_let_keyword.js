let a = 0 ;
// let a = 1 ;     // SyntaxError: Identifier 'a' has already been declared

console.log("a = ", a);

function myFunction()
{
    let b = 2 ;
    // let b = 3 ;     // SyntaxError: Identifier 'b' has already been declared

    console.log("b = ", b);
}

myFunction();