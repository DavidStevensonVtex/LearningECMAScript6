var a = 12 ;        // accessible globally

function myFunction()
{
    console.log("a = ", a);

    let b = 13 ;        // accessible throughout function

    if ( true ) {
        let c = 14 ;    // accessible throughout function
        console.log("b = ", b, "c = ", c);
    }

    // console.log("c = ", c) ;
}

myFunction() ;

// ReferenceError: c is not defined
//     at myFunction (D:\drs\EcmaScript\LearningECMAScript6\ch01\002_declaring_block_scoped_variables.js:14:25)
//     at Object.<anonymous> (D:\drs\EcmaScript\LearningECMAScript6\ch01\002_declaring_block_scoped_variables.js:17:1)