function myFunction ( [ a, b, c = 3 ] = [ 1, 2, 3 ])
{
    console.log("a = ", a, " b = ", b, " c = ", c);     // a =  1  b =  2  c =  3
}

myFunction( undefined ) ;