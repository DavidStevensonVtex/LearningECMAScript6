var a = 12 ;        // accessible globally

function myFunction()
{
    console.log("a = ", a);

    var b = 13 ;        // accessible throughout function

    if ( true ) {
        var c = 14 ;    // accessible throughout function
        console.log("b = ", b, "c = ", c);
    }

    console.log("c = ", c) ;
}

myFunction() ;

// a =  12
// b =  13 c =  14
// c =  14
