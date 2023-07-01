// The rest parameter

// The rest parameter is used to capture a variable number of the function arguments
// from within the function.

function myFunction ( a, b, ...args)
{
    console.log(args) ;     // Output: [ 3, 4, 5 ]
}

myFunction ( 1, 2, 3, 4, 5 );

